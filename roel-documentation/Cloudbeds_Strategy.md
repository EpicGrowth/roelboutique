# Roel Boutique B&B — HTML/CSS Template & Cloudbeds Integration & Strategy

**Static website template + property management system working together**
**Version 2.0 — February 2026**

> Updated to align with the boutique-hotel website template. Removed legacy Wix/CMS references. Color and font references now reflect the actual template design system.

---

## 1. Strategic Overview: Why HTML/CSS + Cloudbeds

This document outlines the strategy for building Roel Boutique B&B's digital infrastructure using a static HTML/CSS template as the website and Cloudbeds as the property management system (PMS), booking engine, and channel manager. By using Cloudbeds Booking Engine Plus (Immersive Experience 2.0) embedded directly in the template, the client avoids the ongoing cost and complexity of a CMS platform like Wix or WordPress while retaining full design control and a seamless booking experience.

### How the Two Platforms Work Together

**The HTML/CSS template handles the guest-facing website:** the design, content, SEO, and brand experience. It's the storefront that creates the first impression and drives traffic. Being a static site, it loads fast, is easy to host (Cloudflare Pages, Netlify, or any static host), and has zero ongoing platform fees.

**Cloudbeds handles the operational backend:** reservations, availability, pricing, OTA distribution, guest communications, payment processing, and reporting. It's the engine that converts visitors into bookings and manages the day-to-day.

The integration point is the Cloudbeds Booking Engine Plus (Immersive Experience 2.0) embedded on the website using web components. Guests browse the site, click "Book Now," and are seamlessly taken into the Cloudbeds-powered booking flow — either as a full-page embed on a dedicated `/book` page or as a popup modal triggered by a button on any page. No iframes, no redirects — the experience feels native to the website.

### Why a Static Template Instead of a CMS?

CMS platforms like Wix, WordPress, or Squarespace add ongoing monthly costs ($17–$33/month), maintenance overhead, and potential performance penalties. For a small B&B where the website content changes infrequently, a well-designed static HTML/CSS template provides:

- Zero platform fees
- Faster load times (important for Core Web Vitals and SEO)
- Full design control without CMS limitations
- Simple hosting on free/low-cost static platforms
- Easy integration with Cloudbeds Booking Engine Plus via a single JavaScript include

Since Cloudbeds handles all booking, availability, and guest management, the website only needs to present content and connect to the booking engine — a perfect use case for a static template.

---

## 2. Website Configuration (HTML/CSS Template)

### Template & Hosting Setup

The website uses **The Cappa** boutique-hotel HTML/CSS template (by DuruThemes) customized with Roel Boutique's branding, photos, and content. The template is built on Bootstrap 5 with jQuery and includes Owl Carousel, Magnific Popup, parallax effects, and a full suite of hotel-specific components.

| Item | Cost | Notes |
|------|------|-------|
| Cloudflare Pages hosting | Free | Built-in CDN + SSL + custom domain |
| Alternative: Netlify | Free (starter) | Similar features |
| Alternative: GitHub Pages | Free | Requires public repo or Pro plan |

### Domain & Email Setup

**Domain:** Register roelboutiquebb.com (or roelmalta.com). Use Cloudflare for DNS management and connect to the static hosting platform.

**SSL:** Cloudflare Pages and Netlify provide free SSL automatically.

**Email:** Set up info@roelboutiquebb.com and bookings@roelboutiquebb.com via Google Workspace ($6/user/month) or a third-party email provider.

### Site Structure

Build the full sitemap as outlined in the Website Sitemap & Content Brief document. Key implementation notes for the HTML/CSS template:

**Template:** Start with the boutique-hotel variant. The template's existing design system is the brand standard — Dark Charcoal (`#1b1b1b`) backgrounds, Rust Terracotta (`#b95c47`) accent, white text, Gilda Display headings, Barlow body text. See Brand Guidelines for full color and font specifications.

**Mobile optimization:** The template uses responsive Bootstrap CSS. Review and test every page on mobile. Ensure the sticky Book Now button is prominent and thumb-friendly.

