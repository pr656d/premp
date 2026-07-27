import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { NotebookPage } from "../components/notebook/NotebookPage";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Prem Patel" },
      {
        name: "description",
        content:
          "Engineering projects by Prem Patel: QOTA, Podium, agy-swap, open-source work on open-connector, Android systems, and developer tooling.",
      },
      { property: "og:url", content: "https://premp.in/projects" },
      { property: "og:title", content: "Projects — Prem Patel" },
      {
        property: "og:description",
        content:
          "QOTA, Podium, agy-swap, open-source work on open-connector, Android systems, and developer tooling by Prem Patel.",
      },
      { name: "twitter:title", content: "Projects — Prem Patel" },
      {
        name: "twitter:description",
        content:
          "QOTA, Podium, agy-swap, open-source work on open-connector, Android systems, and developer tooling by Prem Patel.",
      },
    ],
    links: [{ rel: "canonical", href: "https://premp.in/projects" }],
  }),
  component: Projects,
});

type Project = {
  title: string;
  body: ReactNode;
  tags: string[];
  href?: string;
};

const FEATURED: Project[] = [
  {
    title: "QOTA",
    body: (
      <>
        Open-source Rust CLI and terminal dashboard for{" "}
        <span className="marker-hl">live AI quota telemetry</span>: provider windows, reset times,
        headroom, and per-account failures across Claude, Codex, and Antigravity. Published on{" "}
        <a
          href="https://crates.io/crates/qota"
          target="_blank"
          rel="noopener noreferrer"
          className="pen-underline hover:text-[var(--link)]"
        >
          crates.io
        </a>
        .
      </>
    ),
    tags: ["Rust", "Ratatui", "Multi-provider telemetry"],
    href: "https://github.com/pr656d/qota",
  },
  {
    title: "Podium",
    body: (
      <>
        AI-agnostic local orchestration system coordinating Claude Code, Codex, Antigravity, and
        Opencode crews against a <span className="marker-hl">Linear-backed task board</span>. Each
        task runs in an isolated git worktree with explicit review gates.
      </>
    ),
    tags: ["Local orchestration", "Linear", "Git worktrees"],
  },
  {
    title: "agy-swap",
    body: (
      <>
        Python CLI and TUI for switching between multiple Antigravity accounts without logging out,
        with aliases, safe credential handling, and a{" "}
        <span className="marker-hl">live Gemini quota dashboard</span>.
      </>
    ),
    tags: ["Python", "OAuth account switching", "Terminal UI"],
    href: "https://github.com/pr656d/agy-swap",
  },
  {
    title: "open-connector contribution",
    body: (
      <>
        Traced a 23 MB dashboard catalog payload, then slimmed, cached, compressed, and lazy-loaded
        it. Result: <span className="marker-hl">about 50× fewer bytes on the wire</span>, no catalog
        refetch on refresh, plus ETag revalidation.{" "}
        <a
          href="https://github.com/oomol-lab/open-connector/pulls?q=is%3Apr+author%3Apr656d"
          target="_blank"
          rel="noopener noreferrer"
          className="pen-underline hover:text-[var(--link)]"
        >
          See all contributions
        </a>
        .
      </>
    ),
    tags: ["Open Source", "Performance", "TypeScript"],
    href: "https://github.com/oomol-lab/open-connector/issues/172",
  },
  {
    title: "Smart Vending Platform",
    body: (
      <>
        BLE/IoT Android app converting{" "}
        <span className="marker-hl">manual vending machines into app-connected ones</span>. Custom
        BLE protocol, white-label multi-brand builds.
      </>
    ),
    tags: ["BLE GATT", "IoT", "White-label flavors"],
  },
  {
    title: "Autonomous Drone Ground Control",
    body: (
      <>
        Android ground-control app over a custom RF SDK:{" "}
        <span className="marker-hl">live telemetry, offline maps</span>, route planning and
        in-flight navigation.
      </>
    ),
    tags: ["Offline Maps", "RF Telemetry", "Route Navigation"],
  },
  {
    title: "SSNeumorphicKit",
    body: (
      <>
        Open-source neumorphic UI kit for Android — soft shadows done properly, without murdering
        the CPU. <span className="marker-hl">83 stars</span> on GitHub.
      </>
    ),
    tags: ["Kotlin Library", "Custom Views", "Open Source"],
    href: "https://github.com/SimformSolutionsPvtLtd/SSAndroidNeumorphicKit",
  },
];

function Card({ p }: { p: Project }) {
  return (
    <div className="border-b border-dashed border-[var(--rule)] py-4 last:border-b-0">
      <h3 className="ink-hand text-[clamp(1.4rem,2.8vh,2rem)] leading-tight text-[var(--ink)]">
        {p.href ? (
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer noopener"
            className="underline decoration-[var(--link)] decoration-2 underline-offset-4 hover:text-[var(--link)]"
          >
            {p.title}
          </a>
        ) : (
          p.title
        )}
      </h3>
      <p className="mt-1.5 text-sm text-[var(--ink-muted)] leading-relaxed">{p.body}</p>
      <div className="mt-1.5 text-xs text-[var(--ink-faint)]">
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
      <p className="text-[var(--ink-muted)]">
        Tools I own, systems shipped at work, fixes sent upstream.
      </p>

      <div className="mt-4 flex-1 min-h-0">
        {FEATURED.map((p) => (
          <Card key={p.title} p={p} />
        ))}
      </div>

      <div className="mt-4 text-right">
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
