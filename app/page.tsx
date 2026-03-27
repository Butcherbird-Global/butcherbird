'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import RevealOnScroll from '@/components/RevealOnScroll'
import FAQ from '@/components/FAQ'
import { caseStudies, CaseStudy } from '@/lib/data'

const faqItems = [
  { q: 'What ROAS should I expect from Meta ads?', a: 'Depends on your category, price point, and creative. Across our portfolio, blended ROAS averages 4.6\u00d7. Individual campaigns have hit 11.47\u00d7 (Lakrids), 8.20\u00d7 (Schnozz), and 9.15\u00d7 (Numuti). We don\u2019t promise numbers \u2014 we show you ours.' },
  { q: 'How long until I see results from paid media?', a: 'Most brands see meaningful data within 2\u20134 weeks of launch. Consistent, scalable performance typically stabilises within 60\u201390 days. We don\u2019t optimise for vanity metrics \u2014 we optimise for purchases.' },
  { q: 'What\u2019s the difference between a media buyer and a growth agency?', a: 'A media buyer runs your ads. A growth agency builds the system \u2014 creative strategy, campaign architecture, email infrastructure, performance analysis, and strategic direction. We don\u2019t just execute; we think.' },
  { q: 'Do I need a minimum ad spend to work with you?', a: 'Yes. Minimum active media spend is $3,000/month (R50,000/month). Below that, the data signal is too weak to optimise meaningfully, and neither of us gets a return on the relationship.' },
  { q: 'Should I use Meta ads or Google ads?', a: 'For most consumer brands, Meta first. It\u2019s where you build demand, not just capture it. Google captures people already searching \u2014 Meta puts you in front of people who didn\u2019t know they needed you. We run both when it makes sense.' },
  { q: 'Can a South African agency manage international ad accounts?', a: 'Yes. We manage accounts across South Africa, the UAE, and beyond. Our Cape Town cost base means you get world-class execution at a fraction of what London or New York agencies charge. The platform is the same everywhere \u2014 the talent is what differs.' },
  { q: 'What industries do you work with?', a: 'Consumer brands \u2014 skincare, health and wellness, food and beverage, fragrance, home goods, technology platforms. If you sell a product to real people and want to grow online, we\u2019re built for that.' },
  { q: 'Do you build websites and Shopify stores?', a: 'Yes. Custom Shopify themes, full brand identity builds, landing pages, and email infrastructure. We\u2019ve built brands from scratch \u2014 BUUB, Schnozz, Superior \u2014 including the sites they sell on.' },
  { q: 'What makes Butcherbird different from other agencies?', a: 'We run our own brands on the same system. When we say something works, we\u2019ve proven it with our own money first. R10M+ in revenue generated. 50K+ customers acquired. 600+ retail doors opened. Every number on this site is real.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

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
  const [activeTab, setActiveTab] = useState<'creative' | 'story'>('story')
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

  const SECTIONS = ['hero','testimonials','vsl','contact','what-we-do','client-stories','faq','team','contact-form']
  const [activeSection, setActiveSection] = useState(0)
  useEffect(() => {
    function onScroll() {
      const mid = window.innerHeight / 2
      let current = 0
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= mid) current = i
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  function goSection(dir: 1 | -1) {
    const next = Math.max(0, Math.min(SECTIONS.length - 1, activeSection + dir))
    const el = document.getElementById(SECTIONS[next])
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <RevealOnScroll />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26, flexWrap: 'wrap' }} className="anim d1">
            <div style={{ width: 28, height: 1, background: 'var(--gold)' }} />
            <span className="f-label">Cape Town · Global · Est. 2025</span>
            <span className="f-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>· As seen in <img src="/forbes-logo.svg" alt="Forbes" style={{ height: 11, display: 'inline-block', verticalAlign: 'middle' }} /> Africa Iss. Nov &apos;25</span>
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
      <section className="section" style={{ background: 'var(--dark)' }} id="testimonials">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="f-h1 reveal" style={{ marginBottom: 0 }}>What our<br />clients say.</h2>
          <div style={{ position: 'relative' }}>
          <div className="testi-grid" ref={testiRef}>
            {[
              { brand: 'LAKRIDS', person: 'Catherine Bullough', role: 'SA Licence Owner', location: 'Cape Town', oneliner: "Gourmet Danish liquorice — plain and chocolate-coated, made in small batches by Lakrids by Bülow", video: 'https://www.youtube.com/embed/i-nOjrkCqfY' },
              { brand: 'HELPDESK', person: 'Mohammed Al Sabbagh', role: 'Founder', location: 'Dubai', oneliner: "On-demand expert platform connecting users to real human specialists via audio, video, and screen share", video: 'https://www.youtube.com/embed/ihTXe-_WCiM' },
              { brand: 'ORYX DESERT SALT', person: 'Samantha Skyring', role: 'Owner', location: 'Upington', oneliner: "Unrefined, mineral-rich Kalahari salt — stocked in Woolworths, Pick n Pay, and exported to the US, UK, and Middle East", video: 'https://www.youtube.com/embed/h0sHumxYSzg' },
              { brand: 'SHOOT STUDIOS', person: 'Thorin', role: 'Studio Manager', location: 'Cape Town', oneliner: "Professional photography and creative studio in Woodstock — went from zero ads to their best month ever, generating R21K in bookings from R3K spend", video: 'https://www.youtube.com/embed/bk_rtvWfbx8' },
              { brand: 'BONNIE BIO', person: 'Frank McDouall', role: 'Owner', location: 'Johannesburg', oneliner: "Certified compostable, plant-based household products — bags, cling wrap, straws, and air fryer liners", video: 'https://www.youtube.com/embed/hFbq0B9_S3Q' },
              // { brand: 'NUMUTI', person: 'Daniel Fine', role: 'Founder', location: 'Cape Town', oneliner: "Functional wellness drinks made with African botanicals and nootropics — Focus, Calm, and Mood blends" },
              { brand: 'BUUB', person: 'Larneke Van Vyl', role: 'Brand Manager', location: 'Cape Town', oneliner: "100% organic, reef-safe SPF50 sunscreen — Original, Tinted, Kids, and Mini", video: 'https://www.youtube.com/embed/KZZ9XEoDLPE' },
              { brand: 'SCHNOZZ', person: 'Ilan Tait', role: 'Co-Founder', location: 'Johannesburg', oneliner: "Adhesive nasal strips that open airways for better breathing during sleep, sport, and everyday life", video: 'https://www.youtube.com/embed/sDSnriXD35s' },
              { brand: 'SUPERIOR', person: 'Maximus Clarke', role: 'Brand Manager', location: 'Cape Town', oneliner: "Designer-inspired fragrances made from premium French oils — sold through a growing network of agents across Southern Africa", video: 'https://www.youtube.com/embed/Dqvm1qaT-u8' },
            ].map((t) => (
              <div key={t.brand} className="testi-card reveal">
                <div className="testi-video-ph">
                  {t.video
                    ? <iframe src={t.video} title={`${t.brand} testimonial`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }} />
                    : <div className="play-btn" />
                  }
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
          <button className="testi-arrow-hint testi-arrow-left" style={{ opacity: testiProgress <= 0.01 ? 0 : 1, pointerEvents: testiProgress <= 0.01 ? 'none' : 'auto' }} onClick={() => testiRef.current?.scrollBy({ left: -460, behavior: 'smooth' })} aria-label="Scroll testimonials left" />
          <button className="testi-arrow-hint testi-arrow-right" style={{ opacity: testiProgress >= 0.99 ? 0 : 1, pointerEvents: testiProgress >= 0.99 ? 'none' : 'auto' }} onClick={() => testiRef.current?.scrollBy({ left: 460, behavior: 'smooth' })} aria-label="Scroll testimonials right" />
          </div>
          <div className="testi-scrollbar">
            <div className="testi-scrollbar-fill" style={{ width: `${testiProgress * 100}%` }} />
          </div>
        </div>
      </section>

      {/* VSL */}
      <section className="vsl-section" id="vsl">
        <div className="container">
          <div className="vsl-inner reveal">
            <h2 className="f-h1" style={{ marginBottom: 32 }}>90 seconds. Hear it from us.</h2>
            <div className="vsl-ph">
              <iframe src="https://www.youtube.com/embed/Ll0y23NKvhI" title="Butcherbird — Who We Are" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }} />
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
              <h3 className="f-h2" style={{ marginBottom: 12 }}>Meta & Google Ads</h3>
              <p className="f-italic wwd-tagline">The engine behind the growth of our portfolio brands, and client brands.</p>
              <p className="f-body" style={{ marginBottom: 24 }}>
                Performance-first Meta campaigns built from real account data. Static beats video in 5 of 6
                brands we&apos;ve tested. BOF is underfunded in almost every account we inherit. We fix both.
              </p>
              <p className="f-label">Campaign architecture · Creative production · Reporting</p>
            </div>
            <div className="wwd-card reveal">
              <span className="wwd-num">02</span>

              <h3 className="f-h2" style={{ marginBottom: 12 }}>Email & Klaviyo</h3>
              <p className="f-italic wwd-tagline">20–30% of your revenue is sitting in your list.</p>
              <p className="f-body" style={{ marginBottom: 24 }}>
                Most brands haven&apos;t built the infrastructure to capture it. We build full Klaviyo systems —
                flows, automations, campaigns, and list health — that compound LTV and reduce dependency on paid.
              </p>
              <p className="f-label">Flows · Automations · Campaigns · Deliverability</p>
            </div>
            <div className="wwd-card reveal">
              <span className="wwd-num">03</span>

              <h3 className="f-h2" style={{ marginBottom: 12 }}>Growth Strategy</h3>
              <p className="f-italic wwd-tagline">For founders who want the thinking, not just the execution.</p>
              <p className="f-body" style={{ marginBottom: 24 }}>
                Direct access to the Butcherbird C-suite. Monthly strategy sessions, quarterly reviews, and
                senior-level thinking on your account — for brands that want to move faster and smarter.
              </p>
              <p className="f-label">Monthly strategy · Quarterly reviews · Growth roadmap</p>
            </div>
            <div className="wwd-card reveal">
              <span className="wwd-num">04</span>

              <h3 className="f-h2" style={{ marginBottom: 12 }}>In-House Creative</h3>
              <p className="f-italic wwd-tagline">Media buying without great creative is just expensive guesswork.</p>
              <p className="f-body" style={{ marginBottom: 24 }}>
                Photographers, videographers, editors, and graphic designers — all in-house, all working
                directly on your brand. We don&apos;t brief out and hope for the best. We concept, shoot,
                edit, and iterate in the same building. Creative that is built to perform, not to look good
                in a portfolio.
              </p>
              <p className="f-label">Photography · Video · Editing · Graphic design</p>
            </div>
            <div className="wwd-card reveal">
              <span className="wwd-num">05</span>

              <h3 className="f-h2" style={{ marginBottom: 12 }}>Brand & Web Builds</h3>
              <p className="f-italic wwd-tagline">A weak brand makes every other channel harder.</p>
              <p className="f-body" style={{ marginBottom: 24 }}>
                New brands, complete rebrands, website builds, and digital funnel overhauls. We&apos;ve built
                consumer brands from nothing and overhauled existing ones — visual identity, positioning,
                Shopify builds, landing pages, and email infrastructure. Everything a brand needs to
                compete properly in the digital world.
              </p>
              <p className="f-label">Identity · Positioning · Web · Funnels</p>
            </div>
            <div className="wwd-card reveal">
              <span className="wwd-num">06</span>

              <h3 className="f-h2" style={{ marginBottom: 12 }}>AI & Automation</h3>
              <p className="f-italic wwd-tagline">The agencies not using AI right now are already behind.</p>
              <p className="f-body" style={{ marginBottom: 24 }}>
                We run AI tooling across every function — creative ideation, copy, data analysis, audience
                research, campaign architecture. Not as a gimmick. As a genuine operational advantage.
                Our team are active power users. The brands we manage benefit from capabilities most
                agencies won&apos;t catch up to for years.
              </p>
              <p className="f-label">Creative AI · Research · Analysis · Automation</p>
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
                  <Link href={`/work/${s.id}`} className="cs-btn-page">
                    Full Case Study
                  </Link>
                  <button className="cs-btn-story" onClick={() => { setActiveTab('story'); setActiveModal(s) }}>
                    Quick Read
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

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="f-h1 reveal" style={{ marginBottom: 16 }}>Frequently Asked<br />Questions</h2>
          <p className="f-body reveal" style={{ maxWidth: 480, marginBottom: 48, color: 'var(--mid)' }}>Straight answers. No fluff.</p>
          <div className="reveal">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ background: '#fff' }} id="team">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="f-h1 reveal" style={{ marginBottom: 16, color: 'var(--black)' }}>The Team</h2>
          <p className="f-body reveal" style={{ maxWidth: 480, marginBottom: 64, color: 'rgba(0,0,0,0.55)' }}>Not a network of freelancers. Not outsourced. 18 people in one Cape Town office — strategists, creatives, and media buyers who work together every day and apply themselves to your growth.</p>

          <div className="team-group reveal">
            <p className="f-gold" style={{ marginBottom: 28, letterSpacing: '0.2em' }}>Management</p>
            <div className="team-grid-mgmt">
              {[
                { initials: 'GC', name: 'Gascoyne Clarke', role: 'CEO', image: '/headshots/gascoyne.png' },
                { initials: 'IT', name: 'Ilan Tait', role: 'Portfolio Manager', image: '/headshots/ilan.png' },
                { initials: 'KM', name: 'Kathleen Murphy', role: 'Marketing Director', image: '/headshots/kathleen.png' },
              ].map((member) => (
                <div key={member.name} className="team-card">
                  <div className="team-img-ph">
                    {member.image
                      ? <Image src={member.image} alt={member.name} fill style={{ objectFit: member.name === 'Aamir Sayed' ? 'contain' : 'cover', objectPosition: member.name === 'Aamir Sayed' ? 'bottom' : 'top' }} />
                      : <div className="team-img-lbl">{member.initials}</div>
                    }
                  </div>
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
                { initials: 'TB', name: 'Tian Bester', role: 'Paid Media Manager', image: '/headshots/tian.png' },
                { initials: 'RT', name: 'Rhett Tomlinson', role: 'Graphic Design & Creative', image: '/headshots/rhett.png' },
                { initials: 'KF', name: 'Kaylee Frankson', role: 'Email Marketing Manager', image: '/headshots/kaylee.png' },
                { initials: 'MS', name: 'Morgan Scott', role: 'Videographer & Video Editor', image: '/headshots/morgan.png' },
                { initials: 'LN', name: 'Liam Nymphe', role: 'Videographer & Video Editor', image: '/headshots/liam.png' },
                { initials: 'JF', name: 'Jordyn Fester', role: 'Events Manager', image: '/headshots/jordyn.png' },
                { initials: 'AS', name: 'Aamir Sayed', role: 'IT & Technical Infrastructure', image: '/headshots/aamir.png' },
                { initials: 'ZE', name: 'Zubayr Ederies', role: 'Graphic Design & Web Development', image: '/headshots/zubayr.png' },
                { initials: 'NC', name: 'Nikki Clarke', role: 'Administration & HR', image: '/headshots/nikki.png' },
              ].map((member) => (
                <div key={member.name} className="team-card">
                  <div className="team-img-ph">
                    {member.image
                      ? <Image src={member.image} alt={member.name} fill style={{ objectFit: member.name === 'Aamir Sayed' ? 'contain' : 'cover', objectPosition: member.name === 'Aamir Sayed' ? 'bottom' : 'top' }} />
                      : <div className="team-img-lbl">{member.initials}</div>
                    }
                  </div>
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

      {/* SECTION NAV PILL */}
      <div className="sec-pill">
        <button className="sec-pill-btn" onClick={() => goSection(-1)} disabled={activeSection === 0} aria-label="Previous section">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,8 6,4 10,8" /></svg>
        </button>
        <div className="sec-pill-divider" />
        <button className="sec-pill-btn" onClick={() => goSection(1)} disabled={activeSection === SECTIONS.length - 1} aria-label="Next section">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="2,4 6,8 10,4" /></svg>
        </button>
      </div>
    </>
  )
}
