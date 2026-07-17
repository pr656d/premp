import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { Doodle } from "../components/notebook/Doodle";
import { SOCIALS } from "../components/notebook/SocialIcons";

import posthog from "posthog-js";

const PDF_URL = "/prem-patel-resume.pdf";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Prem Patel" },
      { name: "description", content: "Prem Patel's professional CV and resume. Lead Android Engineer with experience in BLE IoT, offline maps, and drone control systems. Downloadable PDF available." },
      { property: "og:url", content: "https://premp.in/resume" },
      { property: "og:title", content: "Resume — Prem Patel" },
      { property: "og:description", content: "Prem Patel's professional CV and resume. Lead Android Engineer with experience in BLE IoT, offline maps, and drone control systems. Downloadable PDF available." },
      { name: "twitter:title", content: "Resume — Prem Patel" },
      { name: "twitter:description", content: "Prem Patel's professional CV and resume. Lead Android Engineer with experience in BLE IoT, offline maps, and drone control systems. Downloadable PDF available." },
    ],
    links: [
      { rel: "canonical", href: "https://premp.in/resume" },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <NotebookPage currentPath="/resume" title="Resume" align="start">
      <div className="flex flex-wrap items-center gap-3 gap-y-2 text-[var(--red-pencil)]">
        <span className="ink-hand text-2xl">grab the printable copy</span>
        <Doodle kind="arrow" className="h-6 w-16" />
        <a
          href={PDF_URL}
          download
          onClick={() => {
            if (import.meta.env.VITE_POSTHOG_KEY) {
              posthog.capture("resume_download", {
                page_path: "/resume",
              });
            }
          }}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[var(--link)] bg-[var(--link)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[var(--link)]"
        >
          ↓ Download PDF
        </a>
      </div>

      <div className="mt-8 mx-auto w-full max-w-[85%] flex-1 flex items-center">
        <div
          className="w-full rounded-sm bg-white p-6 md:p-8 font-sans text-neutral-900 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)] ring-1 ring-neutral-200"
          style={{ transform: "rotate(-0.8deg)" }}
        >
          <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Loose sheet · printed</div>
          <div className="mt-2">
            <div className="text-lg font-bold tracking-[0.15em]">PREM PATEL</div>
            <div className="text-sm text-neutral-700">Lead Engineer · Simform</div>
            <div className="text-[11px] text-neutral-500 mt-0.5">India · working remotely · hello@premp.in · @pr656d</div>
          </div>

          <div className="my-3 h-px bg-neutral-300" />

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Summary</div>
            <p className="mt-1.5 text-[12px] leading-snug text-neutral-800">
              6+ years of native Android (Kotlin) and software architecture. Led teams shipping BLE/IoT products, a drone ground-control app, and a unified communications platform. Self-hosted infrastructure and agent-agnostic AI workflows on the side.
            </p>
          </div>

          <div className="my-3 h-px bg-neutral-300" />

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Experience</div>
            <ul className="mt-1.5 space-y-1 text-[12px] leading-snug text-neutral-800">
              <li><span className="font-semibold">Simform — Lead Engineer</span> (2025–present) · Android department lead, CI/CD, multi-brand white-label releases</li>
              <li><span className="font-semibold">Simform — Senior Software Engineer</span> (Jan 2022–Jan 2025) · Drone ground-control app, unified comms platform, project template</li>
              <li><span className="font-semibold">Simform — Software Engineer</span> (Jun 2020–Jan 2022) · Smart vending BLE platform · SSNeumorphicKit (Open Source)</li>
            </ul>
          </div>

          <div className="my-3 h-px bg-neutral-300" />

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Open Source & Side Projects</div>
            <p className="mt-1.5 text-[12px] leading-snug text-neutral-800">
              SSNeumorphicKit (83★) · Self-hosted homelab (Tailscale, Docker, n8n) · Agent-agnostic AI orchestration · CattleNotes
            </p>
          </div>

          <div className="my-3 h-px bg-neutral-300" />

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Skills</div>
            <p className="mt-1.5 text-[12px] leading-snug text-neutral-800">
              Kotlin · Java · Jetpack Compose · BLE · Offline Maps · Docker · Tailscale · Cloudflare Tunnels · n8n
            </p>
          </div>

          <div className="my-3 h-px bg-neutral-300" />

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Certifications & Education</div>
            <p className="mt-1.5 text-[12px] leading-snug text-neutral-800">
              Google Certified Associate Android Developer (2022) · AWS SAA (in progress) · B.Tech CSE, Parul University (2016–2020)
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="text-xs uppercase tracking-widest text-[var(--ink-faint)]">Find me elsewhere</div>
        <ul className="mt-3 flex flex-wrap items-center gap-4">
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
    </NotebookPage>
  );
}
