'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import RevealOnScroll from '@/components/RevealOnScroll'
import CaseStudyCard from '@/components/CaseStudyCard'
import { caseStudies, CaseStudy } from '@/lib/data'

const homeStudies = caseStudies

function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const duration = 1800
        const start = performance.now()
        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(parseFloat((to * eased).toFixed(decimals)))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [to, decimals])

  return <span ref={ref}>{decimals ? count.toFixed(decimals) : count}</span>
}

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<CaseStudy | null>(null)
  const testiRef = useRef<HTMLDivElement>(null)
  const [testiProgress, setTestiProgress] = useState(0)

  useEffect(() => {
    const el = testiRef.current
    if (!el) return
    function onScroll() {
      const max = el!.scrollWidth - el!.clientWidth
      setTestiProgress(max > 0 ? el!.scrollLeft / max : 0)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

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
            <span className="gold">R10,000,000+</span><br />
            from R2.2M<br />
            in ad spend.
          </h1>
          <p className="f-italic anim d2" style={{ marginTop: 20, marginBottom: 0 }}>Within 7 months from launch.</p>
          <div style={{ maxWidth: 480, marginBottom: 48, marginTop: 32 }} className="anim d3">
            <p className="f-body">
              Butcherbird is a Cape Town-based growth agency. Paid media. Email marketing.
              Built by operators who run their own brands on the same system. When we say
              something works — we&apos;ve proven it with our own money.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }} className="anim d4">
            <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Start Scaling Seriously</a>
            <Link className="btn btn-outline" href="/portfolio">Our Portfolio</Link>
          </div>
        </div>
        <div className="hero-ghost">4.6×</div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            <div className="stat reveal"><div className="stat-num"><span className="gold">R<CountUp to={10} />M+</span></div><div className="f-label">Revenue generated</div></div>
            <div className="stat reveal"><div className="stat-num"><CountUp to={4.6} decimals={1} /><span className="gold">×</span></div><div className="f-label">Blended ROAS avg</div></div>
            <div className="stat reveal"><div className="stat-num"><span className="gold"><CountUp to={4} /></span></div><div className="f-label">Portfolio brands</div></div>
            <div className="stat reveal"><div className="stat-num"><CountUp to={50} /><span className="gold">K+</span></div><div className="f-label">Customers acquired</div></div>
            <div className="stat reveal"><div className="stat-num"><CountUp to={600} /><span className="gold">+</span></div><div className="f-label">Retail doors</div></div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <h2 className="f-h1 reveal" style={{ marginBottom: 0 }}>What our<br />clients say.</h2>
          <div style={{ position: 'relative' }}>
          <div className="testi-grid" ref={testiRef}>
            {[
              { brand: 'BUUB', person: 'Larneke Van Vyl', role: 'Brand Manager', location: 'Cape Town', oneliner: "100% organic, reef-safe SPF50 sunscreen — Original, Tinted, Kids, and Mini" },
              { brand: 'SCHNOZZ', person: 'Ilan Tait', role: 'Co-Founder', location: 'Johannesburg', oneliner: "Adhesive nasal strips that open airways for better breathing during sleep, sport, and everyday life" },
              { brand: 'LAKRIDS', person: 'Catherine Bullough', role: 'SA Licence Owner', location: 'Cape Town', oneliner: "Gourmet Danish liquorice — plain and chocolate-coated, made in small batches by Lakrids by Bülow" },
              { brand: 'NUMUTI', person: 'Daniel Fine', role: 'Founder', location: 'Cape Town', oneliner: "Functional wellness drinks made with African botanicals and nootropics — Focus, Calm, and Mood blends" },
              { brand: 'BONNIE BIO', person: 'Frank McDouall', role: 'Owner', location: 'Johannesburg', oneliner: "Certified compostable, plant-based household products — bags, cling wrap, straws, and air fryer liners" },
              { brand: 'HELPDESK', person: 'Mohammed Al Sabbagh', role: 'Founder', location: 'Dubai', oneliner: "On-demand expert platform connecting users to real human specialists via audio, video, and screen share" },
              { brand: 'HIBA BALFAQIH', person: 'Hiba Balfaqih', role: 'Founder', location: 'New York', oneliner: "School of Mindhacking — online coaching helping women break subconscious patterns and redesign their lives" },
              { brand: 'SHOOT STUDIOS', person: 'Elad', role: 'Owner', location: 'Cape Town', oneliner: "Professional photography and creative studio rental space in Woodstock, Cape Town" },
              { brand: 'KOKEE', person: 'Chris', role: 'Founder', location: 'Johannesburg', oneliner: "Natural electrolyte powder made with coconut water and Himalayan salt — everyday hydration, simplified" },
            ].map((t) => (
              <div key={t.brand} className="testi-card reveal">
                <div className="testi-video-ph">
                  <div className="play-btn" />
                </div>
                <div className="testi-info">
                  <div className="testi-brand">{t.brand}</div>
                  <div className="testi-person">{t.person}</div>
                  <div className="testi-location">{t.role} · {t.location}</div>
                  <div className="testi-oneliner">{t.oneliner}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="testi-arrow-hint" style={{ opacity: testiProgress >= 0.99 ? 0 : 1 }} onClick={() => testiRef.current?.scrollBy({ left: 460, behavior: 'smooth' })} aria-label="Scroll testimonials" />
          </div>
          <div className="testi-scrollbar">
            <div className="testi-scrollbar-fill" style={{ width: `${testiProgress * 100}%` }} />
          </div>
        </div>
      </section>

      {/* INTRO CALL */}
      <section className="section" style={{ background: '#fff' }} id="contact">
        <div className="container">
          <h2 className="intro-title reveal" style={{ marginBottom: 48 }}>A conversation.<br />Not a pitch.</h2>
          <div className="intro-card reveal">
            <div className="intro-card-body">
              <p className="intro-body-lead reveal">
                We set aside 20 minutes — no deck, no script. We&apos;ll look at your brand, ask the questions
                that actually matter, and give you an honest read on where your real growth leverage is.
                You&apos;ll leave with clarity on your account whether we end up working together or not.
              </p>
              <div className="intro-lists">
                <div>
                  <p className="intro-list-heading reveal">You&apos;re a fit if</p>
                  <ul className="intro-list">
                    {[
                      { text: 'Spending $1,500+/month on paid media and want to push harder' },
                      { text: 'Have a product people are already buying — and want to scale it' },
                      { text: 'Want a team with genuine skin in the game, not account managers' },
                      { text: 'Ready to move fast and execute without hand-holding' },
                    ].map((item, i) => (
                      <li key={i} className="intro-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                        <span className="intro-icon-apply" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="intro-list-heading reveal">Probably not if</p>
                  <ul className="intro-list">
                    {[
                      { text: 'Still testing your product or haven\'t proven demand yet' },
                      { text: 'Need weekly updates and approval on every decision' },
                      { text: 'Looking for a traditional agency to manage things for you' },
                    ].map((item, i) => (
                      <li key={i} className="intro-item reveal" style={{ transitionDelay: `${(i + 4) * 0.1}s` }}>
                        <span className="intro-icon-skip" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">
                Book the 20-Minute Call
              </a>
              <p className="f-label" style={{ marginTop: 14 }}>Min. active spend: $1,500/month or R15,000/month</p>
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
                For brands that want more than execution. Direct access to the Butcherbird C-suite —
                monthly strategy sessions, quarterly business reviews, and senior-level thinking applied to your account.
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
          <div style={{ marginBottom: 52 }}>
            <h2 className="f-h1 reveal" style={{ marginBottom: 12 }}>Built from zero.<br />Documented in detail.</h2>
            <p className="f-body reveal" style={{ maxWidth: 420 }}>Every number is real. Click any brand to see the full story.</p>
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
              <p className="f-gold reveal-l" style={{ marginBottom: 18 }}>Cape Town · 18 people · 7 months</p>
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
                <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Book an Intro Call</a>
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
          <p className="f-gold reveal" style={{ marginBottom: 22 }}>The opportunity is right there</p>
          <h2 className="f-h1 reveal" style={{ marginBottom: 18 }}>
            You need operators<br />who know how<br /><span className="gold">to take it.</span>
          </h2>
          <p className="f-body reveal" style={{ marginBottom: 36, maxWidth: 460, marginLeft: 'auto', marginRight: 'auto' }}>
            20 minutes. No pitch. We look at your brand, tell you what we see — and if we&apos;re
            the right fit for each other, we get to work.
          </p>
          <a className="btn btn-gold reveal" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">
            Book Your Intro Call
          </a>
          <p className="f-label reveal" style={{ marginTop: 18 }}>butcherbird.global · Cape Town · hello@butcherbird.global</p>
        </div>
      </section>

      <Footer />

      {activeModal && <Modal study={activeModal} onClose={() => setActiveModal(null)} />}
    </>
  )
}
