# Website Redesign Brief

## 1. Content Inventory

### Hero / Introduction
- **Name**: Prem Patel
- **Title**: Lead Software Engineer | Android & DevOps Architect
- **Tagline/Intro**: Specialized in native Android engineering (Kotlin/Java), BLE integrations, offline spatial mapping/routing, and self-hosted automation infrastructure.
- **Location**: Ahmedabad, India
- **Social links**:
  - Email: hello@premp.in
  - GitHub: [@pr656d](https://github.com/pr656d)
  - LinkedIn: [@pr656d](https://www.linkedin.com/in/pr656d/)
  - Mastodon: [@pr656d](https://mastodon.social/@pr656d)
  - Twitter: [@pr656d](https://twitter.com/pr656d/)

### About Me
- **Core Focus**: Designing native mobile applications, robust system architectures, CI/CD automation, and agentic workflows.
- **Interests**: Software architecture, homelabbing, self-hosting, DevOps, and trying new developer tooling.
- **Certifications**:
  - Google Certified Associate Android Developer (Credential ID: 33ae4f6b-263d-4e37-99fd-67ea77980443)
  - AWS Certified Solutions Architect – Associate (In Progress)

### Experience Timeline
- **Simform (January 2025 – Present)** – *Lead Engineer*
  - Direct technical architecture, review code, set quality standards.
  - Mentor junior/shadow developers, optimize team velocity.
  - Oversee ongoing integration of AI-assisted coding frameworks (Claude Code, MCP, custom LLM agents) to boost developer efficiency.
- **Simform (January 2022 – January 2025)** – *Senior Software Engineer*
  - Led a team of 3 developers for ShieldAI's Nova2 autonomous drone Android control app.
  - Engineered offline/online mapping, ATAK integrations, route planning, and low-latency alerts.
  - Maintained the department-wide standard Android project bootstrap template.
- **Simform (June 2020 – January 2022)** – *Software Engineer*
  - Developed touchless commercial vending interaction features via BLE for GlobalConnect.
  - Authored and open-sourced SSNeumorphicKit (Kotlin neumorphic UI library).
  - Migrated legacy Objective-C iOS codebase (DingStinger) to modern native Android (MVVM).
  - Maintained cookiecutter-based Android project skeleton bootstrap scripts.
- **Freelance (January 2020)** – *CattleNotes*
  - Architected and built CattleNotes Android app from scratch (Kotlin, Room DB cache, repository pattern).
- **Freelance (July 2017 – 2019)** – *Unseenarchitects Website*
  - Designed and deployed static responsive HTML/CSS website.
- **Parul University (2016 – 2020)**
  - B.Tech in Computer Science & Engineering.

### Projects Showcase
- **ShieldAI Nova2 Drone Control App**: Native Android app integrating Mapbox/Google Maps offline tiles, Android Tactical Assault Kit (ATAK), complex routing, and telemetry alerts.
- **SSNeumorphicKit**: Kotlin library for implementing neumorphic UI components on native Android.
- **GlobalConnect BLE Vending**: Real-time BLE interface making commercial vending machines touchless.
- **CattleNotes**: Offline-first agriculture logging app built using native Kotlin and Clean Architecture.
- **DevOps & Self-Hosting**: Personal server deployments on Hetzner/Docker managed via Cloudflare. Hosting postgres, n8n, Firefly III. Custom CI/CD setups on GitHub Actions/GitLab CI.
- **AI Agentic Workflows**: Custom developer tooling integrations using Claude Code, Model Context Protocol (MCP), and customized LLM pipelines.

---

## 2. Lovable Prompting Design Brief

### Prompt Instructions (Copy-Paste Ready)

```text
Create a modern, high-performance developer portfolio website for Prem Patel, a Lead Android & DevOps Engineer. 

Aesthetic & Theme:
- Dark-mode primary design using deep dark grays/slates (#0d1117, #161b22) with a vibrant accent color glow (e.g., terminal green, cyan, or high-contrast purple).
- Developer-portfolio/system-architect tone: clean typography (Inter/Monospace mix), glassmorphic content cards, and subtle grid lines that reflect a system engineering aesthetic.
- Subtle interactive details: hover transitions, glow states on card outlines, copy-to-clipboard actions on contact details, and tech tag filters.

Layout Structure:
- Single-page minimal layout with sticky sidebar/floating navigation.
- Hero Section: Large minimalist typography showing "Prem Patel" with active subtitle cycling ("Lead Android Engineer", "DevOps & Self-Hosting Architect"), quick social icon links, and a primary "Get in touch" call to action.
- About/Skills Section: Split layout showing a professional profile and a categorized interactive skill grid (Android/Kotlin/BLE vs DevOps/Cloud/AI-Agentic tools).
- Experience Section: Vertical timeline showcasing senior/lead software engineering milestones, highlighting Simform, ShieldAI, and BLE vending. Use interactive expand/collapse toggles for detailed bullet points.
- Projects Grid: Visual cards representing projects (ShieldAI Nova2, SSNeumorphicKit, Homelabbing, BLE vending). Show tech stack tags for each card and external link triggers. Include copyable code snippet box to showcase a setup/config file.
- Contact Footer: Prominent, minimal contact section. Clear display of hello@premp.in with a copy button, and a clean contact form with validation.

Technical constraints:
- Built for static site deployment (fast loading, fully responsive on mobile).
- Strict semantic HTML tags for SEO, proper meta description and Open Graph tags ready.
- No heavy runtime JS frameworks or tracking scripts unless necessary. High-fidelity vanilla styling.
```

---

## 3. Mirroring & Netlify Deployment Plan

Replicating the `nyomipatel` codebase pattern to handle Lovable development, staging builds, and production releases.

### Git Repositories Setup
- **Lovable Workspace Repo (Source)**: `git@github.com:pr656d/premp-lovable.git` (where Lovable writes code and commits to `main`).
- **Primary GitHub Repo (Destination/Mirror)**: `git@github.com:pr656d/premp.git` (this repository).

### Mirroring & Branch Config
1. **Staging/Preview Branch**: Define a branch named `lovable-preview` in the primary repo.
2. **Mirror Command Setup**:
   Add a Git remote point for the Lovable codebase to fetch and push directly:
   ```bash
   git remote add lovable-source git@github.com:pr656d/premp-lovable.git
   ```
3. **Staging Sync/Reflection Script**:
   To reflect changes from Lovable workspace to staging preview:
   ```bash
   git fetch lovable-source main
   git push origin lovable-source/main:lovable-preview --force
   ```
   *(This can be encapsulated in a local script/alias `/reflect-lovable` similar to `reflect-tas`)*

### Netlify Environment Settings
1. **Netlify Project Config**:
   - Link Netlify project to the primary GitHub repo: `pr656d/premp`.
   - Set build settings:
     - Build command: `npm run build` (or framework equivalents).
     - Publish directory: `dist` / `public` (based on framework).
2. **Branch Deploys**:
   - Enable branch deployments in Netlify settings.
   - Specify `lovable-preview` as a deploy branch. Netlify will generate a preview URL: `lovable-preview--premp.netlify.app`.

### Release Workflow
1. Make changes in Lovable workspace (saving and committing on Lovable `main`).
2. Run sync script/command to pull Lovable's `main` and force-push to primary repo's `lovable-preview` branch.
3. Review staging preview build at `lovable-preview--premp.netlify.app`.
4. Merge `lovable-preview` into the primary repo's `main` branch to release changes to production (`premp.in`).
5. **DNS Cutover (Gatekeeper check)**: Update DNS settings at the registrar level pointing to the Netlify production alias only when preview testing is completely verified.
