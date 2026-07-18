import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PaperCanvas } from "../components/notebook/PaperCanvas";
import { NotebookSurface } from "../components/notebook/NotebookSurface";
import { IndexContent } from "../components/notebook/IndexContent";
import { Doodle } from "../components/notebook/Doodle";

export const Route = createFileRoute("/")({
  component: Cover,
});

// Same transform list as .cover-tilt hover / cover-hinge keyframes so a drag
// can start mid-breath or mid-hover without the cover jumping.
const hinge = (angle: number) =>
  `translateX(100%) perspective(2400px) translateX(-100%) rotateY(${angle}deg)`;

function Cover() {
  const navigate = useNavigate();
  const router = useRouter();
  const [opening, setOpening] = useState(false);
  const coverRef = useRef<HTMLButtonElement>(null);
  const openingRef = useRef(false);
  const dragRecentRef = useRef(false);

  // Prefetch the index route + fonts as soon as the cover mounts,
  // so the route swap after the open animation is instant.
  useEffect(() => {
    router.preloadRoute({ to: "/index-page" }).catch(() => {});
    if (typeof document !== "undefined" && "fonts" in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fonts = (document as any).fonts;
      try {
        fonts.load("500 2rem Caveat");
        fonts.load("500 1rem Inter");
      } catch { /* noop */ }
    }
  }, [router]);

  const open = () => {
    if (opening || openingRef.current || dragRecentRef.current) return;
    openingRef.current = true;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typeof window !== "undefined") {
      sessionStorage.setItem("viaCover", "1");
    }
    if (reduced) {
      navigate({ to: "/index-page" });
      return;
    }
    setOpening(true);
    window.setTimeout(() => navigate({ to: "/index-page" }), 480);
  };

  // Swipe-open: drag the cover's right edge like the pages themselves. Only
  // the opening direction turns (a closed book can't flip backwards — the
  // wrong way gets a slight elastic resist). Mirrors usePageTurn: axis lock
  // in a non-passive touchmove, transform written imperatively per frame.
  useEffect(() => {
    const el = coverRef.current;
    if (!el) return;

    let active = false;
    let engaged = false;
    let decided = false;
    let isTouch = false;
    let startX = 0;
    let startY = 0;
    let width = 1;
    let lastX = 0;
    let lastT = 0;
    let vx = 0;
    let pointerId = -1;
    let rafId = 0;
    let pendingDx = 0;
    let settleTimer = 0;

    const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const clearRaf = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const clearInline = () => {
      el.style.animation = "";
      el.style.transition = "";
      el.style.transform = "";
      el.style.boxShadow = "";
      el.style.willChange = "";
    };

    const applyFrame = () => {
      rafId = 0;
      if (!engaged || reduced()) return;
      const raw = -pendingDx / width; // > 0 when dragging toward open
      const prog = raw >= 0 ? Math.min(1, raw) : Math.max(-0.02, raw * 0.15);
      el.style.animation = "none"; // pause the mobile breathe loop while held
      el.style.transition = "none";
      el.style.transform = hinge(-prog * 150);
      el.style.willChange = "transform";
    };

    const finishOpen = () => {
      openingRef.current = true;
      sessionStorage.setItem("viaCover", "1");
      if (reduced()) {
        navigate({ to: "/index-page" });
        return;
      }
      el.style.animation = "none";
      el.style.transition = "transform 320ms linear, box-shadow 320ms linear";
      el.style.transform = hinge(-150);
      el.style.boxShadow = "80px 60px 80px -30px rgba(0,0,0,0.15)";
      settleTimer = window.setTimeout(() => navigate({ to: "/index-page" }), 300);
    };

    const snapShut = () => {
      el.style.animation = "none";
      el.style.transition = "transform 260ms cubic-bezier(0.2,0.7,0.3,1)";
      el.style.transform = hinge(0);
      settleTimer = window.setTimeout(clearInline, 280);
    };

    const engage = () => {
      decided = true;
      engaged = true;
      if (settleTimer) window.clearTimeout(settleTimer);
      try {
        el.setPointerCapture(pointerId);
      } catch {
        /* noop */
      }
    };

    const decideAxis = (dx: number, dy: number): "h" | "v" | null => {
      const adx = Math.abs(dx);
      const ady = Math.abs(dy);
      if (Math.max(adx, ady) < 6) return null;
      return adx >= ady ? "h" : "v";
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!active && !engaged) return;
      const t = e.touches[0];
      if (!t) return;
      if (!decided) {
        const axis = decideAxis(t.clientX - startX, t.clientY - startY);
        if (axis === null) return;
        if (axis === "h") engage();
        else {
          decided = true;
          active = false;
          return;
        }
      }
      if (engaged && e.cancelable) e.preventDefault();
    };

    const onDown = (e: PointerEvent) => {
      if (openingRef.current) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      active = true;
      engaged = false;
      decided = false;
      isTouch = e.pointerType !== "mouse";
      startX = lastX = e.clientX;
      startY = e.clientY;
      lastT = performance.now();
      width = el.getBoundingClientRect().width;
      vx = 0;
      pendingDx = 0;
      pointerId = e.pointerId;
    };

    const onMove = (e: PointerEvent) => {
      if (!active && !engaged) return;
      if (!decided) {
        if (isTouch) return; // touch decides in onTouchMove
        const axis = decideAxis(e.clientX - startX, e.clientY - startY);
        if (axis === null) return;
        if (axis === "h") engage();
        else {
          decided = true;
          active = false;
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

      pendingDx = e.clientX - startX;
      if (!rafId) rafId = requestAnimationFrame(applyFrame);
    };

    const onUp = (e: PointerEvent) => {
      if (!active && !engaged) return;
      const wasEngaged = engaged;
      const dx = e.clientX - startX;
      active = false;
      engaged = false;
      decided = false;
      clearRaf();
      try {
        el.releasePointerCapture(pointerId);
      } catch {
        /* noop */
      }
      if (!wasEngaged) return;

      dragRecentRef.current = true;
      window.setTimeout(() => {
        dragRecentRef.current = false;
      }, 350);

      const progress = Math.min(1, -dx / width);
      const fastFlick = vx < -0.6 && dx < 0;
      if (progress > 0.35 || fastFlick) finishOpen();
      else snapShut();
    };

    const onCancel = () => {
      if (!active && !engaged) return;
      const wasEngaged = engaged;
      active = false;
      engaged = false;
      decided = false;
      clearRaf();
      if (wasEngaged) snapShut();
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onCancel);
    return () => {
      clearRaf();
      if (settleTimer) window.clearTimeout(settleTimer);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onCancel);
    };
  }, [navigate]);

  return (
    <PaperCanvas>
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-6 md:py-10">
        <div className="cover-hover-scope relative">
          {/* Real contents page, sized identically, sitting UNDER the cover.
              Purely visual on this route — never interactive. */}
          <div aria-hidden className="pointer-events-none select-none relative z-[2] transform-gpu" style={{ transform: "translateZ(0)" }}>
            <NotebookSurface>
              <IndexContent suppressInkIn inert />
            </NotebookSurface>
          </div>


          {/* Page block peeking out from under the cover — single full-size element */}
          <div aria-hidden className="page-block" style={{ zIndex: 1 }} />

          <button
            ref={coverRef}
            onClick={open}
            aria-label="Open notebook"
            aria-expanded={opening}
            className={`cover-tilt group absolute inset-0 block overflow-hidden border border-[var(--rule)] bg-[var(--paper-tint)] text-left shadow-[0_20px_40px_-20px_rgba(0,0,0,0.28),inset_-3px_0_0_var(--rule)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--link)] ${opening ? "cover-opening" : ""}`}
            style={{ zIndex: 3, borderRadius: "var(--nb-radius-l) var(--nb-radius-r) var(--nb-radius-r) var(--nb-radius-l)" }}
          >
            {/* spine */}
            <span aria-hidden className="absolute left-0 top-0 h-full w-2 bg-[var(--ink)]/12" style={{ borderTopLeftRadius: "var(--nb-radius-l)", borderBottomLeftRadius: "var(--nb-radius-l)" }} />
            {/* elastic band — wraps top & bottom (clipped by cover overflow) */}
            <span aria-hidden className="elastic-band" style={{ right: "12%" }} />

            <div className="flex h-full flex-col justify-between px-[8%] py-[9%]">
              <div>
                <div className="flex items-baseline justify-between gap-3 pr-[12%] text-[clamp(10px,1.1vh,13px)] uppercase tracking-[0.3em] text-[var(--ink-faint)]">
                  <span>premp.in</span>
                  <a
                    href="mailto:hello@premp.in"
                    onClick={(e) => e.stopPropagation()}
                    className="normal-case tracking-normal text-[var(--link)] hover:text-[var(--ink)]"
                  >
                    hello@premp.in
                  </a>
                </div>
                <div className="mt-2 h-px w-10 bg-[var(--ink)]/40" />
              </div>

              <div>
                <h1 className="ink-hand leading-[0.95] text-[var(--ink)] text-[clamp(3.25rem,9vh,7.5rem)]">
                  Prem
                  <br />
                  Patel
                </h1>
                <p className="mt-4 max-w-[92%] text-[var(--ink-muted)] text-[clamp(0.78rem,1.45vh,1.05rem)] leading-snug">
                  I'm an explorer at heart. I build Android apps for a living — and a self-hosted homelab, AI-driven workflows, and whatever else looks interesting, for the joy of it. Off the keyboard you'll find me maintaining my Continental GT 650.
                </p>
              </div>

              <div className="flex items-end justify-end gap-4">
                <div className="flex shrink-0 items-center gap-2 pr-[14%] text-[var(--red-pencil)]">
                  <Doodle kind="star" className="h-4 w-4" />
                  <span className="ink-hand text-[clamp(1rem,2vh,1.5rem)]">tap to open</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </PaperCanvas>
  );
}
