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
