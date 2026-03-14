'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import RevealOnScroll from '@/components/RevealOnScroll'
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
  const [activeTab, setActiveTab] = useState<'performance' | 'creative'>('performance')
  const testiRef = useRef<HTMLDivElement>(null)
  const [testiProgress, setTestiProgress] = useState(0)

  const [cName, setCName] = useState('')
  const [cBrand, setCBrand] = useState('')
  const [cEmail, setCEmail] = useState('')
  const [cMessage, setCMessage] = useState('')

  function handleContact(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${cName}${cBrand ? ` — ${cBrand}` : ''}`)
    const body = encodeURIComponent(`Name: ${cName}\nBrand: ${cBrand}\nEmail: ${cEmail}\n\n${cMessage}`)
    window.location.href = `mailto:g@butcherbird.global?subject=${subject}&body=${body}`
  }

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
      <section className="hero" id="hero">
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
          <p className="f-italic anim d2" style={{ marginTop: 20, marginBottom: 0 }}>Within 7 months from launch. Last updated Jan 2026.</p>
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
          <div className="gold-rule reveal" />
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

      {/* VSL */}
      <section className="vsl-section">
        <div className="container">
          <div className="vsl-inner reveal">
            <h2 className="f-h1" style={{ marginBottom: 32 }}>90 seconds. Hear it from us.</h2>
            <div className="vsl-ph">
              <div className="vsl-play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
              </div>
              <p className="f-label" style={{ marginTop: 20 }}>Video coming soon</p>
            </div>
            <div style={{ marginTop: 32 }} className="reveal">
              <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Book a Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO CALL */}
      <section className="section" style={{ background: '#fff' }} id="contact">
        <div className="container">
          <div className="gold-rule reveal" />
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
                      { text: 'Spending $3,000+/month on paid media and want to push harder' },
                      { text: 'Have a product people are already buying — and want to scale it' },
                      { text: 'Want a team to handle all your creative production end to end' },
                      { text: 'Want a team who can own your entire performance marketing stack' },
                      { text: 'Ready to move fast and execute without hand-holding' },
                    ].map((item, i) => (
                      <li key={i} className="intro-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                        <span className="intro-icon-apply" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">
                Book the 20-Minute Call
              </a>
              <p className="f-label" style={{ marginTop: 14 }}>Min. active spend: $3,000/month or R50,000/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section" id="what-we-do">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="f-h1 reveal" style={{ marginBottom: 64 }}>What We Do</h2>
          <div className="wwd-grid">
            <div className="wwd-card reveal">
              <span className="wwd-num">01</span>
              <div className="f-gold" style={{ marginBottom: 16 }}>Paid Media</div>
              <h3 className="f-h2" style={{ marginBottom: 12 }}>Meta & Google Ads Management</h3>
              <p className="f-italic wwd-tagline">The engine behind the growth of our portfolio brands, and client brands.</p>
              <p className="f-body" style={{ marginBottom: 24 }}>
                Performance-first Meta campaigns built from real account data. Static beats video in 5 of 6
                brands we&apos;ve tested. BOF is underfunded in almost every account we inherit. We fix both.
              </p>
              <p className="f-label">Campaign architecture · Creative production · Reporting</p>
            </div>
            <div className="wwd-card reveal">
              <span className="wwd-num">02</span>
              <div className="f-gold" style={{ marginBottom: 16 }}>Email Marketing</div>
              <h3 className="f-h2" style={{ marginBottom: 12 }}>Klaviyo Infrastructure</h3>
              <p className="f-italic wwd-tagline">20–30% of your revenue is sitting in your list.</p>
              <p className="f-body" style={{ marginBottom: 24 }}>
                Most brands haven&apos;t built the infrastructure to capture it. We build full Klaviyo systems —
                flows, automations, campaigns, and list health — that compound LTV and reduce dependency on paid.
              </p>
              <p className="f-label">Flows · Automations · Campaigns · Deliverability</p>
            </div>
            <div className="wwd-card reveal">
              <span className="wwd-num">03</span>
              <div className="f-gold" style={{ marginBottom: 16 }}>Strategy</div>
              <h3 className="f-h2" style={{ marginBottom: 12 }}>Full-Stack Consulting</h3>
              <p className="f-italic wwd-tagline">For founders who want the thinking, not just the execution.</p>
              <p className="f-body" style={{ marginBottom: 24 }}>
                Direct access to the Butcherbird C-suite. Monthly strategy sessions, quarterly reviews, and
                senior-level thinking on your account — for brands that want to move faster and smarter.
              </p>
              <p className="f-label">Monthly strategy · Quarterly reviews · Growth roadmap</p>
            </div>
          </div>
          <div style={{ marginTop: 64 }} className="reveal">
            <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </div>
        </div>
      </section>

      {/* CLIENT STORIES & WORK */}
      <section className="section" style={{ background: '#fff' }} id="client-stories">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="f-h1 reveal" style={{ marginBottom: 12, color: 'var(--black)' }}>Client Stories<br />& Work</h2>
          <p className="f-body reveal" style={{ maxWidth: 420, marginBottom: 52, color: 'rgba(0,0,0,0.5)' }}>Every number is real. Click any brand to see the full story.</p>
        </div>
        <div className="cs-rows">
          {homeStudies.map((s, i) => (
            <div key={s.id} className="cs-row reveal">
              <div className="cs-row-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="cs-row-img">
                {s.image
                  ? <Image src={s.image} alt={s.brand} fill style={{ objectFit: 'cover' }} />
                  : <span className="cs-row-img-ph">{s.brand}</span>
                }
              </div>
              <div className="cs-row-content">
                <div className="cs-row-tag">{s.tag}</div>
                <h3 className="cs-row-brand">{s.brand}</h3>
                <p className="f-italic" style={{ marginBottom: 0 }}>{s.subtitle}</p>
                <div className="cs-row-metrics">
                  {s.metrics.slice(0, 3).map((m) => (
                    <div key={m.lbl} className="cs-row-met">
                      <div className="cs-row-met-val">{m.val}</div>
                      <div className="cs-row-met-lbl">{m.lbl}</div>
                    </div>
                  ))}
                </div>
                <p className="f-body" style={{ marginBottom: 0 }}>{s.desc}</p>
                <div className="cs-row-actions">
                  <button className="cs-btn-perf" onClick={() => { setActiveTab('performance'); setActiveModal(s) }}>
                    View Performance
                  </button>
                  <button className="cs-btn-creative" onClick={() => { setActiveTab('creative'); setActiveModal(s) }}>
                    View Creative Work
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container" style={{ paddingTop: 52 }}>
          <a className="btn btn-gold reveal" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Book a Call</a>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ background: '#fff' }} id="team">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="f-h1 reveal" style={{ marginBottom: 64, color: 'var(--black)' }}>The Team</h2>

          <div className="team-group reveal">
            <p className="f-gold" style={{ marginBottom: 28, letterSpacing: '0.2em' }}>Management</p>
            <div className="team-grid-mgmt">
              {[
                { initials: 'GC', name: 'Gascoyne Clarke', role: 'CEO' },
                { initials: 'RC', name: 'Richard Clarke', role: 'CFO' },
                { initials: 'IT', name: 'Ilan Tait', role: 'Portfolio Manager' },
                { initials: 'KM', name: 'Kathleen Murphy', role: 'Marketing Director' },
                { initials: 'TB', name: 'Tian Bester', role: 'Paid Media Manager' },
              ].map((member) => (
                <div key={member.name} className="team-card">
                  <div className="team-img-ph"><div className="team-img-lbl">{member.initials}</div></div>
                  <div className="team-info">
                    <div className="team-name">{member.name}</div>
                    <div className="team-role">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="team-group reveal" style={{ marginTop: 64 }}>
            <p className="f-gold" style={{ marginBottom: 28, letterSpacing: '0.2em' }}>Team</p>
            <div className="team-grid-staff">
              {[
                { initials: 'RT', name: 'Rhett Tomlinson', role: 'Graphic Design & Creative' },
                { initials: 'KF', name: 'Kaylee Frankson', role: 'Email Marketing Manager' },
                { initials: 'MS', name: 'Morgan Scott', role: 'Videographer & Video Editor' },
                { initials: 'LN', name: 'Liam Nymphe', role: 'Videographer & Video Editor' },
                { initials: 'LVZ', name: 'Larneke Van Zyl', role: 'Social Media Manager' },
                { initials: 'JF', name: 'Jordyn Fester', role: 'Events Manager' },
                { initials: 'AS', name: 'Aamir Sayed', role: 'IT & Technical Infrastructure' },
                { initials: 'ZE', name: 'Zubayr Ederies', role: 'Graphic Design & Web Development' },
                { initials: 'MC', name: 'Maximus Clarke', role: 'Warehouse & Logistics Manager' },
                { initials: 'NC', name: 'Nikki Clarke', role: 'Administration & HR' },
                { initials: 'CT', name: 'Charmaine Trevisan', role: 'Accounts' },
                { initials: 'CB', name: 'Claudia Barnard', role: 'Graphic Design' },
              ].map((member) => (
                <div key={member.name} className="team-card">
                  <div className="team-img-ph"><div className="team-img-lbl">{member.initials}</div></div>
                  <div className="team-info">
                    <div className="team-name">{member.name}</div>
                    <div className="team-role">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 64 }} className="reveal">
            <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }} id="contact-form">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center,rgba(184,150,62,.06),transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="gold-rule reveal" />
          <h2 className="f-h1 reveal" style={{ marginBottom: 64 }}>Let&apos;s talk<br />about your brand.</h2>
          <div className="contact-grid">
            <form className="contact-form reveal" onSubmit={handleContact}>
              <div className="contact-row">
                <input className="contact-input" type="text" placeholder="Your name" value={cName} onChange={e => setCName(e.target.value)} required />
                <input className="contact-input" type="text" placeholder="Brand / Company" value={cBrand} onChange={e => setCBrand(e.target.value)} />
              </div>
              <input className="contact-input" type="email" placeholder="Email address" value={cEmail} onChange={e => setCEmail(e.target.value)} required />
              <textarea className="contact-input contact-textarea" placeholder="What are you working on?" value={cMessage} onChange={e => setCMessage(e.target.value)} />
              <button type="submit" className="btn btn-gold">Send Message</button>
            </form>

            <div className="contact-alt reveal">
              <div className="contact-or"><span>or</span></div>
              <p className="f-label" style={{ marginBottom: 8 }}>Skip the form</p>
              <p className="f-italic" style={{ marginBottom: 28, color: 'var(--light)' }}>Book a 20-minute intro call directly.</p>
              <a className="btn btn-outline" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
              <div className="contact-meta">
                <p className="f-label">g@butcherbird.global</p>
                <p className="f-label">Cape Town, South Africa</p>
                <p className="f-label" style={{ marginTop: 8 }}>Min. active spend: $3,000/mo or R50K/mo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {activeModal && <Modal study={activeModal} onClose={() => setActiveModal(null)} initialTab={activeTab} />}
    </>
  )
}
