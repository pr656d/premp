import { createFileRoute, Link } from "@tanstack/react-router";
import { PageNavBar } from "../components/notebook/PageNav";

const PDF_URL = "/prem-patel-resume.pdf";
const PDF_EMBED = `${PDF_URL}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

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
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">Loose sheet</p>
            <h1 className="mt-1 text-3xl font-semibold">Résumé — Prem Patel</h1>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={PDF_URL}
              download
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
            >
              ↓ Download PDF
            </a>
            <Link
              to="/index-page"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2 text-sm text-neutral-700 hover:border-neutral-900"
            >
              Back to notebook
            </Link>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-md bg-white shadow-[0_10px_40px_-12px_rgba(0,0,0,0.25)] ring-1 ring-neutral-200">
          <object data={PDF_EMBED} type="application/pdf" className="block h-[85vh] w-full">
            <iframe src={PDF_EMBED} title="Prem Patel Resume" className="block h-[85vh] w-full border-0" />
            <div className="p-6 text-sm text-neutral-600">
              Your browser can't display the PDF inline.{" "}
              <a href={PDF_URL} className="underline">Download it here.</a>
            </div>
          </object>
        </div>

        <div className="mt-10 text-neutral-700">
          <PageNavBar currentPath="/resume" />
        </div>
      </div>
    </div>
  );
}
