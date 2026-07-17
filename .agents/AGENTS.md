# Premp Website Configuration

Personal website for Prem Patel (https://premp.in).

## Current State: Redesign in Progress

The site is being redesigned as a **dot-grid notebook** concept, built in Lovable
(project "Prem's Dot Notebook", id `fa818a2e-9b34-491e-9054-9eddde69e19e`,
tech stack: TanStack Start + TypeScript + Tailwind). The Hugo site below is the
**current production** site on premp.in until the redesign ships.

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
- "Open Source" spelled out (not "OSS"); "X" not "Twitter"; resume contact links as brand icons.
- Never publish: job search, location/hometown, employer dissatisfaction.

### Lovable → repo sync (reflect pattern)

Mirrors the nyomipatel/tiny-artist-studio setup:

- Lovable commits to `pr656d/prem-s-dot-notebook` `main` (source; repo created when
  Prem connects the Lovable project to GitHub — one-time UI step).
- `/reflect-premp` skill (`.agents/skills/reflect-premp/`) force-pushes
  `lovable-source/main` → `origin/notebook-preview`.
- Netlify branch deploy builds `notebook-preview--premp.netlify.app`.
- Production release = deliberate manual merge to `master` later; `master`
  stays the live Hugo site until then. Never force-push `master`.

## Tech Stack (current production)
- Hugo static site generator
- Theme: hugo-coder (submodule in `themes/hugo-coder`)
- Netlify deployment (configured in `netlify.toml`)

## Key Files & Directories
- `config.toml`: Hugo configuration (menus, social profiles, metadata)
- `content/`: Markdown files for site pages
- `themes/`: Hugo themes directory
- `netlify.toml`: Netlify build settings (runs `hugo`, publishes `public`)
- `about-me.md`: Source document containing personal/professional information used by the resume system (real client names allowed here — private doc, but repo may be public: keep location generic)
- `resume/`: Directory holding `default-resume.md`, also part of the resume system
- `.agents/`: agent-agnostic config source of truth (`AGENTS.md`, `skills/`, `mcp_config.json`); `CLAUDE.md`, `.claude/skills/*`, `.mcp.json`, `.codex/config.toml`, `.opencode/opencode.json` are symlinks/generated — edit `.agents/` and run `~/ai-config/project-setup.sh .` to regenerate

## Commands
- Build site locally: `hugo`
- Start local development server: `hugo server`
- Regenerate per-CLI configs: `~/ai-config/project-setup.sh ~/Documents/Projects/premp`
- Reflect Lovable → preview branch: `/reflect-premp`
