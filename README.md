# LuxeStore

A dark-first e-commerce frontend built with Next.js App Router, featuring a Shopify-inspired visual system, full catalog browsing, wishlist/cart flows, auth pages, checkout, and polished empty/not-found states.

## Project Overview

LuxeStore is a frontend-focused commerce experience with:

- Cinematic dark UI system (theater cards, pill controls, strict spacing rhythm)
- Product catalog with category filters and sorting
- Product detail pages with tabs and related items
- Cart, wishlist, and checkout flows
- Auth pages (login, signup, forgot password)
- Legal pages and custom not-found pages

This project uses local state and browser storage for cart/wishlist interactions (no backend required).

## Prerequisites

Before running the project, make sure you have:

- Node.js `>=20` (recommended: latest LTS)
- npm `>=10` (or pnpm/yarn/bun if preferred)
- Git

Optional but recommended:

- VS Code + ESLint extension
- Modern Chromium-based browser for best local preview fidelity

## Tech Stack

- Framework: [Next.js 16](https://nextjs.org/) (App Router)
- UI: [React 19](https://react.dev/)
- Styling: [Tailwind CSS 4](https://tailwindcss.com/)
- Primitives: [Radix UI](https://www.radix-ui.com/primitives)
- Icons: [Lucide React](https://lucide.dev/)
- Language: [TypeScript](https://www.typescriptlang.org/)

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - start dev server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Project Structure

- `src/app` - App Router pages/routes
  - `products`, `cart`, `wishlist`, `checkout`, `login`, `signup`, `forgot-password`
  - `not-found.tsx` and route-level not-found pages
- `src/components`
  - `ui/` shared primitives + design-system components
  - commerce components (`navbar`, `footer`, `product-card`, etc.)
  - `auth/` auth layout wrappers
- `src/lib`
  - `data.ts` product seed catalog
  - cart/wishlist state stores

## AI Agent Notes

- The canonical agent instruction file is `AGENTS.md`.
- If an automation references `AGETNS.md`, that file exists as a compatibility pointer back to `AGENTS.md`.

## Image Configuration

Remote Unsplash images are used in catalog/auth visuals. Host is allowed in `next.config.ts` via `images.remotePatterns`.

If you add new external image domains, update `next.config.ts` accordingly.

## Notes and Troubleshooting

- Hydration mismatches can happen if browser extensions inject attributes before React hydrates. Shared input fields already use hydration-safe handling.
- Cart/wishlist data persists in `localStorage`.
- If UI appears stale after structural changes, hard refresh (`Cmd+Shift+R` / `Ctrl+Shift+R`).

## Design System Direction

The UI follows a strict dark-first system with:

- Layered dark surfaces (`#000000`, `#02090A`, `#061A1C`, `#102620`)
- Neon focus accent (`#36F4A4`) used sparingly
- Pill interaction model and soft, multi-layered elevation
- Reusable strict components (`SectionHeading`, `TheaterPanel`, `FilterGroup`, `StatTile`, `SummaryRow`, `EmptyStatePanel`)

## Validation Checklist

Before shipping changes:

```bash
npm run lint
npm run build
```

Both should pass locally.
