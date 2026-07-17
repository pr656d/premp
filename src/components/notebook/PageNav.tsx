import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const PAGES = [
  { to: "/about", label: "About", n: "01" },
  { to: "/experience", label: "Experience", n: "02" },
  { to: "/projects", label: "Projects", n: "03" },
  { to: "/uses", label: "Uses", n: "04" },
  { to: "/now", label: "Now", n: "05" },
  { to: "/resume", label: "Resume", n: "06" },
  { to: "/contact", label: "Contact", n: "07" },
] as const;

export function usePageNav(currentPath: string) {
  const navigate = useNavigate();
  const isIndex = currentPath === "/index-page";
  const idx = PAGES.findIndex((p) => p.to === currentPath);
  const prev = idx > 0 ? PAGES[idx - 1] : null;
  const next = isIndex
    ? PAGES[0]
    : idx >= 0 && idx < PAGES.length - 1
      ? PAGES[idx + 1]
      : null;
  const touch = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const goLeft = () => {
      if (isIndex) { navigate({ to: "/" }); return; }
      if (prev) navigate({ to: prev.to });
      else navigate({ to: "/index-page" });
    };
    const goRight = () => {
      if (next) navigate({ to: next.to });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      if (e.key === "ArrowRight") goRight();
      else if (e.key === "ArrowLeft") goLeft();
    };
    const onTS = (e: TouchEvent) => { const t = e.changedTouches[0]; touch.current = { x: t.clientX, y: t.clientY }; };
    const onTE = (e: TouchEvent) => {
      if (!touch.current) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - touch.current.x;
      const dy = t.clientY - touch.current.y;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) goRight();
        else goLeft();
      }
      touch.current = null;
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTS, { passive: true });
    window.addEventListener("touchend", onTE, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTS);
      window.removeEventListener("touchend", onTE);
    };
  }, [prev, next, isIndex, navigate]);

  return { prev, next, idx };
}

export function PageNavBar({ currentPath }: { currentPath: string }) {
  const { prev, next } = usePageNav(currentPath);
  return (
    <div className="mt-16 flex items-center justify-between border-t border-dashed border-[var(--rule)] pt-6 text-sm">
      <div>
        {prev ? (
          <Link to={prev.to} className="text-[var(--ink-muted)] hover:text-[var(--ink)]">
            <span className="font-semibold text-[var(--link)]">←</span> <span className="ink-hand text-lg">{prev.label}</span>
          </Link>
        ) : (
          <Link to="/index-page" className="text-[var(--ink-muted)] hover:text-[var(--ink)]">
            <span className="font-semibold text-[var(--link)]">←</span> <span className="ink-hand text-lg">Index</span>
          </Link>
        )}
      </div>
      <Link to="/index-page" className="ink-hand text-lg text-[var(--ink-faint)] hover:text-[var(--ink)]">
        · index ·
      </Link>
      <div>
        {next && (
          <Link to={next.to} className="text-[var(--ink-muted)] hover:text-[var(--ink)]">
            <span className="ink-hand text-lg">{next.label}</span> <span className="font-semibold text-[var(--link)]">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
