import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { Doodle } from "../components/notebook/Doodle";

const UPDATED = "July 2026";

export const Route = createFileRoute("/now")({
  head: () => ({
    meta: [
      { title: "Now — Prem Patel" },
      {
        name: "description",
        content: `What Prem Patel is focused on now: family, practical AI orchestration, open-source work on open-connector, and building QOTA and agy-swap. Updated ${UPDATED}.`,
      },
      { property: "og:url", content: "https://premp.in/now" },
      { property: "og:title", content: "Now — Prem Patel" },
      {
        property: "og:description",
        content: `Family, practical AI orchestration, open-source work on open-connector, and building QOTA and agy-swap. Updated ${UPDATED}.`,
      },
      { name: "twitter:title", content: "Now — Prem Patel" },
      {
        name: "twitter:description",
        content: `Family, practical AI orchestration, open-source work on open-connector, and building QOTA and agy-swap. Updated ${UPDATED}.`,
      },
    ],
    links: [{ rel: "canonical", href: "https://premp.in/now" }],
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
        I'm dad to a 16-month-old girl, and she gets the best of my time — has since before she was
        born.
      </p>

      <p className="mt-4 text-[var(--ink-muted)]">
        The question: what can AI actually <em>do</em>, and what can't it? Not the marketing answer
        — the answer you get after trusting it with real work, checking the result, then tightening
        the system when it gets something wrong.
      </p>

      <p className="mt-4 text-[var(--ink-muted)]">
        AI has given me something more useful than a reason to talk about AI: room to build things
        that had been sitting in my head. I shipped <span className="marker-hl">Podium</span>, my
        local, AI-agnostic orchestration system. Linear holds the work; Claude Code, Codex,
        Antigravity, and opencode take isolated tasks; git worktrees, written policy, tests, and
        human review keep the output honest.
      </p>

      <p className="mt-4 text-[var(--ink-muted)]">
        That workshop produced{" "}
        <a
          href="https://github.com/pr656d/qota"
          target="_blank"
          rel="noopener noreferrer"
          className="pen-underline hover:text-[var(--link)]"
        >
          QOTA
        </a>
        , an open-source Rust CLI and terminal dashboard for quota telemetry across providers and
        accounts, now published on crates.io; and{" "}
        <a
          href="https://github.com/pr656d/agy-swap"
          target="_blank"
          rel="noopener noreferrer"
          className="pen-underline hover:text-[var(--link)]"
        >
          agy-swap
        </a>
        , a Python CLI for switching Antigravity accounts and watching their quota.
      </p>

      <p className="mt-4 text-[var(--ink-muted)]">
        It also gave me enough leverage to contribute upstream, not only build around other people's
        tools. I'm now an active open-source contributor, currently contributing to{" "}
        <a
          href="https://github.com/oomol-lab/open-connector"
          target="_blank"
          rel="noopener noreferrer"
          className="pen-underline hover:text-[var(--link)]"
        >
          open-connector
        </a>
        . Recent work:{" "}
        <a
          href="https://github.com/oomol-lab/open-connector/issues/172"
          target="_blank"
          rel="noopener noreferrer"
          className="pen-underline hover:text-[var(--link)]"
        >
          diagnosing and fixing its dashboard catalog bottleneck
        </a>
        , cutting the provider payload on the wire by about 50× while removing repeated catalog
        fetches.
      </p>

      <p className="mt-4 text-[var(--ink-muted)]">
        My take so far: AI compresses the distance between curiosity and a working tool. It does not
        choose the problem, set the constraints, make the architecture trade-offs, or care whether
        the result survives contact with reality. Those parts still belong to the engineer. I like
        that balance — more room to explore, same responsibility for what ships.
      </p>

      <p className="mt-4 text-[var(--ink-muted)]">
        By day I'm a Lead Engineer focused on Android at Simform. Off the clock: refining these
        tools, relearning data structures properly, and riding the GT 650 when the weather agrees.
      </p>

      <div className="mt-10 flex items-center gap-3">
        <Doodle kind="star" className="h-5 w-5 text-[var(--red-pencil)]" />
        <p className="text-sm text-[var(--ink-faint)]">
          Inspired by{" "}
          <a
            href="https://nownownow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="italic underline decoration-dotted underline-offset-2 hover:text-[var(--ink)]"
          >
            nownownow.com
          </a>
          . This page changes.
        </p>
      </div>
    </NotebookPage>
  );
}
