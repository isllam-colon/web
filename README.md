# RUBE — Premium Women's Activewear

A mobile-first, premium e-commerce experience for the RUBE activewear brand. Built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, and Zustand.

## Features

- Full homepage with hero, collections, best sellers, lifestyle banner, new arrivals, why RUBE, reviews, UGC, community, Instagram feed, and newsletter
- Shop with category filtering (Sets, Tops, Bottoms, Modest Swimwear, New Arrivals)
- Product pages with image gallery, zoom, size guide, fabric/fit details, reviews, related products, sticky mobile add-to-cart
- Cart drawer with promo codes (`RUBE10`, `WELCOME15`) and upsell
- Minimal checkout flow
- Wishlist
- English + Arabic (RTL) with language switcher
- Light/dark theme (soft dark, not aggressive gym aesthetic)
- SEO metadata and accessible markup

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — middleware redirects to `/en` or `/ar`.

## Promo Codes

- `RUBE10` — 10% off
- `WELCOME15` — 15% off

## Project Structure

```
src/
  app/[locale]/     # Localized routes
  components/       # UI, layout, home, product, cart
  lib/              # Data, stores, i18n, utils
  messages/         # en.json, ar.json
  types/
```

## Brand Colors

- Baby Pink `#E7C9D1`
- Dusty Pink `#DDBBC5`
- Soft Pink `#F1DDE2`
- Off White `#FAF8F6`
- Charcoal `#2B2B2B`