**Multi-language:** Create separate page versions for each language (`/it/`, `/fr/`, `/de/`) with proper hreflang tags. This requires duplicating the HTML files with translated content.

**Blog:** Add a static blog section using the template's `news.html` / `post.html` pages. Publish 2 posts/month targeting Malta travel keywords.

**SEO:** Add custom meta titles and descriptions per page. Add BedAndBreakfast schema markup via JSON-LD in each page's `<head>`. Submit sitemap.xml to Google Search Console.

---

## 3. Cloudbeds Configuration

### What Cloudbeds Provides

Cloudbeds is an all-in-one hospitality management platform that bundles the critical tools a B&B needs into one system:

| Component | What It Does for Roel |
|-----------|----------------------|
| PMS (Property Management) | Manage reservations, guest profiles, room assignments, housekeeping, check-in/out, invoicing |
| Booking Engine | The web component embedded on the website that lets guests book directly. Commission-free. Customizable to match brand colors. |
| Channel Manager | Syncs rates and availability in real-time across Booking.com, Airbnb, Expedia, and 200+ other OTAs. No more manual updates. |
| Payment Processing | Integrated payment collection via Stripe. Handles deposits, full payments, and PSD2/SCA compliance automatically. |
| Revenue Management | Pricing Intelligence tool suggests optimal rates based on demand, competitors, and seasonality. |
| Guest Engagement | Automated pre-arrival emails, post-stay review requests, and upsell messages. |
| Reporting | Occupancy, revenue, channel performance, source tracking. |
| Google Integration | Connects to Google Hotel Free Booking Links and Google Hotel Ads for direct rate visibility in Google Search and Maps. |

### Cloudbeds Pricing

Cloudbeds uses custom pricing based on property size and features selected. For a small B&B with 3–6 rooms, expect approximately **$150–$250/month** for the full platform (PMS + Booking Engine + Channel Manager). Request a custom quote at cloudbeds.com. Note: Cloudbeds charges **no commission** on direct bookings through the booking engine.

### Room & Rate Setup in Cloudbeds

**Room types:** Create each room type with photos, descriptions, amenities, bed configuration, max occupancy, and base rate.

**Rate plans:** Create at minimum:
- **Standard Rate** (flexible cancellation)
- **Non-Refundable Rate** (5–10% discount)
- **Direct Booking Rate** (with value-add perks rather than lower price to maintain OTA rate parity)

**Seasonal pricing:** Configure seasonal rates aligned with Malta's demand patterns:
- **Peak (Jul–Sep):** Highest rate
- **Shoulder (Apr–Jun, Oct):** Moderate rate
- **Winter (Nov–Mar):** Lowest rate with potential promotions

**Minimum stay:** Consider 2–3 night minimums during peak season and special events.

**Taxes and fees:** Configure the 7% VAT on accommodation and the EUR 0.50/person/night eco-tax as separate line items (eco-tax must not be included in the room rate and is not subject to VAT).

---

## 4. Embedding Cloudbeds Booking Engine Plus

### Integrating on the Website

The Cloudbeds Booking Engine Plus uses modern web components (Immersive Experience 2.0) that embed directly into the HTML template. Add the Cloudbeds JavaScript to every page's `<head>` section, then use custom HTML tags where the booking engine should appear. Two approaches are recommended in combination:

### Option A: Full-Page Embed on /book Page (Recommended)

Add the Cloudbeds script tag to the page's `<head>`:

```html
<script
  src="https://static1.cloudbeds.com/booking-engine/latest/static/js/immersive-experience/cb-immersive-experience.js"
  type="text/javascript">
</script>
```

Add the web component to the booking page:

```html
<cb-immersive-experience
  mode="standard"
  property-code="YOUR_PROPERTY_CODE">
</cb-immersive-experience>
```

Customize colors via the Cloudbeds dashboard — set primary color to Rust Terracotta (`#b95c47`) for CTA buttons, Dark Charcoal (`#1b1b1b`) for backgrounds, to match the website template.

This provides the full booking experience — room selection, date picker, pricing, and secure payment — all embedded seamlessly on the website.

