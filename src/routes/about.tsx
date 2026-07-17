import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { Doodle } from "../components/notebook/Doodle";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Prem Patel" },
      { name: "description", content: "Prem Patel is a Lead Android Engineer based in Ahmedabad, India, focused on Kotlin/Java, BLE integrations, offline maps, and self-hosted automation." },
      { property: "og:title", content: "About — Prem Patel" },
      { property: "og:description", content: "Lead Android Engineer · BLE · offline maps · self-hosted infra." },
    ],
  }),
  component: () => (
    <NotebookPage currentPath="/about" title="About">
      <p className="text-lg">
        Hi — I'm <strong>Prem</strong>. I lead Android engineering at Simform out of
        Ahmedabad, India. I've spent the last few years going deep on{" "}
        <em>native Android</em> (Kotlin & Java), Bluetooth Low Energy, and offline
        mapping and routing — the kind of apps that have to keep working when the
        network doesn't.
      </p>
      <p className="mt-4 text-[var(--ink-muted)]">
        Outside the day job I run a small self-hosted homelab: Hetzner boxes,
        Docker, Cloudflare tunnels, n8n workflows, Firefly III for money. I like
        systems that are <span className="marker-hl">boring, legible, and mine</span>.
      </p>
      <div className="mt-8 flex items-center gap-3 text-[var(--red-pencil)]">
        <Doodle kind="arrow" className="h-6 w-16" />
        <span className="ink-hand text-2xl">flip the page for the timeline</span>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-xs uppercase tracking-widest text-[var(--ink-faint)]">Based in</div>
          <div className="mt-1">Ahmedabad, India</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[var(--ink-faint)]">Focus</div>
          <div className="mt-1">Android · BLE · Offline maps · DevOps</div>
        </div>
      </div>

      {/* margin doodles */}
      <div className="mt-10 flex items-center justify-between text-[var(--ink-faint)]">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden>
            <ellipse cx="20" cy="20" rx="13" ry="12" fill="none" stroke="var(--red-pencil)" strokeWidth="1.2" opacity="0.55" strokeDasharray="2 3" />
            <ellipse cx="20" cy="20" rx="9" ry="8" fill="none" stroke="var(--red-pencil)" strokeWidth="0.9" opacity="0.4" />
          </svg>
          <span className="ink-hand text-sm text-[var(--red-pencil)]/80">coffee ring</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="ink-hand text-sm">p.t.o. →</span>
          <Doodle kind="arrow" className="h-5 w-14 text-[var(--red-pencil)]" />
        </div>
      </div>
    </NotebookPage>
  ),
});
