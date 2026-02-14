# CLAUDE.md — Roel Boutique B&B

## Project Overview

Roel Boutique B&B — a heritage boutique bed & breakfast website for a property in Cospicua, Three Cities, Malta. Static HTML/CSS site with Cloudbeds Booking Engine Plus integration.

## Tech Stack

- **Website**: Static HTML/CSS (The Cappa template by DuruThemes)
- **Framework**: Bootstrap 5, jQuery 3.7.1
- **Booking**: Cloudbeds Booking Engine Plus (Immersive Experience 2.0 web components)
- **Property code**: `egP6Av`
- **Hosting (dev)**: GitHub Pages — https://epicgrowth.github.io/roelboutique/
- **Hosting (prod)**: Cloudflare Pages (planned)
- **Runtime**: Bun / Node.js
- **Language**: TypeScript (for any build tooling)

## Project Structure

```
roelboutique/
├── CLAUDE.md
├── CLOUDBEDS_BOOKING_ENGINE_INTEGRATION.md   # Cloudbeds embed guide
├── index.html                                # Landing page linking both variants
├── site-boutique/                            # Variant A: boutique-hotel template
│   ├── index.html                            # Customized with Roel content
│   ├── css/  js/  img/  fonts/               # Template assets
│   └── mail.php
├── site-demo2/                               # Variant B: demo2-dark template
│   ├── index.html                            # Customized with Roel content
│   ├── css/  js/  img/  fonts/               # Template assets (CSS recolored)
│   └── mail.php
├── roel-documentation/                       # Brand & strategy docs
│   ├── Roel_Brand_Guidelines.md              # Colors, fonts, voice, logo, photography
│   ├── Roel_Website_Sitemap_Content_Brief.md # Sitemap, page specs, template mapping
│   ├── Roel_Website_Content.md               # Ready-to-use page copy
│   ├── Cloudbeds_Strategy.md                 # PMS/channel/payment/ops strategy
│   └── Roel-Research.pdf                     # Market research data
├── roel-template/                            # Original HTML template variants (22 themes)
│   ├── boutique-hotel/                       # Source for site-boutique/
│   └── demo2-dark/                           # Source for site-demo2/
└── roel-template-instructions/               # Template documentation & usage guide
```

## Live Preview (GitHub Pages)

- **Comparison page**: https://epicgrowth.github.io/roelboutique/
- **Boutique variant**: https://epicgrowth.github.io/roelboutique/site-boutique/
- **Demo2 variant**: https://epicgrowth.github.io/roelboutique/site-demo2/

Deploys automatically on push to `main`.

## Design System (from template)

### Colors
- **Primary accent**: `#b95c47` (Rust Terracotta) — buttons, links, hovers
- **Background**: `#1b1b1b` (Dark Charcoal) — body, sections
- **Secondary bg**: `#222` (Dark Gray) — cards, scrolled nav
- **Text primary**: `#fff` — headings
- **Text body**: `rgba(255,255,255,0.6)` — paragraphs
- **Borders**: `rgba(185,92,71,0.2)` — subtle dividers
- **Star ratings**: `#e4a853` (Gold)

### Fonts (Google Fonts)
- **Gilda Display** (serif) — all headings
- **Barlow Condensed** — nav, buttons, subtitles (always uppercase, letter-spaced)
- **Barlow** — body text (15px, 1.75em line-height)

## Development

Preview via GitHub Pages — push to `main` and changes go live automatically.

## Skills (Slash Commands)

| Command | Description |
|---------|-------------|
| `/start` | Begin a work session — gather context, set goals, create branch |
| `/end` | End a session — simplify, commit, push, update log |
| `/simplify` | Review and clean up recently modified HTML/CSS files |
| `/deploy` | Deploy to GitHub Pages (dev) or Cloudflare Pages (prod) |
| `/rules` | Code conventions and project rules |
| `/brand` | Brand quick reference — colors, fonts, voice, key facts |

### Session Lifecycle

```
/start → work → /simplify → /end
```

- `/start` at the beginning of every session
- `/end` when you're done — it runs `/simplify` automatically before committing
- `/deploy` if you need to push changes mid-session

## Conventions

- Keep code minimal and clean
- Prefer TypeScript for all source files
- Follow existing patterns when adding new features
- **NO custom CSS.** Use only the template's existing CSS classes. If a section doesn't have a matching template class, restructure the HTML to fit the template — don't invent new styles. The template's design system is the source of truth.
- All documentation is markdown (no .docx) — keep docs in `roel-documentation/`

## Branching

- **`main`**: Minor changes, content updates, docs — push directly
- **Feature branches**: Significant changes (new pages, layout rework, multi-file refactors) — branch, PR, squash-merge
- Never force-push without explicit permission

## Never Do

- Add custom CSS — template classes only
- Add inline styles (`style="..."`)
- Modify files in `roel-template/` (original archive)
- Create a build pipeline (static files, no build needed)
- Use `sudo apt install` for dev tools
- Commit `.env` files or credentials
- Use `git add .` or `git add -A` — stage specific files
- Delete uncommitted work without asking
