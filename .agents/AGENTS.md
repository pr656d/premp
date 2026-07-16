# Premp Website Configuration

Personal website for Prem Patel (https://premp.in).

## Tech Stack
- Hugo static site generator
- Theme: hugo-coder (submodule in `themes/hugo-coder`)
- Netlify deployment (configured in `netlify.toml`)

## Key Files & Directories
- `config.toml`: Hugo configuration (menus, social profiles, metadata)
- `content/`: Markdown files for site pages
- `themes/`: Hugo themes directory
- `netlify.toml`: Netlify build settings (runs `hugo`, publishes `public`)
- `about-me.md`: Source document containing personal/professional information used by the resume system
- `resume/`: Directory holding `default-resume.md`, also part of the resume system

## Commands
- Build site locally: `hugo`
- Start local development server: `hugo server`
