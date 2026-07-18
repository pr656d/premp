import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PaperCanvas } from "../components/notebook/PaperCanvas";
import { NotebookSurface } from "../components/notebook/NotebookSurface";
import { usePageNav, PAGES } from "../components/notebook/PageNav";
import { usePageTurn } from "../components/notebook/usePageTurn";
import { IndexContent } from "../components/notebook/IndexContent";
import { PAGE_BODIES, PAGE_META } from "../components/notebook/pageBodies";

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

function NextPageUnderlay() {
  const path = "/about";
  const Body = PAGE_BODIES[path];
  const meta = PAGE_META[path];
  const page = PAGES.find((p) => p.to === path);
  if (!Body || !meta) return null;
  const justify = meta.align === "start" ? "justify-start" : "justify-center";
  return (
    <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 0 }} aria-hidden>
      <NotebookSurface tint={meta.tint ?? "none"}>
        <div className="page-scroll flex h-full w-full flex-col overflow-hidden">
          <div className="mx-auto flex w-full max-w-[92%] flex-1 flex-col px-2 py-8 md:px-8 md:py-12 lg:px-12">
            <div className="border-l-2 border-[var(--link)]/40 pl-5 md:pl-8 flex-1 flex flex-col">
              <div className="mb-4 flex items-baseline justify-between gap-3 text-[0.7rem] uppercase tracking-widest text-[var(--ink-faint)]">
                <span>{page?.n ?? "—"} · {meta.kicker ?? page?.label}</span>
                <span className="text-right">premp.in<span className="mx-1">·</span><span className="normal-case tracking-normal text-[var(--link)]">hello@premp.in</span></span>
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

function IndexPage() {
  usePageNav("/index-page");
  const { surfaceRef, turnStyle } = usePageTurn("/index-page");
  const [suppress, setSuppress] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("viaCover") === "1") {
      sessionStorage.removeItem("viaCover");
      setSuppress(true);
    }
  }, []);

  return (
    <PaperCanvas>
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-6 md:py-10">
        <div className="relative">
          <NextPageUnderlay />
          <NotebookSurface ref={surfaceRef} style={{ ...turnStyle, position: "relative", zIndex: 1 }}>
            <IndexContent suppressInkIn={suppress} />
          </NotebookSurface>
        </div>
      </div>
    </PaperCanvas>
  );
}
