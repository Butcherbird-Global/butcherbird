'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function PartnerPage() {
  const [pName, setPName] = useState('')
  const [pCompany, setPCompany] = useState('')
  const [pEmail, setPEmail] = useState('')
  const [pType, setPType] = useState('')
  const [pMessage, setPMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Partnership Enquiry — ${pName}${pCompany ? ` · ${pCompany}` : ''}`)
    const body = encodeURIComponent(`Name: ${pName}\nCompany: ${pCompany}\nEmail: ${pEmail}\nType: ${pType}\n\n${pMessage}`)
    window.location.href = `mailto:g@butcherbird.global?subject=${subject}&body=${body}`
  }

  return (
    <>
      <RevealOnScroll />

      {/* HERO */}
      <section className="partner-hero">
        <div className="container">
          <div className="gold-rule anim d1" />
          <p className="f-gold anim d1" style={{ marginBottom: 20 }}>Partnership</p>
          <h1 className="f-display anim d2" style={{ maxWidth: 780, marginBottom: 24 }}>
            The engine for<br />your brand&apos;s<br /><span className="gold">rapid scale.</span>
          </h1>
          <p className="f-italic anim d3" style={{ maxWidth: 520, marginBottom: 40 }}>
            We build brands from nothing — infrastructure, team, system, and proof all in-house.
            We are actively looking for the right partners to deploy it with.
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
          <div className="gold-rule reveal" />
          <h2 className="f-h1 reveal" style={{ marginBottom: 52 }}>Who we<br />partner with.</h2>
          <div className="partner-grid">
            {[
              {
                num: '01',
                label: 'Venture Capital',
                title: 'Portfolio brands that need a growth engine',
                body: "You've invested in a consumer brand. The product is right, the market is there, but the growth infrastructure isn't. We've built that infrastructure and proved it on our own brands first. We become the operational growth engine for your portfolio company.",
                tags: 'Full paid media + email · Creative production · Strategy · Operator accountability',
              },
              {
                num: '02',
                label: 'Entrepreneurs',
                title: 'Capital and execution for brands ready to scale',
                body: "You have a product that works and a market that wants it. You need capital and a team that knows how to deploy it. Butcherbird brings both — equity partnership structures where we invest our infrastructure and expertise in exchange for a meaningful stake in the outcome.",
                tags: 'Media buying · Email system · Creative · Distribution strategy · C-suite involvement',
              },
              {
                num: '03',
                label: 'Operators & Talent',
                title: 'Exceptional builders who want to move fast',
                body: 'If you are a brand builder, media buyer, creative director, or growth operator who is exceptional at what you do — we want to hear from you. We are not a slow company. We are not a safe company. We are the fastest-moving growth agency in Africa and we hire accordingly.',
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

      {/* WHY PARTNER */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="manifesto reveal">
            <div className="manifesto-inner">
              <div>
                <div className="gold-rule" style={{ marginBottom: 20 }} />
                <p className="f-gold" style={{ marginBottom: 14 }}>Why partner with Butcherbird</p>
                <h2 className="f-h1" style={{ marginBottom: 20, color: 'var(--off-white)' }}>We don&apos;t just run ads.<br /><span className="gold">We own the outcome.</span></h2>
                <p className="f-body" style={{ marginBottom: 28 }}>
                  In 7 months, we&apos;ve taken brands from zero to meaningful revenue,
                  opened 600+ retail doors, acquired 50,000+ customers, and generated R10,000,000+
                  from R2,173,913 in ad spend — documented in full.
                </p>
                <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Book a Call</a>
              </div>
              <div className="kpi-mini-grid">
                <div className="kpi"><div className="kpi-val gold">7</div><div className="kpi-lbl">Months operating</div></div>
                <div className="kpi"><div className="kpi-val">3</div><div className="kpi-lbl">Internal brands built</div></div>
                <div className="kpi"><div className="kpi-val">18</div><div className="kpi-lbl">Team members</div></div>
                <div className="kpi"><div className="kpi-val gold">50<span style={{fontSize:'0.7em'}}>K+</span></div><div className="kpi-lbl">Customers acquired</div></div>
                <div className="kpi" style={{ gridColumn: '1 / -1' }}>
                  <div className="kpi-val">R10<span className="gold">M+</span></div>
                  <div className="kpi-lbl">Revenue from R2,173,913 in ad spend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section" style={{ background: 'var(--dark)' }} id="partner-form">
        <div className="container">
          <div className="pf-inner reveal">
            <div>
              <div className="gold-rule" style={{ marginBottom: 20 }} />
              <p className="f-gold" style={{ marginBottom: 14 }}>Get in touch</p>
              <h2 className="f-h1" style={{ marginBottom: 18 }}>Tell us about<br />your brand.</h2>
              <p className="f-body" style={{ marginBottom: 18 }}>
                VC with a portfolio brand that needs a growth engine. Entrepreneur with a proven
                product looking for capital and execution. Exceptional operator who wants to build
                something real. Fill in the form and we&apos;ll be in touch within 24 hours.
              </p>
              <p className="f-italic">No fluff. We read every submission and respond personally.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="pf-grid">
                <input className="pf-input" placeholder="Your name" type="text" required value={pName} onChange={e => setPName(e.target.value)} />
                <input className="pf-input" placeholder="Company / brand" type="text" value={pCompany} onChange={e => setPCompany(e.target.value)} />
                <input className="pf-input pf-full" placeholder="Email address" type="email" required value={pEmail} onChange={e => setPEmail(e.target.value)} />
                <select className="pf-input pf-full" style={{ appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }} value={pType} onChange={e => setPType(e.target.value)}>
                  <option value="" disabled>Partnership type</option>
                  <option>VC / Portfolio brand</option>
                  <option>Entrepreneur — equity partnership</option>
                  <option>Operator / joining the team</option>
                  <option>Other</option>
                </select>
                <textarea
                  className="pf-input pf-full"
                  rows={5}
                  placeholder="Tell us about your brand, product, and what you're looking for. Be specific."
                  value={pMessage}
                  onChange={e => setPMessage(e.target.value)}
                />
                <div className="pf-full">
                  <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>
                    Send It
                  </button>
                  <p className="f-label" style={{ marginTop: 12, textAlign: 'center' }}>
                    We respond within 24 hours · g@butcherbird.global
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
