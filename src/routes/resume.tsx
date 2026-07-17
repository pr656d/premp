import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { Doodle } from "../components/notebook/Doodle";

const PDF_URL = "/prem-patel-resume.pdf";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Prem Patel" },
      { name: "description", content: "Prem Patel's resume — Lead Android Engineer, downloadable PDF." },
      { property: "og:title", content: "Resume — Prem Patel" },
      { property: "og:description", content: "Download the PDF resume." },
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
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[var(--link)] bg-[var(--link)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[var(--link)]"
        >
          ↓ Download PDF
        </a>
      </div>

      <div className="mt-8 mx-auto w-full max-w-[85%]">
        <div
          className="rounded-sm bg-white p-6 md:p-8 font-sans text-neutral-900 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)] ring-1 ring-neutral-200"
          style={{ transform: "rotate(-0.8deg)" }}
        >
          <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Loose sheet · printed</div>
          <div className="mt-2">
            <div className="text-lg font-bold tracking-[0.15em]">PREM PATEL</div>
            <div className="text-sm text-neutral-700">Lead Android Engineer · DevOps</div>
            <div className="text-[11px] text-neutral-500 mt-0.5">Ahmedabad, India · hello@premp.in · @pr656d</div>
          </div>

          <div className="my-4 h-px bg-neutral-300" />

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Experience</div>
            <ul className="mt-2 space-y-1 text-[12px] leading-snug text-neutral-800">
              <li><span className="font-semibold">Simform — Lead Engineer</span> (2025–present)</li>
              <li><span className="font-semibold">Simform — Senior Software Engineer</span> (2022–2025) · ShieldAI Nova2 drone control</li>
              <li><span className="font-semibold">Simform — Software Engineer</span> (2020–2022) · BLE vending · SSNeumorphicKit OSS</li>
            </ul>
          </div>

          <div className="my-4 h-px bg-neutral-300" />

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Skills</div>
            <p className="mt-2 text-[12px] leading-snug text-neutral-800">
              Kotlin · Java · Jetpack Compose · BLE · Offline Maps/Routing · Docker · Hetzner · n8n
            </p>
          </div>
        </div>
      </div>
    </NotebookPage>
  );
}
