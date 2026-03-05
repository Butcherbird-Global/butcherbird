'use client'

import { useState } from 'react'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <RevealOnScroll />

      {/* HERO */}
      <section className="partner-hero">
        <div className="container">
          <div className="sec-label anim d1">
            <span className="sec-label-txt">Partnership</span>
            <div className="sec-label-line" />
          </div>
          <h1 className="f-display anim d2" style={{ maxWidth: 800, marginBottom: 22 }}>
            The engine for<br />your brand&apos;s<br /><span className="gold">rapid scale.</span>
          </h1>
          <p className="f-italic anim d3" style={{ maxWidth: 520, marginBottom: 36 }}>
            Butcherbird doesn&apos;t just run agencies. We build brands from nothing. We have the
            infrastructure, the team, the system, and the proof. We are actively looking for the
            right partners to deploy it with.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }} className="anim d4">
            <a className="btn btn-gold" href="#partner-form">Explore Partnership</a>
            <Link className="btn btn-outline" href="/portfolio">See Our Brands</Link>
          </div>
        </div>
      </section>

      {/* WHO WE PARTNER WITH */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="sec-label">
            <span className="sec-label-txt">Who we partner with</span>
            <div className="sec-label-line" />
          </div>
          <div className="partner-grid">
            {[
              {
                num: '01',
                label: 'Venture Capital',
                title: 'Portfolio brands that need a growth engine',
                body: "You've invested in a consumer brand. The product is right. The market is there. But the growth infrastructure isn't. We've built that infrastructure — and proved it on our own brands first. We become the operational growth engine for your portfolio company.",
                tags: 'Full paid media + email · Creative production · Strategy · Operator accountability',
              },
              {
                num: '02',
                label: 'Entrepreneurs',
                title: 'Capital + execution for brands ready to scale',
                body: "You have a product that works and a market that wants it. You need capital and a team that knows how to deploy it. Butcherbird brings both — equity partnership structures where we invest our infrastructure and expertise in exchange for a meaningful stake in the outcome.",
                tags: "Media buying · Email system · Creative · Distribution strategy · Gascoyne's involvement",
              },
              {
                num: '03',
                label: 'Talent & Innovation',
                title: 'We are a magnet for builders who want to build big',
                body: 'If you are a brand builder, media buyer, creative, or growth operator who is exceptional at what you do and wants to work at the fastest-moving growth agency in Africa — we want to hear from you.',
                tags: 'Skin in the game · Cape Town base · International clients · Fast trajectory',
              },
            ].map((card) => (
              <div key={card.num} className="p-card reveal">
                <div className="p-card-num">{card.num}</div>
                <div className="f-gold" style={{ marginBottom: 14 }}>{card.label}</div>
                <h3 className="f-h2" style={{ marginBottom: 14 }}>{card.title}</h3>
                <p className="f-body" style={{ marginBottom: 24 }}>{card.body}</p>
                <p className="f-label">{card.tags}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="section">
        <div className="container">
          <div className="manifesto reveal">
            <div className="manifesto-inner">
              <div>
                <div className="gold-rule" />
                <p className="f-gold" style={{ marginBottom: 14 }}>Why partner with Butcherbird</p>
                <h2 className="f-h1" style={{ marginBottom: 20 }}>We don&apos;t just run ads.<br /><span className="gold">We build empires.</span></h2>
                <p className="f-body" style={{ marginBottom: 18 }}>
                  In 8 months, we&apos;ve taken three consumer brands from zero to meaningful revenue,
                  opened 182+ retail doors, acquired 30,000+ customers, and produced a cross-brand
                  insights report most agencies couldn&apos;t produce in 3 years.
                </p>
                <p className="f-body">
                  We operate on South African talent costs and charge in USD. That arbitrage is structural
                  and defensible. Every partner who comes into our orbit benefits from it.
                </p>
              </div>
              <div className="kpi-mini-grid">
                <div className="kpi"><div className="kpi-val gold">8</div><div className="kpi-lbl">Months operating</div></div>
                <div className="kpi"><div className="kpi-val">3</div><div className="kpi-lbl">Internal brands built</div></div>
                <div className="kpi"><div className="kpi-val">18</div><div className="kpi-lbl">Team members</div></div>
                <div className="kpi"><div className="kpi-val gold">~18:1</div><div className="kpi-lbl">ZAR:USD edge</div></div>
                <div className="kpi" style={{ gridColumn: '1 / -1' }}>
                  <div className="kpi-val">R5.05<span className="gold">M</span></div>
                  <div className="kpi-lbl">Revenue from R1.63M spend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section" style={{ background: 'var(--dark)' }} id="partner-form">
        <div className="container">
          <div className="pf-area reveal">
            <div className="sec-label">
              <span className="sec-label-txt">Get in touch</span>
              <div className="sec-label-line" />
            </div>
            <div className="pf-inner">
              <div>
                <h2 className="f-h1" style={{ marginBottom: 18 }}>Tell us about your brand.</h2>
                <p className="f-body" style={{ marginBottom: 18 }}>
                  If you&apos;re a VC with a portfolio brand that needs a growth engine, an entrepreneur with
                  a proven product looking for capital and execution, or exceptional talent who wants to build
                  something real — fill in the form and we&apos;ll be in touch within 24 hours.
                </p>
                <p className="f-italic">No fluff. We read every submission and respond personally.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="pf-grid">
                  <input className="pf-input" placeholder="Your name" type="text" required />
                  <input className="pf-input" placeholder="Company / brand" type="text" />
                  <input className="pf-input pf-full" placeholder="Email address" type="email" required />
                  <select className="pf-input pf-full" style={{ appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}>
                    <option value="" disabled>Partnership type</option>
                    <option>VC / Portfolio brand</option>
                    <option>Entrepreneur — equity partnership</option>
                    <option>Talent / joining the team</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    className="pf-input pf-full"
                    rows={5}
                    placeholder="Tell us about your brand, product, and what you're looking for. Be specific."
                  />
                  <div className="pf-full">
                    <button
                      type="submit"
                      className="btn btn-gold"
                      style={{
                        width: '100%',
                        background: submitted ? '#2A2A2A' : undefined,
                        color: submitted ? 'var(--gold)' : undefined,
                      }}
                    >
                      {submitted ? 'Sent ✓' : 'Send It'}
                    </button>
                    <p className="f-label" style={{ marginTop: 12, textAlign: 'center' }}>
                      We respond within 24 hours · hello@butcherbird.global
                    </p>
                  </div>
                </div>
              </form>
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
