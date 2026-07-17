import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { Doodle } from "../components/notebook/Doodle";
import { SOCIALS } from "../components/notebook/SocialIcons";

const EMAIL = "hello@premp.in";
const HANDLE = "@pr656d";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prem Patel" },
      { name: "description", content: `Get in touch with Prem Patel — ${EMAIL}. One handle everywhere: ${HANDLE}.` },
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

  return (
    <NotebookPage currentPath="/contact" title="Contact" align="start">
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

        <ul className="mt-6 flex flex-wrap items-center gap-4">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                title={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rule)] text-[var(--ink-muted)] transition-colors hover:border-[var(--link)] hover:text-[var(--link)]"
              >
                <Icon className="h-5 w-5" />
              </a>
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
