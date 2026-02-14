---
name: start
description: Session start protocol — gather context, ask goals, create branch if needed
user_invocable: true
---

# /start — Begin a Work Session

Run this at the start of every session. Do NOT skip steps.

## Steps

### 1. Gather Context
- Run `git status` and `git log --oneline -5`
- Check which variant(s) exist: `site-boutique/`, `site-demo2/`
- Note any uncommitted changes or untracked files

### 2. Review Project Docs
- Read `/home/umbrel/dev/roelboutique/CLAUDE.md` for current project state
- Check the live preview URLs are still accurate
- Familiarize yourself with the content sources (read as needed for the session's goal):

| Document | Purpose | When to consult |
|----------|---------|-----------------|
| `roel-documentation/Roel_Website_Content.md` | Ready-to-use copy for every page | Any content work — headings, body text, CTAs, SEO meta |
| `roel-documentation/Roel_Brand_Guidelines.md` | Colors, fonts, voice, photography | Design decisions, tone of writing, visual consistency |
| `roel-documentation/Roel_Website_Sitemap_Content_Brief.md` | Page specs, section mapping, template notes | Adding new pages, restructuring navigation |
| `roel-documentation/Cloudbeds_Strategy.md` | PMS, channels, payments, operations | Booking flow, pricing, channel strategy |
| `CLOUDBEDS_BOOKING_ENGINE_INTEGRATION.md` | Embed code, widget options, customization | Any Cloudbeds integration work |

### 3. Report Context
Print a brief status summary:
```
Session Start
Branch: [current branch]
Last commit: [subject]
Uncommitted changes: [yes/no — list if yes]
Variants: [boutique / demo2 / both]
```

### 4. Ask Session Questions
Use AskUserQuestion to ask:
- **Session name**: What should we call this session? (short label, e.g. "rooms-page", "hero-images")
- **Goal**: What do we want to accomplish today?
- **Branch**: Work on `main` (minor changes) or create a feature branch?

### 5. Create Branch (if needed)
If user chose feature branch:
```bash
git checkout -b [session-name]
```

### 6. Create Session Log Entry
Append to `SESSION_LOG.md` (create if it doesn't exist):
```markdown
## [Date] — [Session Name]
**Goal:** [user's stated goal]
**Branch:** [branch name]
**Status:** In Progress
```

Then begin working on the user's goal.
