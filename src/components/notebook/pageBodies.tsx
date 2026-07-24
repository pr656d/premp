import { useState, type ReactNode, type FC } from "react";
import { BulletMark } from "./BulletMark";
import { Doodle } from "./Doodle";
import { SOCIALS } from "./SocialIcons";

export type PageMeta = {
  title: string;
  kicker?: string;
  tint?: "none" | "1" | "2" | "3";
  align?: "center" | "start";
};

const NOW_UPDATED = "July 2026";
const RESUME_PDF_URL = "/prem-patel-resume.pdf";
const CONTACT_EMAIL = "hello@premp.in";
const CONTACT_HANDLE = "@pr656d";

export const PAGE_META: Record<string, PageMeta> = {
  "/about": { title: "About", align: "start" },
  "/experience": { title: "Experience", tint: "1" },
  "/projects": { title: "Projects", tint: "2" },
  "/uses": { title: "Uses", tint: "3" },
  "/now": { title: "Now", kicker: `Now · ${NOW_UPDATED}`, align: "start" },
  "/resume": { title: "Resume", align: "start" },
  "/contact": { title: "Contact", align: "start" },
};

export const AboutBody: FC = () => (
  <>
    <p className="text-lg">
      I'm <strong>Prem</strong> — an enthusiastic <span className="marker-hl">explorer</span>, in tech and outside it.
    </p>
    <p className="mt-4 text-[var(--ink-muted)]">
      By profession I'm a <strong>Lead Engineer at Simform</strong>, where I lead the Android department —
      six-plus years of native Android, Kotlin as my home language, with detours into Python and,
      lately, back into data structures for the fun of it. But Android is the trade, not the whole story.
    </p>
    <p className="mt-4 text-[var(--ink-muted)]">
      What actually drives me is exploring. I run a self-hosted homelab on a cloud server: services
      behind Tailscale for private, secure networking, reverse-proxied, tunneled through Cloudflare,
      everything in Docker Compose, automations in n8n with LLM nodes wired straight into the workflows.
      I spend a lot of time figuring out what AI can genuinely do — and what it can't — by building
      my own agent orchestration setup and using it daily.
    </p>
    <p className="mt-4 text-[var(--ink-muted)]">
      Everything I own lives in Git. My machine is disposable by design: if it dies tomorrow, a
      dotfiles script rebuilds it from scratch.
    </p>
    <p className="mt-4 text-[var(--ink-muted)]">
      Off the screen: I ride a <strong>Royal Enfield Continental GT 650</strong>, drive a car I'm
      equally fond of, and maintain both myself. Same instinct, different tools.
    </p>
    <p className="mt-4 text-[var(--ink-muted)]">
      I work fully remote — the commute time goes into all of the above.
    </p>

    <div className="mt-8 flex items-center gap-3 text-[var(--red-pencil)]">
      <Doodle kind="arrow" className="h-6 w-16" />
      <span className="ink-hand text-2xl">currently focused on</span>
    </div>
    <ul className="mt-3 grid gap-x-6 gap-y-3 text-sm text-[var(--ink-muted)] sm:grid-cols-2">
      <li className="flex gap-2"><BulletMark /><span>Exploring AI capabilities and agentic workflows</span></li>
      <li className="flex gap-2"><BulletMark /><span>Self-hosted infrastructure (Tailscale, Docker, n8n)</span></li>
      <li className="flex gap-2"><BulletMark /><span>Native Android at lead level</span></li>
      <li className="flex gap-2"><BulletMark /><span>Mentoring and department leadership</span></li>
    </ul>

    <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
      <div>
        <div className="text-xs uppercase tracking-widest text-[var(--ink-faint)]">Based in</div>
        <div className="mt-1">India · working remotely</div>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-[var(--ink-faint)]">Focus</div>
        <div className="mt-1">Android · AI workflows · Self-hosting</div>
      </div>
    </div>

    <div className="relative mt-auto flex items-end justify-between pt-10">
      <svg viewBox="0 0 60 60" className="h-16 w-16 opacity-40" aria-hidden>
        <ellipse cx="30" cy="30" rx="24" ry="22" fill="none" stroke="var(--red-pencil)" strokeWidth="1.1" strokeDasharray="3 5" />
        <ellipse cx="30" cy="30" rx="18" ry="16" fill="none" stroke="var(--red-pencil)" strokeWidth="0.7" opacity="0.7" />
        <ellipse cx="34" cy="26" rx="4" ry="3" fill="var(--red-pencil)" opacity="0.25" />
      </svg>
      <div className="flex items-center gap-2 text-[var(--ink-faint)]">
        <span className="ink-hand text-sm">p.t.o. →</span>
        <Doodle kind="arrow" className="h-5 w-14 text-[var(--red-pencil)]" />
      </div>
    </div>
  </>
);

