import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services'
import { caseStudies } from '@/lib/data'
import RevealOnScroll from '@/components/RevealOnScroll'
import Footer from '@/components/Footer'

const BASE_URL = 'https://butcherbird.global'
const CALENDLY = 'https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const svc = services.find((s) => s.slug === slug)
  if (!svc) return {}

  return {
    title: `${svc.title} — Butcherbird Global`,
    description: `${svc.tagline} ${svc.description[0]}`,
    alternates: { canonical: `${BASE_URL}/services/${svc.slug}` },
    openGraph: {
      title: `${svc.title} | Butcherbird Global`,
      description: svc.tagline,
      url: `${BASE_URL}/services/${svc.slug}`,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const svc = services.find((s) => s.slug === slug)
  if (!svc) notFound()

  const related = svc.relatedStudies
    .map((id) => caseStudies.find((cs) => cs.id === id))
    .filter(Boolean)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.tagline,
    provider: { '@type': 'Organization', name: 'Butcherbird Global', url: BASE_URL },
    areaServed: [
      { '@type': 'Country', name: 'South Africa' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Australia' },
    ],
  }

  return (
    <>
      <RevealOnScroll />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="svc-hero">
        <div className="container">
          <Link href="/#what-we-do" className="cs-detail-back anim d1">
            <span style={{ marginRight: 8 }}>{'\u2190'}</span> All Services
          </Link>
          <div className="gold-rule anim d1" style={{ marginTop: 32 }} />
          <p className="f-gold anim d1" style={{ marginBottom: 14 }}>Service {svc.num}</p>
          <h1 className="f-display anim d2" style={{ marginBottom: 24, maxWidth: 800 }}>{svc.title}</h1>
          <p className="f-italic anim d3" style={{ maxWidth: 580 }}>{svc.tagline}</p>
        </div>
        <div className="svc-hero-ghost">{svc.num}</div>
      </section>

      {/* CONTENT */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="svc-body">
            {svc.description.map((para, i) => (
              <p key={i} className="cs-detail-para reveal">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="svc-includes-section">
        <div className="container">
          <div className="gold-rule reveal" />
          <h2 className="f-h1 reveal" style={{ marginBottom: 48, color: 'var(--black)' }}>What&apos;s Included</h2>
          <div className="svc-includes-grid">
            {svc.includes.map((item, i) => (
              <div key={i} className="svc-include-item reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="svc-include-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED WORK */}
      {related.length > 0 && (
        <section className="section" style={{ background: 'var(--dark)' }}>
          <div className="container">
            <div className="gold-rule reveal" />
            <h2 className="f-h1 reveal" style={{ marginBottom: 16 }}>Brands We&apos;ve Done This For</h2>
            <p className="f-body reveal" style={{ maxWidth: 420, marginBottom: 48, color: 'var(--mid)' }}>Real results. Click to read the full story.</p>
            <div className="svc-related-grid">
              {related.map((cs) => cs && (
                <Link key={cs.id} href={`/work/${cs.id}`} className="svc-related-card reveal">
                  <div className="svc-related-img">
                    {cs.image && <Image src={cs.image} alt={cs.brand} fill style={{ objectFit: 'cover' }} />}
                  </div>
                  <div className="svc-related-info">
                    <p className="svc-related-tag">{cs.tag}</p>
                    <p className="svc-related-brand">{cs.brand}</p>
                    <p className="svc-related-metric">{cs.metrics[0]?.val} <span>{cs.metrics[0]?.lbl}</span></p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section" style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center,rgba(184,150,62,.06),transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="gold-rule-c reveal" />
          <h2 className="f-h1 reveal" style={{ marginBottom: 20 }}>Ready to scale?</h2>
          <p className="f-italic reveal" style={{ marginBottom: 36, maxWidth: 460, margin: '0 auto 36px' }}>
            Book a 20-minute call. No pitch. Just an honest read on where your real growth leverage is.
          </p>
          <div className="reveal">
            <a className="btn btn-gold" href={CALENDLY} target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
