# TODO — Shopify theme refactor (pixel-perfect)

- [x] Scaffold Shopify theme structure under `shopify-theme/`:
  - [x] `layout/` (theme.liquid, optional header/footer)
  - [x] `templates/` (index, page, collection, product)
  - [x] `sections/` (scaffold for home/page/collection/product)
  - [ ] `snippets/` (reusable UI like product card grid, headings, pills, newsletter form)
  - [x] `assets/` (theme JS placeholder, keep existing `assets/style.css`)
  - [x] Ensure `config/settings_schema.json` is wired
- [ ] Lock styling: do not change `shopify-theme/assets/style.css` in this phase.
- [ ] Implement home page rendering using Shopify sections that call existing assets/CSS without visual changes.

- [ ] Implement shop/category template using Shopify collections/products (or placeholder rendering) while preserving layout structure.
- [ ] Implement about page section(s).
- [ ] Expose content to Theme Customizer via section settings.
- [ ] Add theme JS for any interactions (only when it matches current behavior).
- [ ] SEO + accessibility pass (headings, alt text hooks, aria where needed) without changing visuals.
- [ ] Testing:
  - [ ] Compare desktop/tablet/mobile rendering against the current version
  - [ ] Pixel-diff / screenshot checks

