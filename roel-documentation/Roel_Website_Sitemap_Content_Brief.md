# Roel Boutique B&B — Website Sitemap & Page-by-Page Content Brief

**Version 2.0 — February 2026**

> Updated to align with the boutique-hotel website template. Color, font, and UI references now reflect the actual template design system.

---

## Website Architecture Overview

The Roel Boutique B&B website consists of 11 core pages plus individual room sub-pages. The architecture is designed for conversion optimization (minimal clicks to booking), SEO performance (each page targets specific keywords), and guest experience (information organized by intent).

A sticky "Book Now" button must be visible on every page, especially mobile (60%+ of hotel traffic). The button uses the template's `.butn-dark` styling: Rust Terracotta (`#b95c47`) background, white text, Barlow Condensed uppercase. Multi-language support required: English (primary), Italian, French, German minimum.

### Visual Sitemap

| Page | URL |
|------|-----|
| Homepage | `/` |
| Rooms & Suites | `/rooms` |
| Gallery | `/gallery` |
| Book Now | `/book` |
| About / Our Story | `/about` |
| Location | `/location` |
| Local Guide | `/local-guide` |
| Reviews | `/reviews` |
| Blog | `/blog` |
| Contact | `/contact` |
| FAQ | `/faq` |
| Privacy Policy | `/privacy` |
| Cookie Policy | `/cookies` |
| Terms & Conditions | `/terms` |

### Technical Requirements (All Pages)

- BedAndBreakfast schema markup (JSON-LD) on every page.
- Core Web Vitals: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1.
- Images: WebP, under 200KB, lazy loading, CDN.
- Cookie Consent Management Platform (CookieYes or Complianz).
- GDPR-compliant privacy policy, cookie policy, DPAs with all processors.
- Mobile-first responsive design.
- Multi-language via separate page versions with hreflang tags (static site, no CMS).
- Hosted on Cloudflare Pages (free static hosting).

### Template Mapping

The boutique-hotel template includes these pages that map to the sitemap:

| Template Page | Maps To | Notes |
|---------------|---------|-------|
| `index.html` | Homepage `/` | 4 variants available (slider, video, slideshow) |
| `rooms.html` / `rooms2.html` | Rooms `/rooms` | Two layout options |
| `room-details.html` | Individual room pages | Lightbox gallery + amenities |
| `gallery.html` | Gallery `/gallery` | Isotope filterable grid |
| `about.html` | About `/about` | |
| `contact.html` | Contact `/contact` | Includes form |
| `faq.html` | FAQ `/faq` | Accordion format |
| `news.html` / `news2.html` | Blog `/blog` | Two layout options |
| `post.html` | Blog post | Individual article template |
| `services.html` | Local Guide `/local-guide` | Repurpose services layout |
| `facilities.html` | Could support Location `/location` | Repurpose for distances/amenities |
| **New page needed** | Book Now `/book` | Cloudbeds embed (minimal template) |
| **New page needed** | Reviews `/reviews` | Testimonial-focused page |
| `404.html` | Error page | Already exists |

Pages to remove/ignore from template: `restaurant.html`, `team.html`, `spa-wellness.html` (not relevant to B&B).

---

## Homepage

**URL:** `/`
**SEO Title:** Malta Boutique B&B | Roel Boutique B&B Cospicua
**Template Base:** `index.html` (boutique-hotel variant)

### Purpose

The digital front door. Must communicate who you are, where you are, and why someone should book — all within 5 seconds.

### Content Sections & Elements

