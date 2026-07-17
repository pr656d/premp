# Prem Patel Portfolio — Dot-Grid Notebook

An interactive, calm, paper-and-ink personal site. Landing is a closed notebook; opening it reveals an index that routes to individual notebook-page sections.

## Design System (`src/styles.css`)

- Fonts loaded via `<link>` in `__root.tsx`: **Inter** (body) + **Caveat** (handwritten accent).
- Tokens (light = warm cream paper, dark = charcoal paper):
  - `--paper`, `--paper-tint` (per-section subtle 3–5% tint)
  - `--ink` (primary text), `--ink-muted`, `--ink-faint`
  - `--dot` (grid dot color), `--dot-strong` (near-cursor)
  - `--accent` (a single muted ink accent, e.g. soft indigo/teal)
  - `--rule` (margin rule line)
- `@utility paper-grid` renders the dotted background via `radial-gradient` on a 24px cell.
- `@utility ink-hand` sets Caveat for headings/margin notes.
- Respect `prefers-reduced-motion` in all keyframes.
- Manual theme toggle: `.dark` class on `<html>`, initialized from `localStorage` inside a client `useEffect` (avoids SSR mismatch) with system preference fallback.

## Routes (file-based)

```text
src/routes/
  __root.tsx         # font links, theme init, HeadContent
  index.tsx          # closed cover → open → redirect to /index-page
  index-page.tsx     # the handwritten table of contents
  about.tsx
  experience.tsx
  projects.tsx
  uses.tsx
  now.tsx
  resume.tsx         # embedded PDF, un-themed white sheet
  contact.tsx
```

Each content route uses a shared `NotebookPage` layout: margin rule, page header ("About · page 01"), Caveat title, prev/next page-flip arrows, back-to-index link. Keyboard arrow keys + touch swipe navigate through the ordered list of sections.

404 → `notFoundComponent` in `__root.tsx` styled as torn page (jagged SVG edge).

## Landing cover → open animation

`index.tsx` renders a large rounded "cover" card with border, elastic band SVG, "Prem Patel" in Caveat, subtitle, and a small ink mark. Click/tap triggers a CSS transform sequence (perspective + rotateY on the cover, fade-in of index page underneath) around 500ms, then `navigate({ to: "/index-page" })`. Reduced-motion users skip straight to navigation.

## Shared components (`src/components/notebook/`)

- `PaperCanvas.tsx` — full-viewport dotted background + cursor-follow radial mask overlay that faintly darkens dots (pointer-move updates two CSS vars; disabled on touch + reduced motion).
- `NotebookPage.tsx` — page frame with margin rule and page number.
- `PageNav.tsx` — prev/next arrows + keyboard/swipe hook.
- `ThemeToggle.tsx` — sun/moon toggle (small, top-right).
- `Doodle.tsx` — tiny inline SVG doodles (arrow, star, underline squiggle).
- `TapedCard.tsx` — project card with rotated washi-tape SVG corners.

## Content

- **About**: Ahmedabad-based Lead Android engineer; Kotlin/Java, BLE, offline maps/routing, self-hosted infra.
- **Experience** timeline: Simform Lead (2025–present) · Senior SWE (2022–2025, ShieldAI Nova2) · SWE (2020–2022, GlobalConnect BLE + SSNeumorphicKit).
- **Projects** (taped cards + tech tags): ShieldAI Nova2, SSNeumorphicKit, GlobalConnect BLE Vending, CattleNotes, DevOps Homelab, AI Agentic Workflows.
- **Uses**: hardware, dev tools, self-hosted stack (Hetzner, Docker, Cloudflare Tunnel, n8n, Firefly III).
- **Now** (dated handwritten note).
- **Resume**: `<iframe src="/resume-placeholder.pdf">` + Download button. Placeholder PDF written to `public/`.
- **Contact**: `hello@premp.in` with copy-to-clipboard button, GitHub/LinkedIn/Mastodon/Twitter all `@pr656d`.

## SEO

- Route-specific `head()` on each page with unique title/description + og:title/og:description.
- `sitemap.xml` route + `robots.txt`.

## Non-goals / constraints

- No glassmorphism, no neon, no heavy motion.
- Single accent color, used sparingly.
- Fully responsive; cover opens on tap; PDF viewer falls back to Download link on small screens.
- Placeholder resume PDF only; user can swap file later.
