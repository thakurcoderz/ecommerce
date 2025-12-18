# Landing App

A modern, responsive e-commerce landing page application built with **Next.js 16**, **Tailwind CSS 4**, and **Radix UI**.

## Overview

This project is a fully functional e-commerce frontend designed to provide a seamless user experience. It features a clean design, intuitive navigation, and essential e-commerce functionalities like browsing products, managing a cart, and user authentication.

## Key Features

- **Product Management**: Browse product listings and view detailed product information.
- **Shopping Cart**: Add items to cart, view summary, and proceed to checkout.
- **Checkout Flow**: user-friendly checkout process.
- **User Authentication**:
  - Sign Up and Login pages
  - Forgot Password functionality
- **Wishlist**: Save favorite items for later.
- **Static Content**: Dedicated pages for Privacy Policy and Terms of Service.
- **Responsive Design**: Optimized for all device sizes.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) Primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows the standard Next.js App Router structure:

- `src/app`: Contains the application routes and pages (Cart, Checkout, Auth, Products, etc.).
- `src/components`: Reusable UI components.
  - `ui/`: Core UI primitives (often based on Radix UI).
  - Common components like `Navbar`, `Footer`, `ProductCard`.
- `public`: Static assets.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/overview/introduction)
