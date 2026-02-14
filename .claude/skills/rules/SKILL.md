---
name: rules
description: Code conventions and rules for this project
user_invocable: true
---

# /rules — Code Conventions

## The Two Sources of Truth

1. **Template = design source of truth.** Every CSS class, layout pattern, and visual component comes from The Cappa template. We customize content, not design.
2. **Documentation = content source of truth.** All website copy, SEO metadata, brand voice, and page structure come from the docs in `roel-documentation/`. Never invent content — pull it from:

| Document | Use for |
|----------|---------|
| `roel-documentation/Roel_Website_Content.md` | All page copy — headings, body text, CTAs, FAQ, SEO meta tags |
| `roel-documentation/Roel_Brand_Guidelines.md` | Colors, fonts, voice/tone, photography direction |
| `roel-documentation/Roel_Website_Sitemap_Content_Brief.md` | Page structure, section specs, nav, template-to-content mapping |
| `roel-documentation/Cloudbeds_Strategy.md` | Booking flow, pricing, channel/payment strategy |
| `CLOUDBEDS_BOOKING_ENGINE_INTEGRATION.md` | Cloudbeds embed code, widget options, customization |

## HTML Rules

1. **NO custom CSS** — Use only the template's existing CSS classes. If a section doesn't have a matching template class, restructure the HTML to fit the template
2. **NO inline styles** — Never use `style="..."` attributes
3. **NO new CSS files** — Don't create additional stylesheets
4. **NO modifying template CSS** — Exception: bulk color replacements to match brand palette (already done for demo2)
5. **Use template section structure** — Copy section markup from the original template, then replace content
6. **Keep template JS intact** — Don't modify owl-carousel configs, animations, or template scripts

## Content Rules

1. **Cloudbeds property code**: Always `egP6Av`
2. **Cloudbeds script**: `https://static1.cloudbeds.com/booking-engine/latest/static/js/immersive-experience/cb-immersive-experience.js`
3. **Placeholder brackets**: All `[BRACKETED TEXT]` must be replaced before shipping
4. **Consistent info**: Same address, email, phone across all pages
5. **Image alt text**: Every `<img>` needs descriptive alt text
6. **SEO meta**: Every page needs title (<60 chars) and description (150-160 chars) from `Roel_Website_Content.md`

## File Rules

1. **Each variant is self-contained** — `site-boutique/` and `site-demo2/` don't share assets
2. **Asset paths are relative** — `css/style.css`, not `/site-boutique/css/style.css`
3. **Documentation is markdown** — No .docx, no .pdf (except Roel-Research.pdf)
4. **Don't touch `roel-template/`** — That's the original, unmodified template archive

## Git Rules

1. **Commit messages**: Concise, descriptive, lowercase (e.g., "add rooms page for boutique variant")
2. **Branch strategy**: `main` for minor changes, feature branches for significant work
3. **No force push** without explicit permission
4. **Stage specific files** — Never `git add .` or `git add -A`

## Never Do

- Add a CSS framework or preprocessor (Bootstrap is already in the template)
- Add a JavaScript framework (jQuery is already in the template)
- Create a build pipeline (static files, no build needed)
- Modify files in `roel-template/` (original archive)
- Use `sudo apt install` for dev tools
- Commit `.env` files or credentials
- Delete uncommitted work without asking
