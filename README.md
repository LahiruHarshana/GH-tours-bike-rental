# Lanka Loop — Next.js Conversion

This project converts the approved `index.html` website into a Next.js App Router project while preserving the existing design, layout, typography, colours, and GSAP/Lenis animation behaviour.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS (preflight disabled to preserve the exact original visual system)
- Original CSS in `app/globals.css`
- GSAP, ScrollTrigger, and Lenis loaded client-side

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Main files

- `app/page.tsx` — page entry
- `components/LankaLoopSite.tsx` — approved website markup and client script loading
- `app/globals.css` — exact original design CSS plus Tailwind directives
- `public/site.js` — original interactions, booking forms, mobile menu, and scroll animations

## Before launch

Replace the placeholder WhatsApp number `94770000000`, email, company details, sample reviews, and operating policies.
