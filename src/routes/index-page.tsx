import { createFileRoute, Link } from "@tanstack/react-router";
import { PaperCanvas } from "../components/notebook/PaperCanvas";
import { NotebookSurface } from "../components/notebook/NotebookSurface";
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
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-6 md:py-10">
        <NotebookSurface>
          <div className="page-scroll flex h-full w-full flex-col overflow-y-auto">
            <div className="mx-auto flex w-full max-w-[92%] flex-1 flex-col px-2 py-8 md:px-8 md:py-12 lg:px-12 ink-in">
              <div className="border-l-2 border-[var(--link)]/40 pl-5 md:pl-8 flex-1 flex flex-col">
                <div className="mb-4 flex items-baseline justify-between text-[0.7rem] uppercase tracking-widest text-[var(--ink-faint)]">
                  <span>00 · Index</span>
                  <span>premp.in</span>
                </div>
                <h1 className="ink-hand text-[clamp(3rem,8vh,6rem)] leading-[0.95] text-[var(--ink)]">Contents</h1>
                <div className="mt-2 flex items-center gap-2 text-[var(--red-pencil)]">
                  <Doodle kind="squiggle" className="h-3 w-24" />
                  <span className="ink-hand text-xl">what's inside</span>
                </div>

                <ol className="mt-6 flex-1 min-h-0 flex flex-col justify-around">
                  {PAGES.map((p) => (
                    <li key={p.to}>
                      <Link
                        to={p.to}
                        className="group flex items-baseline gap-3 py-1.5"
                      >
                        <span className="text-xs text-[var(--ink-faint)] w-8">{p.n}</span>
                        <span className="ink-hand text-[clamp(1.75rem,3.5vh,2.75rem)] text-[var(--ink)] group-hover:text-[var(--link)] transition-colors">
                          {p.label}
                        </span>
                        <span className="flex-1 border-b border-dotted border-[var(--rule)] translate-y-[-6px]" />
                        <span className="text-xs text-[var(--link)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </Link>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 flex items-center justify-between text-sm text-[var(--ink-faint)]">
                  <Link to="/" className="hover:text-[var(--ink)]">← close notebook</Link>
                  <span className="ink-hand text-lg text-[var(--red-pencil)]">use ← → to flip pages</span>
                </div>
              </div>
            </div>
          </div>
        </NotebookSurface>
      </div>
    </PaperCanvas>
  );
}
