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
      <div className="ink-hand text-2xl text-[var(--ink-muted)]">— {UPDATED}</div>
      <ul className="mt-6 space-y-3 text-lg">
        <li className="flex gap-3"><Doodle kind="check" className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" /> Leading Android engineering at Simform.</li>
        <li className="flex gap-3"><Doodle kind="check" className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" /> Deepening BLE and offline-first patterns on production apps.</li>
        <li className="flex gap-3"><Doodle kind="check" className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" /> Building small AI-agentic workflows on n8n — not chatbots, chores.</li>
        <li className="flex gap-3"><Doodle kind="check" className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" /> Slowly moving more of my life off the cloud and into the homelab.</li>
      </ul>
      <p className="mt-8 text-sm text-[var(--ink-faint)]">
        Inspired by <span className="italic">nownownow.com</span>. This page changes.
      </p>
    </NotebookPage>
  );
}
