import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";

export const Route = createFileRoute("/uses")({
  head: () => ({
    meta: [
      { title: "Uses — Prem Patel" },
      { name: "description", content: "The hardware, text editors, developer setup, AI terminal tools, and self-hosted services Prem Patel uses daily." },
      { property: "og:url", content: "https://premp.in/uses" },
      { property: "og:title", content: "Uses — Prem Patel" },
      { property: "og:description", content: "The hardware, text editors, developer setup, AI terminal tools, and self-hosted services Prem Patel uses daily." },
      { name: "twitter:title", content: "Uses — Prem Patel" },
      { name: "twitter:description", content: "The hardware, text editors, developer setup, AI terminal tools, and self-hosted services Prem Patel uses daily." },
    ],
    links: [
      { rel: "canonical", href: "https://premp.in/uses" },
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
      <p className="text-[var(--ink-muted)]">Desk, tools, AI stack, and the homelab.</p>
      <div className="mt-4 flex-1 min-h-0 grid gap-x-8 gap-y-6 md:grid-cols-2 content-start">

        <Section title="Desk" items={[
          ["Machine", "M4 Pro Mac Mini"],
          ["Display", "BenQ MA320U"],
          ["Keyboard", "Logitech MX Mechanical Mini for Mac"],
          ["Mouse", "Logitech MX Master for Mac"],
        ]} />
        <Section title="Pocket" items={[
          ["Phone", "iPhone 14 Pro"],
          ["Test device", "Always a real Android on hand"],
        ]} />
        <Section title="Editor" items={[
          ["Primary", "Neovim (switched from VS Code — still installed, never opened)"],
          ["Android", "Android Studio"],
        ]} />
        <Section title="AI" items={[
          ["Primary", "Claude Code"],
          ["Also", "Antigravity / Gemini CLI · OpenAI Codex CLI · opencode"],
          ["Local", "MLX for local LLMs"],
        ]} />
        <Section title="Android" items={[
          ["Languages", "Kotlin"],
          ["Stack", "Compose · Coroutines · Room · BLE"],
        ]} />
        <Section title="Homelab" items={[
          ["Compute", "Hetzner VPS"],
          ["Networking", "Tailscale · reverse proxy · Cloudflare Tunnels"],
          ["Runtime", "Docker Compose"],
          ["Automation", "n8n with LLM nodes"],
        ]} />
        <Section title="Version control" items={[
          ["Git", "Everything git-tracked"],
          ["Machine", "Disposable by design — dotfiles rebuild everything"],
        ]} />
        <Section title="Small joys" items={[
          ["Notes", "Plain markdown files"],
          ["Ride", "Royal Enfield Continental GT 650 · a car to drive around"],
          ["Music", "YouTube Music"],
        ]} />
      </div>
    </NotebookPage>
  );
}
