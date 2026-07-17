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
    <div>
      <h2 className="ink-hand text-2xl text-[var(--ink)]">{title}</h2>
      <dl className="mt-2 divide-y divide-dashed divide-[var(--rule)]">
        {items.map(([k, v]) => (
          <div key={k} className="flex gap-3 py-1.5 text-sm">
            <dt className="w-24 shrink-0 text-[var(--red-pencil)] text-xs uppercase tracking-wider pt-0.5">{k}</dt>
            <dd className="text-[var(--ink)] flex-1">{v}</dd>
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
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Section title="Hardware" items={[
          ["Daily driver", "MacBook Pro (Apple Silicon)"],
          ["Phone", "Android — always testing on real hardware"],
          ["Homelab", "Hetzner dedicated + a small NAS at home"],
          ["Keyboard", "Something clicky and unremarkable"],
        ]} />
        <Section title="Dev" items={[
          ["Editor", "Android Studio · VS Code · Neovim"],
          ["Languages", "Kotlin, Java, TypeScript, shell"],
          ["Android", "Compose, Coroutines, Room, BLE"],
          ["Version control", "Git · self-hosted Forgejo mirror"],
        ]} />
        <Section title="Self-hosted" items={[
          ["Compute", "Hetzner + Docker Compose"],
          ["Networking", "Cloudflare Tunnel · Traefik"],
          ["Automation", "n8n"],
          ["Money", "Firefly III"],
          ["Backups", "Restic → object storage, nightly"],
        ]} />
        <Section title="Small joys" items={[
          ["Notes", "Plain markdown, git-tracked"],
          ["Reader", "Miniflux, self-hosted"],
          ["Music", "Navidrome"],
        ]} />
      </div>
    </NotebookPage>
  );
}
