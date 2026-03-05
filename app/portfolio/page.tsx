import Link from 'next/link'
import Footer from '@/components/Footer'
import RevealOnScroll from '@/components/RevealOnScroll'

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
  { date: 'Month 5–6 · Nov–Dec 2025', text: 'Kiddies Strips and Mouth Tape extensions launched. Retail confirmed: Sportsman\'s Warehouse and CNA. 182+ doors open.' },
  { date: 'Month 7–8 · Jan–Mar 2026', text: '20,000+ customers. Testimonial UGC hits R47 CPA — lowest in account history. Strongest video performance in the portfolio.' },
]

export default function PortfolioPage() {
  return (
    <>
      <RevealOnScroll />

      {/* HERO */}
      <section className="port-hero">
        <div className="container">
          <div className="sec-label anim d1">
            <span className="sec-label-txt">Our portfolio brands</span>
            <div className="sec-label-line" />
          </div>
          <h1 className="f-display anim d2" style={{ maxWidth: 700, marginBottom: 22 }}>
            Brands we built<br />from <span className="gold">nothing.</span>
          </h1>
          <p className="f-italic anim d3" style={{ maxWidth: 480 }}>
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
              <p className="f-label" style={{ marginTop: 10, textAlign: 'center' }}>[BUUB product photography · buub.co.za]</p>
              <div className="kpis">
                <div className="kpi"><div className="kpi-val">3.56<span className="gold">×</span></div><div className="kpi-lbl">Blended ROAS</div></div>
                <div className="kpi"><div className="kpi-val">10<span className="gold">K+</span></div><div className="kpi-lbl">Customers</div></div>
                <div className="kpi"><div className="kpi-val">11.83<span className="gold">×</span></div><div className="kpi-lbl">Best creative</div></div>
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
      <section className="brand-sec">
        <div className="container">
          <div className="brand-inner brand-flip">
            <div className="brand-img-wrap reveal">
              <div className="brand-main-ph" style={{ background: '#1a1a1a' }}>
                <div className="brand-main-lbl">SCHNOZZ</div>
                <div className="brand-float" style={{ right: 'auto', left: -24 }}><span className="f-label">[UGC still]</span></div>
              </div>
              <p className="f-label" style={{ marginTop: 10, textAlign: 'center' }}>[Schnozz photography · schnozzstrips.store]</p>
              <div className="kpis">
                <div className="kpi"><div className="kpi-val">3.10<span className="gold">×</span></div><div className="kpi-lbl">Blended ROAS</div></div>
                <div className="kpi"><div className="kpi-val">20<span className="gold">K+</span></div><div className="kpi-lbl">Customers</div></div>
                <div className="kpi"><div className="kpi-val">182<span className="gold">+</span></div><div className="kpi-lbl">Retail doors</div></div>
              </div>
            </div>
            <div>
              <div className="gold-rule reveal-l" />
              <p className="f-gold reveal-l" style={{ marginBottom: 12 }}>02 — Health & Wellness · schnozzstrips.store</p>
              <h2 className="f-h1 reveal-l" style={{ marginBottom: 18 }}>Schnozz Strips</h2>
              <p className="f-body reveal-l" style={{ marginBottom: 32 }}>
                From a single nasal strip SKU to a multi-product health brand with retail presence in
                Sportsman&apos;s Warehouse and CNA. Schnozz is the story of what happens when you follow
                the data without hesitation.
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
            </div>
          </div>
        </div>
      </section>

      {/* GOBBLERS — COMING SOON */}
      <section className="brand-sec" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="coming-soon-box reveal">
            <div className="coming-inner">
              <p className="f-gold" style={{ marginBottom: 14 }}>03 — Coming 2026</p>
              <h2 className="f-h1" style={{ marginBottom: 18 }}>Gobblers<br /><span className="gold">Functional Gummies</span></h2>
              <p className="f-italic" style={{ maxWidth: 540, margin: '0 auto 28px' }}>
                Super greens. Super mushrooms. Protein gummies. Our newest brand in development — built on
                the same system that scaled BUUB and Schnozz, applied to the fastest-growing category in
                consumer health.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, maxWidth: 560, margin: '0 auto 36px' }}>
                <div className="kpi" style={{ textAlign: 'center' }}><div className="kpi-val gold">2026</div><div className="kpi-lbl">Launch target</div></div>
                <div className="kpi" style={{ textAlign: 'center' }}><div className="kpi-val gold">3</div><div className="kpi-lbl">Product lines</div></div>
                <div className="kpi" style={{ textAlign: 'center' }}><div className="kpi-val gold">∞</div><div className="kpi-lbl">Range potential</div></div>
              </div>
              <p className="f-label" style={{ marginBottom: 20 }}>Interested in being part of the launch? We&apos;re open to strategic partners.</p>
              <Link className="btn btn-gold" href="/partner">Explore Partnership</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <p className="f-label">butcherbird.global · Cape Town · 2026</p>
            <Link className="btn btn-gold" href="/#audit">Get Free Audit</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
