import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies } from '@/lib/data'
import RevealOnScroll from '@/components/RevealOnScroll'
import Footer from '@/components/Footer'

const BASE_URL = 'https://butcherbird.global'
const CALENDLY = 'https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne'

export function generateStaticParams() {
  return caseStudies.map((s) => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const study = caseStudies.find((s) => s.id === id)
  if (!study) return {}

  return {
    title: `${study.brand} — ${study.subtitle}`,
    description: study.desc,
    alternates: { canonical: `${BASE_URL}/work/${study.id}` },
    openGraph: {
      title: `${study.brand} — ${study.subtitle} | Butcherbird Global`,
      description: study.desc,
      url: `${BASE_URL}/work/${study.id}`,
      images: study.image ? [{ url: study.image, alt: study.brand }] : undefined,
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const study = caseStudies.find((s) => s.id === id)
  if (!study) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${study.brand} — ${study.subtitle}`,
    description: study.desc,
    image: study.image ? `${BASE_URL}${study.image}` : undefined,
    publisher: { '@type': 'Organization', name: 'Butcherbird Global', url: BASE_URL },
    author: { '@type': 'Organization', name: 'Butcherbird Global' },
  }

  const paragraphs = study.story.split('\n\n')
  const pullQuoteIndex = Math.min(2, paragraphs.length - 1)
  const pullLine = paragraphs[pullQuoteIndex]?.split('.')[0] + '.'

  return (
    <>
      <RevealOnScroll />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="cs-detail-hero">
        <div className="container">
          <Link href="/#client-stories" className="cs-detail-back anim d1">
            <span style={{ marginRight: 8 }}>{'\u2190'}</span> Back to Client Stories
          </Link>
          <div className="gold-rule anim d1" style={{ marginTop: 32 }} />
          <p className="f-gold anim d1" style={{ marginBottom: 14 }}>{study.tag}{study.category === 'internal' ? ' — Portfolio Brand' : ' — Client'}</p>
          <h1 className="f-display anim d2" style={{ marginBottom: 18, maxWidth: 800 }}>{study.brand}</h1>
          <p className="f-italic anim d3" style={{ maxWidth: 560 }}>{study.subtitle}</p>
        </div>
      </section>

      {/* COVER IMAGE */}
      {study.image && (
        <div className="cs-detail-img">
          <div className="container">
            <div className="cs-detail-img-wrap reveal">
              <Image src={study.image} alt={study.brand} fill style={{ objectFit: 'cover' }} priority />
            </div>
          </div>
        </div>
      )}

      {/* METRICS */}
      <section className="cs-detail-metrics">
        <div className="container">
          <div className="cs-detail-metrics-grid reveal">
            {study.metrics.map((m) => (
              <div key={m.lbl} className="cs-detail-met">
                <div className="cs-detail-met-val">{m.val}</div>
                <div className="cs-detail-met-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div className="container">
          <div className="cs-detail-story">
            <div className="gold-rule reveal" />
            <p className="f-gold reveal" style={{ marginBottom: 32 }}>The Full Story</p>

            {paragraphs.map((para, i) => (
              <div key={i}>
                {i === pullQuoteIndex && (
                  <blockquote className="cs-detail-pullquote reveal">
                    {pullLine}
                  </blockquote>
                )}
                <p className="cs-detail-para reveal">{para}</p>
              </div>
            ))}
          </div>

          {/* BRAND LINKS */}
          {(study.website || study.instagram) && (
            <div className="cs-detail-links reveal">
              {study.website && (
                <a href={study.website} target="_blank" rel="noopener noreferrer" className="cs-detail-link">
                  <span style={{ marginRight: 6 }}>{'\u2197'}</span>
                  {study.website.replace('https://', '').replace('www.', '')}
                </a>
              )}
              {study.instagram && (
                <a href={`https://instagram.com/${study.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="cs-detail-link">
                  {study.instagram}
                </a>
              )}
            </div>
          )}

          {/* CTA */}
          <div className="reveal" style={{ marginTop: 56 }}>
            <p className="f-italic reveal" style={{ marginBottom: 28, maxWidth: 480 }}>
              Want results like this for your brand?
            </p>
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
