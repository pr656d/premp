import type { ReactNode } from "react";
import { PaperCanvas } from "./PaperCanvas";
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
    <PaperCanvas tint={tint}>
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24 ink-in">
        <div className="border-l-2 border-[var(--accent)]/40 pl-6 md:pl-10">
          <div className="mb-6 flex items-baseline justify-between text-xs uppercase tracking-widest text-[var(--ink-faint)]">
            <span>{page?.n ?? "—"} · {kicker ?? page?.label}</span>
            <span>premp.in</span>
          </div>
          <h1 className="ink-hand text-5xl md:text-6xl text-[var(--ink)]">{title}</h1>
          <div className="mt-8 text-[var(--ink)] leading-relaxed">{children}</div>
          <PageNavBar currentPath={currentPath} />
        </div>
      </div>
    </PaperCanvas>
  );
}
