import { useEffect, useRef, type ReactNode } from "react";
import { PaperCanvas } from "./PaperCanvas";
import { NotebookSurface } from "./NotebookSurface";
import { PageNavBar, PAGES } from "./PageNav";
import { usePageTurn } from "./usePageTurn";

interface Props {
  currentPath: string;
  title: string;
  kicker?: string;
  tint?: "none" | "1" | "2" | "3";
  align?: "center" | "start";
  children: ReactNode;
}

export function NotebookPage({ currentPath, title, kicker, tint = "none", align = "center", children }: Props) {
  const page = PAGES.find((p) => p.to === currentPath);
  const justify = align === "start" ? "justify-start" : "justify-center";
  const pageScrollRef = useRef<HTMLDivElement>(null);
  const { surfaceRef, turnStyle, turning } = usePageTurn(currentPath);

  useEffect(() => {
    pageScrollRef.current?.scrollTo(0, 0);
  }, [currentPath]);

  return (
    <PaperCanvas>
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-6 md:py-10">
        <div className="relative">
          {/* Ghost sheet under the turning page — hints at "next page underneath". */}
          {turning && (
            <div
              aria-hidden
              className="notebook-surface absolute inset-0 pointer-events-none"
              style={{ zIndex: 0, filter: "brightness(0.96)" }}
            />
          )}
          <NotebookSurface ref={surfaceRef} tint={tint} style={{ ...turnStyle, position: "relative", zIndex: 1 }}>
            <div ref={pageScrollRef} key={currentPath} className="page-scroll flex h-full w-full flex-col overflow-y-auto">
              <div className="mx-auto flex w-full max-w-[92%] flex-1 flex-col px-2 py-8 md:px-8 md:py-12 lg:px-12 ink-in">
                <div className="border-l-2 border-[var(--link)]/40 pl-5 md:pl-8 flex-1 flex flex-col">
                  <div className="mb-4 flex items-baseline justify-between gap-3 text-[0.7rem] uppercase tracking-widest text-[var(--ink-faint)]">
                    <span>{page?.n ?? "—"} · {kicker ?? page?.label}</span>
                    <span className="text-right">
                      premp.in
                      <span className="mx-1 text-[var(--ink-faint)]">·</span>
                      <a href="mailto:hello@premp.in" className="normal-case tracking-normal text-[var(--link)] hover:text-[var(--ink)]">hello@premp.in</a>
                    </span>
                  </div>
                  <h1 className="ink-hand text-[clamp(2.75rem,7vh,5rem)] leading-[0.95] text-[var(--ink)]">{title}</h1>
                  <div className={`mt-6 flex-1 min-h-0 flex flex-col ${justify} text-[var(--ink)] leading-relaxed`}>{children}</div>
                  <PageNavBar currentPath={currentPath} />
                </div>
              </div>
            </div>
          </NotebookSurface>
        </div>
      </div>
    </PaperCanvas>
  );
}
