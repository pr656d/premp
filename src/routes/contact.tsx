import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { Doodle } from "../components/notebook/Doodle";

const EMAIL = "hello@premp.in";
const HANDLE = "@pr656d";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prem Patel" },
      { name: "description", content: `Get in touch with Prem Patel — ${EMAIL}, one handle everywhere: ${HANDLE}.` },
      { property: "og:title", content: "Contact — Prem Patel" },
      { property: "og:description", content: "Say hello." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyHandle = async () => {
    try {
      await navigator.clipboard.writeText(HANDLE);
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
        <a
          href={`mailto:${EMAIL}`}
          className="ink-hand text-[clamp(1.75rem,3.5vh,2.5rem)] text-[var(--ink)] underline decoration-[var(--link)] decoration-2 underline-offset-4"
        >
          {EMAIL}
        </a>
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-2 text-[var(--red-pencil)]">
          <Doodle kind="arrow" className="h-5 w-14" />
          <span className="ink-hand text-xl">One handle everywhere:</span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="ink-hand text-[clamp(2rem,5vh,3.5rem)] text-[var(--link)]">
            {HANDLE}
          </span>
          <button
            onClick={copyHandle}
            className="rounded-full border border-[var(--rule)] px-3 py-1 text-xs text-[var(--ink-muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
          >
            {copied ? "copied ✓" : "copy"}
          </button>
        </div>

        <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--ink-muted)]">
          {socials.map((s, i) => (
            <li key={s.label} className="flex items-center gap-4">
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[var(--link)] underline decoration-dotted underline-offset-4 hover:text-[var(--ink)]"
              >
                {s.label}
              </a>
              {i < socials.length - 1 && <span className="text-[var(--ink-faint)]">·</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-10 text-sm text-[var(--ink-faint)]">
        <span className="ink-hand text-lg text-[var(--red-pencil)]">p.s.</span>{" "}
        replies come from a real human, usually within a day.
      </div>
    </NotebookPage>
  );
}
