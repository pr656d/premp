import { forwardRef, type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  tint?: "none" | "1" | "2" | "3";
  className?: string;
  /** Adjusts the page's mask origin relative to the surface (for the ::before pressure overlay). */
  style?: CSSProperties;
}

/**
 * Fixed-aspect (3:4) notebook page surface, sized off the viewport height.
 * Forwards a ref so gesture code (usePageTurn) can measure and rotate it.
 */
export const NotebookSurface = forwardRef<HTMLDivElement, Props>(function NotebookSurface(
  { children, tint = "none", className = "", style },
  ref,
) {
  const tintClass =
    tint === "1" ? "page-tint-1" : tint === "2" ? "page-tint-2" : tint === "3" ? "page-tint-3" : "";
  return (
    <div
      ref={ref}
      className={`notebook-surface page-paper ${tintClass} ${className}`}
      style={{ touchAction: "pan-y", ...style }}
    >
      {/* actual content sits above the ::before pressure layer */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
});
