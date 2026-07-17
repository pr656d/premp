# premp.in

[![Netlify Status](https://api.netlify.com/api/v1/badges/d4c757a7-e743-4e63-8123-f06faceb3dde/deploy-status)](https://app.netlify.com/sites/premp/deploys)

Personal website of Prem Patel — a dot-grid notebook you can open and flip through.

**Live:** [premp.in](https://premp.in)

## Stack

- [TanStack Start](https://tanstack.com/start) + TypeScript + Tailwind CSS
- Bun for install/build, Nitro (`NITRO_PRESET=netlify`)
- Authored in [Lovable](https://lovable.dev), deployed on Netlify

## How releases work

1. Design/content changes happen in the Lovable project, which commits to
   [`pr656d/prem-s-dot-notebook`](https://github.com/pr656d/prem-s-dot-notebook) (`main`).
2. A reflect script force-pushes that `main` into this repo's `notebook-preview`
   branch — Netlify builds a branch preview at `notebook-preview--premp.netlify.app`.
3. When the preview looks right, `notebook-preview` is merged into `master`,
   which Netlify deploys to production (premp.in).

`master` is never force-pushed.

## Local development

```bash
bun install
bun run dev
```

## Environment Variables

Configure these in Netlify (and `.env` or `.env.local` for local development):

- `VITE_POSTHOG_KEY` - PostHog Project API key (leave empty to disable analytics tracking).
- `VITE_POSTHOG_HOST` - (Optional) PostHog API host endpoint (defaults to `https://us.i.posthog.com`).

## Repo extras

- `resume/` — resume sources; `resume/resume-web.html` renders to the site's
  downloadable PDF via headless Chrome
- `about-me.md` — fact source for the resume system
- `docs/` — redesign brief and planning docs
- `.agents/` — agent-agnostic AI tooling config (instructions, skills, MCP);
  `CLAUDE.md` and per-CLI configs are symlinked/generated from it

The previous Hugo site lives in git history (pre-2026-07-17).
