# Kadam-e-Ziyarat — kadameziyarat.com

A Next.js 14 website for Kadam-e-Ziyarat, a trusted Iraq & Iran Ziyarat (Shia pilgrimage) tour operator. Black & gold Karbala-inspired theme with animated golden dome hero, girih (8-point star) patterns, scroll-reveal animations, and a WhatsApp-powered enquiry flow.

## Pages

- `/` Home — animated shrine skyline hero, packages, destinations, testimonials
- `/about` — mission, vision, values
- `/services` — 9 services (packages, visas, hotels, transport, guides, Arbaeen support)
- `/packages/iraq` — 11-day itinerary timeline + pricing tiers
- `/packages/iran` — Mashhad, Qom, Shiraz itinerary + pricing
- `/packages/combined` — 19-day Iraq + Iran journey
- `/packages/arbaeen` — Arbaeen 2026 + Muharram packages
- `/destinations` — pilgrim's guide to 7 holy cities
- `/faq` — animated accordion
- `/contact` — enquiry form that opens a pre-filled WhatsApp message
- `/terms`, `/privacy` — legal pages
- SEO: per-page metadata, sitemap.xml, robots.txt

## Tech

- Next.js 14 (App Router), React 18
- Tailwind CSS 3
- Pure CSS + IntersectionObserver animations (no heavy animation libraries)
- Google Fonts via `next/font`: Marcellus (display), Mulish (body), Amiri (Arabic)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## Deploy

Deploys out of the box on Vercel — import the GitHub repo and press Deploy. Also works on Netlify or any Node host.

## Contact Configuration

WhatsApp number, email, and all package data live in `lib/data.js` — edit once, updates everywhere.
