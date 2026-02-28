# Session Log

## 2026-02-16 — content-update
**Goal:** Add social media hrefs to icons, fix hero slider
**Branch:** main
**Status:** Complete
**Changes:**
- Added Instagram and Facebook URLs to footer social icons (all 3 variants)
- Removed TikTok and X/Twitter icons (not in use)
- Fixed hero slider white flash on loop by adding `bg-blck` class to slider header
- Set up Canva MCP server for future design work
**Commit:** 85b834d

## 2026-02-16 — design-tweaks
**Goal:** Add/update pages
**Branch:** main
**Status:** Complete (partial — shell broke, needs follow-up)
**Changes:**
- Downloaded 44 property photos from Google Drive into `canva/Photography/` (Breakfast Area, Reception, Room 01, Logo)
- Created warm/moody photo edit proof-of-concept with Pillow (`breakfast-edited.jpg`)
- Added `canva/` to `.gitignore` to keep large photos out of repo
- Explored Canva Connect API OAuth setup (cloned starter kit, configured, then removed — not needed yet)
- Missing folders: Room 101-303, Room 401, Terrace (Google Drive rate limit)
**Note:** Shell broke mid-session (deleted dir while it was cwd). Need to commit `.gitignore` change and retry remaining photo downloads in next session.

## 2026-02-16 — design-polish
**Goal:** Continue previous work — commit .gitignore, design polish
**Branch:** main
**Status:** Complete (session ended without summary)

## 2026-02-17 — content-update-2
**Goal:** Photography editing & site updates
**Branch:** main
**Status:** Complete
**Changes:**
- Iterated through photo processing scripts (v5→v6→v7) to find the right cinematic edit style
- v7 final settings: brightness 0.68, saturation 0.62, contrast 1.35, warm shift, heavy vignette — matches template's dark luxury aesthetic
- Processed all 113 property photos with v7 settings (client later deleted v7 output, preferring originals)
- Added Auttan Regular webfont for "Roel Boutique" logo text (client request to match their logo font)
- Logo sized to 60px with "Bed & Breakfast" subtitle at -21px margin
- Replaced all 3 hero slider images with actual property photos:
  - Slide 1: reception-checkin.jpg (models at check-in desk)
  - Slide 2: room-bed.jpg (Room 101 bed, flipped)
  - Slide 3: terrace.jpg (rooftop terrace, flipped)
- Replaced Breakfast Included section photo with actual breakfast area image
- Added photography/ and roel-font/ to .gitignore
**Commit:** 2a11d66

## 2026-02-17 — content-update
**Goal:** Update content
**Branch:** main
**Status:** Complete
**Changes:**
- Added subtle dark background to navbar on initial load (rgba 0,0,0,0.3) for logo/menu readability
- Fixed mobile navbar: media query was overriding background to transparent
- Increased mobile header height to 120px, centered logo and hamburger
- Mobile menu now drops below header as overlay (no longer resizes header)
- Added per-slide background-position via data-position attribute for mobile focal points
- Replaced hero slide 3 (terrace) with room-painting photo (IMG_1952-HDR)
- Flipped room-bed hero slide horizontally
- Fixed slider transition flash (bg-blck changed to #000)
- Removed site-boutique/ directory — site/ is now the sole active directory
- Attempted skyline logo extraction from PDF (user will redo in Canva as PNG)
**Commit:** 0c76473

## 2026-02-17 — design-polish
**Goal:** Polish existing pages — refine hero, nav, sections, mobile experience
**Branch:** main
**Status:** Complete
**Changes:**
- Fixed hero slide 2 mobile focal point (right center → 30% center) to show bed
- Updated phone number to +356 2167 7007 across all 5 display instances and 3 tel: links
- Added full street address to footer (San Francisk Road, 7/8 Sqaq L-Erwieh, BML 9063)
- Replaced About section images with actual property photos (roel-entrance.jpg, roel-guest-reading.jpg)
- Replaced Welcome Drink card image with breakfast nook photo (roel-breakfast-nook.jpg)
- Replaced Local Insider Tips card with guest reading photo (roel-guest-relaxing.jpg)
- Renamed "Harbour Views" card to "Heritage Setting" with updated copy
- Replaced Heritage Setting card image with terrace photo (roel-terrace-heritage.jpg)
- Added heritage paragraph to "Your Stay at Roel" section
- Replaced Testimonials background with Room 101 wide shot (roel-room-wide.jpg)
- Replaced Breakfast Tradition photo with breakfast spread (roel-breakfast-spread.jpg)
- Replaced Heritage & History photo with guest at heritage desk (roel-heritage-interior.jpg)
- Batch-processed 114 property photos with dark/moody template style to photography/Edited/
**Commit:** 45fa009

## 2026-02-25 — homepage-content
**Goal:** Update homepage sections and images
**Branch:** homepage-content → squash-merged to main
**Status:** Complete
**Changes:**
- Replaced Heritage Suite & Harbour View stock photos with seamless panoramic split from Room 102 property photo
- Replaced Terrace Room stock photo with Room 101 bed-focused crop
- Replaced Limestone Room stock photo with Room 102 landscape crop (yellow cushions, harbour painting)
- Added real neighbourhood photos (Three Cities harbour, Valletta ferry view)
- Updated CTA band background with real room photo
- Corrected ferry time from "Five Minutes" to "Ten Minutes to the Capital"
- Footer title updated to "About Roel Boutique"
**Commit:** 0fad6ea (squash merge via PR #1)

## 2026-02-27 — deploy-check
**Goal:** Bug fixes / polish — check latest updates are live
**Branch:** main
**Status:** Complete
**Changes:**
- Verified local and remote are in sync (commit 6f80db8)
- Diagnosed GitHub Pages not serving latest build — last successful deploy was from 0fad6ea
- Triggered manual GitHub Pages rebuild via API
- Confirmed local preview at localhost:8000 shows correct images
- Identified issues for future sessions: dead room-details.html links, stock Courtyard Room image (7.jpg), meta description still says "5 min ferry"
**Commit:** none (no code changes)

## 2026-02-28 — content-update
**Goal:** Build individual room pages and apply client content updates
**Branch:** content-update
**Status:** Complete
**Changes:**
- Built 5 room detail pages (Heritage Suite, Terrace Room, Limestone Room, Cargo View Room, Courtyard Room) with photo sliders, galleries with lightbox, amenities sidebar, booking CTA, and cross-links
- Updated homepage room cards with correct links, prices, and names (Harbour View → Cargo View)
- Applied client content changes from Google Doc: breakfast description, tea & coffee amenity (replaced welcome drink), content doc sync
- Removed 12 unused placeholder images, cleaned up old harbour-view.jpg
- Added site/.claude/ to gitignore
**Commit:** 1c9a8db (squash-merged PR #2)

## 2026-02-28 — bug-fixes
**Goal:** Fix known issues — dead room-details.html links, stock Courtyard Room image (7.jpg), meta description "5 min ferry"
**Branch:** main
**Status:** Complete
**Changes:**
- Fixed meta description: "5 min ferry" → "10 min ferry to Valletta"
- Replaced 15 dead room-details.html links with # anchors (room pages to be built later from template)
- Replaced stock Courtyard Room image (7.jpg) with real property photo (roel-room-wide.jpg)
- Added terrace exterior photo (IMG_1909-HDR) as testimonials background
- Cropped heritage interior photo to remove excess lower body
- Replaced dark/vignetted section photos with bright originals (heritage interior, Valletta ferry view, Three Cities harbour)
- Resized oversized images for web (25MB → 293KB, 21MB → 654KB)
**Commit:** 927be72