- **Hero section:** Full-bleed photo with dark overlay (`data-overlay-dark`). Subtitle in Barlow Condensed (uppercase, letter-spaced), main heading in Gilda Display. Prominent "Book Now" CTA button (`.butn-dark`, Rust Terracotta `#b95c47`). Template includes animated scroll-down arrow.
- **Welcome section:** Brief introduction (2–3 sentences) — warm welcome from Ledia, positioning as heritage B&B in the Three Cities. Uses the template's two-column text + images layout.
- **Room preview cards:** Owl Carousel showcasing room types. Each card: thumbnail photo, room name (Gilda Display), starting price, amenity icons, and "View Room" link. Cards use `#222` background with flip-card interaction.
- **Value proposition strip:** Three-column layout using Flaticon hotel icons — Personal Hospitality, Heritage Character, Gateway to Malta — with Gilda Display headings and Barlow body text.
- **Guest testimonial carousel:** Owl Carousel with 3–5 top reviews, gold star ratings (`#e4a853`), guest names and countries.
- **"Explore the Three Cities" teaser:** 2–3 thumbnail images linking to the Local Guide page. Uses template's parallax section with dark overlay.
- **Booking form / CTA:** Template includes a reservation form section. Replace with Cloudbeds `<cb-book-now-button>` or repurpose as a "Check Availability" section.
- **Footer:** Contact info, explore links, social icons, trust badges. Template footer uses `#1b1b1b` background with `rgba(185,92,71,0.2)` border accent.

---

## Rooms & Suites

**URL:** `/rooms`
**SEO Title:** Rooms | Roel Boutique B&B Cospicua Malta
**Template Base:** `rooms.html` or `rooms2.html`

### Purpose

Where conversion happens. Each room needs its own dedicated sub-page.

### Content Sections & Elements

- **Room overview listing page:** Clickable cards with hero photo, name (Gilda Display), size, starting price, key features. Uses template's room card grid.
- **Each individual room page** (`room-details.html`): 6–10 high-res photos in Magnific Popup lightbox gallery, room name and subtitle, detailed description (200–300 words).
- **Amenity icon list:** Flaticon hotel icons — bed type, room size, Wi-Fi, AC, private bathroom, toiletries, TV, safe, hairdryer, etc.
- **"Book This Room" CTA button** (`.butn-dark`, sticky on mobile) linking directly to booking engine with room pre-selected.
- **Seasonal pricing** or "From EUR X/night" with availability check link.
- **"You Might Also Like"** cross-sell section with Owl Carousel suggesting other rooms.

---

## Gallery

**URL:** `/gallery`
**SEO Title:** Photo Gallery | Roel Boutique B&B Malta
**Template Base:** `gallery.html`

### Purpose

Visual showcase organized by category. Purpose: inspire and build desire.

### Content Sections & Elements

