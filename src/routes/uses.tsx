import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";

export const Route = createFileRoute("/uses")({
  head: () => ({
    meta: [
      { title: "Uses — Prem Patel" },
      { name: "description", content: "The hardware, dev tools, and self-hosted stack Prem Patel uses day to day." },
      { property: "og:title", content: "Uses — Prem Patel" },
      { property: "og:description", content: "Hardware, editors, and homelab stack." },
    ],
  }),
  component: Uses,
});

function Section({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div className="mt-8">
      <h2 className="ink-hand text-3xl text-[var(--ink)]">{title}</h2>
      <dl className="mt-3 divide-y divide-dashed divide-[var(--rule)]">
        {items.map(([k, v]) => (
          <div key={k} className="flex gap-4 py-2 text-sm">
            <dt className="w-32 shrink-0 text-[var(--ink-faint)]">{k}</dt>
            <dd className="text-[var(--ink)]">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Uses() {
  return (
    <NotebookPage currentPath="/uses" title="Uses" tint="3">
      <p className="text-[var(--ink-muted)]">Gear, tools, and the homelab.</p>
      <Section title="Hardware" items={[
        ["Daily driver", "MacBook Pro (Apple Silicon)"],
        ["Phone", "Android — always testing on real hardware"],
        ["Homelab", "Hetzner dedicated + a small NAS at home"],
        ["Keyboard", "Something clicky and unremarkable"],
      ]} />
      <Section title="Dev" items={[
        ["Editor", "Android Studio · VS Code · Neovim for text"],
        ["Languages", "Kotlin, Java, TypeScript, a lot of shell"],
        ["Android", "Jetpack Compose, Coroutines, Room, BLE stack"],
        ["Version control", "Git, self-hosted Forgejo mirror"],
      ]} />
      <Section title="Self-hosted stack" items={[
        ["Compute", "Hetzner + Docker Compose per service"],
        ["Networking", "Cloudflare Tunnel · Traefik reverse proxy"],
        ["Automation", "n8n for agentic workflows and glue"],
        ["Money", "Firefly III"],
        ["Backups", "Restic → object storage, nightly"],
      ]} />
    </NotebookPage>
  );
}