type ExperienceItem = {
  when: string;
  role: string;
  org: string;
  bullets: ReactNode[];
  highlight?: boolean;
};

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    when: "2025 — present",
    role: "Lead Engineer",
    org: "Simform",
    bullets: [
      "Department-level leadership. Run a recurring technical discussion forum where developers share new tech, project war stories, and solutions.",
      <>Manage two projects with separate teams; reviewer on several others; manage <span className="marker-hl">both Android and iOS teams</span> on one engagement.</>,
      "Own and delegate the Android project template; review the department's open source library work.",
      <>Own <span className="marker-hl">CI/CD pipelines</span>, multi-environment setup, and product-flavor releases — including a <span className="marker-hl">multi-brand white-label app</span> (several branded apps, one codebase, per-brand features).</>,
      "Interview and mentor trainees; sprint planning and agile tracking to ship without delay.",
    ],
    highlight: true,
  },
  {
    when: "Jan 2022 — Jan 2025",
    role: "Senior Software Engineer",
    org: "Simform",
    bullets: [
      <>Led development of an <span className="marker-hl">autonomous drone ground-control Android app</span>, built on a custom vendor SDK communicating with the drone over radio frequency: live telemetry, offline maps, route planning and in-flight navigation. Plan a route on the phone, deploy it, watch the drone fly it — maps were the biggest engineering lift.</>,
      <>Became <span className="marker-hl">App Lead</span> at an early-stage startup engagement while still senior: started as the second Android developer, grew to leading Android + iOS with three developers. Owned features from design collaboration and backend schema alignment through deployment. Signature contribution: designed the team communication system that fixed the startup's coordination chaos.</>,
      <>Code reviewer and architect on a unified communications platform (an internal Teams alternative): voice channels, meetings with recording, calls, chats, groups, threads. Designed the Android architecture for handling <span className="marker-hl">Jitsi and Matrix</span> — parsing the event stream into a scalable chat UI — and guided two developers through it.</>,
      <>Built the department's <span className="marker-hl">Android project template</span>: a cookiecutter-based kickstarter with database, preferences, key handling, API/Retrofit, logging and debugging wired in — zero boilerplate to start a product.</>,
    ],
  },
  {
    when: "Jun 2020 — Jan 2022",
    role: "Software Engineer",
    org: "Simform",
    bullets: [
      <>Built the Android side of a smart vending platform — an IoT retrofit turning manual vending machines into app-connected ones. Owned the <span className="marker-hl">BLE layer</span>: GATT characteristics read/write and a custom phone-to-machine communication protocol.</>,
      "Worked directly with clients end to end.",
      <>Authored and open-sourced <a href="https://github.com/SimformSolutionsPvtLtd/SSAndroidNeumorphicKit" target="_blank" rel="noreferrer noopener" className="underline decoration-[var(--link)] underline-offset-2 hover:text-[var(--link)]"><span className="marker-hl">SSNeumorphicKit</span></a>, a neumorphic UI library for Android (83 stars).</>,
      "Mentored trainees from year one in Simform's mentorship program.",
    ],
  },
];