### Option B: Popup Modal on Every Page

Add a `<cb-book-now-button>` component to the site header/navigation on every page:

```html
<cb-book-now-button
  property-code="YOUR_PROPERTY_CODE"
  class-name="butn-dark"
  label="Book Your Stay">
</cb-book-now-button>
```

When clicked, it opens the Cloudbeds booking engine in a slide-in modal panel. This keeps guests on the current page while providing instant access to booking from anywhere on the site.

**Recommended:** Use both approaches — popup button site-wide plus full-page embed on the dedicated `/book` page.

Also add a Book Now popup button to the Homepage hero section for maximum visibility.

### Sticky Book Now Button

On every page, add a sticky/floating "Book Now" button using the `<cb-book-now-button>` web component. Style it to match the template's `.butn-dark` class: Rust Terracotta (`#b95c47`) background, white text, Barlow Condensed uppercase with 3px letter-spacing. On mobile, this should be a fixed button at the bottom of the viewport.

See `CLOUDBEDS_BOOKING_ENGINE_INTEGRATION.md` for full implementation details and code examples.

---

## 5. OTA Channel Distribution via Cloudbeds

### Channel Priority

| Channel | Commission | Priority | Notes |
|---------|-----------|----------|-------|
| Direct (Cloudbeds BE) | 0% | Highest | Goal: 30–50% of bookings within 12 months |
| Booking.com | 15–18% | High | Dominant EU platform. Billboard Effect drives direct bookings |
| Airbnb | 3% host-side | High | Low commission, rewards unique boutique properties |
| Expedia / Hotels.com | 15–20% | Medium | North American reach, flight+hotel packages |
| Google Hotel FBL | 0% | High | Free Booking Links display direct rate in Google Search/Maps |
| TripAdvisor | Free listing | Medium | Business listing with direct booking links |

### Google Hotel Free Booking Links

This is the single highest-ROI channel. Cloudbeds connects natively to Google Hotel Center, allowing your direct rate to appear alongside OTA rates when travelers search for your property or "Boutique B&B Malta" on Google Search, Maps, and Travel. Hotels using Free Booking Links reported they accounted for 34% of Google metasearch revenue.

**Setup:** In Cloudbeds, navigate to Distribution > Google Hotel Center and follow the connection wizard. Ensure your Google Business Profile is fully optimized and verified first.

### Driving Direct Bookings

Within OTA rate parity rules (relaxing across the EU), offer value-add perks for direct bookers rather than lower rates:

- Complimentary welcome drink and Maltese snack on arrival
- Free breakfast upgrade or enhanced breakfast menu
- Room upgrade when available
- Late checkout (subject to availability)
- Complimentary airport transfer
- Post-stay 10–15% loyalty discount codes for direct return bookings

---

## 6. Payment Processing

**Stripe** is the recommended payment processor, integrated with Cloudbeds. Stripe is fully available in Malta and handles PSD2/SCA compliance automatically through built-in 3D Secure 2.

| Fee Type | European Cards | International Cards |
|----------|---------------|-------------------|
| Transaction fee | 1.4% + EUR 0.25 | 2.9% + EUR 0.25 |

**In-person payments:** Use Stripe Tap to Pay on iPhone or SumUp for in-person card payments at checkout. Revolut Business is a popular secondary option in Malta for competitive FX rates on international transactions.

---

## 7. Automated Guest Communication

Cloudbeds' guest engagement tools automate the email journey. Configure the following automated messages:

| Trigger | When | Content |
|---------|------|---------|
| Booking confirmation | Immediately | Thank you, booking details, what to expect |
| Pre-arrival guide | 14 days before | Local recommendations, getting-here info, ask about preferences |
| Check-in details | 3 days before | Check-in time/process, address, parking, weather forecast |
| Welcome message | 1 day before | We're ready for you, offer for room upgrade, transfer reminder |
| Mid-stay check-in | Day 2 of stay | "How's your stay? Need anything?" |
| Thank you | 1 day after checkout | Thank you message, ask for review |
| Review request | 3 days after checkout | Direct links to Google and TripAdvisor review pages |
| Loyalty offer | 14–30 days after | 10–15% discount code for direct rebooking |
| Anniversary reminder | 11 months after | "It's been a year! Ready to return to Malta?" |

