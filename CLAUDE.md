# CLAUDE.md — Roel Boutique B&B

## Project Overview

Roel Boutique B&B — a heritage boutique bed & breakfast website for a property in Cospicua, Three Cities, Malta. Static HTML/CSS site with Cloudbeds Booking Engine Plus integration.

## Tech Stack

- **Website**: Static HTML/CSS (The Cappa template by DuruThemes)
- **Framework**: Bootstrap 5, jQuery 3.7.1
- **Booking**: Cloudbeds Booking Engine Plus (Immersive Experience 2.0 web components)
- **Property code**: `egP6Av`
- **Hosting (prod)**: Cloudflare Pages — builds from `main`, output directory `site/` (serves `site/` as the domain root). Custom domain `roelboutique.com` (registered at Squarespace).
- **Runtime**: Bun / Node.js
- **Language**: TypeScript (for any build tooling)

## Project Structure

```
roelboutique/
├── CLAUDE.md
├── CLOUDBEDS_BOOKING_ENGINE_INTEGRATION.md   # Cloudbeds embed guide
├── SESSION_LOG.md                            # Per-session work log
├── site/                                     # THE LIVE SITE — deployed as the domain root
│   ├── index.html  about.html  contact.html  thank-you.html
│   ├── morning-sunshine.html  hide-away.html  lane-view.html
│   ├── terrace-romance.html  tugged-away.html   # the 5 room pages
│   └── css/  js/  img/  fonts/                # template assets
├── roel-documentation/                       # Brand & strategy docs
│   ├── Roel_Brand_Guidelines.md              # Colors, fonts, voice, logo, photography
│   ├── Roel_Website_Sitemap_Content_Brief.md # Sitemap, page specs, template mapping
│   ├── Roel_Website_Content.md               # Ready-to-use page copy
│   ├── Cloudbeds_Strategy.md                 # PMS/channel/payment/ops strategy
│   ├── Launch_Runbook.md                     # Cloudflare Pages + Squarespace DNS + form deploy
│   └── Roel-Research.pdf                     # Market research data
└── tools/
    └── contact-form/Code.gs                  # Google Apps Script contact-form backend
```

> Note: the original template archive (`roel-template/`, 22 themes), the
> superseded `site-demo2/` variant, the empty `site-boutique/`, and the root
> comparison `index.html` were removed in the launch-prep cleanup (still
> recoverable from git history). The chosen build lives in `site/`.

## Live Preview (Cloudflare Pages)

- **Production**: https://roelboutique.pages.dev (custom domain `roelboutique.com` once DNS is pointed)
- **Local**: `python -m http.server 8000 --directory site` → http://127.0.0.1:8000/

Deploys automatically on push to `main` (Cloudflare Pages, output directory `site/`).

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

Preview locally with `python -m http.server 8000 --directory site`. Push to `main` and Cloudflare Pages deploys automatically.

## Skills (Slash Commands)

| Command | Description |
|---------|-------------|
| `/start` | Begin a work session — gather context, set goals, create branch |
| `/end` | End a session — simplify, commit, push, update log |
| `/simplify` | Review and clean up recently modified HTML/CSS files |
| `/deploy` | Deploy to Cloudflare Pages (prod) |
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
- Create a build pipeline (static files, no build needed)
- Use `sudo apt install` for dev tools
- Commit `.env` files or credentials
- Use `git add .` or `git add -A` — stage specific files
- Delete uncommitted work without asking
