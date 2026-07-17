# Premp Website Configuration

Personal website for Prem Patel (https://premp.in).

## Current State: Notebook Site LIVE (since 2026-07-17)

premp.in serves the **dot-grid notebook** app: TanStack Start + TypeScript +
Tailwind, authored in Lovable (project "Prem's Dot Notebook", id
`fa818a2e-9b34-491e-9054-9eddde69e19e`). The old Hugo site was removed from
`master` in the go-live merge (`505f843`); its history remains in git.

- Design vision + track state: `~/.plans/2026-07-17-personal-website-plan.md`
- Redesign brief (content inventory, deploy plan): `docs/website-redesign-brief.md`
- Copywriting rules + approved copy drafts: `~/.plans/2026-07-17-premp-copywriting-handoff.md`

### Copy rules (hard requirements, from Prem)

- No job title on the cover — the site is about Prem the person, not a designation.
- `hello@premp.in` lives top-right next to the brand, not in the cover footer.
- No city anywhere ("India · remote" at most).
- Client project names are anonymized: use "Smart Vending Platform",
  "Autonomous Drone Ground Control", "an early-stage startup",
  "Unified Communications Platform". Simform and SSNeumorphicKit may be named.
- "Open Source" spelled out (not "OSS"); "X" not "Twitter"; contact links as brand
  icons (GitHub, LinkedIn, Mastodon, X, LeetCode — all @pr656d).
- Never publish: job search, location/hometown, employer dissatisfaction, phone number.

### Release flow (Lovable → preview → production)

Mirrors the nyomipatel/tiny-artist-studio setup:

1. Content/design changes happen in Lovable ("Prem's Dot Notebook"), which
   commits to `pr656d/prem-s-dot-notebook` `main` (remote `lovable-source`).
2. `/reflect-premp` skill (`.agents/skills/reflect-premp/`) force-pushes
   `lovable-source/main` → `origin/notebook-preview`; Netlify branch deploy
   builds `notebook-preview--premp.netlify.app` for review.
3. Production release = deliberate merge of `notebook-preview` into `master`
   (now shares history after the go-live merge). Never force-push `master`.

### Resume system

- `resume/resume-web.html` — public anonymized resume source; render with
  headless Chrome (`--headless --no-pdf-header-footer --print-to-pdf=prem-patel-resume.pdf`),
  commit the PDF to `prem-s-dot-notebook` `public/`, then `/reflect-premp`.
- `resume/default-resume.md` + `about-me.md` — private tailoring base (real
  client names allowed, but repo may be public: keep location generic, no phone).
- `resume-tailor` skill (`.agents/skills/resume-tailor/`) for JD-specific variants.

## Tech Stack (production)
- TanStack Start + TypeScript + Tailwind (Lovable-authored)
- Bun (`bun.lock`), Nitro with `NITRO_PRESET=netlify`
- Netlify deployment (`netlify.toml`: `bun run build`, publish `dist`)

## Key Files & Directories
- `src/routes/` — one file per notebook page (index = cover, about, experience, projects, uses, now, resume, contact)
- `src/components/notebook/` — notebook UI (NotebookPage, SocialIcons, Doodle, …)
- `public/prem-patel-resume.pdf` — downloadable resume (see Resume system above)
- `AGENTS.md` (repo root) — Lovable's own stack instructions for the app code
- `about-me.md`, `resume/` — resume system sources
- `.agents/` — agent-agnostic config source of truth (`AGENTS.md`, `skills/`, `mcp_config.json`); `CLAUDE.md`, `.claude/skills/*`, `.mcp.json`, `.codex/config.toml`, `.opencode/opencode.json` are symlinks/generated — edit `.agents/` and run `~/ai-config/project-setup.sh .` to regenerate

## Commands
- Local dev: `bun install && bun run dev`
- Build: `bun run build`
- Regenerate per-CLI configs: `~/ai-config/project-setup.sh ~/Documents/Projects/premp`
- Reflect Lovable → preview branch: `/reflect-premp`
