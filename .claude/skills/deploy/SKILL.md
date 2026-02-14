---
name: deploy
description: Deploy to GitHub Pages (dev) or Cloudflare Pages (prod)
user_invocable: true
---

# /deploy — Deployment

## GitHub Pages (Development)

GitHub Pages deploys automatically when you push to `main`.

### Steps

1. **Check for uncommitted changes**
   ```bash
   git status
   ```
   If there are changes, commit them first.

2. **Push to main**
   ```bash
   git push origin main
   ```

3. **Verify deployment**
   ```bash
   gh api repos/EpicGrowth/roelboutique/pages
   ```
   Wait for status to show "built".

4. **Report live URLs**
   ```
   Deployed to GitHub Pages:
   - Comparison: https://epicgrowth.github.io/roelboutique/
   - Boutique:   https://epicgrowth.github.io/roelboutique/site-boutique/
   - Demo2:      https://epicgrowth.github.io/roelboutique/site-demo2/
   ```

### Troubleshooting
- 404 after push? Wait 30-60 seconds for build to complete
- Still 404? Check `gh api repos/EpicGrowth/roelboutique/pages` for errors
- Pages not enabled? `gh api repos/EpicGrowth/roelboutique/pages -X POST -f source.branch=main -f source.path=/`

## Cloudflare Pages (Production — Future)

Not yet configured. When ready:
- Connect Cloudflare Pages to the GitHub repo
- Set build output directory to the chosen variant (e.g., `site-boutique/` or root)
- Custom domain: roelboutiquebb.com (or similar)
- No build step needed — static files served directly
