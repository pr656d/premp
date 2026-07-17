import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { Doodle } from "../components/notebook/Doodle";

const UPDATED = "July 2026";

export const Route = createFileRoute("/now")({
  head: () => ({
    meta: [
      { title: "Now — Prem Patel" },
      { name: "description", content: `What Prem Patel is focused on right now. Updated ${UPDATED}.` },
      { property: "og:title", content: "Now — Prem Patel" },
      { property: "og:description", content: `Currently: a 16-month-old daughter, and a real question about what AI can do. (${UPDATED})` },
    ],
  }),
  component: Now,
});

function Now() {
  return (
    <NotebookPage currentPath="/now" title="Now" kicker={`Now · ${UPDATED}`} align="start">
      <div className="flex items-center gap-3">
        <span className="ink-hand text-2xl text-[var(--red-pencil)]">— {UPDATED}</span>
        <Doodle kind="squiggle" className="h-3 w-16 text-[var(--red-pencil)]" />
      </div>

      <p className="mt-6 text-lg text-[var(--ink)]">
        Mostly two things: <span className="marker-hl">my daughter</span>, and a question.
      </p>

      <p className="mt-4 text-[var(--ink-muted)]">
        I'm dad to a 16-month-old girl, and she gets the best of my time — has since before she was born.
      </p>

      <p className="mt-4 text-[var(--ink-muted)]">
        The question: what can AI actually <em>do</em>, and what can't it? Not the marketing answer — the
        real one. I've built my own agent orchestration setup (a crew of CLI agents working in parallel
        worktrees, in my style, my way) and I use it every day to find the edges.
      </p>

      <p className="mt-4 text-[var(--ink-muted)]">
        My take so far: AI is a tool, like compilers were. Nobody writes machine code anymore, but it's
        still humans who built the languages and decide what to compile. AI removes manual work; it
        doesn't remove the need for the human who knows what problem is being solved. That part isn't
        going anywhere.
      </p>

      <p className="mt-4 text-[var(--ink-muted)]">
        Also on the bench: relearning data structures properly, and riding the GT 650 when the weather agrees.
      </p>

      <div className="mt-10 flex items-center gap-3">
        <Doodle kind="star" className="h-5 w-5 text-[var(--red-pencil)]" />
        <p className="text-sm text-[var(--ink-faint)]">
          Inspired by <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="italic underline decoration-dotted underline-offset-2 hover:text-[var(--ink)]">nownownow.com</a>. This page changes.
        </p>
      </div>
    </NotebookPage>
  );
}
