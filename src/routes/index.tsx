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
      <div className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="relative" style={{ perspective: "1600px" }}>
          <button
            onClick={open}
            aria-label="Open notebook"
            className={`group relative block h-[520px] w-[360px] max-w-[92vw] rounded-r-xl rounded-l-md border border-[var(--rule)] bg-[var(--paper-tint)] text-left shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25),inset_-3px_0_0_var(--rule)] transition-transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${opening ? "cover-opening" : ""}`}
          >
            {/* spine */}
            <span aria-hidden className="absolute left-0 top-0 h-full w-2 rounded-l-md bg-[var(--ink)]/10" />
            {/* elastic band */}
            <span aria-hidden className="absolute inset-y-[-10px] right-10 w-2 rounded-sm bg-[var(--ink)]/25 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" />

            <div className="flex h-full flex-col justify-between px-10 py-12">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--ink-faint)]">
                  Notebook · Vol. 1
                </div>
                <div className="mt-2 h-px w-10 bg-[var(--ink)]/40" />
              </div>

              <div>
                <h1 className="ink-hand text-6xl leading-none text-[var(--ink)]">
                  Prem
                  <br />
                  Patel
                </h1>
                <p className="mt-4 text-sm text-[var(--ink-muted)]">
                  Lead Android Engineer
                  <br />
                  <span className="text-[var(--ink-faint)]">DevOps · Self-Hosting</span>
                </p>
              </div>

              <div className="flex items-end justify-between">
                <div className="flex items-center gap-2 text-[var(--ink-faint)]">
                  <Doodle kind="star" className="h-4 w-4" />
                  <span className="ink-hand text-lg">tap to open</span>
                </div>
                <div className="ink-hand text-2xl text-[var(--ink-faint)]">pp</div>
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
