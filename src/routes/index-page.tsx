import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PaperCanvas } from "../components/notebook/PaperCanvas";
import { NotebookSurface } from "../components/notebook/NotebookSurface";
import { usePageNav } from "../components/notebook/PageNav";
import { usePageTurn } from "../components/notebook/usePageTurn";
import { IndexContent } from "../components/notebook/IndexContent";

export const Route = createFileRoute("/index-page")({
  head: () => ({
    meta: [
      { title: "Index — Prem Patel" },
      { name: "description", content: "Table of contents for Prem Patel's notebook portfolio." },
      { property: "og:title", content: "Index — Prem Patel" },
      { property: "og:description", content: "Table of contents for Prem Patel's notebook portfolio." },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  usePageNav("/index-page");
  const { surfaceRef, turnStyle, turning } = usePageTurn("/index-page");
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
        <div className="relative">
          {turning && (
            <div
              aria-hidden
              className="notebook-surface absolute inset-0 pointer-events-none"
              style={{ zIndex: 0, filter: "brightness(0.96)" }}
            />
          )}
          <NotebookSurface ref={surfaceRef} style={{ ...turnStyle, position: "relative", zIndex: 1 }}>
            <IndexContent suppressInkIn={suppress} />
          </NotebookSurface>
        </div>
      </div>
    </PaperCanvas>
  );
}
