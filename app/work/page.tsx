'use client'

import { useState } from 'react'
import Link from 'next/link'
import Modal from '@/components/Modal'
import RevealOnScroll from '@/components/RevealOnScroll'
import { caseStudies, CaseStudy } from '@/lib/data'

type Filter = 'all' | 'internal' | 'client'

export default function WorkPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const [activeModal, setActiveModal] = useState<CaseStudy | null>(null)

  const visible = caseStudies.filter((s) => filter === 'all' || s.category === filter)

  return (
    <>
      <RevealOnScroll />

      <section style={{ padding: '140px 0 72px' }}>
        <div className="container">
          <div className="sec-label anim d1">
            <span className="sec-label-txt">All clients</span>
            <div className="sec-label-line" />
          </div>
          <h1 className="f-display anim d2" style={{ maxWidth: 700, marginBottom: 18 }}>
            R2,173,913<br /><span className="gold">in ad spend.</span><br />Documented.
          </h1>
          <p className="f-italic anim d3" style={{ maxWidth: 460, marginBottom: 36 }}>
            Every brand below is a real engagement. Real numbers. Real mistakes. Real results.
            Click any card for the full story.
          </p>
          <div className="work-filters anim d4">
            {(['all', 'internal', 'client'] as Filter[]).map((f) => (
              <button
                key={f}
                className={`filter-btn${filter === f ? ' active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : f === 'internal' ? 'Internal Brands' : 'Client Work'}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 112px' }}>
        <div className="container">
          <div className="cs-grid">
            {visible.map((s) => (
              <div
                key={s.id}
                className="cs-card reveal"
                onClick={() => setActiveModal(s)}
              >
                <div className="cs-ph">
                  <div className="cs-ph-txt">{s.brand}</div>
                  <div className="cs-hover-layer"><div className="cs-hover-icon">↗</div></div>
                </div>
                <div className="cs-body">
                  <div className="cs-tag">{s.tag}</div>
                  <div className="cs-brand">{s.brand}</div>
                  <div className="cs-desc">{s.subtitle}</div>
                  <div className="cs-mets">
                    {s.metrics.slice(0, 2).map((m) => (
                      <div key={m.lbl} className="cs-mv">
                        {m.val}<span className="cs-ml">{m.lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <p className="f-label">butcherbird.global · Cape Town · 2026</p>
            <a className="btn btn-gold" href="https://calendly.com/g-butcherbird/butcherbird-introduction-w-gascoyne" target="_blank" rel="noopener noreferrer">Book an Intro Call</a>
          </div>
        </div>
      </footer>

      {activeModal && <Modal study={activeModal} onClose={() => setActiveModal(null)} />}
    </>
  )
}