export const ExperienceBody: FC = () => (
  <ol className="relative flex-1 flex flex-col gap-8 border-l-2 border-dashed border-[var(--rule)] pl-6 py-2">
    {EXPERIENCE_ITEMS.map((it) => (
      <li key={it.role + it.when} className="relative">
        <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-[var(--link)] bg-[var(--paper)]" />
        <div className="ink-hand text-xl text-[var(--red-pencil)]">{it.when}</div>
        <div className="mt-1 text-lg text-[var(--ink)]">
          <strong>{it.highlight ? <span className="marker-hl">{it.role}</span> : it.role}</strong>{" "}
          <span className="text-[var(--ink-muted)]">· {it.org}</span>
        </div>
        <ul className="mt-2 space-y-1.5 text-[var(--ink-muted)] text-sm">
          {it.bullets.map((b, i) => (
            <li key={i} className="flex gap-2"><BulletMark /><span>{b}</span></li>
          ))}
        </ul>
      </li>
    ))}
  </ol>
);

type Project = { title: string; body: ReactNode; tags: string[]; href?: string };

const FEATURED_PROJECTS: Project[] = [
  {
    title: "Smart Vending Platform",
    body: <>BLE/IoT Android app converting <span className="marker-hl">manual vending machines into app-connected ones</span>. Custom BLE protocol, white-label multi-brand builds.</>,
    tags: ["BLE GATT", "IoT", "White-label flavors"],
  },
  {
    title: "Autonomous Drone Ground Control",
    body: <>Android ground-control app over a custom RF SDK: <span className="marker-hl">live telemetry, offline maps</span>, route planning and in-flight navigation.</>,
    tags: ["Offline Maps", "RF Telemetry", "Route Navigation"],
  },
  {
    title: "SSNeumorphicKit",
    body: <>Open-source neumorphic UI kit for Android — soft shadows done properly, without murdering the CPU. <span className="marker-hl">83 stars</span> on GitHub.</>,
    tags: ["Kotlin Library", "Custom Views", "Open Source"],
    href: "https://github.com/SimformSolutionsPvtLtd/SSAndroidNeumorphicKit",
  },
  {
    title: "Unified Communications Platform",
    body: <>Jitsi + Matrix event architecture on Android: channels, calls, threads. Parsed the event stream into a <span className="marker-hl">scalable chat UI</span>.</>,
    tags: ["Jitsi", "Matrix", "Event-driven Architecture"],
  },
  {
    title: "Homelab",
    body: <>Self-hosted services on a cloud VPS: Tailscale, reverse proxy, Cloudflare Tunnels, Docker Compose, n8n with LLM-powered automations, <span className="marker-hl">custom AI agent orchestration</span>.</>,
    tags: ["Tailscale", "Docker Compose", "n8n + LLM", "Hetzner"],
    href: "https://dashboard.premp.in",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="border-b border-dashed border-[var(--rule)] py-4 last:border-b-0">
      <h3 className="ink-hand text-[clamp(1.4rem,2.8vh,2rem)] leading-tight text-[var(--ink)]">
        {p.href ? (
          <a href={p.href} target="_blank" rel="noreferrer noopener" className="underline decoration-[var(--link)] decoration-2 underline-offset-4 hover:text-[var(--link)]">{p.title}</a>
        ) : p.title}
      </h3>
      <p className="mt-1.5 text-sm text-[var(--ink-muted)] leading-relaxed">{p.body}</p>
      <div className="mt-1.5 text-xs text-[var(--ink-faint)]">
        {p.tags.map((t, i) => (
          <span key={t}>
            <span className="pen-underline">{t}</span>
            {i < p.tags.length - 1 && <span className="mx-1.5">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

export const ProjectsBody: FC = () => (
  <>
    <p className="text-[var(--ink-muted)]">Five worth writing down.</p>
    <div className="mt-4 flex-1 min-h-0">
      {FEATURED_PROJECTS.map((p) => <ProjectCard key={p.title} p={p} />)}
    </div>
    <div className="mt-4 text-right">
      <span className="ink-hand text-lg text-[var(--red-pencil)]">
        more scribbles →{" "}
        <a href="https://github.com/pr656d" target="_blank" rel="noreferrer noopener" className="underline decoration-[var(--red-pencil)] underline-offset-4 hover:text-[var(--link)] hover:decoration-[var(--link)]">github.com/pr656d</a>
      </span>
    </div>
  </>
);

function UsesSection({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h2 className="ink-hand text-2xl text-[var(--ink)]">{title}</h2>
      <dl className="mt-2 divide-y divide-dashed divide-[var(--rule)]">
        {items.map(([k, v]) => (
          <div key={k} className="flex gap-3 py-1.5 text-sm">
            <dt className="w-24 shrink-0 text-[var(--red-pencil)] text-xs uppercase tracking-wider pt-0.5">{k}</dt>
            <dd className="text-[var(--ink)] flex-1">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export const UsesBody: FC = () => (
  <>
    <p className="text-[var(--ink-muted)]">Desk, tools, AI stack, and the homelab.</p>
    <div className="mt-4 flex-1 min-h-0 grid gap-x-8 gap-y-6 md:grid-cols-2 content-start">
      <UsesSection title="Desk" items={[
        ["Machine", "M4 Pro Mac Mini"],
        ["Display", "BenQ MA320U"],
        ["Keyboard", "Logitech MX Mechanical Mini for Mac"],
        ["Mouse", "Logitech MX Master for Mac"],
      ]} />
      <UsesSection title="Pocket" items={[
        ["Phone", "iPhone 14 Pro"],
        ["Test device", "Always a real Android on hand"],
      ]} />
      <UsesSection title="Editor" items={[
        ["Primary", "Neovim (switched from VS Code — still installed, never opened)"],
        ["Android", "Android Studio"],
      ]} />
      <UsesSection title="AI" items={[
        ["Primary", "Claude Code"],
        ["Also", "Antigravity / Gemini CLI · OpenAI Codex CLI · opencode"],
        ["Local", "MLX for local LLMs"],
      ]} />
      <UsesSection title="Android" items={[
        ["Languages", "Kotlin"],
        ["Stack", "Compose · Coroutines · Room · BLE"],
      ]} />
      <UsesSection title="Homelab" items={[
        ["Compute", "Hetzner VPS"],
        ["Networking", "Tailscale · reverse proxy · Cloudflare Tunnels"],
        ["Runtime", "Docker Compose"],
        ["Automation", "n8n with LLM nodes"],
      ]} />
      <UsesSection title="Version control" items={[
        ["Git", "Everything git-tracked"],
        ["Machine", "Disposable by design — dotfiles rebuild everything"],
      ]} />
      <UsesSection title="Small joys" items={[
        ["Notes", "Plain markdown files"],
        ["Ride", "Royal Enfield Continental GT 650 · a car to drive around"],
        ["Music", "YouTube Music"],
      ]} />
    </div>
  </>
);

export const NowBody: FC = () => (
  <>
    <div className="flex items-center gap-3">
      <span className="ink-hand text-2xl text-[var(--red-pencil)]">— {NOW_UPDATED}</span>
      <Doodle kind="squiggle" className="h-3 w-16 text-[var(--red-pencil)]" />
    </div>
    <p className="mt-6 text-lg text-[var(--ink)]">Mostly two things: <span className="marker-hl">my daughter</span>, and a question.</p>
    <p className="mt-4 text-[var(--ink-muted)]">I'm dad to a 16-month-old girl, and she gets the best of my time — has since before she was born.</p>
    <p className="mt-4 text-[var(--ink-muted)]">The question: what can AI actually <em>do</em>, and what can't it? Not the marketing answer — the real one. I've built my own agent orchestration setup (a crew of CLI agents working in parallel worktrees, in my style, my way) and I use it every day to find the edges.</p>
    <p className="mt-4 text-[var(--ink-muted)]">My take so far: AI is a tool, like compilers were. Nobody writes machine code anymore, but it's still humans who built the languages and decide what to compile. AI removes manual work; it doesn't remove the need for the human who knows what problem is being solved. That part isn't going anywhere.</p>
    <p className="mt-4 text-[var(--ink-muted)]">On the workbench: redesigning this very website — the dot-grid notebook you're reading right now — and building an agent-agnostic orchestration setup: a crew of AI agents (Claude Code, Codex, Gemini, opencode) sharing one configuration of instructions, skills, and tools, dispatched in parallel and working my way.</p>
    <p className="mt-4 text-[var(--ink-muted)]">Also: relearning data structures properly, and riding the GT 650 when the weather agrees.</p>
    <div className="mt-10 flex items-center gap-3">
      <Doodle kind="star" className="h-5 w-5 text-[var(--red-pencil)]" />
      <p className="text-sm text-[var(--ink-faint)]">
        Inspired by <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="italic underline decoration-dotted underline-offset-2 hover:text-[var(--ink)]">nownownow.com</a>. This page changes.
      </p>
    </div>
  </>
);

export const ResumeBody: FC = () => (
  <>
    <div className="flex flex-wrap items-center gap-3 gap-y-2 text-[var(--red-pencil)]">
      <span className="ink-hand text-2xl">grab the printable copy</span>
      <Doodle kind="arrow" className="h-6 w-16" />
      <a href={RESUME_PDF_URL} download className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[var(--link)] bg-[var(--link)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[var(--link)]">
        ↓ Download PDF
      </a>
    </div>

    <div className="mt-8 mx-auto w-full max-w-[85%] flex-1 flex items-center">
      <div className="w-full rounded-sm bg-white p-6 md:p-8 font-sans text-neutral-900 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)] ring-1 ring-neutral-200" style={{ transform: "rotate(-0.8deg)" }}>
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
            <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label} title={label} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rule)] text-[var(--ink-muted)] transition-colors hover:border-[var(--link)] hover:text-[var(--link)]">
              <Icon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export const ContactBody: FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const [copied, setCopied] = useState(false);
  const copyHandle = async () => {
    if (!interactive) return;
    try {
      await navigator.clipboard.writeText(CONTACT_HANDLE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <>
      <p className="text-lg text-[var(--ink-muted)]">Send a letter. I read them all.</p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href={`mailto:${CONTACT_EMAIL}`} className="ink-hand text-[clamp(1.75rem,3.5vh,2.5rem)] text-[var(--ink)] underline decoration-[var(--link)] decoration-2 underline-offset-4">
          {CONTACT_EMAIL}
        </a>
      </div>
      <div className="mt-12">
        <div className="flex items-center gap-2 text-[var(--red-pencil)]">
          <Doodle kind="arrow" className="h-5 w-14" />
          <span className="ink-hand text-xl">One handle everywhere:</span>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="ink-hand text-[clamp(2rem,5vh,3.5rem)] text-[var(--link)]">{CONTACT_HANDLE}</span>
          <button onClick={copyHandle} tabIndex={interactive ? undefined : -1} className="rounded-full border border-[var(--rule)] px-3 py-1 text-xs text-[var(--ink-muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]">
            {copied ? "copied ✓" : "copy"}
          </button>
        </div>
        <ul className="mt-6 flex flex-wrap items-center gap-4">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label} title={label} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rule)] text-[var(--ink-muted)] transition-colors hover:border-[var(--link)] hover:text-[var(--link)]">
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
    </>
  );
};

export const PAGE_BODIES: Record<string, FC> = {
  "/about": AboutBody,
  "/experience": ExperienceBody,
  "/projects": ProjectsBody,
  "/uses": UsesBody,
  "/now": NowBody,
  "/resume": ResumeBody,
  "/contact": ContactBody as FC,
};
