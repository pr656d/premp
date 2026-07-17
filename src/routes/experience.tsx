import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Prem Patel" },
      { name: "description", content: "Prem Patel's engineering timeline — Simform Lead Engineer, ShieldAI Nova2 drone control, BLE vending and open source." },
      { property: "og:title", content: "Experience — Prem Patel" },
      { property: "og:description", content: "Timeline: Simform, ShieldAI, BLE vending, SSNeumorphicKit." },
    ],
  }),
  component: Experience,
});

const ITEMS = [
  {
    when: "2025 — present",
    role: "Lead Engineer",
    org: "Simform",
    body: "Leading Android teams — architecture, mentoring, DevOps for mobile pipelines. Balancing shipping with the boring, load-bearing decisions.",
    highlight: true,
  },
  {
    when: "2022 — 2025",
    role: "Senior Software Engineer",
    org: "Simform · ShieldAI Nova2",
    body: "Built the Android control app for ShieldAI's Nova2 drone — BLE + custom radio link, live telemetry, offline maps and mission planning that had to hold up outside cell coverage.",
  },
  {
    when: "2020 — 2022",
    role: "Software Engineer",
    org: "GlobalConnect & OSS",
    body: "BLE vending machine integrations for GlobalConnect. Published SSNeumorphicKit — an open-source neumorphic UI library for Android.",
  },
];

function Experience() {
  return (
    <NotebookPage currentPath="/experience" title="Experience" tint="1">
      <ol className="relative flex-1 flex flex-col justify-around gap-8 border-l-2 border-dashed border-[var(--rule)] pl-6 py-2">
        {ITEMS.map((it) => (
          <li key={it.role} className="relative">
            <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-[var(--link)] bg-[var(--paper)]" />
            <div className="ink-hand text-xl text-[var(--red-pencil)]">{it.when}</div>
            <div className="mt-1 text-lg text-[var(--ink)]">
              <strong>
                {it.highlight ? <span className="marker-hl">{it.role}</span> : it.role}
              </strong>{" "}
              <span className="text-[var(--ink-muted)]">· {it.org}</span>
            </div>
            <p className="mt-2 text-[var(--ink-muted)]">{it.body}</p>
          </li>
        ))}
      </ol>
    </NotebookPage>
  );
}
