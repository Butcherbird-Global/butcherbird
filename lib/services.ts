import { ModalId } from './data'

export interface Service {
  slug: string
  num: string
  title: string
  tagline: string
  description: string[]
  includes: string[]
  relatedStudies: ModalId[]
}

export const services: Service[] = [
  {
    slug: 'paid-media',
    num: '01',
    title: 'Meta & Google Ads',
    tagline: 'The engine behind the growth of every brand in our portfolio — and every client we manage.',
    description: [
      'Most agencies set up a campaign, watch the dashboard, and send you a PDF once a month. We do something different. We test. Relentlessly.',
      'Every week, new creative goes live. New hooks, new angles, new formats. The winners get more budget. The losers get cut. There is no "let it run and see." There is only: is this working, and if not, what\'s next.',
      'We\'ve spent over R2.2 million in managed ad spend and generated R10 million in tracked revenue across our portfolio. Not through any single trick — through a system that never stops finding the next angle that converts.',
      'One of the most important things we\'ve learned: static beats video in 5 out of 6 brands we\'ve tested. Most agencies lead with video because it feels more premium. We lead with what works. A single product-shot static ad for BUUB hit 11.83\u00d7 ROAS. A hayfever static for Schnozz peaked at 8.60\u00d7 in a single day. A "Stop Working for a Boss" agent recruitment ad for Superior hit 4.78\u00d7 ROAS.',
      'The other insight most accounts get wrong: bottom-of-funnel is underfunded. Almost every account we inherit is spending 90% on prospecting and 10% on retargeting. The people who already know your brand — who visited your site, added to cart, engaged with your content — are the cheapest to convert. We fix the ratio first. The returns follow immediately.',
      'We run Meta and Google. We build the campaign architecture from scratch — or restructure what\'s there. We handle all creative production in-house: static ads, video, UGC, graphic design. We report on what matters — purchases, ROAS, cost per acquisition — not impressions.',
    ],
    includes: [
      'Full campaign architecture — prospecting, retargeting, and retention',
      'Weekly creative testing — new angles, hooks, and formats',
      'In-house ad creative production — static, video, UGC',
      'Campaign reporting — purchases, ROAS, CPA',
      'Google Ads management — Search, Shopping, Performance Max',
      'Monthly strategy review with senior team',
    ],
    relatedStudies: ['buub', 'schnozz', 'numuti', 'lakrids'],
  },
  {
    slug: 'email-marketing',
    num: '02',
    title: 'Email Marketing & Klaviyo',
    tagline: '20\u201330% of your revenue is sitting in your list. We build the infrastructure to capture it.',
    description: [
      'Most brands are leaving money on the table every single day. Customers who bought once and never heard from you again. People who added to cart and got distracted. Visitors who browsed three products and left. Every one of them is a conversion waiting to happen — if you have the system to reach them.',
      'We build full Klaviyo systems from scratch. Not a welcome email and a monthly newsletter. A complete revenue infrastructure — flows that trigger at the right moment, segments that speak to the right audience, campaigns that drive repeat purchases without cannibalising your paid media.',
      'The flows we build: Welcome Series — the first impression, introduce the brand, build trust, convert within 7 days. Abandoned Cart — recover the sale with a 3-step sequence, urgency without desperation. Browse Abandonment — they looked, they didn\'t buy, remind them why. Post-Purchase — turn a buyer into a repeat buyer with cross-sells, review requests, and loyalty. Winback — dormant customers reactivated with the right offer at the right time. Sunset — clean the list, protect deliverability, stop paying to email people who aren\'t reading.',
      'Beyond flows, we run campaigns. Segmented sends based on purchase history, engagement level, and product interest. Not blast-and-pray. Every campaign has a purpose — product launch, restocking prompt, seasonal push, or loyalty reward.',
      'We also manage deliverability. List hygiene, domain authentication, sending reputation. Because none of this matters if your emails land in spam.',
      'Email compounds. Every flow you build keeps working while you sleep. Every campaign you send adds data that makes the next one smarter. The brands in our portfolio with the strongest LTV are the ones with the strongest email systems. That is not a coincidence.',
    ],
    includes: [
      'Full Klaviyo setup and configuration',
      '6 core automated flows — Welcome, Abandoned Cart, Browse Abandon, Post-Purchase, Winback, Sunset',
      'Segmented campaign strategy and execution',
      'List management and deliverability optimisation',
      'Template design — on-brand, mobile-first',
      'Monthly reporting on email revenue attribution',
    ],
    relatedStudies: ['buub', 'schnozz'],
  },
  {
    slug: 'growth-strategy',
    num: '03',
    title: 'Growth Strategy',
    tagline: 'For founders who want the thinking, not just the execution.',
    description: [
      'Some brands don\'t need another pair of hands. They need a thinking partner — someone who\'s built what they\'re building and can see around the corners they can\'t.',
      'Growth Strategy gives you direct access to the Butcherbird C-suite. Monthly strategy sessions. Quarterly reviews. Senior-level thinking applied to your specific brand, your specific market, your specific numbers.',
      'This isn\'t a dashboard login and a monthly PDF. It\'s the senior team sitting across the table, looking at your business the way we look at our own — because we run our own brands on the same system. When we tell you what\'s working, we\'re not quoting a case study from three years ago. We\'re telling you what worked this week, on our money, in our accounts.',
      'We\'ve built three consumer brands from nothing to national retail. We\'ve taken an organic sunscreen from beach markets to 400+ retail shelves. We\'ve scaled a nasal strip brand to R3.4M in revenue in 12 months. We\'ve grown a fragrance brand to 100,000+ units per month through an agent network model nobody else in the market is running.',
      'The patterns we\'ve found — what works in creative testing, how to structure a funnel, when to push and when to hold — those patterns transfer. Your category is different, but the system underneath is the same.',
      'Growth Strategy is for brands that want to move faster and smarter. Brands where the founder is still the smartest person in the room on marketing — and they know that\'s a problem they need to solve.',
    ],
    includes: [
      'Monthly 1-on-1 strategy sessions with CEO',
      'Quarterly business reviews — performance, channel mix, growth roadmap',
      'Portfolio-tested playbooks — what\'s working across our brands right now',
      'Ad account audits and creative strategy reviews',
      'Channel prioritisation — where to invest next and why',
      'Direct access to the Butcherbird senior team',
    ],
    relatedStudies: ['buub', 'schnozz', 'superior'],
  },
  {
    slug: 'creative',
    num: '04',
    title: 'In-House Creative Production',
    tagline: 'Media buying without great creative is just expensive guesswork.',
    description: [
      'You can have the best campaign architecture in the world. If the creative doesn\'t stop the scroll, none of it matters.',
      'Most agencies outsource creative. They brief a freelancer, wait two weeks, get something generic back, run it, and hope. When it doesn\'t work, they brief again. The feedback loop is slow, expensive, and disconnected from performance data.',
      'We do it differently. Every creative at Butcherbird is made in-house. Photographers, videographers, editors, and graphic designers — all in one building, all working directly on your brand. We concept, shoot, edit, and iterate in the same room as the media buyers running your campaigns. When an ad hits 11.83\u00d7 ROAS, we know exactly why — and we can make five more like it by Friday.',
      'Our creative methodology is built on one principle: proof beats polish. Raw, authentic creative outperforms high-production content on Meta. The algorithm rewards engagement, not aesthetics. A screenshot of a real result stops the scroll faster than a studio shoot.',
      'We test six hook types across every brand: pattern interrupts, direct claims, audience callouts, disqualification hooks, problem demonstrations, and trend ties. We don\'t make five versions of the same ad — we make five fundamentally different ads, because the algorithm needs genuine variation to optimise.',
      'We track hook rate on every piece of video. 15%+ means it\'s working. Below 10%, we brief a new hook immediately — regardless of other metrics. Creative is not a support function. It\'s the performance lever.',
    ],
    includes: [
      'In-house photography and videography',
      'Video editing and post-production',
      'Static ad design — product shots, lifestyle, UGC-style',
      'Graphic design — social, email, web',
      'Creative strategy — hook types, angle diversity, proof-based methodology',
      'Weekly creative output tied to campaign testing cadence',
    ],
    relatedStudies: ['buub', 'schnozz', 'kokee', 'lakrids'],
  },
  {
    slug: 'brand-web',
    num: '05',
    title: 'Brand & Web Builds',
    tagline: 'A weak brand makes every other channel harder.',
    description: [
      'Before you run a single ad, people need to trust what they\'re looking at. The brand is the container for everything else — creative, media, email, retail. If the container doesn\'t feel right, nothing inside it performs the way it should.',
      'We\'ve built consumer brands from nothing. BUUB went from beach markets to 400+ retail stores with a visual identity we created from scratch. Superior Fragrances went from door-to-door sales with inconsistent branding to a national network of 4,000+ agents — and the rebrand was the turning point. Schnozz launched with brand assets, packaging, and a Shopify store all built before the first ad ever ran.',
      'We handle the full scope. Visual identity — logo, colour palette, typography, photography direction. Brand positioning — who you are, who you\'re for, how you sound. Shopify theme builds — custom, not off-the-shelf. Landing pages designed for conversion, not just aesthetics. Email infrastructure — Klaviyo templates that match the brand and perform from day one.',
      'We also do complete rebrands. When a brand has outgrown its original identity — or never had a real one — we rebuild it. Not a logo refresh. A full repositioning. New creative direction. New assets. A digital presence that matches where the brand is going, not where it started.',
      'Every website and brand asset we build is designed to convert. Not to win design awards. Not to look good in a portfolio. To sell. Clean layouts, fast load times, clear paths to purchase, and mobile-first always.',
    ],
    includes: [
      'Brand identity design — logo, colour, typography, photography direction',
      'Brand positioning and messaging framework',
      'Custom Shopify theme development',
      'Landing page design and build',
      'Email template design for Klaviyo',
      'Asset library creation — social, ads, print-ready',
    ],
    relatedStudies: ['buub', 'superior', 'schnozz'],
  },
  {
    slug: 'ai-automation',
    num: '06',
    title: 'AI & Automation',
    tagline: 'The agencies not using AI right now are already behind.',
    description: [
      'AI isn\'t a feature we bolt on. It\'s embedded in every function of how we work.',
      'Creative ideation, ad copy generation, audience research, data analysis, campaign architecture, reporting — AI tools run across all of it. Not as a gimmick. Not as a line item on a proposal. As a genuine operational advantage that makes every other service we offer faster, sharper, and more informed.',
      'Our team are active power users. They don\'t use AI to replace thinking — they use it to think faster. A creative brief that took two hours now takes twenty minutes, with more angles explored. A campaign audit that required a full day of data pulling now happens in real time. A competitor analysis across fifty brands happens before the strategy call, not after it.',
      'We built our own internal operating system — Butcherbird OS — that connects campaign data, creative performance, and strategic intelligence in one place. It\'s the same system we use to manage our portfolio brands. Every client brand we manage benefits from the infrastructure we built to run our own.',
      'The agencies that aren\'t investing in AI tooling right now are operating at a fraction of the speed and depth that\'s already possible. The gap between what we can do for your brand today and what a traditional agency can do with the same budget is not small — and it\'s widening every month.',
      'This isn\'t about replacing people. It\'s about giving talented people better tools. Our media buyers find winning angles faster. Our designers iterate quicker. Our strategists see patterns in data that would take days to surface manually. The brands we manage benefit from capabilities most agencies won\'t catch up to for years.',
    ],
    includes: [
      'AI-powered creative ideation and copy generation',
      'Automated campaign analysis and reporting',
      'AI-assisted audience research and competitor analysis',
      'Proprietary internal operating system — Butcherbird OS',
      'AI tools embedded across all service delivery',
      'Continuous tooling updates as capabilities evolve',
    ],
    relatedStudies: ['buub', 'schnozz', 'superior'],
  },
]
