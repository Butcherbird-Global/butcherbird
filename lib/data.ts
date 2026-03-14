export type ModalId =
  | 'buub' | 'schnozz' | 'superior' | 'helpdesk' | 'lakrids' | 'numuti'
  | 'bonnie' | 'kokee' | 'shootstudios' | 'hiba'

export interface CaseStudy {
  id: ModalId
  brand: string
  tag: string
  desc: string
  metrics: { val: string; lbl: string }[]
  story: string
  category: 'internal' | 'client'
  subtitle: string
  image?: string
  performanceScreenshots?: string[]
  creativeAssets?: { type: 'static' | 'email' | 'video'; src: string; caption?: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'buub',
    brand: 'BUUB',
    tag: 'Organic Skincare',
    category: 'internal',
    subtitle: 'Organic SPF50 — 10,000+ customers, 400+ retail stores',
    desc: 'Built from zero to 10,000+ customers and 400+ retail stores. An organic SPF50 brand that proved direct product messaging beats lifestyle content every single time.',
    metrics: [
      { val: '3.56×', lbl: 'Blended ROAS' },
      { val: '10K+', lbl: 'Customers' },
      { val: '11.83×', lbl: 'Best creative ROAS' },
      { val: '400+', lbl: 'Retail stores' },
      { val: 'Feb \'23', lbl: 'Active since' },
    ],
    story:
      'BUUB launched in a saturated sunscreen market with zero brand recognition. We built the entire acquisition system from scratch — paid media, email, retail distribution. The pivotal insight came early: a simple product shot with direct copy at 11.83× ROAS massively outperformed expensive lifestyle creative. Static over video. Direct over aspirational. Every time. That same principle now underpins 400+ retail doors and a customer base built entirely on performance, not brand spend.',
  },
  {
    id: 'schnozz',
    brand: 'SCHNOZZ',
    tag: 'Health & Wellness',
    category: 'internal',
    subtitle: 'Nasal strips to multi-product retail brand — 200+ doors',
    desc: '20,000+ customers, 200+ retail doors, multiple product extensions — built in under 8 months from a single SKU.',
    metrics: [
      { val: '3.10×', lbl: 'Blended ROAS' },
      { val: '20K+', lbl: 'Customers' },
      { val: 'R47', lbl: 'Lowest CPA achieved' },
      { val: '200+', lbl: 'Retail doors' },
      { val: 'Dec \'24', lbl: 'Active since' },
    ],
    story:
      "Schnozz started as a single nasal strip SKU. Eight months later: Kiddies strips, Mouth Tape, retail distribution across 200+ doors including Sportsman's Warehouse and CNA, and over 20,000 paying customers. The UGC testimonial creative achieved R47 cost-per-acquisition — the lowest in the portfolio. This is what happens when you treat a health product like a performance brand from day one.",
  },
  {
    id: 'superior',
    brand: 'SUPERIOR',
    tag: 'Fragrance',
    category: 'internal',
    subtitle: 'Agent network model — 100,000+ monthly units',
    desc: 'A fragrance brand that scales without ad spend — through an agent distribution model that now moves 100,000+ units monthly.',
    metrics: [
      { val: '4,000+', lbl: 'Active agents' },
      { val: '100K+', lbl: 'Monthly units' },
      { val: '<R140', lbl: 'CPP' },
      { val: '11.91×', lbl: 'Best ad ROAS' },
      { val: 'Since \'23', lbl: 'Active since' },
    ],
    story:
      'Superior proved that growth does not always come through paid acquisition. By building an agent network model, we created a distribution engine that compounds without media spend — now moving over 100,000 units monthly across a network of 4,000+ active agents. When paid media does run, the results speak: 11.91× ROAS on an average daily budget of R6. The brand is a proof of concept for what distribution-first thinking looks like at scale.',
  },
  {
    id: 'helpdesk',
    brand: 'HELPDESK',
    tag: 'Consumer Technology',
    category: 'client',
    subtitle: 'App across MENA — paid media + email',
    desc: 'Digital service platform launched across MENA regions. Meta acquisition + email nurturing drove rapid user growth.',
    metrics: [
      { val: '10K+', lbl: 'Downloads' },
      { val: '<1.5 AED', lbl: 'CPA' },
      { val: 'MENA', lbl: 'Market reach' },
      { val: 'Meta + Email', lbl: 'Channels' },
    ],
    story:
      'Helpdesk engaged Butcherbird for paid media and email marketing across MENA markets. Custom Meta campaigns targeting app installs, combined with email nurturing sequences, drove rapid acquisition below 1.5 AED CPA. This demonstrated Butcherbird execution in hard-currency international markets.',
  },
  {
    id: 'lakrids',
    brand: 'LAKRIDS',
    tag: 'Premium Confectionery',
    category: 'client',
    subtitle: 'Luxury confectionery — extraordinary peaks',
    desc: 'A luxury liquorice brand with extraordinary ad performance — including a 45.23× ROAS on Black Friday that was ended at its peak.',
    metrics: [
      { val: '45.23×', lbl: 'BF ROAS peak' },
      { val: '25.39×', lbl: 'Luxury static ROAS' },
      { val: 'R43', lbl: 'CPA at peak' },
      { val: '4.69×', lbl: 'Blended ROAS' },
      { val: 'Oct \'25', lbl: 'Active since' },
    ],
    story:
      'Lakrids produced some of the most extraordinary ad performance we have ever documented. A luxury static creative hit 25.39× ROAS and was converting at 43× on its penultimate day — then was killed during a campaign switch. The Black Friday campaign hit 45.23× ROAS at its peak and was also ended early. These are our most painful documented mistakes — and the clearest proof that knowing when not to stop a campaign is as important as knowing how to start one.',
  },
  {
    id: 'numuti',
    brand: 'NUMUTI',
    tag: 'Functional Wellness',
    category: 'client',
    subtitle: 'Wellness DTC — 115× ROAS in a single day',
    desc: 'A wellness brand that hit 115× ROAS in a single day — on a budget of R32/day.',
    metrics: [
      { val: '18.86×', lbl: 'Campaign ROAS' },
      { val: '115×', lbl: 'Single-day ROAS' },
      { val: 'R32/day', lbl: 'Budget ceiling' },
      { val: 'Infinite', lbl: 'Potential left untapped' },
      { val: 'Oct \'25', lbl: 'Active since' },
    ],
    story:
      'The Numuti Unwind Pool video creative hit 18.86× blended ROAS and peaked at 115× in a single day. It was never given more than R32/day budget. This is the clearest example in our dataset of a winning creative starved of capital. It is in our playbook as the canonical reason why scaling budget on proven creative is non-negotiable.',
  },
  {
    id: 'bonnie',
    brand: 'BONNIE BIO',
    tag: 'Sustainable Household',
    category: 'client',
    subtitle: 'Coming soon — details to follow',
    desc: 'Full case study coming soon.',
    metrics: [
      { val: '—', lbl: 'Details coming' },
      { val: '—', lbl: 'Details coming' },
    ],
    story: 'Full case study details coming soon.',
  },
  {
    id: 'kokee',
    brand: 'KOKEE',
    tag: 'Sports Nutrition',
    category: 'client',
    subtitle: 'Sports nutrition — 30 days in, building momentum',
    desc: 'A brand-new account with early positive signals. The team is stress-testing angles and audiences to find the breakthrough creative before scaling.',
    metrics: [
      { val: '2.93×', lbl: 'Month 1 ROAS' },
      { val: '64', lbl: 'First-month purchases' },
      { val: 'R54K', lbl: 'Month 1 revenue' },
      { val: 'Feb \'26', lbl: 'Active since' },
    ],
    story:
      'Kokee came on board in February 2026 — fresh account, blank canvas. Month one shows a 2.93× blended ROAS, 64 purchases, and R54K in tracked revenue. The numbers are modest for a reason: we are in the angle discovery phase. The team is stress-testing creative directions, audience hypotheses, and offer structures to find the signal before we scale. This is the same process we ran on every brand in the portfolio. Find the hook. Prove it cheap. Then go.',
  },
  {
    id: 'shootstudios',
    brand: 'SHOOT STUDIOS',
    tag: 'Creative Studio',
    category: 'client',
    subtitle: 'Coming soon — details to follow',
    desc: 'Full case study coming soon.',
    metrics: [
      { val: '—', lbl: 'Details coming' },
      { val: '—', lbl: 'Details coming' },
    ],
    story: 'Full case study details coming soon.',
  },
  {
    id: 'hiba',
    brand: 'HIBA BALFQIH',
    tag: 'Online Coaching',
    category: 'client',
    subtitle: 'School of Mindhacking — coming soon',
    desc: 'Full case study coming soon.',
    metrics: [
      { val: '—', lbl: 'Details coming' },
      { val: '—', lbl: 'Details coming' },
    ],
    story: 'Full case study details coming soon.',
  },
]
