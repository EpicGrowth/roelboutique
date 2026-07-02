# QR Codes — roelboutique.com

Print-ready QR codes linking to **https://roelboutique.com**.
Error correction level H (30%) — scans reliably even when partially obscured or printed small.

| File | Use |
|------|-----|
| `roel-qr-charcoal.svg` / `.png` | Dark Charcoal `#1b1b1b` on white — safest contrast, use by default |
| `roel-qr-terracotta.svg` / `.png` | Rust Terracotta `#b95c47` on white — brand accent variant |
| `*-transparent.png` | Same, with transparent background — for placing on light/cream surfaces only |

- **SVG** is preferred for print and Canva — scales to any size with no quality loss.
- **PNG** is 4200 × 4200 px (~35 cm at 300 dpi).
- Keep the white quiet zone around the code — don't crop it or place the code on a busy background.
- Minimum printed size: ~2 × 2 cm; larger for posters/signage scanned from a distance.

Regenerate with `segno` (Python): `segno.make("https://roelboutique.com", error="h")`.
