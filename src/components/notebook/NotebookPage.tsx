import type { ReactNode } from "react";
import { PaperCanvas } from "./PaperCanvas";
import { NotebookSurface } from "./NotebookSurface";
import { PageNavBar, PAGES } from "./PageNav";

interface Props {
  currentPath: string;
  title: string;
  kicker?: string;
  tint?: "none" | "1" | "2" | "3";
  children: ReactNode;
}

export function NotebookPage({ currentPath, title, kicker, tint = "none", children }: Props) {
  const page = PAGES.find((p) => p.to === currentPath);
  return (
    <PaperCanvas>
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-6 md:py-10">
        <NotebookSurface tint={tint}>
          <div className="page-scroll flex h-full w-full flex-col overflow-y-auto">
            <div className="mx-auto flex w-full max-w-[92%] flex-1 flex-col px-2 py-8 md:px-8 md:py-12 lg:px-12 ink-in">
              <div className="border-l-2 border-[var(--link)]/40 pl-5 md:pl-8 flex-1 flex flex-col">
                <div className="mb-4 flex items-baseline justify-between text-[0.7rem] uppercase tracking-widest text-[var(--ink-faint)]">
                  <span>{page?.n ?? "—"} · {kicker ?? page?.label}</span>
                  <span>premp.in</span>
                </div>
                <h1 className="ink-hand text-[clamp(2.75rem,7vh,5rem)] leading-[0.95] text-[var(--ink)]">{title}</h1>
                <div className="mt-6 flex-1 min-h-0 flex flex-col justify-center text-[var(--ink)] leading-relaxed">{children}</div>
                <PageNavBar currentPath={currentPath} />
              </div>
            </div>
          </div>
        </NotebookSurface>
      </div>
    </PaperCanvas>
  );
}
