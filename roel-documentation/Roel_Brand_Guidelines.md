# Roel Boutique B&B — Brand Guidelines

**Version 2.0 — February 2026**
**Cospicua, Three Cities, Malta**

> Updated to align with the boutique-hotel website template (The Cappa by DuruThemes). Colors, fonts, and visual direction now reflect the actual template design system.

---

## 1. Brand Overview

Roel Boutique B&B is a heritage boutique bed and breakfast located in Cospicua, in the heart of Malta's historic Three Cities. The brand stands at the intersection of authentic Maltese heritage and modern boutique hospitality, delivering personal, warm, host-driven service that transforms guests into friends.

These brand guidelines ensure consistent visual and verbal identity across every touchpoint — from the website and social media to printed materials, guest communications, and OTA listings.

### Brand Positioning Statement

For travelers seeking the real Malta, Roel Boutique B&B is the heritage boutique accommodation where personal hospitality meets curated Maltese character — offering insider access to the Three Cities that larger hotels simply cannot match.

### Five Messaging Pillars

- **Maltese Heritage & Sense of Place:** "Rooted in the honey-gold heart of Malta." The property is part of the story of the Three Cities.
- **Personal Hospitality:** "Where guests become friends." Host Ledia's personal touches and local knowledge are the core differentiator.
- **Curated Comfort:** "Thoughtfully designed for every kind of traveler." Every detail is intentional.
- **Gateway to Discovery:** "Your home base for Malta's wonders." The B&B is the starting point for authentic exploration.
- **Sustainability:** A commitment to responsible tourism and preserving Malta's heritage for future travelers.

### Tagline Options

- "Where Malta Feels Like Home"
- "Your Maltese Story Starts Here"

---

## 2. Color Palette

The website uses a **dark luxury aesthetic** — deep charcoal backgrounds, white text, and a warm rust/terracotta accent. This creates a premium, elegant feel that lets photography and content breathe.

### Primary Colors

| Swatch | Name | Hex | Usage |
|--------|------|-----|-------|
| ■ | **Rust Terracotta** | `#b95c47` | Primary accent. CTAs, buttons, hover states, links, active nav, decorative accents, icon highlights. |
| ■ | **Dark Charcoal** | `#1b1b1b` | Body background, section backgrounds, footer, preloader. The foundation of the dark luxury look. |

### Secondary Colors

| Swatch | Name | Hex | Usage |
|--------|------|-----|-------|
| ■ | **Dark Gray** | `#222` | Card backgrounds, scrolled navbar, room card backs, blockquotes, alternate sections. |
| ■ | **Navigation Gray** | `#272727` | Carousel nav buttons, subtle UI elements. |
| ■ | **Gold** | `#e4a853` | Star ratings only. Used in testimonials and review displays. |

### Text Colors

| Swatch | Name | Value | Usage |
|--------|------|-------|-------|
| ■ | **White** | `#fff` | All headings (h1–h6), primary text, logo, nav links. |
| ■ | **Muted White** | `rgba(255,255,255,0.6)` | Body text, paragraphs, descriptions, form placeholders. |
| ■ | **Light White** | `rgba(255,255,255,0.7)` | Footer text, secondary info. |

### Border & Divider Colors

| Swatch | Name | Value | Usage |
|--------|------|-------|-------|
| ■ | **Accent Border** | `rgba(185,92,71,0.2)` | Subtle borders, input fields, table borders, footer divider. |
| ■ | **Light Border** | `rgba(255,255,255,0.3)` | Button borders (outline variant), nav separators. |
| ■ | **Accent Border Strong** | `rgba(185,92,71,0.7)` | Language selector border, emphasized form fields. |

### Color Usage Rules

- **Dark Charcoal (`#1b1b1b`)** is the primary background for all pages. Never use pure white or light backgrounds for main sections.
- **Rust Terracotta (`#b95c47`)** is the accent — used for interactive elements (buttons, links, hovers). Never use as a text color for body copy.
- **White (`#fff`)** is reserved for headings and primary text. Body text uses the muted white variant.
- **Dark Gray (`#222`)** is for secondary surfaces (cards, scrolled nav). Provides subtle contrast against the charcoal background.
- **Gold (`#e4a853`)** is exclusively for star ratings. Do not use as a general accent.
- All text must meet WCAG AA contrast ratios on dark backgrounds.

---

## 3. Typography

The type system uses three Google Fonts families that create an elegant, readable hierarchy on dark backgrounds.

### Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Gilda+Display&display=swap" rel="stylesheet">
```

### Type Hierarchy

| Role | Typeface | Weight / Size | Usage |
|------|----------|---------------|-------|
| H1 / Page Titles | **Gilda Display** | 400 / 65px | Hero headlines, banner headings, page titles |
| H2 / Section Titles | **Gilda Display** | 400 / 45px | Section headers, large display text |
| H3 / Subsection | **Gilda Display** | 400 / 30px | Room names, card titles, feature headers |
| H4 / Subtitles | **Barlow Condensed** | 400 / 15px | Section subtitles, labels (uppercase, 5px letter-spacing) |
| H5 / Medium | **Gilda Display** | 400 / 27–30px | Secondary headings, testimonial names |
| H6 / Small | **Gilda Display** | 400 / 20px | Card titles, minor headings |
| Body Text | **Barlow** | 400 / 15px | Paragraphs, descriptions, content (1.75em line-height) |
| Navigation | **Barlow Condensed** | 400 / 15px | Nav links (uppercase, 2px letter-spacing) |
| Buttons | **Barlow Condensed** | 400 / 15px | All CTAs (uppercase, 3px letter-spacing) |
| Small Text | **Barlow** | 400 / 13px | Captions, meta info, fine print |

### Typography Rules

- **Gilda Display** is a serif used exclusively for headings. Never use it for body text or navigation.
- **Barlow Condensed** is always uppercase with letter-spacing (2–5px). Used for nav, buttons, and subtitles.
- **Barlow** is the workhorse body font at 15px with 1.75em line-height.
- Never use the script logo font for anything other than the Roel wordmark.
- Minimum body text size: 15px (web). Fallback stack: `'Barlow', 'Helvetica Neue', Arial, sans-serif`.

---

## 4. Button System

### Primary Button (`.butn-dark`)

- Background: `#b95c47`
- Text: `#fff`
- Font: Barlow Condensed, 15px, uppercase, 3px letter-spacing
- Padding: 15px 25px
- Border-radius: 0 (square edges)
- Hover: white background fills from right, text becomes `#333`

### Outline Button (`.butn-light`)

- Background: transparent
- Text: `#fff`
- Border: 1px solid `rgba(255,255,255,1)`
- Font: Barlow Condensed, 15px, uppercase, 3px letter-spacing
- Padding: 15px 25px
- Hover: white background fills from right, text becomes `#222`

### Button Rules

- All buttons use Barlow Condensed, uppercase, with letter-spacing.
- Hover animations use a slide-from-right white fill effect.
- No border-radius — buttons have sharp square corners for a modern luxury feel.
- The primary CTA ("Book Now") always uses `.butn-dark` styling.

---

## 5. Logo Usage

Roel Boutique B&B uses an elegant script logo as its primary mark. The following rules ensure the logo always appears at its best.

### Logo Versions

- **Primary:** Full script logo in **white (`#fff`)** on the dark charcoal background.
- **Reversed:** Full script logo in **dark (`#1b1b1b`)** on light/print backgrounds.
- **Accent:** Full script logo in **Rust Terracotta (`#b95c47`)** for premium materials and special occasions.
- **Monochrome:** Black or white single-color for print constraints (stamps, embossing).

### Clear Space & Minimum Size

Maintain clear space around the logo equal to the height of the "R" in "Roel" on all sides. No text, images, or design elements may enter this zone. Minimum size for print: 25mm wide. Minimum size for digital: 120px wide.

### Do's

- Always use the logo from approved vector files (SVG, EPS, or high-resolution PNG).
- Place the logo on clean, uncluttered backgrounds with strong contrast.
- When placing over photos, use a semi-transparent dark overlay or choose a minimal-detail area.

### Don'ts

- Never stretch, skew, rotate, or distort the logo.
- Never change the logo's colors to off-brand colors.
- Never add drop shadows, outlines, gradients, or effects.
- Never place the logo on busy or low-contrast backgrounds without an overlay.
- Never recreate the logo using a different font — always use the original file.

---

## 6. Voice & Tone

The Roel brand voice should feel like a knowledgeable local friend — sophisticated without being stuffy, personal without being overly casual. The unifying thread: "This is a beautiful, well-run place where you'll be treated as a person, not a room number."

### Voice Attributes

