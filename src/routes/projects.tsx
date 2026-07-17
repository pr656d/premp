import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Prem Patel" },
      { name: "description", content: "Featured projects: ShieldAI Nova2, SSNeumorphicKit, GlobalConnect BLE Vending, and the homelab." },
      { property: "og:title", content: "Projects — Prem Patel" },
      { property: "og:description", content: "Android, BLE, and self-hosted infra." },
    ],
  }),
  component: Projects,
});

const FEATURED = [
  {
    title: "ShieldAI Nova2",
    body: "Ground-control Android app for the Nova2 autonomous drone — BLE + radio link, live telemetry, offline mission planning.",
    tags: ["Android", "Kotlin", "BLE", "Offline maps"],
  },
  {
    title: "SSNeumorphicKit",
    body: "Open-source neumorphic UI toolkit for Android — soft shadows done properly, without murdering the CPU.",
    tags: ["Android", "Open source", "UI"],
  },
  {
    title: "GlobalConnect BLE Vending",
    body: "Consumer-facing BLE vending integration — secure pairing, session handling, payments handoff.",
    tags: ["Android", "BLE", "IoT"],
  },
  {
    title: "Homelab",
    body: "Self-hosted stack: Hetzner + Docker, Cloudflare tunnels, n8n automations, nightly backups. Boring on purpose.",
    tags: ["Hetzner", "Docker", "Cloudflare", "n8n"],
  },
];

function HandDividers() {
  // Two slightly wobbly lines, drawn like ruled with a pen.
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* horizontal */}
      <path
        d="M 2 50.6 C 20 49.6, 38 51.4, 52 50.2 S 82 49.4, 98 50.8"
        className="hand-stroke"
        vectorEffect="non-scaling-stroke"
      />
      {/* vertical */}
      <path
        d="M 50.3 2 C 49.5 22, 51.2 40, 50.1 54 S 49.4 82, 50.7 98"
        className="hand-stroke"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Quadrant({ p }: { p: (typeof FEATURED)[number] }) {
  return (
    <div className="relative flex flex-col p-4 md:p-6">
      <h3 className="ink-hand text-[clamp(1.5rem,3.2vh,2.25rem)] leading-tight text-[var(--ink)]">
        {p.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--ink-muted)] leading-relaxed">{p.body}</p>
      <div className="mt-3 text-xs text-[var(--ink-faint)]">
        {p.tags.map((t, i) => (
          <span key={t}>
            <span className="pen-underline">{t}</span>
            {i < p.tags.length - 1 && <span className="mx-1.5">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <NotebookPage currentPath="/projects" title="Projects" tint="2">
      <p className="text-[var(--ink-muted)]">Four worth writing down.</p>

      <div className="relative mt-6 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2">
        <div className="hidden sm:block absolute inset-0"><HandDividers /></div>
        {FEATURED.map((p) => (
          <Quadrant key={p.title} p={p} />
        ))}
      </div>

      <div className="mt-8 text-right">
        <span className="ink-hand text-lg text-[var(--red-pencil)]">
          more scribbles →{" "}
          <a
            href="https://github.com/pr656d"
            target="_blank"
            rel="noreferrer noopener"
            className="underline decoration-[var(--red-pencil)] underline-offset-4 hover:text-[var(--link)] hover:decoration-[var(--link)]"
          >
            github.com/pr656d
          </a>
        </span>
      </div>
    </NotebookPage>
  );
}
