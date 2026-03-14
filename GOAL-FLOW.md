# Goal Flow — Butcherbird Website

## The End Goal
A high-converting agency website that generates qualified inbound leads from hard-currency markets (UAE, UK, US, AUS). The website is a proof of credibility — it must make the right person believe Butcherbird is the obvious choice before they contact.

## The Flow

```
Visitor lands
  → Hero: positioning statement + stats (instant credibility)
  → What We Do: offer clarity (paid media + email, full-stack)
  → Proof of Work: case studies with real numbers (BUUB, Schnozz, client roster)
  → Testimonials: social proof from real clients
  → Audit CTA: low-friction entry point (free account audit)
  → Contact / Partner page: proposal request
```

## Components and Their Role
- **Homepage (app/page.tsx):** Full conversion journey in one scroll — hero, stats, proof, CTA
- **Portfolio page (app/portfolio/page.tsx):** Internal brand depth — BUUB, Schnozz, Superior timelines + KPIs
- **Work page (app/work/page.tsx):** Full client roster with filter (All / Internal / Client)
- **Partner page (app/partner/page.tsx):** Partnership types + contact form
- **lib/data.ts:** All 12 case studies — single source of truth for proof of work content
- **app/globals.css:** Entire design system — CSS vars, typography, all component styles. Do not introduce inline styles or component libraries.
- **components/Nav.tsx:** Fixed white nav, route-aware
- **components/CaseStudyCard.tsx + Modal.tsx:** Case study display layer
- **components/RevealOnScroll.tsx:** Scroll animations via IntersectionObserver

## What Must Not Break
- The design system in globals.css — all styling must use CSS vars defined there
- The CaseStudy type in lib/data.ts — CaseStudyCard and Modal both depend on it
- The RevealOnScroll animation system — .reveal / .reveal-l / .tl-item classes trigger on scroll
- Mobile responsiveness — all pages must work across viewports
- Deploy pipeline — git push to main → Vercel auto-deploys. No manual deploy steps.

## Current State
Live. Placeholder content exists for: testimonials (3 cards), VSL video, team photos, 3 client case studies.
Priority: replace placeholders with real content as it becomes available.
