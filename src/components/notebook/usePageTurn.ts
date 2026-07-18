import { useCallback, useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { useNavigate } from "@tanstack/react-router";
import { PAGES } from "./PageNav";

/**
 * Book-metaphor navigation for a notebook page:
 *  - finger/mouse drag horizontally peels the page along the spine, tracking pointer X
 *  - release past threshold (or fast flick) → commit + navigate
 *  - release under threshold → snap back
 *  - taps in the outer ~28% left/right zones flip a page (via event delegation
 *    so links/buttons in the middle of the page still receive their own clicks)
 *  - keyboard/arrow-key nav is kept on the shared usePageNav hook
 *  - reduced motion: skip transforms, still allow tap zones to navigate instantly
 *
 * Gesture arbitration vs. vertical scroll: the axis decision happens in a
 * non-passive touchmove listener, because only a cancelable touchmove can stop
 * the browser's native scroll from claiming the gesture (preventDefault on
 * pointermove has no effect on scrolling, and once native scroll starts the
 * browser fires pointercancel and the swipe is lost). A 45° split decides the
 * axis, so a horizontal swipe with some vertical wobble still turns the page.
 *
 * Perf: while the finger is down, the transform is written imperatively to the
 * element (never through React state) so dragging doesn't re-render the page
 * tree on every frame. React state is only touched at gesture start/end.
 */
export function usePageTurn(currentPath: string) {
  const navigate = useNavigate();
  const isIndex = currentPath === "/index-page";
  const isCover = currentPath === "/";
  const idx = PAGES.findIndex((p) => p.to === currentPath);

  const prevTo: string | null = isCover
    ? null
    : isIndex
      ? "/"
      : idx > 0
        ? PAGES[idx - 1].to
        : "/index-page";
  const nextTo: string | null = isCover
    ? "/index-page"
    : isIndex
      ? PAGES[0].to
      : idx >= 0 && idx < PAGES.length - 1
        ? PAGES[idx + 1].to
        : null;

  const surfaceRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  const [turning, setTurning] = useState(false);
  const committingRef = useRef(false);
  const dragRecent = useRef(false);
  const timeoutRef = useRef(0);

  const reducedRef = useRef(false);
  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Clear any pending commit/snap timer if the page unmounts mid-animation.
  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const snapBack = useCallback(() => {
    setStyle({
      transform: "perspective(1600px) rotateY(0deg)",
      transformOrigin: "center center",
      transition: "transform 260ms cubic-bezier(0.2,0.7,0.3,1), box-shadow 260ms",
    });
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setStyle({});
      setTurning(false);
    }, 280);
  }, []);

  const commit = useCallback(
    (dir: "next" | "prev") => {
      const target = dir === "next" ? nextTo : prevTo;
      if (!target) {
        snapBack();
        return;
      }
      if (reducedRef.current) {
        navigate({ to: target });
        return;
      }
      committingRef.current = true;
      setTurning(true);
      setStyle({
        transform:
          dir === "next"
            ? "perspective(1600px) rotateY(-168deg)"
            : "perspective(1600px) rotateY(168deg)",
        transformOrigin: dir === "next" ? "left center" : "right center",
        transition: "transform 420ms cubic-bezier(0.4,0.1,0.3,1), box-shadow 420ms",
        boxShadow:
          dir === "next"
            ? "40px 40px 60px -20px rgba(0,0,0,0.35)"
            : "-40px 40px 60px -20px rgba(0,0,0,0.35)",
      });
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        navigate({ to: target });
      }, 380);
    },
    [nextTo, prevTo, navigate, snapBack],
  );

  useEffect(() => {
    const el = surfaceRef.current;
    if (!el) return;

    let active = false;
    let engaged = false;
    let decided = false; // axis lock decided (horizontal engage or vertical bail)
    let isTouch = false;
    let startX = 0;
    let startY = 0;
    let width = 1;
    let dir: "next" | "prev" | null = null;
    let lastX = 0;
    let lastT = 0;
    let vx = 0;
    let pointerId = -1;
    let rafId = 0;
    let pendingDx = 0;

    const clearRaf = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    // Written straight to the element: dragging must not go through React
    // state or every frame re-renders the current page plus both pre-mounted
    // static pages. box-shadow is deliberately NOT animated per-frame (it
    // forces a repaint of the large blurred shadow each frame — one of the
    // things that piled up until iOS Safari killed the tab).
    const applyFrame = () => {
      rafId = 0;
      if (!engaged || !dir || reducedRef.current) return;
      const d = dir;
      const dx = pendingDx;
      const canTurn = d === "next" ? !!nextTo : !!prevTo;
      const rawProg = Math.abs(dx) / width;
      const prog = canTurn ? Math.min(1, rawProg) : Math.min(0.12, rawProg * 0.25);
      const angle = d === "next" ? -prog * 168 : prog * 168;
      el.style.transform = `perspective(1600px) rotateY(${angle}deg)`;
      el.style.transformOrigin = d === "next" ? "left center" : "right center";
      el.style.transition = "none";
      el.style.willChange = "transform";
    };

    const engageHorizontal = (dx: number) => {
      decided = true;
      engaged = true;
      dir = dx < 0 ? "next" : "prev";
      setTurning(true);
      try {
        el.setPointerCapture(pointerId);
      } catch {
        /* noop */
      }
    };

    const bailVertical = () => {
      decided = true;
      active = false;
    };

    // 45° split: horizontal wins ties, so a swipe with vertical wobble still
    // reads as a page turn instead of being discarded.
    const decideAxis = (dx: number, dy: number): "h" | "v" | null => {
      const adx = Math.abs(dx);
      const ady = Math.abs(dy);
      if (Math.max(adx, ady) < 6) return null;
      return adx >= ady ? "h" : "v";
    };

    // Non-passive: the ONLY reliable way to keep the inner scroller's native
    // vertical scroll from hijacking a horizontal swipe on iOS. Once the axis
    // locks horizontal, every touchmove is preventDefault-ed so the browser
    // never starts scrolling (and never fires pointercancel at us).
    const onTouchMove = (e: TouchEvent) => {
      if (!active && !engaged) return;
      const t = e.touches[0];
      if (!t) return;
      if (!decided) {
        const axis = decideAxis(t.clientX - startX, t.clientY - startY);
        if (axis === null) return;
        if (axis === "h") engageHorizontal(t.clientX - startX);
        else {
          bailVertical();
          return;
        }
      }
      if (engaged && e.cancelable) e.preventDefault();
    };

    const onDown = (e: PointerEvent) => {
      if (committingRef.current) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      const target = e.target as HTMLElement | null;
      // don't hijack drags starting on form inputs — user is selecting text
      if (target?.closest("input, textarea, select")) return;
      active = true;
      engaged = false;
      decided = false;
      isTouch = e.pointerType !== "mouse";
      startX = lastX = e.clientX;
      startY = e.clientY;
      lastT = performance.now();
      width = el.getBoundingClientRect().width;
      dir = null;
      vx = 0;
      pendingDx = 0;
      pointerId = e.pointerId;
    };

    const onMove = (e: PointerEvent) => {
      if (!active && !engaged) return;

      if (!decided) {
        // Touch decisions belong to onTouchMove (it can preventDefault);
        // only mouse drags decide here, where there's no scroll to race.
        if (isTouch) return;
        const axis = decideAxis(e.clientX - startX, e.clientY - startY);
        if (axis === null) return;
        if (axis === "h") engageHorizontal(e.clientX - startX);
        else {
          bailVertical();
          return;
        }
      }

      if (!engaged) return;

      const now = performance.now();
      const ddx = e.clientX - lastX;
      const ddt = Math.max(1, now - lastT);
      vx = ddx / ddt;
      lastX = e.clientX;
      lastT = now;

      if (reducedRef.current) return;

      pendingDx = e.clientX - startX;
      if (!rafId) rafId = requestAnimationFrame(applyFrame);
    };

    const clearInline = () => {
      el.style.willChange = "";
    };

    const onUp = (e: PointerEvent) => {
      if (!active && !engaged) return;
      const wasEngaged = engaged;
      const d = dir;
      const dx = e.clientX - startX;
      active = false;
      engaged = false;
      decided = false;
      clearRaf();
      clearInline();
      try {
        el.releasePointerCapture(pointerId);
      } catch {
        /* noop */
      }
      if (!wasEngaged || !d) return;

      dragRecent.current = true;
      window.setTimeout(() => {
        dragRecent.current = false;
      }, 350);

      const canTurn = d === "next" ? !!nextTo : !!prevTo;
      const progress = Math.min(1, Math.abs(dx) / width);
      const fastFlick = Math.abs(vx) > 0.6 && Math.sign(vx) === Math.sign(dx);
      if (canTurn && (progress > 0.38 || fastFlick)) commit(d);
      else snapBack();
    };

    const onCancel = () => {
      if (!active && !engaged) return;
      const wasEngaged = engaged;
      active = false;
      engaged = false;
      decided = false;
      clearRaf();
      clearInline();
      if (wasEngaged) snapBack();
    };

    const onClick = (e: MouseEvent) => {
      if (dragRecent.current || committingRef.current) return;
      const target = e.target as HTMLElement | null;
      if (
        target?.closest(
          "a, button, input, textarea, select, label, [role='button'], [data-no-tap-zone]",
        )
      ) {
        return;
      }
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const w = rect.width;
      if (x < w * 0.28) {
        if (prevTo) commit("prev");
      } else if (x > w * 0.72) {
        if (nextTo) commit("next");
      }
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onCancel);
    el.addEventListener("click", onClick);
    return () => {
      clearRaf();
      clearInline();
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onCancel);
      el.removeEventListener("click", onClick);
    };
  }, [prevTo, nextTo, commit, snapBack]);

  return {
    surfaceRef: surfaceRef as RefObject<HTMLDivElement>,
    turnStyle: style,
    turning,
    prevTo,
    nextTo,
  };
}
