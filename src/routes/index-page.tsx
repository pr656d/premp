import { createFileRoute, Link } from "@tanstack/react-router";
import { PaperCanvas } from "../components/notebook/PaperCanvas";
import { PAGES } from "../components/notebook/PageNav";
import { Doodle } from "../components/notebook/Doodle";

export const Route = createFileRoute("/index-page")({
  head: () => ({
    meta: [
      { title: "Index — Prem Patel" },
      { name: "description", content: "Table of contents for Prem Patel's notebook portfolio." },
      { property: "og:title", content: "Index — Prem Patel" },
      { property: "og:description", content: "Table of contents for Prem Patel's notebook portfolio." },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <PaperCanvas>
      <div className="mx-auto max-w-2xl xl:max-w-3xl 2xl:max-w-4xl px-6 py-16 md:py-24 text-base xl:text-[17px] 2xl:text-lg ink-in">
        <div className="border-l-2 border-[var(--accent)]/40 pl-6 md:pl-10">
          <div className="mb-6 flex items-baseline justify-between text-xs uppercase tracking-widest text-[var(--ink-faint)]">
            <span>00 · Index</span>
            <span>premp.in</span>
          </div>
          <h1 className="ink-hand text-6xl text-[var(--ink)]">Contents</h1>
          <div className="mt-2 flex items-center gap-2 text-[var(--ink-muted)]">
            <Doodle kind="squiggle" className="h-3 w-24" />
            <span className="ink-hand text-xl">what's inside</span>
          </div>

          <ol className="mt-10 space-y-3">
            {PAGES.map((p) => (
              <li key={p.to}>
                <Link
                  to={p.to}
                  className="group flex items-baseline gap-3 py-1.5"
                >
                  <span className="text-xs text-[var(--ink-faint)] w-8">{p.n}</span>
                  <span className="ink-hand text-3xl text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                    {p.label}
                  </span>
                  <span className="flex-1 border-b border-dotted border-[var(--rule)] translate-y-[-6px]" />
                  <span className="text-xs text-[var(--ink-faint)]">→</span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-16 flex items-center justify-between text-sm text-[var(--ink-faint)]">
            <Link to="/" className="hover:text-[var(--ink)]">← close notebook</Link>
            <span className="ink-hand text-lg">use ← → to flip pages</span>
          </div>
        </div>
      </div>
    </PaperCanvas>
  );
}
