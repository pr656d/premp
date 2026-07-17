import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

/**
 * Desk canvas: plain darker background beneath the notebook page.
 * Also tracks cursor position on documentElement so the page surface
 * (page-paper) can render its pressure overlay.
 */
export function PaperCanvas({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;
    let raf = 0;
    let x = -200, y = -200;
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          // Cursor coords in viewport space; page surface reads via var()
          document.documentElement.style.setProperty("--cursor-x", `${x}px`);
          document.documentElement.style.setProperty("--cursor-y", `${y}px`);
          raf = 0;
        });
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={`desk-canvas min-h-screen w-full ${className}`}>
      {children}
    </div>
  );
}
