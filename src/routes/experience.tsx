import { createFileRoute } from "@tanstack/react-router";
import { NotebookPage } from "../components/notebook/NotebookPage";
import { BulletMark } from "../components/notebook/BulletMark";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Prem Patel" },
      { name: "description", content: "Prem Patel's engineering timeline at Simform — native Android, BLE, drone ground control, and department leadership." },
      { property: "og:title", content: "Experience — Prem Patel" },
      { property: "og:description", content: "Engineering timeline at Simform: Android, BLE, drone ground control." },
    ],
  }),
  component: Experience,
});

import type { ReactNode } from "react";

type Item = {
  when: string;
  role: string;
  org: string;
  bullets: ReactNode[];
  highlight?: boolean;
};

const ITEMS: Item[] = [
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

function Experience() {
  return (
    <NotebookPage currentPath="/experience" title="Experience" tint="1">
      <ol className="relative flex-1 flex flex-col gap-8 border-l-2 border-dashed border-[var(--rule)] pl-6 py-2">
        {ITEMS.map((it) => (
          <li key={it.role + it.when} className="relative">
            <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-[var(--link)] bg-[var(--paper)]" />
            <div className="ink-hand text-xl text-[var(--red-pencil)]">{it.when}</div>
            <div className="mt-1 text-lg text-[var(--ink)]">
              <strong>
                {it.highlight ? <span className="marker-hl">{it.role}</span> : it.role}
              </strong>{" "}
              <span className="text-[var(--ink-muted)]">· {it.org}</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[var(--ink-muted)] text-sm">
              {it.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <BulletMark />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </NotebookPage>
  );
}
