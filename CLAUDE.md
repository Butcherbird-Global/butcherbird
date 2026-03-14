## Scope Lock
Every dev task on this project requires a scope declaration before any file is touched.
State: task (one sentence), files to read, files to change, files NOT being touched.
Do not deviate from the declared scope. If more files are needed, stop and ask.
Read GOAL-FLOW.md at session start. Check every task against it before proceeding.
See global CLAUDE.md → Dev Guardrails for full rules.

---

# Butcherbird — Claude Context File

## Project
Growth agency website for **Butcherbird Global** — Cape Town-based paid media & email marketing agency.
- **Repo:** https://github.com/Butcherbird-Global/butcherbird.git
- **Deploy:** Vercel (auto-deploys on `git push` to main)
- **Local dev:** `npm run dev` → http://localhost:3000
- **Working dir:** `C:/Users/matth/OneDrive/Desktop/Claude Code/butcherbird`

## Stack
- Next.js 15, React 19, TypeScript
- No Tailwind — pure CSS in `app/globals.css`
- No component library — all custom

## File Map
```
app/
  layout.tsx        — root layout, imports Nav, sets metadata
  page.tsx          — homepage (hero, stats, testimonials, audit, what we do, proof of work, team, CTA)
  globals.css       — entire design system (CSS vars, typography, all component styles)
  portfolio/page.tsx — internal brands: BUUB, Schnozz, Superior (timelines, KPIs)
  work/page.tsx     — full client roster with filter (All / Internal / Client)
  partner/page.tsx  — partnership types + contact form

components/
  Nav.tsx           — fixed white nav, route-aware active links
  Footer.tsx        — simple footer with logo + links
  CaseStudyCard.tsx — card component used in grids (image, tag, brand, metrics, hover layer)
  Modal.tsx         — case study deep-dive modal (Escape key + backdrop click to close)
  RevealOnScroll.tsx — IntersectionObserver that adds `.vis` class to `.reveal` / `.reveal-l` / `.tl-item`

lib/
  data.ts           — all 12 case studies (CaseStudy type, caseStudies array)

public/             — logos + case study cover images
```

## Design System (globals.css)
**Colors (CSS vars):**
- `--black: #0A0A0A` — page background
- `--dark: #141414` — section backgrounds
- `--dark2: #1E1E1E` — card backgrounds
- `--gold: #B8963E` — accent color
- `--off-white: #F5F2EC` — primary text
- `--mid: #6B6B6B` — muted text
- `--light: #D4D0C8` — body text
- `--border: rgba(255,255,255,0.06)` — subtle dividers

**Typography classes:**
- `.f-display` — huge uppercase hero text
- `.f-h1` — clamp(28px→52px), bold uppercase
- `.f-h2` — clamp(16px→24px), bold uppercase
- `.f-gold` — 9px, tracked, uppercase, gold color
- `.f-label` — 9px, tracked, uppercase, mid color
- `.f-body` — 12px, 1.85 line-height, light color
- `.f-italic` — Cormorant Garamond italic, clamp(16px→21px)
- `.gold` — just applies gold color inline

**Font:** Futura / Century Gothic (body), Cormorant Garamond (italic/quotes)

**Layout:** `.container` = max-width 1200px, padding 0 56px. `.section` = padding 112px 0.

**Animations:**
- `.anim .d1-.d4` — hero entrance (fadeUp, staggered)
- `.reveal` — scroll-triggered fadeUp (needs `.vis` added by RevealOnScroll)
- `.reveal-l` — scroll-triggered slideInLeft
- `.tl-item` — timeline items, same trigger

**Buttons:** `.btn.btn-gold`, `.btn.btn-outline`

## Case Studies (lib/data.ts)
12 total. Internal brands (3): BUUB, SCHNOZZ, SUPERIOR. Client work (9): HELPDESK, LAKRIDS, NUMUTI, BONNIE BIO, SUPER MUSHROOMS, AROMATIC APOTHECARY, KOKEE, SHOOT STUDIOS, HIBA BALFQIH.

Clients 7–9 are "coming soon" placeholders (no real data yet).

## Pending / Placeholder Content
- **Testimonials** — 3 placeholder cards on homepage (video + 2 text quotes). Need real client content.
- **VSL** — 90-second video placeholder in "What We Do" section
- **Team photos** — initials placeholders for GC, IT, KM, Tian
- **Modal screenshots** — 3 screenshot placeholders per case study
- **Client case studies** — Bonnie Bio, Super Mushrooms, Aromatic Apothecary, Kokee, Shoot Studios, Hiba Balfqih have no real data yet

## Deploy Workflow
```bash
git add -A
git commit -m "message"
git push
# Vercel auto-deploys — live in ~60s
```

## Key Business Info
- R10,000,000+ revenue from R2,173,913 ad spend (4.6× blended ROAS)
- 4 portfolio brands, 50K+ customers, 600+ retail doors
- Cape Town cost base, ~18:1 ZAR:USD arbitrage position
- 18 team members, 7 months operating
- Contact: hello@butcherbird.global
- Audit booking: mailto link to above email with subject "Free Account Audit"
- Min spend to qualify for audit: $1,500/month or R15,000/month

## Offer Architecture
**Low ticket:** $1,500 — half-day executive consulting session with Gascoyne + C-suite team

**Core retainer:** Full-stack paid media (Meta) + email marketing. Includes static ad creation, video editing, all strategy and conceptualisation. Butcherbird becomes the client's entire digital growth backbone — at a fraction of what a London/NY agency charges.

**Performance fee:** 10% revenue share on income above the client's 3-month average. Aligned incentives — they pay more only when they earn more.

**The pitch:** World-class execution at SA cost-base prices, with skin in the game on results.

## Business Context
- **Founder:** Gascoyne Clarke, 24, CEO. Cape Town. Le Rosey educated. Rebuilt from zero after family lost everything.
- **COO:** Ilan Tait | **CMO:** Kathleen Murphy | **Paid Media Lead:** Tian
- **Revenue:** ~R400–425K/month gross | ~R300K overheads | ~R100–125K net
- **Revenue mix:** 56% internal brands (BUUB, Schnozz, Superior — each paying R75K/month internally). Goal: reduce to <40% via external client growth.
- **External clients:** Hiba Balfaqih ($6K/month, Dubai — ideal archetype) + Helpdesk ($5K/month, SA startup — churn risk)
- **Next launch:** Gobblers — functional gummies brand (super greens, nootropic mushroom, protein). Nothing built yet.
- **Growth target:** 3–5 new external clients at $6–10K/month within 6 months
- **Ideal client profile:** Hard-currency market founder or DTC brand (UAE, UK, US, AUS). Clone the Hiba Balfaqih profile.

## Brand Voice
Direct, specific, confident. Real numbers only — never vague claims. Operator tone, not agency marketing. Dark, editorial aesthetic. Say the thing. Cut the first sentence if the paragraph works without it.
