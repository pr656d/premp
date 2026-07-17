import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PaperCanvas } from "../components/notebook/PaperCanvas";
import { Doodle } from "../components/notebook/Doodle";

export const Route = createFileRoute("/")({
  component: Cover,
});

function Cover() {
  const navigate = useNavigate();
  const router = useRouter();
  const [opening, setOpening] = useState(false);

  // Prefetch the index route + fonts as soon as the cover mounts,
  // so the open animation and contents page render instantly on click.
  useEffect(() => {
    router.preloadRoute({ to: "/index-page" }).catch(() => {});
    // Trigger font loads (Caveat handwriting + Inter body) up-front.
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
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      navigate({ to: "/index-page" });
      return;
    }
    setOpening(true);
    window.setTimeout(() => navigate({ to: "/index-page" }), 780);
  };

  return (
    <PaperCanvas>
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-10 sm:py-16">
        <div className="cover-hover-scope relative" style={{ perspective: "2400px", perspectiveOrigin: "50% 50%" }}>
          {/* Page-stack peeking below the cover — narrower than cover, thin stacked sheets */}
          <div
            aria-hidden
            className="page-stack"
            style={{ zIndex: 0 }}
          />
          {/* Right-edge page sliver revealed as the cover lifts on hover */}
          <div aria-hidden className="page-edge-right" style={{ zIndex: 0 }} />

          <button
            onClick={open}
            aria-label="Open notebook"
            className={`cover-tilt group relative block aspect-[3/4] w-auto max-w-[94vw] overflow-hidden rounded-r-xl rounded-l-md border border-[var(--rule)] bg-[var(--paper-tint)] text-left shadow-[0_20px_40px_-20px_rgba(0,0,0,0.28),inset_-3px_0_0_var(--rule)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--link)] ${opening ? "cover-opening" : ""}`}
            style={{ zIndex: 1, height: "min(88vh, calc(94vw * 4 / 3))" }}
          >

            {/* spine */}
            <span aria-hidden className="absolute left-0 top-0 h-full w-2 rounded-l-md bg-[var(--ink)]/12" />
            {/* elastic band — wraps top & bottom (clipped by cover overflow) */}
            <span aria-hidden className="elastic-band" style={{ right: "12%" }} />

            <div className="flex h-full flex-col justify-between px-[8%] py-[9%]">
              <div>
                <div className="text-[clamp(10px,1.1vh,13px)] uppercase tracking-[0.3em] text-[var(--ink-faint)]">
                  premp.in
                </div>
                <div className="mt-2 h-px w-10 bg-[var(--ink)]/40" />
              </div>

              <div>
                <h1 className="ink-hand leading-[0.95] text-[var(--ink)] text-[clamp(3.25rem,9vh,7.5rem)]">
                  Prem
                  <br />
                  Patel
                </h1>
                <p className="mt-4 text-[var(--ink-muted)] text-[clamp(0.85rem,1.6vh,1.15rem)]">
                  Lead Android Engineer
                  <br />
                  <span className="text-[var(--ink-faint)]">DevOps · Self-Hosting</span>
                </p>
              </div>

              <div className="flex items-end justify-end pr-[20%]">
                <div className="flex items-center gap-2 text-[var(--red-pencil)]">
                  <Doodle kind="star" className="h-4 w-4" />
                  <span className="ink-hand text-[clamp(1rem,2vh,1.5rem)]">tap to open</span>
                </div>
              </div>

            </div>
          </button>
        </div>
        <p className="mt-6 text-center text-xs text-[var(--ink-faint)]">
          Ahmedabad, India · hello@premp.in
        </p>
      </div>
    </PaperCanvas>
  );
}