- **Category filters:** Rooms, Exteriors, Breakfast, Common Areas, Three Cities, Views. Uses template's jQuery Isotope filterable grid.
- **Grid layout** with Magnific Popup lightbox — click to enlarge, swipe navigation.
- **Minimum 30–40 professional photos**, each with descriptive alt text.
- **Optional:** 360-degree virtual tour embed or video walkthrough (use template's YouTube Popup component).
- **Subtle "Book Now" CTA** (`.butn-dark`) at gallery bottom.

---

## Book Now

**URL:** `/book`
**SEO Title:** Book Direct | Roel Boutique B&B | Best Rate Guaranteed
**Template Base:** New page using template header/footer structure

### Purpose

Booking engine page. Must be fast, mobile-optimized, trustworthy.

### Content Sections & Elements

- **Cloudbeds Booking Engine Plus** embedded via `<cb-immersive-experience mode="standard">` web component. Full-page embed.
- **"Best Rate Guarantee" badge** + direct booking perks: free breakfast upgrade, welcome drink, room upgrade when available, late checkout.
- **Secure payment** via Cloudbeds/Stripe with visible security badges.
- **Clear cancellation policy** before final confirmation.
- **Trust signals:** 9.9/10 Booking.com rating, secure payment icons. Use template's icon + text layout.

### Cloudbeds Integration

Additionally, every page includes a `<cb-book-now-button>` in the header/navigation for popup modal booking access. See `CLOUDBEDS_BOOKING_ENGINE_INTEGRATION.md` for full implementation details.

---

## About / Our Story

**URL:** `/about`
**SEO Title:** Our Story | Roel Boutique B&B Cospicua Three Cities
**Template Base:** `about.html`

### Purpose

The emotional connection page. Where guests decide they trust and like you.

### Content Sections & Elements

- **Hero photo** of Ledia (host) in the property, with dark overlay and Gilda Display heading.
- **Personal narrative** (400–600 words): Ledia's story, why she opened the B&B, what the Three Cities mean to her, her vision. Written in first person.
- **Property history section:** The building's heritage, restoration story, Cospicua history connection.
- **"Our Philosophy" section:** Five messaging pillars — heritage, hospitality, comfort, discovery, sustainability. Use template's icon-grid or alternating image/text layout.
- **Team/host interaction photos.**

---

## Location

**URL:** `/location`
**SEO Title:** Location | Roel Boutique B&B Three Cities Malta
**Template Base:** Adapted from `facilities.html` or `contact.html` map section

### Purpose

Practical wayfinding that also sells the destination.

### Content Sections & Elements

- **Interactive Google Maps embed** with clickable directions.
- **"Getting Here":** Airport directions (distance, taxi, bus), Valletta ferry (walking distance), driving/parking.
- **"The Three Cities" destination section:** Cospicua, Birgu, Senglea descriptions with photos. Use template's alternating image/text blocks.
- **Walking distance callouts:** "5 min to Birgu Waterfront," "Ferry to Valletta: 15 min." Use Flaticon icons with distances.
- **Nearby attractions list** with distances.

---

## Local Guide

**URL:** `/local-guide`
**SEO Title:** Things to Do in Malta | Roel Boutique B&B
**Template Base:** Adapted from `services.html`

### Purpose

Positions B&B as local authority. Major SEO value.

### Content Sections & Elements

- **Curated recommendations by category:** Historical Sites, Restaurants, Beaches, Day Trips, Shopping, Nightlife. Use template's services/facilities layout with icons.
- **Each recommendation:** Name, distance, Ledia's personal note, photo.
- **"Ledia's Top 5"** featured section with parallax background.
- **Seasonal highlights** (updated quarterly).
- **Downloadable PDF** Three Cities walking map.
- **Link to blog** for deeper guides.

---

## Reviews

**URL:** `/reviews`
**SEO Title:** Guest Reviews | Roel Boutique B&B Malta | Rated 9.9/10
**Template Base:** New page, adapting template's testimonial carousel section

### Purpose

Social proof page leveraging the 9.9/10 rating.

### Content Sections & Elements

- **Featured review highlight:** 9.9/10 score in large Gilda Display text, total review count.
- **Curated best reviews** from Booking.com, TripAdvisor, Google with guest name, country, date. Gold star icons (`#e4a853`).
- **Review category filters:** Couples, Solo, Families, Business. Use Isotope filtering.
- **Embedded live review feed** widgets.
- **"Share Your Experience" CTA** with review platform links.
- **"Book Now" CTA** (`.butn-dark`).

---

## Blog

**URL:** `/blog`
**SEO Title:** Malta Travel Blog | Roel Boutique B&B
**Template Base:** `news.html` or `news2.html`

### Purpose

Long-term SEO engine targeting Malta travel keywords.

### Content Sections & Elements

- **Blog listing:** Featured image, title (Gilda Display), excerpt (Barlow), date, category per post. Uses template's news card layout.
- **Categories:** Malta Guides, Three Cities, Food & Culture, Travel Tips, Guest Stories, Behind the Scenes.
- **Each post** (`post.html`): 1,500+ words, original photos, clear CTAs to room pages.
- **Sidebar/footer:** "Book Your Stay" CTA (`.butn-dark`), popular posts, newsletter signup.
- **2 posts/month.** Priority topics: "Best Things to Do in Malta," "Malta 3/5/7 Day Itinerary," "Hidden Gems," "Getting Around Without a Car," "Best Restaurants Near Three Cities."

---

## Contact

**URL:** `/contact`
**SEO Title:** Contact Us | Roel Boutique B&B Malta
**Template Base:** `contact.html`

### Purpose

Multiple contact methods, simple and functional.

### Content Sections & Elements

- **Contact form:** Name, Email, Subject, Message + GDPR consent checkbox. Uses template's form styling (transparent inputs, `rgba(185,92,71,0.2)` borders, `#b95c47` focus state).
- **WhatsApp click-to-chat button** (essential for European travelers).
- **Email, phone, full postal address.**
- **Small Google Maps embed.**
- **Social media profile links** (template footer style).
- **FAQ accordion** for common pre-booking questions (link to full FAQ page).

---

## FAQ

**URL:** `/faq`
**SEO Title:** FAQ | Roel Boutique B&B Malta
**Template Base:** `faq.html`

### Purpose

Reduces pre-booking friction. Supports SEO via FAQ schema markup.

### Content Sections & Elements

- **Accordion Q&A:** Check-in/out times, breakfast hours, parking, airport transfers, cancellation, payment, Wi-Fi, accessibility, pets, luggage storage. Template includes accordion component.
- **Organized by:** Before Your Stay, During Your Stay, Policies.
- **FAQ schema** (JSON-LD) on each question for Google rich snippets.
- **"Still have questions?"** CTA linking to Contact page (`.butn-dark`).

---

## SEO Meta Data

Title tags under 60 characters. Meta descriptions 150–160 characters.

| Page | Title | Description |
|------|-------|-------------|
| Homepage | Roel Boutique B&B \| Boutique Accommodation in Malta's Three Cities | Rated 9.9/10 on Booking.com. Heritage boutique B&B in Cospicua, Malta. Personal hospitality, breakfast included, 5 min ferry to Valletta. Book direct. |
| Rooms | Our Rooms \| Roel Boutique B&B Malta | Explore our heritage rooms with original Maltese limestone, modern comforts, and personal touches. Free Wi-Fi, breakfast included, AC. Book direct for best rates. |
| About | About Roel \| Meet Your Host in Malta's Three Cities | Meet Ledia, your host at Roel Boutique B&B. Discover the story of our heritage property in Cospicua and why guests rate us 9.9/10 on Booking.com. |
| Location | Location & Getting Here \| Roel Boutique B&B Cospicua | Find Roel Boutique B&B in Cospicua, Three Cities, Malta. 5 min ferry to Valletta, 20 min from airport. Directions, map, and transport options. |
| Local Guide | Things to Do in Malta \| Local Guide by Roel B&B | Insider guide to Malta from your Three Cities hosts. Best restaurants, day trips, hidden gems, and cultural highlights. Plan your perfect Malta trip. |
| FAQ | Frequently Asked Questions \| Roel Boutique B&B Malta | Check-in times, breakfast, parking, airport transfers, cancellation policy, and more. Everything you need to know before staying at Roel B&B. |
| Contact | Contact Us \| Roel Boutique B&B Malta | Get in touch with Roel Boutique B&B in Cospicua, Malta. Email, WhatsApp, phone. We reply within 2 hours. Book direct for the best experience. |
| Reviews | Guest Reviews \| Roel Boutique B&B — Rated 9.9/10 | Read what our guests say about their stay at Roel. Rated 9.9/10 on Booking.com. Real reviews about our rooms, breakfast, service, and location. |
| Gallery | Photo Gallery \| Roel Boutique B&B Malta | Browse photos of our heritage rooms, rooftop terrace, breakfast, and the Three Cities. See why guests love Roel Boutique B&B. |
| Blog | Malta Travel Blog \| Roel Boutique B&B | Insider tips, local guides, and travel inspiration from your hosts in Malta's Three Cities. Plan your perfect Malta trip. |
| Book Now | Book Direct \| Roel Boutique B&B \| Best Rate Guaranteed | Book direct at Roel Boutique B&B for the best rates. Secure online booking, free cancellation, breakfast included. Malta's Three Cities. |

---

*Document updated: February 14, 2026*
*Version 2.0 — Aligned with boutique-hotel website template*
