import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { TapedCard } from "../components/notebook/TapedCard";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Prem Patel" },
      { name: "description", content: "Selected projects: ShieldAI Nova2, SSNeumorphicKit, GlobalConnect BLE vending, CattleNotes, homelab, AI agentic workflows." },
      { property: "og:title", content: "Projects — Prem Patel" },
      { property: "og:description", content: "Android, BLE, self-hosted infra, and open source." },
    ],
  }),
  component: Projects,
});

const P = [
  { title: "ShieldAI Nova2", rotate: -1.5, tags: ["Android", "Kotlin", "BLE", "Offline Maps"], body: "Ground-control Android app for the Nova2 autonomous drone. BLE + radio link, live telemetry, offline mission planning." },
  { title: "SSNeumorphicKit", rotate: 1, tags: ["Android", "Open Source", "UI"], body: "Neumorphic UI toolkit for Android views — soft shadows done properly, without murdering the CPU." },
  { title: "GlobalConnect BLE Vending", rotate: -0.5, tags: ["Android", "BLE", "IoT"], body: "Consumer-facing BLE vending integration — pairing, secure sessions, payments handoff." },
  { title: "CattleNotes", rotate: 1.5, tags: ["Android", "Kotlin", "Room"], body: "A field-first record book for dairy farmers — offline-only, quick entry, simple exports." },
  { title: "Homelab", rotate: -1, tags: ["Hetzner", "Docker", "Cloudflare", "n8n"], body: "Self-hosted stack: reverse proxies, tunnels, backups, dashboards. Boring on purpose." },
  { title: "AI Agentic Workflows", rotate: 0.5, tags: ["n8n", "LLM", "Automations"], body: "Small agentic workflows wired into daily life via n8n — inbox triage, note capture, monitoring." },
];

function Projects() {
  return (
    <NotebookPage currentPath="/projects" title="Projects" tint="2">
      <p className="text-[var(--ink-muted)]">A few things worth taping in.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {P.map((p) => (
          <TapedCard key={p.title} title={p.title} tags={p.tags} rotate={p.rotate}>
            {p.body}
          </TapedCard>
        ))}
      </div>
    </NotebookPage>
  );
}
