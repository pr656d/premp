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
    <NotebookPage currentPath="/about" title="About" align="start">
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

      {/* margin doodles — coffee-mug ring in the quiet lower-right corner */}
      <div className="relative mt-auto flex items-end justify-between pt-10">
        <svg viewBox="0 0 60 60" className="h-16 w-16 opacity-40" aria-hidden>
          <ellipse cx="30" cy="30" rx="24" ry="22" fill="none" stroke="var(--red-pencil)" strokeWidth="1.1" strokeDasharray="3 5" />
          <ellipse cx="30" cy="30" rx="18" ry="16" fill="none" stroke="var(--red-pencil)" strokeWidth="0.7" opacity="0.7" />
          <ellipse cx="34" cy="26" rx="4" ry="3" fill="var(--red-pencil)" opacity="0.25" />
        </svg>
        <div className="flex items-center gap-2 text-[var(--ink-faint)]">
          <span className="ink-hand text-sm">p.t.o. →</span>
          <Doodle kind="arrow" className="h-5 w-14 text-[var(--red-pencil)]" />
        </div>
      </div>
    </NotebookPage>
  ),
});
