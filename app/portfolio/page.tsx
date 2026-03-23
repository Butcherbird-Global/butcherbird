'use client'

import Image from 'next/image'
import Footer from '@/components/Footer'
import RevealOnScroll from '@/components/RevealOnScroll'

const GlobeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const InstaIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const buubTimeline = [
  {
    date: 'Before the System',
    text: 'BUUB existed before Butcherbird did. Beach markets, Instagram DMs, word of mouth. Two external agencies came and went — thousands spent, no accountability, no results. Paid media felt broken.',
  },
  {
    date: 'Butcherbird Launches',
    text: 'We built Butcherbird to solve exactly this problem — and BUUB was the first brand we ran the system on. Full-funnel structure, creative that actually sounded like the brand, relentless testing. Everything the agencies never did.',
  },
  {
    date: 'The Results',
    text: '6.82× ROAS. 333 purchases in a single month. R218,000+ in revenue. A single ad hit 7.37× ROAS — generating R55,000 on its own. Not a spike. A new baseline.',
  },
  {
    date: 'National Retail',
    text: 'Performance data became the pitch. BUUB walked into Dis-Chem and Wellness Warehouse with real purchase volume and a clear growth trajectory. The buyers said yes. A brand that started at beach markets now sits on shelves nationwide.',
  },
]

const schnozzTimeline = [
  {
    date: 'Pre-Launch',
    text: '300 ambassadors assembled before a single ad ran. Athletes, wellness creators, sleep coaches, biohackers. The brief: try them, film it, post it. Over 2 million organic views before we spent a rand on media.',
  },
  {
    date: 'Launch',
    text: 'Full-funnel from day one. Prospecting creative built from the best ambassador content — real faces, real reactions, no scripts. When paid went live, people were already searching for it.',
  },
  {
    date: 'Breakthrough Creatives',
    text: 'A Sea Point testimonial hit 6.62× ROAS. A hayfever static peaked at 8.60× in a single day. A kids\' mouth-breathing angle — first to market in South Africa — hit 7.37×. Every week, winners got more budget.',
  },
  {
    date: 'Scale',
    text: 'R500K+ in online revenue in month three from launch. 8.20× ROAS in the strongest week. 2,133 purchases in a single month. The system at full speed.',
  },
  {
    date: 'The Win',
    text: 'People stopped saying "nasal strips." They started saying "Schnozz strips." Amazon, Takealot, Wellness Warehouse, Sportsman\'s Warehouse, Mr Price Sport. US expansion already underway.',
  },
]

