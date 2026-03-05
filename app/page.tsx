'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import RevealOnScroll from '@/components/RevealOnScroll'
import CaseStudyCard from '@/components/CaseStudyCard'
import { caseStudies, CaseStudy } from '@/lib/data'

const homeStudies = caseStudies.slice(0, 6)

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<CaseStudy | null>(null)

  return (
    <>
      <RevealOnScroll />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }} className="anim d1">
            <div style={{ width: 28, height: 1, background: 'var(--gold)' }} />
            <span className="f-label">Cape Town · Global · Est. 2025</span>
          </div>
          <h1 className="hero-hl anim d2">
            We generated<br />
            <span className="gold">R5,050,000</span><br />
            from R1.63M<br />
            in ad spend.
          </h1>
          <div style={{ maxWidth: 480, marginBottom: 48 }} className="anim d3">
            <p className="f-italic" style={{ marginBottom: 16 }}>We can do the same for yours.</p>
            <p className="f-body">
              Butcherbird is a Cape Town-based growth agency. Paid media. Email marketing.
              Built by operators who run their own brands on the same system. When we say
              something works — we&apos;ve proven it with our own money.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }} className="anim d4">
            <a className="btn btn-gold" href="#audit">Get a Free Account Audit</a>
            <Link className="btn btn-outline" href="/work">See Our Work</Link>
          </div>
        </div>
        <div className="hero-ghost">3.10×</div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            <div className="stat reveal"><div className="stat-num"><span className="gold">R5.05M</span></div><div className="f-label">Revenue generated</div></div>
            <div className="stat reveal"><div className="stat-num">3.10<span className="gold">×</span></div><div className="f-label">Blended ROAS avg</div></div>
            <div className="stat reveal"><div className="stat-num"><span className="gold">6</span></div><div className="f-label">Brands scaled</div></div>
            <div className="stat reveal"><div className="stat-num">20<span className="gold">K+</span></div><div className="f-label">Customers acquired</div></div>
            <div className="stat reveal"><div className="stat-num">182<span className="gold">+</span></div><div className="f-label">Retail doors</div></div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="sec-label">
            <span className="sec-label-txt">What clients say</span>
            <div className="sec-label-line" />
          </div>
          <div className="testi-grid">
            <div className="testi-card reveal">
              <div className="video-ph">
                <div className="play-btn" />
                <p className="f-label">Client video testimonial</p>
                <p className="f-label" style={{ marginTop: 4 }}>[Upload to Tian — embed here]</p>
              </div>
              <div style={{ fontWeight: 700, fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 4 }}>[Client Name]</div>
              <div className="f-label">[Title · Company · Location]</div>
            </div>
            <div className="testi-card reveal">
              <p className="testi-quote">&ldquo;[Client quote here — gather from Hiba or Helpdesk. Ideal: specific result, mentions the operator difference, would refer.]&rdquo;</p>
              <div style={{ fontWeight: 700, fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 4 }}>[Client Name]</div>
              <div className="f-label">[Title · Company]</div>
            </div>
            <div className="testi-card reveal">
              <p className="testi-quote">&ldquo;[Second quote. Tone: surprised by depth of thinking, specific about a result, unprompted endorsement of the team.]&rdquo;</p>
              <div style={{ fontWeight: 700, fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 4 }}>[Client Name]</div>
              <div className="f-label">[Title · Company]</div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIT */}
      <section className="section" style={{ background: 'var(--dark2)' }} id="audit">
        <div className="container">
          <div className="audit-block reveal">
            <div className="audit-block-inner">
              <div>
                <div className="gold-rule" />
                <p className="f-gold" style={{ marginBottom: 14 }}>Free account audit</p>
                <h2 className="f-h1" style={{ marginBottom: 18 }}>
                  We&apos;ll show you exactly<br />what your ads are<br /><span className="gold">leaving on the table.</span>
                </h2>
                <p className="f-italic">No cost. No pitch. Just clarity.</p>
              </div>
              <div>
                <p className="f-body" style={{ marginBottom: 4 }}>
                  We analysed R1,630,000 in ad spend across 6 brands and documented every place money was lost.
                  We built frameworks to stop it recurring. We&apos;ll do a 30-minute version of that analysis
                  for your account — before you spend a rand with us.
                </p>
                <ul className="audit-list">
                  <li>Review of your current Meta ad structure</li>
                  <li>Creative performance gap analysis</li>
                  <li>Email infrastructure assessment</li>
                  <li>3 specific actions to take immediately</li>
                  <li>No agency sales pitch on the call</li>
                </ul>
                <a className="btn btn-gold" href="mailto:hello@butcherbird.global?subject=Free Account Audit">
                  Book Your Free 30-Min Audit
                </a>
                <p className="f-label" style={{ marginTop: 14 }}>Min. spend to qualify: $1,500/month or R15,000/month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <div className="sec-label">
            <span className="sec-label-txt">What we do</span>
            <div className="sec-label-line" />
          </div>
          <div style={{ maxWidth: 580, marginBottom: 52 }}>
            <h2 className="f-h1 reveal" style={{ marginBottom: 14 }}>Two levers. One system.</h2>
            <p className="f-body reveal">
              Paid media and email are the two highest-leverage growth channels for DTC and personal brands.
              We don&apos;t do SEO, PR, or events. We do these two things with the precision of operators who
              have skin in the game.
            </p>
          </div>
          <div className="wwd-grid">
            <div className="wwd-card reveal">
              <span className="wwd-icon">◈</span>
              <div className="f-gold" style={{ marginBottom: 14 }}>01 — Paid Media</div>
              <h3 className="f-h2" style={{ marginBottom: 14 }}>Meta Ad Management</h3>
              <p className="f-body" style={{ marginBottom: 20 }}>
                Performance-first Meta campaigns. Static beats video in 5 of 6 brands we&apos;ve tested.
                BOF is underfunded in almost every account we audit. We fix both.
              </p>
              <p className="f-label">Campaign architecture · Creative production · Weekly reporting</p>
            </div>
            <div className="wwd-card reveal">
              <span className="wwd-icon">⟁</span>
              <div className="f-gold" style={{ marginBottom: 14 }}>02 — Email Marketing</div>
              <h3 className="f-h2" style={{ marginBottom: 14 }}>Klaviyo Infrastructure</h3>
              <p className="f-body" style={{ marginBottom: 20 }}>
                Most brands leave 20–30% of revenue on the table. We build full Klaviyo systems —
                flows, automations, campaigns, list health — that compound LTV and reduce ad dependency.
              </p>
              <p className="f-label">Flows · Automations · Campaigns · Deliverability</p>
            </div>
            <div className="wwd-card reveal">
              <span className="wwd-icon">◎</span>
              <div className="f-gold" style={{ marginBottom: 14 }}>03 — Strategy</div>
              <h3 className="f-h2" style={{ marginBottom: 14 }}>Full Stack Consulting</h3>
              <p className="f-body" style={{ marginBottom: 20 }}>
                For brands that want more than execution. Monthly sessions with Gascoyne Clarke,
                quarterly business reviews, and direct access to the thinking — not just the output.
              </p>
              <p className="f-label">Monthly strategy · Quarterly reviews · Growth roadmap</p>
            </div>
          </div>
          <div style={{ marginTop: 2, background: 'var(--dark2)', padding: 52, textAlign: 'center' }} className="reveal">
            <p className="f-gold" style={{ marginBottom: 12 }}>Watch · 90 seconds</p>
            <div style={{ maxWidth: 720, margin: '0 auto', width: '100%', aspectRatio: '16/9', background: 'var(--dark)', border: '1px dashed rgba(184,150,62,.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, cursor: 'pointer' }}>
              <div className="play-btn" style={{ width: 64, height: 64 }} />
              <p className="f-label">[VSL placeholder · Brief: open R5M → the problem → operator difference → audit CTA · 90s max]</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF OF WORK */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="sec-label">
            <span className="sec-label-txt">Proof of work</span>
            <div className="sec-label-line" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h2 className="f-h1 reveal" style={{ marginBottom: 12 }}>Built from zero.<br />Documented in detail.</h2>
              <p className="f-body reveal" style={{ maxWidth: 420 }}>Every number is real. Click any brand to see the full story.</p>
            </div>
            <Link className="btn btn-outline reveal" href="/work">Full client roster →</Link>
          </div>
          <div className="cs-grid">
            {homeStudies.map((s) => (
              <CaseStudyCard
                key={s.id}
                study={s}
                onClick={() => setActiveModal(s)}
                metrics={s.metrics.slice(0, 2)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-BRAND STATS */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats2">
            <div className="reveal">
              <div className="gold-rule" />
              <p className="f-gold" style={{ marginBottom: 12 }}>The cross-brand report</p>
              <h2 className="f-h1" style={{ marginBottom: 14 }}>R1.63M in spend.<br />Every rand<br /><span className="gold">accounted for.</span></h2>
              <p className="f-body">We analysed every campaign across 6 brands, documented wins and mistakes, and built process frameworks from both. Ask for the report on your audit call.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
              <div className="stat reveal"><div className="stat-num" style={{ fontSize: 'clamp(18px,2.2vw,30px)' }}><span className="gold">R1.63M</span></div><div className="f-label">Ad spend analysed</div></div>
              <div className="stat reveal"><div className="stat-num" style={{ fontSize: 'clamp(18px,2.2vw,30px)' }}>45.23<span className="gold">×</span></div><div className="f-label">Best single creative</div></div>
              <div className="stat reveal"><div className="stat-num" style={{ fontSize: 'clamp(18px,2.2vw,30px)' }}>115<span className="gold">×</span></div><div className="f-label">Single-day peak</div></div>
              <div className="stat reveal" style={{ borderRight: 'none' }}><div className="stat-num" style={{ fontSize: 'clamp(18px,2.2vw,30px)' }}><span className="gold">8</span></div><div className="f-label">Months operating</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* TEAM */}
      <section className="section" style={{ background: 'var(--dark2)' }}>
        <div className="container">
          <div className="sec-label">
            <span className="sec-label-txt">The team</span>
            <div className="sec-label-line" />
          </div>
          <div className="story-grid">
            <div>
              <div className="gold-rule reveal-l" />
              <p className="f-gold reveal-l" style={{ marginBottom: 18 }}>Cape Town · 18 people · 8 months</p>
              <h2 className="f-h1 reveal-l" style={{ marginBottom: 20 }}>Built by operators.<br />Not marketers.</h2>
              <p className="f-body reveal-l" style={{ marginBottom: 18 }}>
                We didn&apos;t start as an agency. We started by building our own consumer brands with our own
                capital — BUUB, Schnozz, Superior Fragrances. The agency exists because the infrastructure
                we built for ourselves is valuable enough to sell access to.
              </p>
              <p className="f-body reveal-l" style={{ marginBottom: 18 }}>
                When we tell you what works, we&apos;re telling you what we&apos;ve proven with our own money.
                No other agency in the market can say that.
              </p>
              <p className="f-body reveal-l">
                18 people. Cape Town cost base. Hard-currency international pricing. At ~18:1 ZAR:USD, we
                deliver world-class execution at a fraction of what any London or New York agency charges.
                This is not a discount position — it&apos;s an arbitrage position.
              </p>
              <div style={{ marginTop: 36 }} className="reveal-l">
                <a className="btn btn-gold" href="#audit">Work With Us</a>
              </div>
            </div>
            <div>
              <div className="team-grid reveal">
                {[
                  { initials: 'GC', name: 'Gascoyne Clarke', role: 'Founder & CEO · Age 24' },
                  { initials: 'IT', name: 'Ilan Tait', role: 'COO' },
                  { initials: 'KM', name: 'Kathleen Murphy', role: 'CMO' },
                  { initials: 'T', name: 'Tian', role: 'Paid Media Lead' },
                ].map((member) => (
                  <div key={member.initials} className="team-card">
                    <div className="team-img-ph"><div className="team-img-lbl">{member.initials}</div></div>
                    <div className="team-info">
                      <div className="team-name">{member.name}</div>
                      <div className="team-role">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="f-label" style={{ marginTop: 14, textAlign: 'center' }}>[Replace with team photography — dark bg, candid, high contrast]</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '120px 0', background: 'var(--black)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center,rgba(184,150,62,.08),transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 640 }}>
          <div className="gold-rule-c reveal" />
          <p className="f-gold reveal" style={{ marginBottom: 22 }}>One more time</p>
          <h2 className="f-h1 reveal" style={{ marginBottom: 18 }}>
            Your ads are leaving money<br />on the table.<br /><span className="gold">We&apos;ll show you exactly where.</span>
          </h2>
          <p className="f-body reveal" style={{ marginBottom: 36, maxWidth: 460, marginLeft: 'auto', marginRight: 'auto' }}>
            30 minutes. Free. No pitch. We review your account, identify the leverage, and you leave with
            three things to act on — whether you work with us or not.
          </p>
          <a className="btn btn-gold reveal" href="mailto:hello@butcherbird.global?subject=Free Account Audit">
            Book the Audit — It&apos;s Free
          </a>
          <p className="f-label reveal" style={{ marginTop: 18 }}>butcherbird.global · Cape Town · hello@butcherbird.global</p>
        </div>
      </section>

      <Footer />

      {activeModal && <Modal study={activeModal} onClose={() => setActiveModal(null)} />}
    </>
  )
}
