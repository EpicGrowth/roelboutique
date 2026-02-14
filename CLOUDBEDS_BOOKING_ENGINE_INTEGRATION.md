# Cloudbeds Booking Engine Plus Integration Guide
## For Roel Boutique B&B Malta - Static HTML/CSS Website

This document provides complete integration instructions for Cloudbeds Booking Engine Plus on a custom HTML/CSS website (non-CMS).

---

## 1. How Booking Engine Plus Works with Static HTML/CSS

Cloudbeds Booking Engine Plus uses **modern web components** (custom HTML elements) to embed the booking experience directly into your static website. Unlike the deprecated iframe approach, this method:

- Provides a seamless, integrated booking experience
- Is faster and more secure (PCI-compliant)
- Works with modern browsers (Safari, Chrome, Firefox, Edge)
- Allows customization via CSS and JavaScript
- Supports Google Analytics tracking out of the box
- Delivers 20-30% higher conversion rates compared to old iframe method

The integration requires:
1. A single JavaScript file loaded in your page `<head>`
2. Custom HTML web component tags where you want the booking engine to appear

---

## 2. Embedding Options

### Option A: Full-Page Embed (Standard Mode)

Embeds the complete booking engine as a full page section of your website.

**Step 1:** Add this script tag to your HTML `<head>` section:

```html
<script
  src="https://static1.cloudbeds.com/booking-engine/latest/static/js/immersive-experience/cb-immersive-experience.js"
  type="text/javascript">
</script>
```

**Step 2:** Add the web component where you want the booking engine to appear:

```html
<cb-immersive-experience
  mode="standard"
  property-code="YOUR_PROPERTY_CODE">
</cb-immersive-experience>
```

**Use case:** Dedicated `/book` or `/reservations` page on your website.

---

### Option B: Popup Modal (Book Now Button)

Adds a "Book Now" button that opens the booking engine in a slide-in modal/popup.

**Step 1:** Add the same script tag to your `<head>`:

```html
<script
  src="https://static1.cloudbeds.com/booking-engine/latest/static/js/immersive-experience/cb-immersive-experience.js"
  type="text/javascript">
</script>
```

**Step 2:** Add the Book Now button component anywhere in your HTML:

```html
<cb-book-now-button
  property-code="YOUR_PROPERTY_CODE">
</cb-book-now-button>
```

**Step 3 (Optional):** Customize the button appearance:

```html
<cb-book-now-button
  property-code="YOUR_PROPERTY_CODE"
  class-name="custom-book-btn"
  label="Reserve Your Room"
  height="90vh"
  width="90vw">
</cb-book-now-button>
```

**Use case:** Header navigation, hero section call-to-action, or floating button on every page.

---

### Option C: Pre-built Widgets (7 Types Available)

Cloudbeds provides 7 pre-configured widget types with different layouts (search bars, date pickers, buttons, etc.). These are generated through your Cloudbeds dashboard.

**Access:** Cloudbeds Dashboard → Account Menu → Settings → Booking Engine → Widgets

**Widget Types:**
- Horizontal search bar with date picker
- Vertical search bar
- Simple button (no date picker)
- Date picker only
- Mini widget
- Banner widget
- Floating button

**Implementation:** Copy the generated code snippet and paste into your HTML.

---

## 3. Finding Your Property Code

Your property code is a **6-character alphanumeric value** found at the end of your Booking Engine URL.

**Where to find it:**
1. Log into Cloudbeds
2. Go to: **Account Menu → Settings → Booking Engine → Summary tab**
3. Look for: `https://hotels.cloudbeds.com/reservation/XXXXXX`
4. The `XXXXXX` is your property code

**Example:** If your URL is `https://hotels.cloudbeds.com/reservation/ab12cd`, your property code is `ab12cd`.

---

## 4. Customization Options

### A. Visual Customization (Colors, Fonts, Branding)

**Accessed via:** Cloudbeds Dashboard → Settings → Booking Engine → Customize

#### Color Picker Tool (No Code Required)
- **Primary Color:** CTA buttons, date picker, hyperlinks
- **Secondary Color:** Headers, accents
- **Background Color:** Page background
- **Text Color:** Main text elements

