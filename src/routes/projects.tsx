import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { NotebookPage } from "../components/notebook/NotebookPage";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Prem Patel" },
      { name: "description", content: "Engineering projects by Prem Patel, including smart vending, autonomous drone ground control, SSNeumorphicKit, and self-hosted infrastructure." },
      { property: "og:url", content: "https://premp.in/projects" },
      { property: "og:title", content: "Projects — Prem Patel" },
      { property: "og:description", content: "Engineering projects by Prem Patel, including smart vending, autonomous drone ground control, SSNeumorphicKit, and self-hosted infrastructure." },
      { name: "twitter:title", content: "Projects — Prem Patel" },
      { name: "twitter:description", content: "Engineering projects by Prem Patel, including smart vending, autonomous drone ground control, SSNeumorphicKit, and self-hosted infrastructure." },
    ],
    links: [
      { rel: "canonical", href: "https://premp.in/projects" },
    ],
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
    title: "Smart Vending Platform",
    body: (
      <>BLE/IoT Android app converting <span className="marker-hl">manual vending machines into app-connected ones</span>. Custom BLE protocol, white-label multi-brand builds.</>
    ),
    tags: ["BLE GATT", "IoT", "White-label flavors"],
  },
  {
    title: "Autonomous Drone Ground Control",
    body: (
      <>Android ground-control app over a custom RF SDK: <span className="marker-hl">live telemetry, offline maps</span>, route planning and in-flight navigation.</>
    ),
    tags: ["Offline Maps", "RF Telemetry", "Route Navigation"],
  },
  {
    title: "SSNeumorphicKit",
    body: (
      <>Open-source neumorphic UI kit for Android — soft shadows done properly, without murdering the CPU. <span className="marker-hl">83 stars</span> on GitHub.</>
    ),
    tags: ["Kotlin Library", "Custom Views", "Open Source"],
    href: "https://github.com/SimformSolutionsPvtLtd/SSAndroidNeumorphicKit",
  },
  {
    title: "Unified Communications Platform",
    body: (
      <>Jitsi + Matrix event architecture on Android: channels, calls, threads. Parsed the event stream into a <span className="marker-hl">scalable chat UI</span>.</>
    ),
    tags: ["Jitsi", "Matrix", "Event-driven Architecture"],
  },
  {
    title: "Homelab",
    body: (
      <>Self-hosted services on a cloud VPS: Tailscale, reverse proxy, Cloudflare Tunnels, Docker Compose, n8n with LLM-powered automations, <span className="marker-hl">custom AI agent orchestration</span>.</>
    ),
    tags: ["Tailscale", "Docker Compose", "n8n + LLM", "Hetzner"],
    href: "https://dashboard.premp.in",
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
      <p className="text-[var(--ink-muted)]">Five worth writing down.</p>

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
