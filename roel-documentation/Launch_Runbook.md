# Roel Boutique B&B — Launch Runbook

Step-by-step to take the site live on **Cloudflare Pages** with the
**Squarespace-registered domain**. The live site is the `site/` directory.

---

## 0. Pre-launch checklist

- [ ] Contact form backend deployed (Apps Script) and `/exec` URL pasted into `site/contact.html` — see §2
- [ ] Cloudflare Pages project connected to the GitHub repo, output dir = `site/` — see §1
- [ ] Custom domain added in Cloudflare Pages + DNS records set at Squarespace — see §3
- [ ] HTTPS works (`https://roelboutique.com` loads the homepage, not the comparison page)
- [ ] Test a booking click (Cloudbeds `egP6Av` opens) on homepage + one room page
- [ ] Submit the contact form once → confirm the email arrives at `reservations@roelboutique.com`
- [ ] **Replace the favicon** — `site/img/favicon.png` is still the template default. Supply a real Roel favicon (32×32 + ideally a 180×180 `apple-touch-icon`)
- [ ] (Optional) Supply the Roel **script logo** image if you want it in the header instead of the current text wordmark
- [x] Open Graph + Twitter tags on all 9 pages — done
- [x] Schema.org JSON-LD (BedAndBreakfast on home, HotelRoom on each room) — done
- [x] Removed 21 template leftover images + dead `mail.php` — done

---

## 1. Cloudflare Pages (hosting)

The site lives in `site/`, so we serve **that folder as the root** — no file
moves, and the archived `site-boutique/` `site-demo2/` and the root comparison
page stay out of production.

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Select the `EpicGrowth/roelboutique` repo, production branch `main`.
3. Build settings (it's a static site, no build step):
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `site`
4. Deploy. You'll get a `*.pages.dev` URL — verify it loads the B&B homepage
   (not the "Template Comparison" page).
5. Every push to `main` auto-deploys.

> Why not GitHub Pages? It serves from the repo root, so the domain would show
> the internal comparison page, and it can't run the old `mail.php`. Cloudflare
> Pages serves `site/` directly and is the project's planned prod host.

---

## 2. Contact form backend (Google Apps Script)

Full instructions are in `tools/contact-form/Code.gs`. Summary:

1. script.google.com → New project → paste `Code.gs`.
2. Deploy as **Web app** → *Execute as: Me*, *Access: Anyone* → copy the
   `/exec` URL.
3. In `site/contact.html`, replace `REPLACE_WITH_APPS_SCRIPT_EXEC_URL` (the form
   `action`) with that URL.
4. Commit + push. Test a submission; the email lands in
   `reservations@roelboutique.com` (Reply-To set to the sender).

---

## 3. Connect the Squarespace domain

The domain is registered at **Squarespace Domains**. Two paths:

**Option A — keep DNS at Squarespace (simplest, no nameserver change):**
1. In Cloudflare Pages → your project → **Custom domains → Set up a domain** →
   enter `roelboutique.com` (and add `www.roelboutique.com`). Cloudflare shows
   the DNS targets to create.
2. In Squarespace → **Domains → roelboutique.com → DNS settings**, add the
   records Cloudflare specifies (typically a `CNAME` for `www` → your
   `*.pages.dev` target, and the apex handled per Cloudflare's instructions).
3. Wait for DNS propagation (minutes to a couple of hours). Cloudflare issues
   the SSL cert automatically.

**Option B — move the domain's nameservers to Cloudflare (best long-term):**
1. Add `roelboutique.com` as a **Website/zone** in Cloudflare (free plan).
2. Cloudflare gives you two nameservers; set them in Squarespace → Domains →
   **Nameservers → Use custom nameservers**.
3. Once the zone is active, adding the custom domain in Pages is automatic
   (apex + `www` both work, with proxied SSL).

> Recommended: **Option B** — apex domain works cleanly, faster CDN/SSL, and all
> DNS managed in one place. The Epic Growth Cloudflare account already runs 9
> domains (incl. epicgrowth.com) this way.

### Current roelboutique.com DNS — snapshot 2026-06-20 (preserve email on migration)

Registrar/DNS: **Squarespace** (Google Cloud nameservers `ns-cloud-b{1..4}.googledomains.com`).
Site currently points to **Squarespace**; email is **Google Workspace**.

| Record | Current value | On migration |
|---|---|---|
| MX | `1 smtp.google.com` | **Preserve** (email) |
| TXT (SPF) | `v=spf1 include:_spf.google.com ~all` | **Preserve** |
| DKIM `google._domainkey` | `v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArn5Psl/yiuZGDPfnAlHoipq8iyviOS9J87K3SDAMl7IYLAViR3DMQiHu0Ej+zl2X/vbT+fy2VEMA3BLMdQWDj9WK+CgkVKYuJOnhotC0RNhCAvwQOV1XtYnholRcr1xdi0HLBiS7bgo…` | **Preserve** (verify full value imported) |
| DMARC `_dmarc` | *(none)* | optional — add `v=DMARC1; p=none; rua=mailto:reservations@roelboutique.com` later |
| A (apex) | `198.49.23.145` (Squarespace) | **Replace** → Cloudflare Pages |
| www | `ext-sq.squarespace.com` (Squarespace) | **Replace** → Cloudflare Pages |

### Migration steps (Option B), in order — do NOT switch nameservers until step 3
1. **Add the zone:** Cloudflare dash → **Add a site** → `roelboutique.com` → Free plan.
   Cloudflare auto-scans and imports the records above.
2. **Verify the email records imported** (MX `smtp.google.com`, SPF, full DKIM).
   Then add the website: Pages project → **Custom domains** → add `roelboutique.com`
   and `www.roelboutique.com` (auto-creates the Pages records, removing the
   Squarespace A/CNAME).
3. **Cut over:** Squarespace → Domains → `roelboutique.com` → **Nameservers →
   Use custom nameservers** → paste the two Cloudflare NS Cloudflare assigned.
4. Wait for the zone to go **Active** (minutes–hours). Cloudflare issues SSL
   automatically. Verify `https://roelboutique.com` loads the site **and** send a
   test email to `reservations@roelboutique.com` to confirm mail still flows.

---

## 4. After go-live

- Update `CLAUDE.md` hosting note (prod = Cloudflare Pages, live domain).
- Set up redirects if needed (e.g. `www` → apex) in Cloudflare.
- Submit the domain to Google Search Console + verify ownership.

---

## 5. Nice-to-haves (post-launch, not blocking)

- **Open Graph tags** on all pages → rich link previews when the site is shared
  on WhatsApp / Facebook / Instagram.
- **Schema.org `LodgingBusiness` / `BedAndBreakfast` JSON-LD** on the homepage →
  better Google results + map presence.
- **Favicon** is present; consider a 180×180 `apple-touch-icon` for iOS.