Use tools like [Image Color Picker](https://imagecolorpicker.com/) or [Google Color Picker](https://www.google.com/search?q=color+picker) to match your brand colors.

#### Custom CSS/HTML
**Location:** Settings → Booking Engine → Customize → **Embed Custom Code**

Add custom CSS within `<style>` tags:

```html
<style>
  /* Change primary button color to match template accent */
  .cb-button-primary {
    background-color: #b95c47 !important; /* Rust/Terracotta */
    border-color: #b95c47 !important;
  }

  /* Customize fonts to match template */
  .cb-booking-engine {
    font-family: 'Barlow', sans-serif !important;
  }

  /* Room type cards */
  .cb-room-card {
    border-radius: 8px !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
  }

  /* Header customization */
  .cb-header {
    background-color: #222 !important;
  }
</style>
```

**Important Notes:**
- Custom code added in Cloudbeds settings applies to the standalone booking engine
- For Immersive Experience 2.0, add custom CSS/JS directly to your website's HTML, not in Cloudbeds settings
- Do NOT use Immersive Experience web components inside iframes

---

### B. Customizing the Book Now Button

Style the button using standard CSS:

```html
<style>
  .custom-book-btn {
    background-color: #b95c47;
    color: white;
    padding: 15px 30px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 15px;
    font-weight: 400;
    border: none;
    border-radius: 0;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .custom-book-btn:hover {
    background-color: #a04d3b;
  }
</style>

<cb-book-now-button
  property-code="YOUR_PROPERTY_CODE"
  class-name="custom-book-btn"
  label="Book Your Stay">
</cb-book-now-button>
```

---

### C. Advanced Customization with JavaScript

Add custom behavior or tracking:

```html
<script>
  // Track booking engine opens
  document.addEventListener('DOMContentLoaded', function() {
    const bookButton = document.querySelector('cb-book-now-button');

    if (bookButton) {
      bookButton.addEventListener('click', function() {
        console.log('Booking engine opened');

        // Google Analytics event tracking
        if (typeof gtag !== 'undefined') {
          gtag('event', 'booking_engine_open', {
            'event_category': 'Booking',
            'event_label': 'Book Now Button Click'
          });
        }
      });
    }
  });
</script>
```

---

## 5. Old iframe vs New Booking Engine Plus

### Key Differences

| Feature | Old iframe | Booking Engine Plus (Immersive 2.0) |
|---------|-----------|-------------------------------------|
| Technology | iframe embed | Web components |
| Security | Vulnerable to clickjacking | PCI-compliant, secure |
| Browser Support | Safari ending support | All modern browsers |
| Performance | Slower load times | Faster, optimized |
| Customization | Limited | Full CSS/JS control |
| Conversion Rate | Baseline | 20-30% higher |
| Mobile Experience | Basic | Fully responsive |
| Google Analytics | Manual setup | Built-in support |

### Migration Deadline
The old iframe-based booking engine will be **discontinued at the end of Q1 2026**. All properties must migrate to Booking Engine Plus with Immersive Experience 2.0.

### Why the Change?
- **Security:** iframes expose sites to clickjacking, data leaks, and cross-site vulnerabilities
- **Browser Support:** Safari and other browsers are ending third-party iframe support
- **User Experience:** Modern web components provide seamless, faster booking flows
- **Performance:** Better load times and mobile optimization

---

## 6. What is Immersive Experience 2.0?

**Immersive Experience 2.0** is Cloudbeds' latest booking engine technology that replaces the old iframe system with a modern, fully integrated web component solution.

### Key Features

1. **Seamless Integration**
   - Booking engine feels like part of your website, not an external embed
   - Consistent branding throughout the booking flow
   - No visual breaks or page redirects

2. **Higher Conversions**
   - 20-30% increase in booking conversion rates
   - Fewer clicks to complete a reservation
   - Faster page load times
   - Mobile-optimized experience

3. **Two Embed Modes**
   - **Full-page:** Complete booking engine on a dedicated page
   - **Popup/Modal:** Slide-in panel from the edge of the screen

4. **Enhanced Features**
   - PCI-compliant secure payment processing
   - Google Analytics compatibility with purchase tracking
   - Pre-arrival upsells (early check-in, late checkout, room upgrades)
   - Multi-language support
   - Dynamic pricing display

5. **Developer-Friendly**
   - Web component architecture
   - Full CSS customization
   - JavaScript event hooks
   - Responsive by default

---

## 7. Complete Integration Example for Roel Boutique

Here's a complete HTML page example for Roel Boutique:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Your Stay - Roel Boutique B&B Malta</title>

  <!-- Google Fonts (matching template) -->
  <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Gilda+Display&display=swap" rel="stylesheet">

  <!-- Cloudbeds Booking Engine Script -->
  <script
    src="https://static1.cloudbeds.com/booking-engine/latest/static/js/immersive-experience/cb-immersive-experience.js"
    type="text/javascript">
  </script>

  <!-- Custom Styles (matching boutique-hotel template) -->
  <style>
    body {
      font-family: 'Barlow', sans-serif;
      font-size: 15px;
      line-height: 1.75em;
      margin: 0;
      padding: 0;
      background-color: #1b1b1b;
      color: rgba(255,255,255,0.6);
    }

    h1, h2, h3 {
      font-family: 'Gilda Display', serif;
      color: #fff;
      font-weight: 400;
    }

    h4 {
      font-family: 'Barlow Condensed', sans-serif;
      text-transform: uppercase;
      letter-spacing: 5px;
      font-size: 15px;
      color: #fff;
    }

    .header {
      background-color: #1b1b1b;
      padding: 60px 20px;
      text-align: center;
      color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    /* Customize Book Now Button (matching template .butn-dark) */
    .book-btn {
      background-color: #b95c47;
      color: white;
      padding: 15px 25px;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 15px;
      font-weight: 400;
      border: none;
      border-radius: 0;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 3px;
      transition: all 0.3s ease;
    }

    .book-btn:hover {
      background-color: #fff;
      color: #333;
    }

    /* Customize Booking Engine Colors */
    .cb-button-primary {
      background-color: #b95c47 !important;
      border-color: #b95c47 !important;
    }

    .cb-room-card {
      border-radius: 0 !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
    }
  </style>
</head>
<body>
  <div class="header">
    <h4>Roel Boutique B&B</h4>
    <h1>Book Your Stay in Malta</h1>
    <p>Experience authentic Maltese hospitality in the Three Cities</p>

    <!-- Book Now Button (Opens Modal) -->
    <cb-book-now-button
      property-code="YOUR_PROPERTY_CODE"
      class-name="book-btn"
      label="Book Your Stay"
      height="90vh"
      width="90vw">
    </cb-book-now-button>
  </div>

  <div class="container">
    <!-- Full-Page Booking Engine -->
    <cb-immersive-experience
      mode="standard"
      property-code="YOUR_PROPERTY_CODE">
    </cb-immersive-experience>
  </div>

  <!-- Optional: Google Analytics Tracking -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const bookButton = document.querySelector('cb-book-now-button');

      if (bookButton) {
        bookButton.addEventListener('click', function() {
          // Track button clicks
          console.log('Booking modal opened');
        });
      }
    });
  </script>