**MailerLite integration:** For the monthly newsletter and more sophisticated email marketing campaigns, use MailerLite (free for up to 1,000 subscribers). Export the guest email list from Cloudbeds periodically and import into MailerLite (with GDPR consent tracking). Cloudbeds handles transactional emails; MailerLite handles marketing emails.

---

## 8. Monthly Cost Summary

| Item | Monthly Cost | Annual Cost |
|------|-------------|-------------|
| Static hosting (Cloudflare Pages) | Free | Free |
| Domain registration | ~EUR 1/month | ~EUR 12–15/year |
| Cloudbeds (PMS + BE + CM) | ~$150–250/month | ~EUR 1,800–3,000 |
| Google Workspace (email) | $6/user/month (~EUR 6) | ~EUR 72 |
| MailerLite (email marketing) | Free (under 1,000 subs) | Free |
| Stripe (payment processing) | Per-transaction fees only | Variable |
| CookieYes (cookie consent) | Free (under 100 pages) | Free |
| **TOTAL (fixed costs)** | **~$156–256/month** | **~EUR 1,900–3,100/year** |

Note: This excludes OTA commissions (variable, 3–20% per booking), Stripe transaction fees, and any advertising budget.

---

## 9. Implementation Checklist

### Week 1–2: Platform Setup

- [ ] Set up static hosting (Cloudflare Pages)
- [ ] Register/transfer domain and configure DNS via Cloudflare
- [ ] Set up Google Workspace for professional email
- [ ] Sign up for Cloudbeds (request quote, onboard with their support team)
- [ ] Set up Stripe account (stripe.com, Malta business registration)
- [ ] Connect Stripe to Cloudbeds

### Week 2–4: Content & Configuration

- [ ] Commission professional photography
- [ ] Customize HTML/CSS template with brand content, photos, and copy from Website Content document
- [ ] Configure rooms, rates, and seasonal pricing in Cloudbeds
- [ ] Customize Cloudbeds Booking Engine Plus with brand colors via dashboard (`#b95c47` primary, `#1b1b1b` background)
- [ ] Embed Cloudbeds Booking Engine Plus (full-page on `/book` page, popup button site-wide)
- [ ] Add sticky Book Now button using `<cb-book-now-button>` web component across all pages
- [ ] Set up automated guest emails in Cloudbeds
- [ ] Create translated page versions for multi-language support (EN, IT, FR, DE)

### Week 4–6: Distribution & Launch

- [ ] Connect Booking.com via Cloudbeds Channel Manager
- [ ] Connect Airbnb via Cloudbeds Channel Manager
- [ ] Connect Expedia via Cloudbeds Channel Manager
- [ ] Set up and verify Google Business Profile
- [ ] Connect Google Hotel Free Booking Links via Cloudbeds
- [ ] Claim TripAdvisor business listing
- [ ] Install cookie consent solution (CookieYes) via script tag
- [ ] Add Privacy Policy, Cookie Policy, and Terms pages
- [ ] Set up Google Analytics 4 via script tag in template `<head>`
- [ ] Test complete booking flow: website → booking engine → payment → confirmation email
- [ ] Test on mobile devices (iPhone, Android, tablet)
- [ ] Launch website and begin accepting direct bookings

### Month 2–3: Optimization

- [ ] Set up MailerLite and begin monthly newsletter
- [ ] Launch Instagram and Facebook with #StayAtRoel
- [ ] Begin blog publishing (2 posts/month)
- [ ] Review Cloudbeds analytics: booking sources, conversion rates, revenue
- [ ] Optimize rates using Cloudbeds Pricing Intelligence
- [ ] Start Google Ads and Meta Ads campaigns

---

*Document updated: February 14, 2026*
*Version 2.0 — Aligned with boutique-hotel website template, Wix references removed*
