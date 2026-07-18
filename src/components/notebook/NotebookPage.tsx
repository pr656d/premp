import { useEffect, useRef, type ReactNode } from "react";
import { PaperCanvas } from "./PaperCanvas";
import { NotebookSurface } from "./NotebookSurface";
import { PageNavBar, PAGES } from "./PageNav";
import { usePageTurn } from "./usePageTurn";
import { PAGE_BODIES, PAGE_META, type PageMeta } from "./pageBodies";
import { IndexContent } from "./IndexContent";

interface Props {
  currentPath: string;
  title: string;
  kicker?: string;
  tint?: "none" | "1" | "2" | "3";
  align?: "center" | "start";
  children: ReactNode;
}

/**
 * Static clone of the page scaffold for an arbitrary path. Rendered
 * underneath the interactive top surface so the peel reveals real
 * content — never a blank frame. Non-interactive.
 */
function StaticPageSurface({ path }: { path: string }) {
  if (path === "/index-page") {
    return (
      <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 0 }} aria-hidden>
        <NotebookSurface>
          <IndexContent suppressInkIn inert />
        </NotebookSurface>
      </div>
    );
  }
  const Body = PAGE_BODIES[path];
  const meta: PageMeta | undefined = PAGE_META[path];
  if (!Body || !meta) return null;
  const page = PAGES.find((p) => p.to === path);
  const justify = meta.align === "start" ? "justify-start" : "justify-center";
  return (
    <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 0 }} aria-hidden>
      <NotebookSurface tint={meta.tint ?? "none"}>
        <div className="page-scroll flex h-full w-full flex-col overflow-hidden">
          <div className="mx-auto flex w-full max-w-[92%] flex-1 flex-col px-2 py-8 md:px-8 md:py-12 lg:px-12">
            <div className="border-l-2 border-[var(--link)]/40 pl-5 md:pl-8 flex-1 flex flex-col">
              <div className="mb-4 flex items-baseline justify-between gap-3 text-[0.7rem] uppercase tracking-widest text-[var(--ink-faint)]">
                <span>{page?.n ?? "—"} · {meta.kicker ?? page?.label}</span>
                <span className="text-right">
                  premp.in<span className="mx-1 text-[var(--ink-faint)]">·</span>
                  <span className="normal-case tracking-normal text-[var(--link)]">hello@premp.in</span>
                </span>
              </div>
              <h1 className="ink-hand text-[clamp(2.75rem,7vh,5rem)] leading-[0.95] text-[var(--ink)]">{meta.title}</h1>
              <div className={`mt-6 flex-1 min-h-0 flex flex-col ${justify} text-[var(--ink)] leading-relaxed`}>
                <Body />
              </div>
            </div>
          </div>
        </div>
      </NotebookSurface>
    </div>
  );
}

export function NotebookPage({ currentPath, title, kicker, tint = "none", align = "center", children }: Props) {
  const page = PAGES.find((p) => p.to === currentPath);
  const justify = align === "start" ? "justify-start" : "justify-center";
  const pageScrollRef = useRef<HTMLDivElement>(null);
  const { surfaceRef, turnStyle, prevTo, nextTo } = usePageTurn(currentPath);

  useEffect(() => {
    pageScrollRef.current?.scrollTo(0, 0);
  }, [currentPath]);

  return (
    <PaperCanvas>
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-6 md:py-10">
        <div className="relative">
          {/* Real prev/next pages pre-mounted underneath so a page turn reveals actual content. */}
          {prevTo && <StaticPageSurface path={prevTo} />}
          {nextTo && <StaticPageSurface path={nextTo} />}
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
