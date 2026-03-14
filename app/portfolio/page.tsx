'use client'

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
  { date: 'Month 1 · Jul 2025', text: 'Brand concept finalised. Packaging, positioning, and Shopify store built internally. Zero external agency. Zero external capital.' },
  { date: 'Month 2 · Aug 2025', text: 'First Meta campaigns live. 12 static variants, 4 video concepts tested. Direct product copy vs lifestyle copy — direct wins every time.' },
  { date: 'Month 3–4 · Sep–Oct 2025', text: 'Klaviyo email infrastructure built. Welcome sequence, abandoned cart, post-purchase flow. Email becomes a meaningful revenue channel within 6 weeks.' },
  { date: 'Month 5 · Nov 2025', text: 'Search Bar Static creative hits 11.83× ROAS on R174 total spend. Framework documented: never starve a winning creative. Deployed across all brands.' },
  { date: 'Month 6–8 · Dec–Mar 2026', text: '10,000+ customers. 3.56× blended ROAS across full campaign history. BUUB is the clearest proof of the Butcherbird system at work.' },
]

const schnozzTimeline = [
  { date: 'Month 1 · Jul 2025', text: 'Single SKU. Nasal strips. DTC only. The playbook from BUUB deployed from day one.' },
  { date: 'Month 2–3 · Aug–Sep 2025', text: 'Real Reactions UGC creative: 232 purchases at R62 CPA. Testimonial format outperforms branded content. Full UGC strategy built around this insight.' },
  { date: 'Month 4 · Oct 2025', text: 'First retail conversation opened. Product-market fit clear from DTC data. Sportsman\'s Warehouse approached with performance data as the pitch deck.' },
  { date: 'Month 5–6 · Nov–Dec 2025', text: 'Kiddies Strips and Mouth Tape extensions launched. Retail confirmed: Sportsman\'s Warehouse and CNA. 200+ doors open.' },
  { date: 'Month 7–8 · Jan–Mar 2026', text: '20,000+ customers. Testimonial UGC hits R47 CPA — lowest in account history. Strongest video performance in the portfolio.' },
]

