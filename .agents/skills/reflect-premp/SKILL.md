---
name: reflect-premp
description: Reflect Lovable's main branch from pr656d/premp-lovable into the notebook-preview branch of pr656d/premp for Netlify branch deploy
---

# reflect-premp

One-command reflection of Lovable's work into the deploy branch, force push enabled. Mirrors the `reflect-tas` pattern from nyomipatel/tiny-artist-studio.

Reflects: source `main` -> destination `notebook-preview`
- From: `git@github.com:pr656d/premp-lovable.git`, branch `main` — where Lovable ("Prem's Dot Notebook" project) commits.
- To: `git@github.com:pr656d/premp.git`, branch `notebook-preview` — the branch Netlify's branch deploy (`notebook-preview--premp.netlify.app`) builds from.

`pr656d/premp`'s own `master` branch is the live production Hugo site behind premp.in — this skill never touches it. Production cutover is a deliberate, manual merge later.

## Prerequisites (one-time, flag if missing)

1. Lovable project "Prem's Dot Notebook" connected to GitHub as `pr656d/premp-lovable` (Lovable editor → GitHub → Connect; done by Prem in the Lovable UI).
2. Remote configured in this repo:
   ```bash
   git remote add lovable-source git@github.com:pr656d/premp-lovable.git
   ```
3. Netlify branch deploys enabled for `notebook-preview` on the premp site.

## Usage

```bash
/reflect-premp
```

No arguments — all parameters pre-configured.

## What it does

```bash
git fetch lovable-source main
git push origin lovable-source/main:notebook-preview --force
```

- Fetches `main` from the Lovable source repo
- Force-pushes it to `notebook-preview` on the destination repo
- Shows a summary (source SHA, destination branch, Netlify preview URL) on completion
