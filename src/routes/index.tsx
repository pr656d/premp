import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PaperCanvas } from "../components/notebook/PaperCanvas";
import { Doodle } from "../components/notebook/Doodle";

export const Route = createFileRoute("/")({
  component: Cover,
});

function Cover() {
  const navigate = useNavigate();
  const [opening, setOpening] = useState(false);

  const open = () => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      navigate({ to: "/index-page" });
      return;
    }
    setOpening(true);
    window.setTimeout(() => navigate({ to: "/index-page" }), 650);
  };

  return (
    <PaperCanvas>
      <div className="flex min-h-screen items-center justify-center px-6 py-10 sm:py-16">
        <div className="relative" style={{ perspective: "1800px" }}>
          <button
            onClick={open}
            aria-label="Open notebook"
            className={`group relative block aspect-[5/7] h-[70vh] max-h-[820px] min-h-[460px] w-auto max-w-[92vw] rounded-r-xl rounded-l-md border border-[var(--rule)] bg-[var(--paper-tint)] text-left shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25),inset_-3px_0_0_var(--rule)] transition-transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${opening ? "cover-opening" : ""}`}
          >
            {/* spine */}
            <span aria-hidden className="absolute left-0 top-0 h-full w-2 rounded-l-md bg-[var(--ink)]/10" />
            {/* elastic band */}
            <span aria-hidden className="absolute inset-y-[-10px] right-[10%] w-2 rounded-sm bg-[var(--ink)]/25 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" />

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

              <div className="flex items-end justify-between">
                <div className="flex items-center gap-2 text-[var(--ink-faint)]">
                  <Doodle kind="star" className="h-4 w-4" />
                  <span className="ink-hand text-[clamp(1rem,2vh,1.5rem)]">tap to open</span>
                </div>
                <div className="ink-hand text-[clamp(1.25rem,2.5vh,2rem)] text-[var(--ink-faint)]">pp</div>
              </div>
            </div>
          </button>
          <p className="mt-6 text-center text-xs text-[var(--ink-faint)]">
            Ahmedabad, India · hello@premp.in
          </p>
        </div>
      </div>
    </PaperCanvas>
  );
}
