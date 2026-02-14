# CLAUDE.md — Roel Boutique B&B

## Project Overview

Roel Boutique B&B — a heritage boutique bed & breakfast website for a property in Cospicua, Three Cities, Malta. Static HTML/CSS site with Cloudbeds Booking Engine Plus integration.

## Tech Stack

- **Website**: Static HTML/CSS (The Cappa boutique-hotel template by DuruThemes)
- **Framework**: Bootstrap 5, jQuery 3.7.1
- **Booking**: Cloudbeds Booking Engine Plus (Immersive Experience 2.0 web components)
- **Hosting**: Cloudflare Pages (planned)
- **Runtime**: Bun / Node.js
- **Language**: TypeScript (for any build tooling)

## Project Structure

```
roelboutique/
├── CLAUDE.md
├── CLOUDBEDS_BOOKING_ENGINE_INTEGRATION.md   # Cloudbeds embed guide (template-aligned)
├── roel-documentation/                       # Brand & strategy docs
│   ├── Roel_Brand_Guidelines.md              # Colors, fonts, voice, logo, photography
│   ├── Roel_Website_Sitemap_Content_Brief.md # Sitemap, page specs, template mapping
│   ├── Roel_Website_Content.md               # Ready-to-use page copy
│   ├── Cloudbeds_Strategy.md                 # PMS/channel/payment/ops strategy
│   └── Roel-Research.pdf                     # Market research data
├── roel-template/                            # HTML template variants (22 themes)
│   └── boutique-hotel/                       # ← Active template base
└── roel-template-instructions/               # Template documentation & usage guide
```

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

### Setup

```bash
bun install
```

### Run

```bash
bun dev
```

## Conventions

- Keep code minimal and clean
- Prefer TypeScript for all source files
- Follow existing patterns when adding new features
- Use the template's existing CSS classes — minimize custom CSS
- All documentation is markdown (no .docx) — keep docs in `roel-documentation/`
