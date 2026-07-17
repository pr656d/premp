import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PaperCanvas } from "../components/notebook/PaperCanvas";
import { NotebookSurface } from "../components/notebook/NotebookSurface";
import { usePageNav } from "../components/notebook/PageNav";
import { IndexContent } from "../components/notebook/IndexContent";

export const Route = createFileRoute("/index-page")({
  head: () => ({
    meta: [
      { title: "TOC — Prem Patel" },
      { name: "description", content: "Table of contents for Prem Patel's notebook portfolio. Navigate to about, experience, projects, uses, now, and contact." },
      { property: "og:url", content: "https://premp.in/index-page" },
      { property: "og:title", content: "TOC — Prem Patel" },
      { property: "og:description", content: "Table of contents for Prem Patel's notebook portfolio. Navigate to about, experience, projects, uses, now, and contact." },
      { name: "twitter:title", content: "TOC — Prem Patel" },
      { name: "twitter:description", content: "Table of contents for Prem Patel's notebook portfolio. Navigate to about, experience, projects, uses, now, and contact." },
    ],
    links: [
      { rel: "canonical", href: "https://premp.in/index-page" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  usePageNav("/index-page");
  // When arriving from the cover-open animation, the same content was already
  // visible under the cover — suppress the ink-in fade so the route swap is
  // pixel-invisible. Direct URL visits still get the fade.
  const [suppress, setSuppress] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("viaCover") === "1") {
      sessionStorage.removeItem("viaCover");
      setSuppress(true);
    }
  }, []);

  return (
    <PaperCanvas>
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-6 md:py-10">
        <NotebookSurface>
          <IndexContent suppressInkIn={suppress} />
        </NotebookSurface>
      </div>
    </PaperCanvas>
  );
}