const superiorTimeline = [
  {
    date: 'Before Butcherbird',
    text: 'A few hundred reps going door to door, WhatsApp message to WhatsApp message. Great product. Linear growth. One conversation, one agent, one sale at a time — with a ceiling built into the model.',
  },
  {
    date: 'The Rebrand',
    text: 'New visual identity. New positioning. Creative that made a R70 fragrance feel like it belonged next to the designers it was inspired by. The product always had the quality — the brand now matched it.',
  },
  {
    date: 'Machine 1 — Agent Recruitment',
    text: '"Buy for R35, sell for R70 — 100% profit on every bottle." Simple, direct, undeniable. Static ads outperformed video every time. The math did the selling. Dozens of angles tested weekly; winners scaled, losers cut.',
  },
  {
    date: 'Machine 2 — Direct to Consumer',
    text: 'A separate funnel for end consumers running simultaneously. Buy 2 Get 1 Free. Designer comparison ads. Two audiences, two campaigns, one brand growing from both ends at once.',
  },
  {
    date: 'The Results',
    text: 'From hundreds of reps to a national network. 100,000+ units per month. Agent campaign running at 3.18× ROAS — top creative hit 8.28×. Distribution across South Africa, with Zimbabwe, Mozambique, Lesotho, Eswatini, and Namibia underway.',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <RevealOnScroll />

      {/* HERO */}
      <section className="port-hero">
        <div className="container">
          <div className="gold-rule anim d1" />
          <p className="f-gold anim d1" style={{ marginBottom: 20 }}>Our portfolio brands</p>
          <h1 className="f-display anim d2" style={{ maxWidth: 700, marginBottom: 24 }}>
            Brands we built<br />from <span className="gold">nothing.</span>
          </h1>
          <p className="f-italic anim d3" style={{ maxWidth: 520 }}>
            Not inherited accounts. Not optimised campaigns. Built from nothing, scaled to results, documented in detail.
          </p>
        </div>
      </section>

      {/* BUUB */}
      <section className="brand-sec brand-sec-light">
        <div className="container">
          <div className="brand-inner">
            <div className="brand-img-wrap reveal-l">
              <div className="brand-main-ph">
                <Image src="/portfolio/buub-1.jpg" alt="BUUB Sunscreen" fill style={{ objectFit: 'cover' }} />
                <div className="brand-float">
                  <Image src="/portfolio/buub-2.jpg" alt="BUUB product detail" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="kpis kpis-4">
                <div className="kpi"><div className="kpi-val">6.82<span className="gold">×</span></div><div className="kpi-lbl">ROAS</div></div>
                <div className="kpi"><div className="kpi-val">R218<span className="gold">K+</span></div><div className="kpi-lbl">Best month</div></div>
                <div className="kpi"><div className="kpi-val">7.37<span className="gold">×</span></div><div className="kpi-lbl">Best creative</div></div>
                <div className="kpi"><div className="kpi-val">400<span className="gold">+</span></div><div className="kpi-lbl">Retail stores</div></div>
              </div>
              <div className="brand-links brand-links-light">
                <a href="https://buub.co.za" className="brand-link" target="_blank" rel="noopener noreferrer"><GlobeIcon /> buub.co.za</a>
                <a href="https://www.instagram.com/buubsunscreen" className="brand-link" target="_blank" rel="noopener noreferrer"><InstaIcon /> @buubsunscreen</a>
              </div>
            </div>
            <div>
              <div className="gold-rule reveal" />
              <p className="f-gold reveal" style={{ marginBottom: 12 }}>01 — Skincare · buub.co.za</p>
              <h2 className="f-h1 reveal" style={{ marginBottom: 18, color: 'var(--black)' }}>BUUB Sunscreen</h2>
              <p className="f-body reveal" style={{ marginBottom: 32, color: 'rgba(0,0,0,0.6)' }}>
                BUUB is our brand. It existed before Butcherbird did — and it was struggling. Two external agencies,
                thousands spent, nothing to show. When we built the Butcherbird system, BUUB was the first brand
                we ran it on. What happened next became the proof of concept for everything we do.
              </p>
              <div className="timeline reveal">
                {buubTimeline.map((item) => (
                  <div key={item.date} className="tl-item">
                    <div className="tl-dot" style={{ background: '#fff' }}><div className="tl-dot-inner" /></div>
                    <div>
                      <div className="tl-date">{item.date}</div>
                      <p className="tl-txt" style={{ color: 'rgba(0,0,0,0.6)' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40 }} className="reveal">
                <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Book a Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHNOZZ */}
      <section className="brand-sec" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="brand-inner brand-flip">
            <div className="brand-img-wrap reveal">
              <div className="brand-main-ph">
                <Image src="/portfolio/schnozz-2.jpg" alt="Schnozz Strips" fill style={{ objectFit: 'cover' }} />
                <div className="brand-float" style={{ right: 'auto', left: -24 }}>
                  <Image src="/portfolio/schnozz-1.png" alt="Schnozz product" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="kpis">
                <div className="kpi"><div className="kpi-val">R500<span className="gold">K+</span></div><div className="kpi-lbl">Month 3 revenue</div></div>
                <div className="kpi"><div className="kpi-val">8.20<span className="gold">×</span></div><div className="kpi-lbl">Peak ROAS</div></div>
                <div className="kpi"><div className="kpi-val">20<span className="gold">K+</span></div><div className="kpi-lbl">Customers</div></div>
              </div>
              <div className="brand-links">
                <a href="https://schnozzstrips.store" className="brand-link" target="_blank" rel="noopener noreferrer"><GlobeIcon /> schnozzstrips.store</a>
                <a href="https://www.instagram.com/schnozzstrips" className="brand-link" target="_blank" rel="noopener noreferrer"><InstaIcon /> @schnozzstrips</a>
              </div>
            </div>
            <div>
              <div className="gold-rule reveal-l" />
              <p className="f-gold reveal-l" style={{ marginBottom: 12 }}>02 — Health & Wellness · schnozzstrips.store</p>
              <h2 className="f-h1 reveal-l" style={{ marginBottom: 18 }}>Schnozz Strips</h2>
              <p className="f-body reveal-l" style={{ marginBottom: 32 }}>
                Most brands launch with a landing page and a prayer. Schnozz launched with an army.
                300 ambassadors and 2 million organic views before the first ad ran. By the time paid went live,
                the market was already waiting.
              </p>
              <div className="timeline reveal-l">
                {schnozzTimeline.map((item) => (
                  <div key={item.date} className="tl-item">
                    <div className="tl-dot"><div className="tl-dot-inner" /></div>
                    <div>
                      <div className="tl-date">{item.date}</div>
                      <p className="tl-txt">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40 }} className="reveal-l">
                <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Book a Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPERIOR */}
      <section className="brand-sec brand-sec-light">
        <div className="container">
          <div className="brand-inner">
            <div className="brand-img-wrap reveal-l">
              <div className="brand-main-ph">
                <div className="brand-main-lbl">SUPERIOR</div>
                <div className="brand-float"><span className="f-label">[Product detail]</span></div>
              </div>
              <div className="kpis">
                <div className="kpi"><div className="kpi-val">100<span className="gold">K+</span></div><div className="kpi-lbl">Units / month</div></div>
                <div className="kpi"><div className="kpi-val">3.18<span className="gold">×</span></div><div className="kpi-lbl">Agent ROAS</div></div>
                <div className="kpi"><div className="kpi-val">8.28<span className="gold">×</span></div><div className="kpi-lbl">Best creative</div></div>
              </div>
              <div className="brand-links brand-links-light">
                <a href="https://superior.africa" className="brand-link" target="_blank" rel="noopener noreferrer"><GlobeIcon /> superior.africa</a>
                <a href="https://www.instagram.com/superiorfragrances.official" className="brand-link" target="_blank" rel="noopener noreferrer"><InstaIcon /> @superiorfragrances.official</a>
              </div>
            </div>
            <div>
              <div className="gold-rule reveal" />
              <p className="f-gold reveal" style={{ marginBottom: 12 }}>03 — Fragrance · superior.africa</p>
              <h2 className="f-h1 reveal" style={{ marginBottom: 18, color: 'var(--black)' }}>Superior Fragrances</h2>
              <p className="f-body reveal" style={{ marginBottom: 32, color: 'rgba(0,0,0,0.6)' }}>
                French oils. ISO 22716 certified. Buy for R35, sell for R70 — double your money per bottle.
                Superior had a proven product and a ceiling on growth. We rebranded it, built two parallel
                acquisition machines, and watched it scale past 100,000 units a month.
              </p>
              <div className="timeline reveal">
                {superiorTimeline.map((item) => (
                  <div key={item.date} className="tl-item">
                    <div className="tl-dot" style={{ background: '#fff' }}><div className="tl-dot-inner" /></div>
                    <div>
                      <div className="tl-date">{item.date}</div>
                      <p className="tl-txt" style={{ color: 'rgba(0,0,0,0.6)' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40 }} className="reveal">
                <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Book a Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(184,150,62,.06), transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="gold-rule reveal" />
          <p className="f-gold reveal" style={{ marginBottom: 20 }}>About Butcherbird</p>
          <h2 className="f-h1 reveal" style={{ marginBottom: 32, maxWidth: 560 }}>The results spoke.<br />Brands followed.</h2>
          <p className="f-italic reveal" style={{ maxWidth: 580, marginBottom: 56, fontSize: 'clamp(17px, 2vw, 23px)', color: 'var(--light)', lineHeight: 1.65 }}>
            "When the numbers started coming in — the ROAS, the retail doors, the revenue — other founders started asking who was behind it. That question became Butcherbird."
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px 64px', maxWidth: 780, marginBottom: 64 }}>
            <div className="reveal">
              <p className="f-gold" style={{ marginBottom: 10 }}>How It Started</p>
              <p className="f-body" style={{ marginBottom: 0 }}>The system worked. Brands in our portfolio were hitting numbers that other agencies couldn't explain. Word spread fast in founder circles — and the inbound started. We took on local brands first, learned what translated across categories, and built from there.</p>
            </div>
            <div className="reveal">
              <p className="f-gold" style={{ marginBottom: 10 }}>Going International</p>
              <p className="f-body" style={{ marginBottom: 0 }}>South Africa proved the model. Then the enquiries started coming from Dubai, the UK, and beyond. Founders who wanted world-class execution at a fraction of what London or New York agencies charge. The SA cost base became the edge. It still is.</p>
            </div>
            <div className="reveal">
              <p className="f-gold" style={{ marginBottom: 10 }}>Built In-House</p>
              <p className="f-body" style={{ marginBottom: 0 }}>We don't brief out and hope for the best. Paid media, email, creative, video, photography, design, web — all done in one building, by one team, working on your brand every day. 18 people. No outsourcing. No middlemen.</p>
            </div>
            <div className="reveal">
              <p className="f-gold" style={{ marginBottom: 10 }}>Just Getting Started</p>
              <p className="f-body" style={{ marginBottom: 0 }}>Seven months in. R10M+ generated. 50,000+ customers across brands. 600+ retail doors. A client roster spanning Cape Town to Dubai. The portfolio is growing, the team is growing, and the brands coming through the door are getting bigger.</p>
            </div>
          </div>
          <p className="f-italic reveal" style={{ fontSize: 'clamp(20px, 2.5vw, 30px)', color: 'var(--gold)', maxWidth: 620, marginBottom: 52, lineHeight: 1.5 }}>
            This is what year one looks like. We're just getting started.
          </p>
          <div className="reveal">
            <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Work With Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