| Attribute | What It Sounds Like | What It Doesn't Sound Like |
|-----------|--------------------|-----------------------------|
| Warm | "We can't wait to welcome you to our home in the Three Cities." | "Dear Guest, your reservation has been confirmed." |
| Refined | "Each room is thoughtfully designed with original Maltese limestone and curated furnishings." | "Our luxury suites feature premium amenities and designer decor." |
| Genuine | "Ledia recommends the waterfront walk to Birgu — it's her favorite morning ritual." | "Our concierge team is available to curate bespoke experiences." |
| Inviting | "Start your morning with fresh pastizzi and a harbour view from our rooftop." | "Breakfast service is available from 07:00 to 10:00." |

### Tone by Audience

- **Luxury travelers:** Emphasize curated design, insider access, and intimacy that large hotels cannot provide. Lead with experience, not price.
- **Budget-conscious travelers:** Emphasize exceptional value, authenticity, and discovering the real Malta.
- **Business travelers:** Emphasize reliable comfort, fast Wi-Fi, quiet rooms, and proximity to Valletta.
- **Couples & honeymooners:** Emphasize romantic atmosphere, harbour views, intimate scale, and personal touches.

### Writing Guidelines

- Use first person plural ("we") and address the guest directly ("you").
- Prefer active voice. "We'll prepare your room" not "Your room will be prepared."
- Use Maltese place names and cultural references naturally — they add authenticity.
- Avoid hospitality cliches: "unparalleled luxury," "oasis of calm," "second to none."
- Keep sentences clear and moderate in length. Aim for warmth, not wordiness.
- Proofread for Maltese-English spelling conventions (e.g., "pastizzi" not "pastizi").

---

## 7. Photography Guidelines

Photography is the single most important brand asset. All imagery should feel sun-drenched, warm, and authentic — never staged or artificially perfect. On the dark website background, photos create dramatic contrast and visual impact.

### Shooting Rules

- Shoot exclusively during golden hour: 7–10 AM and 3–6 PM. Malta's midday sun is too harsh.
- Prioritize natural light. Open curtains fully, turn off overhead fluorescents.
- Priority order: bedrooms with views, exterior architecture, breakfast spreads, bathrooms, common areas.
- Invest in one professional photoshoot (EUR 800–2,000 half-day) for hero images and room galleries.
- Post-processing: subtle warmth (golden tint), shadow recovery, gentle sharpening. No over-saturation or HDR.

### Image Specifications

- Website hero images: minimum 1920 x 1080px, WebP format, under 200KB compressed.
- Room gallery: minimum 1200 x 800px, 6–10 photos per room.
- Instagram Feed: 1080 x 1080px (square) or 1080 x 1350px (portrait). Stories/Reels: 1080 x 1920px.
- OTA listings: follow platform specs (Booking.com ideal: 2400 x 1800px).
- All images must include descriptive alt text for accessibility and SEO.

### Notes for Dark Background Website

- Hero images use a semi-transparent dark overlay (`data-overlay-dark`) for text readability.
- Room photos appear on dark card backgrounds — ensure images have good brightness and don't look muddy.
- Gallery images open in a lightbox overlay — shoot for impact at full-screen size.

---

## 8. Branded Hashtag & Social Identity

**Primary branded hashtag:** `#StayAtRoel`

Display prominently in rooms (framed sign or table card), at breakfast, on all social profiles, and in post-stay emails. Encourage guests to use it when posting photos.

### Core Hashtag Sets

- **Malta:** #Malta #VisitMalta #LoveMalta #MaltaTravel #Mediterranean
- **Location:** #ThreeCities #Cospicua #Bormla #Birgu #Senglea
- **Accommodation:** #BoutiqueHotel #BedAndBreakfast #MaltaHotels #BoutiqueAccommodation

Use 15–20 hashtags per Instagram post, mixing these tiers for maximum reach.

---

## 9. Website Template Reference

The website is built on **The Cappa** boutique-hotel template by DuruThemes. Key technical details:

- **Framework:** Bootstrap 5 + jQuery 3.7.1
- **CSS:** Custom `style.css` (108KB) + Bootstrap + plugin styles
- **JS Plugins:** Owl Carousel, Magnific Popup, Stellar (parallax), Waypoints, Select2, Datepicker
- **Icon Sets:** Font Awesome Pro, Themify Icons, Flaticon (hotel icons)
- **Animations:** Animate.css for scroll-triggered effects
- **Booking Integration:** Cloudbeds Booking Engine Plus (web components)

All color and font values in this document are derived from the template's `style.css`. When customizing, maintain consistency with these values.

---

*Document updated: February 14, 2026*
*Version 2.0 — Aligned with boutique-hotel website template*
