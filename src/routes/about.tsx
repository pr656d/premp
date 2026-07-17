import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { Doodle } from "../components/notebook/Doodle";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Prem Patel" },
      { name: "description", content: "Prem Patel — Android engineer, self-hosted homelab tinkerer, AI-workflow explorer, and rider of a Continental GT 650." },
      { property: "og:title", content: "About — Prem Patel" },
      { property: "og:description", content: "Android · self-hosted homelab · AI workflows · Continental GT 650." },
    ],
  }),
  component: () => (
    <NotebookPage currentPath="/about" title="About" align="start">
      <p className="text-lg">
        I'm <strong>Prem</strong> — an enthusiastic <span className="marker-hl">explorer</span>, in tech and outside it.
      </p>
      <p className="mt-4 text-[var(--ink-muted)]">
        By profession I'm a <strong>Lead Engineer at Simform</strong>, where I lead the Android department —
        six-plus years of native Android, Kotlin as my home language, with detours into Python and,
        lately, back into data structures for the fun of it. But Android is the trade, not the whole story.
      </p>
      <p className="mt-4 text-[var(--ink-muted)]">
        What actually drives me is exploring. I run a self-hosted homelab on a cloud server: services
        behind Tailscale for private, secure networking, reverse-proxied, tunneled through Cloudflare,
        everything in Docker Compose, automations in n8n with LLM nodes wired straight into the workflows.
        I spend a lot of time figuring out what AI can genuinely do — and what it can't — by building
        my own agent orchestration setup and using it daily.
      </p>
      <p className="mt-4 text-[var(--ink-muted)]">
        Everything I own lives in Git. My machine is disposable by design: if it dies tomorrow, a
        dotfiles script rebuilds it from scratch.
      </p>
      <p className="mt-4 text-[var(--ink-muted)]">
        Off the screen: I ride a <strong>Royal Enfield Continental GT 650</strong>, drive a car I'm
        equally fond of, and maintain both myself. Same instinct, different tools.
      </p>
      <p className="mt-4 text-[var(--ink-muted)]">
        I work fully remote — the commute time goes into all of the above.
      </p>

      <div className="mt-8 flex items-center gap-3 text-[var(--red-pencil)]">
        <Doodle kind="arrow" className="h-6 w-16" />
        <span className="ink-hand text-2xl">currently focused on</span>
      </div>
      <ul className="mt-3 grid gap-2 text-sm text-[var(--ink-muted)] sm:grid-cols-2">
        <li>· Exploring AI capabilities and agentic workflows</li>
        <li>· Self-hosted infrastructure (Tailscale, Docker, n8n)</li>
        <li>· Native Android at lead level</li>
        <li>· Mentoring and department leadership</li>
      </ul>

      <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-xs uppercase tracking-widest text-[var(--ink-faint)]">Based in</div>
          <div className="mt-1">India · working remotely</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-[var(--ink-faint)]">Focus</div>
          <div className="mt-1">Android · AI workflows · Self-hosting</div>
        </div>
      </div>

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
