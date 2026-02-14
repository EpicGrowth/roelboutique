---
name: simplify
description: Review and clean up recently modified HTML/CSS files
user_invocable: true
---

# /simplify — Code Cleanup

Review recently modified files and fix issues. Focus on HTML quality and template consistency.

## What to Check

### HTML
- **Unused elements**: Remove commented-out sections, empty divs, placeholder content left behind
- **Template consistency**: All sections use template CSS classes — no inline styles, no custom CSS
- **Semantic correctness**: Proper heading hierarchy (h1 > h2 > h3), alt text on images, valid HTML
- **Duplicate code**: Identical blocks that could be consolidated
- **Broken references**: Links to missing pages, images that don't exist, incorrect paths

### Content (verify against `roel-documentation/`)
- **Placeholder text**: Any `[BRACKETS]`, `Lorem ipsum`, `YOUR_PROPERTY_CODE`, or template default text
- **Consistency**: Same info (address, email, phone) across all pages and variants
- **Cloudbeds property code**: Must be `egP6Av` everywhere
- **Copy accuracy**: Headings, body text, and CTAs should match `Roel_Website_Content.md`
- **SEO meta**: Title and description tags should match the SEO table in `Roel_Website_Content.md`
- **Brand voice**: Tone should match `Roel_Brand_Guidelines.md` — warm, personal, heritage-forward (not corporate/generic hotel)

### Assets
- **Unused files**: Images, CSS, or JS files not referenced by any HTML page
- **Path correctness**: All asset paths resolve correctly (relative paths within each site-* directory)

## Process

1. Identify recently modified files via `git diff --name-only` (or all HTML files if no recent changes)
2. Read each file and check against the list above
3. Fix issues directly — don't just report them
4. Report what was found and fixed

## Rules
- Do NOT add custom CSS — restructure HTML to fit template classes
- Do NOT add comments like `<!-- removed -->` — just delete unused code
- Do NOT add features or refactor beyond what's needed for cleanup
