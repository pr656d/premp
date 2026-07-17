import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { Doodle } from "../components/notebook/Doodle";

const UPDATED = "July 2026";

export const Route = createFileRoute("/now")({
  head: () => ({
    meta: [
      { title: "Now — Prem Patel" },
      { name: "description", content: `What Prem Patel is focused on right now. Updated ${UPDATED}.` },
      { property: "og:title", content: "Now — Prem Patel" },
      { property: "og:description", content: `Currently focused on… (updated ${UPDATED})` },
    ],
  }),
  component: Now,
});

function Now() {
  return (
    <NotebookPage currentPath="/now" title="Now" kicker={`Now · ${UPDATED}`}>
      <div className="flex items-center gap-3">
        <span className="ink-hand text-2xl text-[var(--red-pencil)]">— {UPDATED}</span>
        <Doodle kind="squiggle" className="h-3 w-16 text-[var(--red-pencil)]" />
      </div>
      <ul className="mt-8 space-y-4 text-lg">
        <li className="flex gap-3">
          <Doodle kind="check" className="mt-1 h-5 w-5 shrink-0 text-[var(--link)]" />
          Leading Android engineering at Simform.
        </li>
        <li className="flex gap-3">
          <Doodle kind="check" className="mt-1 h-5 w-5 shrink-0 text-[var(--link)]" />
          Deepening <span className="marker-hl">BLE and offline-first patterns</span> on production apps.
        </li>
        <li className="flex gap-3">
          <Doodle kind="check" className="mt-1 h-5 w-5 shrink-0 text-[var(--link)]" />
          Building small AI-agentic workflows on n8n — not chatbots, chores.
        </li>
        <li className="flex gap-3">
          <Doodle kind="check" className="mt-1 h-5 w-5 shrink-0 text-[var(--link)]" />
          Slowly moving more of my life off the cloud and into the homelab.
        </li>
      </ul>
      <div className="mt-10 flex items-center gap-3">
        <Doodle kind="star" className="h-5 w-5 text-[var(--red-pencil)]" />
        <p className="text-sm text-[var(--ink-faint)]">
          Inspired by <span className="italic">nownownow.com</span>. This page changes.
        </p>
      </div>
    </NotebookPage>
  );
}
