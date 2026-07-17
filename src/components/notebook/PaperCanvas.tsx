import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  tint?: "none" | "1" | "2" | "3";
  className?: string;
}

export function PaperCanvas({ children, tint = "none", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
          el.style.setProperty("--cursor-x", `${x}px`);
          el.style.setProperty("--cursor-y", `${y}px`);
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

  const tintClass =
    tint === "1" ? "page-tint-1" : tint === "2" ? "page-tint-2" : tint === "3" ? "page-tint-3" : "";

  return (
    <div ref={ref} className={`paper-pressure min-h-screen w-full ${tintClass} ${className}`}>
      {children}
    </div>
  );
}
