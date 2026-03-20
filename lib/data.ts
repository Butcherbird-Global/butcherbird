export type ModalId =
  | 'buub' | 'schnozz' | 'superior' | 'helpdesk' | 'lakrids' | 'numuti'
  | 'bonnie' | 'kokee' | 'shootstudios'

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
    id: 'superior',
    brand: 'SUPERIOR',
    tag: 'Fragrance',
    category: 'internal',
    image: '/case-studies/superior.png',
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
      'Before Butcherbird, Superior was a few hundred reps going door to door, WhatsApp message by WhatsApp message. Great product — French oils, ISO 22716 certified. Linear growth. One conversation, one agent, one sale at a time. With a ceiling built into the model.\n\nWe rebranded it first. New visual identity. New positioning. Creative that made a R70 fragrance feel like it belonged next to the designers it was inspired by. The product always had the quality — the brand now matched it.\n\nThen we built two machines simultaneously.\n\nMachine 1: Agent recruitment. "Buy for R35, sell for R70 — 100% profit on every bottle." Simple, direct, mathematically undeniable. Static ads outperformed video every time. The math did the selling. Dozens of angles tested weekly — winners scaled, losers cut.\n\nMachine 2: Direct to consumer. Running in parallel. Buy 2 Get 1 Free. Designer comparison ads. Two audiences, two campaigns, one brand growing from both ends at once.\n\nFrom hundreds of reps to a national network. 100,000+ units per month. 4,000+ active agents. Top creative at 8.28× ROAS. Distribution across South Africa, with Zimbabwe, Mozambique, Lesotho, Eswatini, and Namibia already underway.\n\nSuperior is proof that the biggest growth lever isn\'t always paid acquisition. Sometimes it\'s building the right distribution model — and then running performance media on top of it.',
  },
  {
    id: 'helpdesk',
    brand: 'HELPDESK',
    tag: 'Consumer Technology',
    category: 'client',
    image: '/case-studies/helpdesk.png',
    subtitle: 'On-demand help platform — Gulf region launch',
    desc: "Nobody was searching for an on-demand helper app because nobody knew it existed. We built the category from scratch — 5,000+ installs across the Gulf in under 4 months.",
    metrics: [
      { val: '5K+', lbl: 'App installs' },
      { val: '4 months', lbl: 'Time to scale' },
      { val: 'Gulf', lbl: 'Primary market' },
      { val: 'Meta + Google', lbl: 'Channels' },
    ],
    story:
      'An app that connects real people with real help — tech support, plumbing advice, tutoring, DIY guidance — available remotely and affordably across the Middle East.\n\nHelpdesk had everything except users. A strong product. A real problem to solve. A category that didn\'t exist yet.\n\nNobody was searching for an "on-demand helper app" because nobody knew it existed. You can\'t sell something people don\'t know they need. So we didn\'t run awareness ads — we ran understanding ads.\n\nCategory-specific creative showing real problems real people face. A laptop that won\'t connect. A leaking pipe. A child struggling with maths. Each ad answered one question: "What would you do right now?" — then showed them. Three steps. Open the app. Describe your problem. Talk to a verified helper.\n\nCampaigns across Meta, Google, and YouTube. Targeted Dubai, Abu Dhabi, Riyadh, Jeddah, and Muscat. Separate creative for every category — because a plumbing ad means nothing to someone with a broken laptop.\n\n5,000+ app installs. Meaningful reach across the Gulf in under 4 months. A category that didn\'t exist is now in people\'s hands — and growing.',
  },
  {
    id: 'lakrids',
    brand: 'LAKRIDS',
    tag: 'Premium Confectionery',
    category: 'client',
    image: '/case-studies/lakrids.png',
    subtitle: 'Zero ads to 120% year-on-year business growth',
    desc: "Zero paid ads to 120% year-on-year business growth. We built the entire online channel from nothing — including a 45.23× ROAS campaign they shut down at its peak.",
    metrics: [
      { val: '120%', lbl: 'YoY business growth' },
      { val: '45.23×', lbl: 'Peak ROAS' },
      { val: '25.39×', lbl: 'Luxury static ROAS' },
      { val: '4.69×', lbl: 'Blended ROAS' },
      { val: 'Oct \'25', lbl: 'Active since' },
    ],
    story:
      'Lakrids by Bülow had never run a single paid ad. Not one. Their marketing was email. Their sales were brick and mortar. The Shopify store existed — but it was quiet, with no traffic and no strategy behind it.\n\nThe owner had held off on advertising because she was afraid it would dilute what made Lakrids special. Premium packaging, slow-cooked product, boutique deli positioning. This wasn\'t a brand you could slap a "50% OFF!!!" banner on and push to cold audiences.\n\nSo we didn\'t.\n\nWe treated the brand the way it deserved to be treated — like a luxury house, not a DTC startup. No urgency tactics. No countdown timers. Premium photography. Static ads that looked like they belonged in a magazine, not a Facebook feed.\n\nA single "Indulge In Luxury" static hit 25.39× ROAS — converting at 43× on its best day before it was ended during a campaign switch. The Black Friday campaign hit 45.23× ROAS at its peak and was also shut down early. These are our most painful documented mistakes — proof that knowing when not to stop a campaign is as important as knowing how to start one.\n\nThe result: 120% total business growth year on year. Not just online — the whole business. An online revenue channel built from zero, now a core part of the operation.\n\nThe owner had been afraid advertising would cheapen the brand. Instead it amplified it. The same elegance, the same craftsmanship, the same quiet confidence — just in front of thousands more people.',
  },
  {
    id: 'numuti',
    brand: 'NUMUTI',
    tag: 'Functional Wellness',
    category: 'client',
    image: '/case-studies/numuti.png',
    subtitle: 'From burned by agencies to their best month ever',
    desc: "Their previous agency ran ads. We actually learned the brand. Five months later: their best month ever — R108,000 — doubled from R48K.",
    metrics: [
      { val: 'R108K', lbl: 'Best month revenue' },
      { val: '9.15×', lbl: 'Best creative ROAS' },
      { val: '22%', lbl: 'Avg MoM growth' },
      { val: '4.00×', lbl: 'Blended ROAS' },
      { val: 'Oct \'25', lbl: 'Active since' },
    ],
    story:
      'Before Butcherbird, Numuti had an agency. On paper, everything looked fine — ads were running, reports were coming in, money was going out. But the results weren\'t there. And when the founders pushed for answers, they got vague explanations and recycled strategies.\n\nThat\'s the reality of most agency relationships. You sign up thinking you\'re getting a partner. What you get is a slot in a rotation. Your brand doesn\'t get studied. Your category doesn\'t get dissected. Your creative doesn\'t get tested with real intent.\n\nNumuti came to us burned. The budget had been wasted. The trust was gone.\n\nWe started by doing what the previous agency never did: we actually learned the brand.\n\nThe drinks category is fast, emotional, and driven by association. You don\'t sell a tonic with a features list — you sell a feeling. "Stock The Cooler" hit 4.80× ROAS. "Ditch The Hangover" hit 5.56× before it was even fully scaled. A single beach video hit 9.15× ROAS. An "Unwind Pool" concept touched 18.86× on minimal spend.\n\nNo autopilot. No set-and-forget. Find the angles that work, cut the ones that don\'t, scale the winners. Every week.\n\nR108,000 in revenue in a single month — their best month ever, and the first time they cracked R100K. Revenue more than doubled in five months. 22% average month-on-month growth. Not a spike — a trajectory.\n\nNumuti came to us burned. They left their best month ever wondering why it took this long to find a team that actually did the work.',
  },
  {
    id: 'bonnie',
    brand: 'BONNIE BIO',
    tag: 'Sustainable Household',
    category: 'client',
    image: '/case-studies/bonnie.png',
    subtitle: 'The online engine behind a retail brand',
    desc: "A retail brand people now actively look for on the shelf — because we put them in front of thousands of people online first.",
    metrics: [
      { val: 'Awareness', lbl: 'Campaign objective' },
      { val: 'Meta', lbl: 'Primary channel' },
      { val: 'SA-wide', lbl: 'Market reach' },
      { val: 'Retail', lbl: 'Primary distribution' },
    ],
    story:
      'Bonnie Bio was built on shelves. Plant-based, internationally certified compostable alternatives to plastic — refuse bags, cling wrap, air fryer liners, insect repellent — all sold through retail stores across South Africa.\n\nThe product was proven. The certifications were real. But shelf space alone doesn\'t build a brand. People walked past compostable products every day without knowing what they were or why they mattered.\n\nBonnie Bio needed reach. Not just more shelves — more awareness.\n\nWe built the awareness engine.\n\nCategory-specific ads that educated people on what compostable actually means — without being preachy. "Looks Like Plastic. Isn\'t." "Change Nothing. Waste Less." Simple messaging that made the switch feel effortless. Each product got its own creative strategy — bags, cling wrap, air fryer liners, insect repellent — because each one solves a different problem for a different person.\n\nMore people seeing Bonnie Bio online meant more people recognising it on the shelf. The paid media became the awareness engine that retail alone could never be — driving brand recognition, product education, and purchase intent at scale.\n\nOnline sales followed naturally, adding a revenue channel that didn\'t exist before. But the real win was bigger than ecommerce: a retail brand that people now actively looked for in store — because they\'d already seen it, understood it, and trusted it.',
  },
  {
    id: 'kokee',
    brand: 'KOKEE',
    tag: 'Sports Nutrition',
    category: 'client',
    image: '/case-studies/kokee.png',
    subtitle: 'Competitive market. Systematic approach. Building momentum.',
    desc: "South Africa's most competitive hydration category. A 27× ROAS on a single ad. 41% revenue growth in one month. The system working through a hard problem in real time.",
    metrics: [
      { val: '27×', lbl: 'Best creative ROAS' },
      { val: '41%', lbl: 'Revenue growth (Feb)' },
      { val: 'Active', lbl: 'Status' },
      { val: 'Oct \'25', lbl: 'Active since' },
    ],
    story:
      "South African hydration is one of the most competitive categories in e-commerce. The big players spend aggressively, bid high, and dominate the auction. When you can't outspend the competition — and Kokee can't — you have to outsmart them.\n\nKokee makes natural, zero-sugar electrolyte hydration. Powder-and-scoop, everyday format — not the kind marketed at elite athletes with neon packaging. The kind you mix into a glass of water before work, or into your kid's bottle before school. People who try it, love it. The product has retail placement in Faithful to Nature and Wellness Warehouse. The challenge is the market.\n\nWe've been working with Kokee since October 2025. In that time: a single ad hit 27× ROAS on a Tuesday. A week where cost per purchase dropped from R500 to R199. A Family Offer creative that became the best-performing asset in the account. Revenue climbed 41% in February alone.\n\nThe process is deliberate. We restructured the entire account — shifted from warm-only targeting that had exhausted itself to a proper broad prospecting and retargeting architecture. We've been running systematic angle testing: offer hooks, problem-agitation, retargeting sequences. Every week, more data. Every week, the signal gets cleaner.\n\nOur fee is tied to Kokee's revenue. When they grow, we earn. That's not a line — it's the reason we're still here, still building, still finding the next angle instead of moving on to an easier account.\n\nKokee's trajectory is pointing in one direction. The category is hard. The momentum is real.",
  },
  {
    id: 'shootstudios',
    brand: 'SHOOT STUDIOS',
    tag: 'Creative Studio',
    category: 'client',
    image: '/case-studies/shootstudios.png',
    subtitle: 'From zero ads to their best month ever',
    desc: "R21,000 in studio bookings from R3,000 in spend. When they paused the ads over the holidays, enquiries stopped completely. The owner pushed to restart immediately.",
    metrics: [
      { val: '7×', lbl: 'Ad return' },
      { val: 'R21K', lbl: 'Bookings from R3K' },
      { val: 'Content Studio', lbl: 'Service type' },
      { val: 'Nov \'25', lbl: 'Active since' },
    ],
    story:
      "Before working with Butcherbird, every booking at Shoot Studios came from word of mouth or Instagram. Some weeks were fully booked. Others were dead quiet. No system. No pipeline. No way to control the flow.\n\nThorin, the studio's marketing operator, had never run a Meta ad. No pixel. No campaign structure. No idea where to start. They didn't need someone to run their ads — they needed someone to teach them how.\n\nWe ran weekly coaching sessions: one hour a week, building from scratch. Pixel installation. Lead form setup. Campaign structure. How to read the data. When to kill an ad and when to let it breathe.\n\nThorin went from zero to launching his first campaign in two weeks. We didn't touch the ad account. He did everything himself.\n\nBy January, ad submissions were generating R21,000 in studio bookings from R3,000 in spend. By March, it was one of their best months ever.\n\nThen the ads were paused over the holidays. The enquiries stopped completely. The owner pushed to restart immediately.\n\n\"Without the ads, there's a significant decline in bookings.\" That's not a testimonial we asked for. It's what happens when paid media becomes the engine — you feel it the moment you turn it off.\n\nThorin now manages campaigns across four businesses. The gap between where he started and where he is now is enormous — and the bookings prove it.",
  },
  {
    id: 'buub',
    brand: 'BUUB',
    tag: 'Organic Skincare',
    category: 'internal',
    image: '/case-studies/buub.png',
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
      'BUUB existed before Butcherbird did. Two external agencies came and went — thousands spent, nothing to show for it. Paid media felt broken. So we built Butcherbird to fix it, and BUUB was the first brand we ran the new system on.\n\nThe insight came fast and it was brutal in its simplicity: a plain product shot with direct copy hit 11.83× ROAS and made every piece of expensive lifestyle content look stupid by comparison. Static over video. Product over story. Direct over aspirational. Every single time.\n\nWe scaled what worked and killed everything else. 333 purchases in a single month. R218,000+ in revenue. One ad alone generated R55,000 at 7.37× ROAS.\n\nThen the data became the pitch. BUUB walked into Dis-Chem and Wellness Warehouse with real purchase volume and a clear trajectory. The buyers said yes. A brand that started at beach markets now sits on shelves in 400+ stores nationwide.\n\nBUUB is the proof of concept for everything Butcherbird does. The principles it validated — static over video, direct messaging, relentless creative testing — run through every brand we\'ve built since.',
  },
  {
    id: 'schnozz',
    brand: 'SCHNOZZ',
    tag: 'Health & Wellness',
    category: 'internal',
    image: '/case-studies/schnozz.png',
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
      "Most brands launch with a landing page and a prayer. Schnozz launched with an army.\n\n300 ambassadors assembled before a single ad ran. Athletes, wellness creators, sleep coaches, biohackers — briefed to try the product, film it, and post it. Over 2 million organic views before we spent a rand on media. By the time paid went live, people were already searching for it.\n\nFull-funnel from day one. Prospecting creative built from the best ambassador content — real faces, real reactions, no scripts. The creative system never stopped: a Sea Point testimonial hit 6.62× ROAS. A hayfever static peaked at 8.60× in a single day. A kids' mouth-breathing angle — first to market in South Africa — hit 7.37×. Every week, winners got more budget.\n\nR500,000+ in online revenue in month three from launch. 8.20× ROAS in the strongest week. 2,133 purchases in a single month.\n\nThen the data opened doors that cold calls never could. Schnozz walked into Sportsman's Warehouse, Cape Union Mart, and Wellness Warehouse with proof of demand. 200+ retail doors later, a brand that started as a single SKU now has Kiddies Strips, Mouth Tape, and a US expansion already underway.\n\nPeople stopped saying nasal strips. They started saying Schnozz strips. That's the difference between a product and a brand.",
  },
]
