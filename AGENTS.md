# Instructions for AI coding assistants

The person asking for changes is **non-technical**. Explain what you did in plain language, avoid jargon, and never ask them to run terminal commands. Run anything needed yourself.

## Project

Static marketing site for Geevo Herbs (Ayurvedic wellness brand). Plain HTML + CSS + a little vanilla JS. **No frameworks, no build step, no npm, no dependencies.** Keep it that way unless explicitly asked. The site must work by double-clicking `index.html` (file://), so use relative paths only (`img/...`, `../style.css`).

- `index.html`: brand landing page. The brand comes first; products are last.
- `products/<slug>.html`: one page per product, laid out like an Amazon listing. "Shop on Amazon" replaces add-to-cart.
- `style.css`: single shared stylesheet. Brand tokens are in `:root`.
- `gallery.js`: shared product gallery (scroll-snap track + thumbnails).
- `img/`: web-optimized images. `img/<product-slug>/` holds product gallery images (square, 1200×1200).

## Brand

- Name: **Geevo** (never "Jeevo"/"Jivo"). Tagline: "Nature's vibrant secret".
- Colors: `#ebae4f` `#f0eb5c` `#b87aae` `#d65592` `#6fb8ba` `#53ad70`. Vibrant mesh gradients with white type are the signature look.
- Fonts: Melodrama (Fontshare) for headings, Montserrat (Google Fonts) for body/UI.
- Contact: geevoherbs@gmail.com, instagram.com/geevo.herbs

## Rules

- **Mobile first.** Check every change at phone width (~375px) and desktop.
- **Images:** resize before adding (max ~1600px wide, JPEG quality ~70, product gallery 1200×1200 square). Never commit multi-MB originals.
- **Adding a product:** copy `products/pain-balm.html`, create `img/<slug>/`, and add a card to `.product-grid` in `index.html`. Remove the "coming soon" card once there are 3+ products.
- **Shared parts:** the header and footer are duplicated in every page. When changing them, update all pages.
- **Health claims:** keep the FDA disclaimer in the footer. Don't invent medical claims; use wording from the product label or Amazon listing.
- Keep the Amazon link (`https://www.amazon.com/dp/B0DJ1P9RF1`) and the price consistent everywhere they appear.
- Don't commit personal info (phone numbers, personal emails) or the `.claude/` folder.

## Saving / publishing

If asked to "save", "publish" or "push": commit with a short plain message and push to `main`. The host (Netlify) redeploys automatically.
