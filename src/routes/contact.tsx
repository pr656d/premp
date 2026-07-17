import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { Doodle } from "../components/notebook/Doodle";

const EMAIL = "hello@premp.in";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prem Patel" },
      { name: "description", content: `Get in touch with Prem Patel — ${EMAIL}, or find him at @pr656d on GitHub, LinkedIn, Mastodon, and Twitter.` },
      { property: "og:title", content: "Contact — Prem Patel" },
      { property: "og:description", content: "Say hello." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  const socials: { label: string; href: string }[] = [
    { label: "GitHub", href: "https://github.com/pr656d" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pr656d" },
    { label: "Mastodon", href: "https://mastodon.social/@pr656d" },
    { label: "Twitter", href: "https://twitter.com/pr656d" },
  ];

  return (
    <NotebookPage currentPath="/contact" title="Contact">
      <p className="text-lg text-[var(--ink-muted)]">Send a letter. I read them all.</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href={`mailto:${EMAIL}`} className="ink-hand text-3xl text-[var(--ink)] underline decoration-[var(--accent)] decoration-2 underline-offset-4">
          {EMAIL}
        </a>
        <button
          onClick={copy}
          className="rounded-full border border-[var(--rule)] px-3 py-1 text-xs text-[var(--ink-muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
        >
          {copied ? "copied ✓" : "copy"}
        </button>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-2 text-[var(--ink-faint)]">
          <Doodle kind="arrow" className="h-5 w-14" />
          <span className="ink-hand text-xl">also here</span>
        </div>
        <ul className="mt-4 space-y-2">
          {socials.map((s) => (
            <li key={s.label} className="flex items-baseline gap-3">
              <span className="w-24 text-xs uppercase tracking-widest text-[var(--ink-faint)]">{s.label}</span>
              <a href={s.href} target="_blank" rel="noreferrer noopener" className="text-[var(--ink)] underline decoration-dotted underline-offset-4 hover:text-[var(--accent)]">
                @pr656d
              </a>
            </li>
          ))}
        </ul>
      </div>
    </NotebookPage>
  );
}
