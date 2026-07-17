import type { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  tint?: "none" | "1" | "2" | "3";
  className?: string;
  /** Adjusts the page's mask origin relative to the surface (for the ::before pressure overlay). */
  style?: CSSProperties;
}

/**
 * Fixed-aspect (3:4) notebook page surface, sized off the viewport height.
 * The cursor-pressure overlay is scoped to this element via .page-paper::before,
 * so dots only exist ON the page, never on the surrounding desk.
 *
 * The pressure overlay uses viewport-fixed cursor coords (from PaperCanvas);
 * since .page-paper::before is absolutely positioned inside the surface, the
 * mask still lines up because both use the same viewport-relative coordinate
 * space (the surface is not transformed).
 */
export function NotebookSurface({ children, tint = "none", className = "", style }: Props) {
  const tintClass =
    tint === "1" ? "page-tint-1" : tint === "2" ? "page-tint-2" : tint === "3" ? "page-tint-3" : "";
  return (
    <div
      className={`notebook-surface page-paper ${tintClass} ${className}`}
      style={style}
    >
      {/* actual content sits above the ::before pressure layer */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
