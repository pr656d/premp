import { Link } from "@tanstack/react-router";
import { PAGES } from "./PageNav";
import { Doodle } from "./Doodle";

interface Props {
  suppressInkIn?: boolean;
  /** When rendered under the closed cover, links/buttons must not be tabbable. */
  inert?: boolean;
}

/**
 * The real Contents page body. Shared between /index-page (the route) and the
 * landing / route where it is rendered UNDER the closed cover so the open
 * animation reveals the actual page (not a mock or empty desk).
 */
export function IndexContent({ suppressInkIn = false, inert = false }: Props) {
  return (
    <div className="page-scroll flex h-full w-full flex-col overflow-y-auto">
      <div
        className={`mx-auto flex w-full max-w-[92%] flex-1 flex-col px-2 py-8 md:px-8 md:py-12 lg:px-12 ${suppressInkIn ? "" : "ink-in"}`}
      >
        <div className="border-l-2 border-[var(--link)]/40 pl-5 md:pl-8 flex-1 flex flex-col">
          <div className="mb-4 flex items-baseline justify-between gap-3 text-[0.7rem] uppercase tracking-widest text-[var(--ink-faint)]">
            <span>00 · Index</span>
            <span className="text-right">
              premp.in
              <span className="mx-1 text-[var(--ink-faint)]">·</span>
              <a href="mailto:hello@premp.in" className="normal-case tracking-normal text-[var(--link)] hover:text-[var(--ink)]">hello@premp.in</a>
            </span>
          </div>
          <h1 className="ink-hand text-[clamp(3rem,8vh,6rem)] leading-[0.95] text-[var(--ink)]">
            Contents
          </h1>
          <div className="mt-2 flex items-center gap-2 text-[var(--red-pencil)]">
            <Doodle kind="squiggle" className="h-3 w-24" />
            <span className="ink-hand text-xl">what's inside</span>
          </div>

          <ol className="mt-6 flex-1 min-h-0 flex flex-col justify-around">
            {PAGES.map((p) => (
              <li key={p.to}>
                <Link
                  to={p.to}
                  tabIndex={inert ? -1 : undefined}
                  className="group flex items-baseline gap-3 py-1.5"
                >
                  <span className="text-xs text-[var(--ink-faint)] w-8">{p.n}</span>
                  <span className="ink-hand text-[clamp(1.75rem,3.5vh,2.75rem)] text-[var(--ink)] group-hover:text-[var(--link)] transition-colors">
                    {p.label}
                  </span>
                  <span className="flex-1 border-b border-dotted border-[var(--rule)] translate-y-[-6px]" />
                  <span className="text-[clamp(1.25rem,2.5vh,1.75rem)] font-semibold leading-none text-[var(--link)] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex items-center justify-between text-sm text-[var(--ink-faint)]">
            <Link
              to="/"
              tabIndex={inert ? -1 : undefined}
              className="hover:text-[var(--ink)]"
            >
              <span className="font-semibold text-[var(--link)]">←</span> <span className="ink-hand text-lg">close notebook</span>
            </Link>
            <span className="ink-hand text-lg text-[var(--red-pencil)]">
              use ← → to flip pages
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
