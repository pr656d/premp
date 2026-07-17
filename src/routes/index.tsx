import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PaperCanvas } from "../components/notebook/PaperCanvas";
import { NotebookSurface } from "../components/notebook/NotebookSurface";
import { IndexContent } from "../components/notebook/IndexContent";
import { Doodle } from "../components/notebook/Doodle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prem Patel — Lead Android Engineer & Explorer" },
      { name: "description", content: "Personal website of Prem Patel, Lead Android Engineer. Discover project logs, experience, and tools in a dot-grid notebook layout." },
      { property: "og:url", content: "https://premp.in/" },
      { property: "og:title", content: "Prem Patel — Lead Android Engineer & Explorer" },
      { property: "og:description", content: "Personal website of Prem Patel, Lead Android Engineer. Discover project logs, experience, and tools in a dot-grid notebook layout." },
      { name: "twitter:title", content: "Prem Patel — Lead Android Engineer & Explorer" },
      { name: "twitter:description", content: "Personal website of Prem Patel, Lead Android Engineer. Discover project logs, experience, and tools in a dot-grid notebook layout." },
    ],
    links: [
      { rel: "canonical", href: "https://premp.in/" },
    ],
  }),
  component: Cover,
});

function Cover() {
  const navigate = useNavigate();
  const router = useRouter();
  const [opening, setOpening] = useState(false);

  // Prefetch the index route + fonts as soon as the cover mounts,
  // so the route swap after the open animation is instant.
  useEffect(() => {
    router.preloadRoute({ to: "/index-page" }).catch(() => {});
    if (typeof document !== "undefined" && "fonts" in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fonts = (document as any).fonts;
      try {
        fonts.load("500 2rem Caveat");
        fonts.load("500 1rem Inter");
      } catch { /* noop */ }
    }
  }, [router]);

  const open = () => {
    if (opening) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typeof window !== "undefined") {
      sessionStorage.setItem("viaCover", "1");
    }
    if (reduced) {
      navigate({ to: "/index-page" });
      return;
    }
    setOpening(true);
    window.setTimeout(() => navigate({ to: "/index-page" }), 480);
  };

  return (
    <PaperCanvas>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Prem Patel",
            "url": "https://premp.in",
            "sameAs": [
              "https://github.com/pr656d",
              "https://linkedin.com/in/pr656d",
              "https://x.com/pr656d"
            ],
            "jobTitle": "Lead Android Engineer",
            "knowsAbout": ["Android Development", "Kotlin", "Software Engineering", "AI Workflows", "Self-hosting"]
          })
        }}
      />
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-6 md:py-10">
        <div className="cover-hover-scope relative">
          {/* Real contents page, sized identically, sitting UNDER the cover.
              Purely visual on this route — never interactive. */}
          <div aria-hidden className="pointer-events-none select-none relative z-[2] transform-gpu" style={{ transform: "translateZ(0)" }}>
            <NotebookSurface>
              <IndexContent suppressInkIn inert />
            </NotebookSurface>
          </div>


          {/* Page block peeking out from under the cover — single full-size element */}
          <div aria-hidden className="page-block" style={{ zIndex: 1 }} />

          <button
            onClick={open}
            aria-label="Open notebook"
            aria-expanded={opening}
            className={`cover-tilt group absolute inset-0 block overflow-hidden border border-[var(--rule)] bg-[var(--paper-tint)] text-left shadow-[0_20px_40px_-20px_rgba(0,0,0,0.28),inset_-3px_0_0_var(--rule)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--link)] ${opening ? "cover-opening" : ""}`}
            style={{ zIndex: 3, borderRadius: "var(--nb-radius-l) var(--nb-radius-r) var(--nb-radius-r) var(--nb-radius-l)" }}
          >
            {/* spine */}
            <span aria-hidden className="absolute left-0 top-0 h-full w-2 bg-[var(--ink)]/12" style={{ borderTopLeftRadius: "var(--nb-radius-l)", borderBottomLeftRadius: "var(--nb-radius-l)" }} />
            {/* elastic band — wraps top & bottom (clipped by cover overflow) */}
            <span aria-hidden className="elastic-band" style={{ right: "12%" }} />

            <div className="flex h-full flex-col justify-between px-[8%] py-[9%]">
              <div>
                <div className="flex items-baseline justify-between gap-3 pr-[12%] text-[clamp(10px,1.1vh,13px)] uppercase tracking-[0.3em] text-[var(--ink-faint)]">
                  <span>premp.in</span>
                  <a
                    href="mailto:hello@premp.in"
                    onClick={(e) => e.stopPropagation()}
                    className="normal-case tracking-normal text-[var(--link)] hover:text-[var(--ink)]"
                  >
                    hello@premp.in
                  </a>
                </div>
                <div className="mt-2 h-px w-10 bg-[var(--ink)]/40" />
              </div>

              <div>
                <h1 className="ink-hand leading-[0.95] text-[var(--ink)] text-[clamp(3.25rem,9vh,7.5rem)]">
                  Prem
                  <br />
                  Patel
                </h1>
                <p className="mt-4 max-w-[92%] text-[var(--ink-muted)] text-[clamp(0.78rem,1.45vh,1.05rem)] leading-snug">
                  I'm an explorer at heart. I build Android apps for a living — and a self-hosted homelab, AI-driven workflows, and whatever else looks interesting, for the joy of it. Off the keyboard you'll find me maintaining my Continental GT 650.
                </p>
              </div>

              <div className="flex items-end justify-end gap-4">
                <div className="flex shrink-0 items-center gap-2 pr-[14%] text-[var(--red-pencil)]">
                  <Doodle kind="star" className="h-4 w-4" />
                  <span className="ink-hand text-[clamp(1rem,2vh,1.5rem)]">tap to open</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </PaperCanvas>
  );
}
