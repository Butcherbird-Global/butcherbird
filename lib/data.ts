export type ModalId = 'buub' | 'schnozz' | 'superior' | 'helpdesk' | 'lakrids' | 'numuti'

export interface CaseStudy {
  id: ModalId
  brand: string
  tag: string
  desc: string
  metrics: { val: string; lbl: string }[]
  story: string
  category: 'internal' | 'client'
  subtitle: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'buub',
    brand: 'BUUB',
    tag: 'Organic Skincare · DTC · Internal Brand',
    category: 'internal',
    subtitle: 'Organic SPF50 — zero to 10,000+ customers',
    desc: 'Built from zero to 10,000+ customers. An organic SPF50 brand that proved direct product messaging beats lifestyle content every single time.',
    metrics: [
      { val: '3.56×', lbl: 'Blended ROAS' },
      { val: '10K+', lbl: 'Customers' },
      { val: '11.83×', lbl: 'Best creative ROAS' },
      { val: 'R174', lbl: 'Min spend to prove it' },
    ],
    story:
      'BUUB launched in a saturated sunscreen market with zero brand recognition. We built the entire acquisition system from scratch. The pivotal insight: a simple product shot with direct copy at 11.83× ROAS massively outperformed expensive lifestyle creative. Static over video. Direct over aspirational. Every time.',
  },
  {
    id: 'schnozz',
    brand: 'SCHNOZZ',
    tag: 'Health & Wellness · DTC + Retail · Internal Brand',
    category: 'internal',
    subtitle: 'Nasal strips to multi-product retail brand',
    desc: '20,000+ customers, 182+ retail doors, multiple product extensions — built in under 8 months from a single SKU.',
    metrics: [
      { val: '3.10×', lbl: 'Blended ROAS' },
      { val: '20K+', lbl: 'Customers' },
      { val: 'R47', lbl: 'Lowest CPA achieved' },
      { val: '182+', lbl: 'Retail doors' },
    ],
    story:
      "Schnozz started as a single nasal strip SKU. Eight months later: Kiddies strips, Mouth Tape, retail distribution in Sportsman's Warehouse and CNA, and over 20,000 paying customers. The UGC testimonial creative achieved R47 cost-per-acquisition. These results are in our Cross-Brand Insights Report.",
  },
  {
    id: 'superior',
    brand: 'SUPERIOR',
    tag: 'Fragrance · Agent Network · Internal Brand',
    category: 'internal',
    subtitle: 'Agent network model — 50,000+ monthly units',
    desc: 'A fragrance brand that scales without ad spend — through an agent distribution model that now moves 50,000+ units monthly.',
    metrics: [
      { val: '4,000+', lbl: 'Active agents' },
      { val: '50K+', lbl: 'Monthly units' },
      { val: '<R140', lbl: 'CPP' },
      { val: '11.91×', lbl: 'Best ad ROAS' },
    ],
    story:
      'Superior proved that growth does not always come through paid acquisition. By building an agent network model, we created a distribution engine that compounds without media spend. The best paid creative hit 11.91× ROAS on R6/day average budget.',
  },
  {
    id: 'helpdesk',
    brand: 'HELPDESK',
    tag: 'Consumer Tech · App · MENA Markets',
    category: 'client',
    subtitle: 'App across MENA — paid media + email',
    desc: 'Digital service platform launched across MENA regions. Meta acquisition + email nurturing drove rapid user growth.',
    metrics: [
      { val: '10K+', lbl: 'Downloads' },
      { val: '<1.5 AED', lbl: 'CPA' },
      { val: 'MENA', lbl: 'Market reach' },
      { val: 'Meta', lbl: 'Primary channel' },
    ],
    story:
      'Helpdesk engaged Butcherbird for paid media and email marketing across MENA markets. Custom Meta campaigns targeting app installs, combined with email nurturing sequences, drove rapid acquisition below 1.5 AED CPA. This demonstrated Butcherbird execution in hard-currency international markets.',
  },
  {
    id: 'lakrids',
    brand: 'LAKRIDS',
    tag: 'Premium Confectionery · DTC · Client',
    category: 'client',
    subtitle: 'Luxury confectionery — extraordinary peaks',
    desc: 'A luxury liquorice brand with extraordinary ad performance — including a 45.23× ROAS on Black Friday that was ended at its peak.',
    metrics: [
      { val: '45.23×', lbl: 'BF ROAS peak' },
      { val: '25.39×', lbl: 'Luxury static ROAS' },
      { val: 'R43', lbl: 'CPA at 43× day' },
      { val: '0', lbl: 'Reason to stop it' },
    ],
    story:
      'Lakrids produced some of the most extraordinary ad performance we have ever documented. A luxury static creative hit 25.39× ROAS and was converting at 43× on its penultimate day — then was killed during a campaign switch. The Black Friday campaign hit 45.23× ROAS at its peak and was also ended early. These are our most painful documented mistakes. They are in our Cross-Brand Insights Report.',
  },
  {
    id: 'numuti',
    brand: 'NUMUTI',
    tag: 'Wellness · DTC · Client',
    category: 'client',
    subtitle: 'Wellness DTC — 115× ROAS in a single day',
    desc: 'A wellness brand that hit 115× ROAS in a single day — on a budget of R32/day.',
    metrics: [
      { val: '18.86×', lbl: 'Campaign ROAS' },
      { val: '115×', lbl: 'Single-day ROAS' },
      { val: 'R32/day', lbl: 'Budget ceiling' },
      { val: 'Infinite', lbl: 'Potential left untapped' },
    ],
    story:
      'The Numuti Unwind Pool video creative hit 18.86× blended ROAS and peaked at 115× in a single day. It was never given more than R32/day budget. This is the clearest example in our dataset of a winning creative starved of capital. It is in our playbook as the canonical reason why scaling budget on proven creative is non-negotiable.',
  },
]