</body>
</html>
```

---

## 8. Implementation Checklist

- [ ] Find your property code from Cloudbeds dashboard
- [ ] Add Cloudbeds JavaScript to your site's `<head>` section
- [ ] Choose embed method: full-page, popup, or widget
- [ ] Add the appropriate web component tag(s)
- [ ] Replace `YOUR_PROPERTY_CODE` with actual code
- [ ] Customize colors in Cloudbeds dashboard (Settings → Booking Engine → Customize)
- [ ] Add custom CSS to match your brand (fonts, colors, spacing)
- [ ] Test booking flow on desktop and mobile
- [ ] Set up Google Analytics tracking (if needed)
- [ ] Add Book Now buttons to navigation/header
- [ ] Test on all major browsers (Chrome, Safari, Firefox, Edge)
- [ ] Verify payment processing works correctly

---

## 9. Support Resources

- **Cloudbeds Support:** [https://myfrontdesk.cloudbeds.com/hc/en-us](https://myfrontdesk.cloudbeds.com/hc/en-us)
- **Developer Documentation:** [https://developers.cloudbeds.com/](https://developers.cloudbeds.com/)
- **Booking Engine Settings:** Cloudbeds Dashboard → Settings → Booking Engine
- **Widget Generator:** Cloudbeds Dashboard → Settings → Booking Engine → Widgets
- **Customization Help:** Settings → Booking Engine → Customize → Embed Custom Code

---

## 10. Best Practices for Roel Boutique

### For a 3-6 Room Property:

1. **Use Popup Mode for Navigation**
   - Add a Book Now button in your header
   - Keeps users on your site while browsing
   - Quick access from any page

2. **Full-Page for Dedicated Booking Page**
   - Create a `/book` or `/reservations` page
   - Use full-page embed for complete experience
   - Link to this from your homepage hero section

3. **Mobile-First Testing**
   - Most travelers book on mobile
   - Test both popup and full-page on phones
   - Ensure buttons are easily tappable

4. **Brand Consistency**
   - Match booking engine colors to your website palette
   - Use same fonts throughout
   - Keep your logo visible during booking flow

5. **Performance**
   - Load the Cloudbeds script asynchronously if possible
   - Minimize other scripts on booking page
   - Optimize images on pages with booking widgets

---

## Notes

- **Do NOT** place Immersive Experience web components inside iframes
- **Do NOT** add Immersive custom code to Cloudbeds settings; add to your website HTML instead
- **Always** test in a staging/test environment before deploying to production
- **Keep** the Cloudbeds script URL up to date (uses `/latest/` path for automatic updates)

---

*Document created: February 14, 2026*
*For: Roel Boutique B&B Malta - Static HTML/CSS Website Integration*
