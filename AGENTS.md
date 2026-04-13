# AGENTS Guide

This document helps AI coding agents work safely and consistently in this repository.

## Project Snapshot

- Project: `LuxeStore` (Next.js App Router storefront)
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Radix UI
- Package manager: npm (preferred in this repo)
- Core scripts:
  - `npm run dev`
  - `npm run lint`
  - `npm run build`

## High-Level Architecture

- `src/app`: route pages (home, products, product detail, cart, wishlist, checkout, auth, legal)
- `src/components/ui`: reusable design-system primitives
- `src/components/auth`: auth-specific layout wrappers
- `src/lib/data.ts`: seed catalog
- `src/lib/cart-store.ts`, `src/lib/wishlist-store.ts`: client-side state persisted via localStorage

## Design System Rules (Strict)

Use existing shared components whenever possible:

- `SectionHeading`
- `TheaterPanel`
- `FilterGroup`
- `StatTile`
- `SummaryRow`
- `EmptyStatePanel`

Visual direction:

- Dark-first surfaces (`#000000`, `#02090A`, `#061A1C`, `#102620`)
- Neon accent (`#36F4A4`) for focus/highlight only
- Pill controls, subtle borders, layered shadows
- Keep spacing rhythm consistent with `page-shell`, `section-space`, and existing section patterns

## Coding Guidelines

- Prefer editing existing files over introducing new abstractions unless repeated patterns exist.
- Avoid one-off style drift; if a pattern repeats 2+ times, extract a reusable component.
- Keep text and UI labels concise and product-friendly.
- Maintain accessibility basics (labels, `sr-only`, touch target sizes, visible focus states).

## Images

- Prefer `next/image` for UI images.
- If adding external image domains, update `next.config.ts` (`images.remotePatterns`).
- Existing remote domain configured: `images.unsplash.com`.

## Hydration / Client State Notes

- Cart/wishlist values are client-side and may differ from SSR initially.
- Guard SSR-sensitive UI when needed to avoid hydration mismatch.
- Input controls already use hydration-safe handling in shared input component.

## Validation Before Finishing

Always run:

```bash
npm run lint
npm run build
```

Address errors before handoff. Warnings may be acceptable only if explicitly documented.

## Safe Change Policy

- Do not remove or rewrite unrelated functionality.
- Do not commit secrets or environment values.
- Do not force destructive git operations.

## Preferred Workflow for Agents

1. Read relevant page/component files.
2. Reuse shared primitives first.
3. Keep edits minimal and focused.
4. Run lint/build.
5. Summarize changed files and rationale.