const superiorTimeline = [
  { date: 'Coming soon', text: 'Story coming soon.' },
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
      <section className="brand-sec" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="brand-inner">
            <div className="brand-img-wrap reveal-l">
              <div className="brand-main-ph">
                <div className="brand-main-lbl">BUUB</div>
                <div className="brand-float"><span className="f-label">[Product detail]</span></div>
              </div>
              <div className="kpis kpis-4">
                <div className="kpi"><div className="kpi-val">3.56<span className="gold">×</span></div><div className="kpi-lbl">Blended ROAS</div></div>
                <div className="kpi"><div className="kpi-val">10<span className="gold">K+</span></div><div className="kpi-lbl">Customers</div></div>
                <div className="kpi"><div className="kpi-val">11.83<span className="gold">×</span></div><div className="kpi-lbl">Best creative</div></div>
                <div className="kpi"><div className="kpi-val">400<span className="gold">+</span></div><div className="kpi-lbl">Retail stores</div></div>
              </div>
              <div className="brand-links">
                <a href="https://buub.co.za" className="brand-link" target="_blank" rel="noopener noreferrer"><GlobeIcon /> buub.co.za</a>
                <a href="https://www.instagram.com/buubsunscreen" className="brand-link" target="_blank" rel="noopener noreferrer"><InstaIcon /> @buubsunscreen</a>
              </div>
            </div>
            <div>
              <div className="gold-rule reveal" />
              <p className="f-gold reveal" style={{ marginBottom: 12 }}>01 — Skincare · buub.co.za</p>
              <h2 className="f-h1 reveal" style={{ marginBottom: 18 }}>BUUB Sunscreen</h2>
              <p className="f-body reveal" style={{ marginBottom: 32 }}>
                An organic SPF50 sunscreen brand built from nothing in a saturated market. BUUB proved the
                system works — direct product messaging, strategic creative deployment, and a full-stack
                acquisition engine that now serves 10,000+ customers.
              </p>
              <div className="timeline reveal">
                {buubTimeline.map((item) => (
                  <div key={item.date} className="tl-item">
                    <div className="tl-dot"><div className="tl-dot-inner" /></div>
                    <div>
                      <div className="tl-date">{item.date}</div>
                      <p className="tl-txt">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHNOZZ */}
      <section className="brand-sec brand-sec-light">
        <div className="container">
          <div className="brand-inner brand-flip">
            <div className="brand-img-wrap reveal">
              <div className="brand-main-ph">
                <div className="brand-main-lbl">SCHNOZZ</div>
                <div className="brand-float" style={{ right: 'auto', left: -24 }}><span className="f-label">[UGC still]</span></div>
              </div>
              <div className="kpis">
                <div className="kpi"><div className="kpi-val">3.10<span className="gold">×</span></div><div className="kpi-lbl">Blended ROAS</div></div>
                <div className="kpi"><div className="kpi-val">20<span className="gold">K+</span></div><div className="kpi-lbl">Customers</div></div>
                <div className="kpi"><div className="kpi-val">200<span className="gold">+</span></div><div className="kpi-lbl">Retail doors</div></div>
              </div>
              <div className="brand-links brand-links-light">
                <a href="https://schnozzstrips.store" className="brand-link" target="_blank" rel="noopener noreferrer"><GlobeIcon /> schnozzstrips.store</a>
                <a href="https://www.instagram.com/schnozzstrips" className="brand-link" target="_blank" rel="noopener noreferrer"><InstaIcon /> @schnozzstrips</a>
              </div>
            </div>
            <div>
              <div className="gold-rule reveal-l" />
              <p className="f-gold reveal-l" style={{ marginBottom: 12 }}>02 — Health & Wellness · schnozzstrips.store</p>
              <h2 className="f-h1 reveal-l" style={{ marginBottom: 18, color: 'var(--black)' }}>Schnozz Strips</h2>
              <p className="f-body reveal-l" style={{ marginBottom: 32, color: 'rgba(0,0,0,0.6)' }}>
                From a single nasal strip SKU to a multi-product health brand with retail presence in
                Sportsman&apos;s Warehouse and CNA. Schnozz is the story of what happens when you follow
                the data without hesitation.
              </p>
              <div className="timeline reveal-l">
                {schnozzTimeline.map((item) => (
                  <div key={item.date} className="tl-item">
                    <div className="tl-dot" style={{ background: '#fff' }}><div className="tl-dot-inner" /></div>
                    <div>
                      <div className="tl-date">{item.date}</div>
                      <p className="tl-txt" style={{ color: 'rgba(0,0,0,0.6)' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPERIOR */}
      <section className="brand-sec" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="brand-inner">
            <div className="brand-img-wrap reveal-l">
              <div className="brand-main-ph">
                <div className="brand-main-lbl">SUPERIOR</div>
                <div className="brand-float"><span className="f-label">[Product detail]</span></div>
              </div>
              <div className="kpis">
                <div className="kpi"><div className="kpi-val">100<span className="gold">K+</span></div><div className="kpi-lbl">Monthly units</div></div>
                <div className="kpi"><div className="kpi-val"><span className="gold">Since</span></div><div className="kpi-lbl">&apos;23</div></div>
                <div className="kpi"><div className="kpi-val"><span className="gold">Natl</span></div><div className="kpi-lbl">Distribution</div></div>
              </div>
              <div className="brand-links">
                <a href="https://superior.africa" className="brand-link" target="_blank" rel="noopener noreferrer"><GlobeIcon /> superior.africa</a>
                <a href="https://www.instagram.com/superiorfragrances.official" className="brand-link" target="_blank" rel="noopener noreferrer"><InstaIcon /> @superiorfragrances.official</a>
              </div>
            </div>
            <div>
              <div className="gold-rule reveal" />
              <p className="f-gold reveal" style={{ marginBottom: 12 }}>03 — Fragrance · superior.africa</p>
              <h2 className="f-h1 reveal" style={{ marginBottom: 18 }}>Superior Fragrances</h2>
              <p className="f-body reveal" style={{ marginBottom: 32 }}>
                A premium fragrance brand built on French-sourced oils and a national agent distribution
                network. Superior is proof that the Butcherbird system scales beyond DTC — into wholesale,
                retail, and high-volume unit economics.
              </p>
              <div className="timeline reveal">
                {superiorTimeline.map((item) => (
                  <div key={item.date} className="tl-item">
                    <div className="tl-dot"><div className="tl-dot-inner" /></div>
                    <div>
                      <div className="tl-date">{item.date}</div>
                      <p className="tl-txt">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
