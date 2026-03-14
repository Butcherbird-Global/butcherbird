'use client'

import { useState, useEffect } from 'react'
import { CaseStudy } from '@/lib/data'

interface ModalProps {
  study: CaseStudy | null
  onClose: () => void
  initialTab?: 'performance' | 'creative'
}

export default function Modal({ study, onClose, initialTab = 'performance' }: ModalProps) {
  const [tab, setTab] = useState<'performance' | 'creative'>(initialTab)

  useEffect(() => { setTab(initialTab) }, [initialTab, study])

  useEffect(() => {
    if (!study) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [study, onClose])

  if (!study) return null

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal">
        <button className="modal-x" onClick={onClose}>&#x2715;</button>

        <div className="modal-hero-ph">
          <div className="modal-hero-lbl">{study.brand}</div>
          <div className="modal-hero-tag">{study.tag}</div>
        </div>

        <div className="modal-body">
          <div className="gold-rule" style={{ marginBottom: 16 }} />
          <h2 className="f-h1" style={{ marginBottom: 6 }}>{study.brand}</h2>
          <p className="f-italic" style={{ marginBottom: 24 }}>{study.subtitle}</p>

          <div className="modal-tabs">
            <button className={`modal-tab${tab === 'performance' ? ' active' : ''}`} onClick={() => setTab('performance')}>
              Performance
            </button>
            <button className={`modal-tab${tab === 'creative' ? ' active' : ''}`} onClick={() => setTab('creative')}>
              Creative Work
            </button>
          </div>

          {tab === 'performance' && (
            <>
              <div className="modal-metrics">
                {study.metrics.map((m) => (
                  <div key={m.lbl}>
                    <div className="mm-val">{m.val}</div>
                    <div className="mm-lbl">{m.lbl}</div>
                  </div>
                ))}
              </div>
              <p className="f-body" style={{ marginBottom: 28 }}>{study.story}</p>
              <p className="f-gold" style={{ marginBottom: 14 }}>Ad Account Screenshots</p>
              <div className="modal-ss-grid">
                {study.performanceScreenshots?.length
                  ? study.performanceScreenshots.map((src, i) => (
                      <div key={i} className="modal-ss-ph">
                        <img src={src} alt={`Screenshot ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))
                  : [1, 2, 3].map((n) => (
                      <div key={n} className="modal-ss-ph">
                        <div className="modal-ss-txt">[Performance screenshot {n} — pending]</div>
                      </div>
                    ))
                }
              </div>
            </>
          )}

          {tab === 'creative' && (
            <>
              <p className="f-body" style={{ marginBottom: 24 }}>
                Static ads, email campaigns, and video creative produced for {study.brand}.
              </p>
              <div className="creative-grid">
                {study.creativeAssets?.length
                  ? study.creativeAssets.map((asset, i) => (
                      <div key={i} className="creative-item">
                        <img src={asset.src} alt={asset.caption ?? ''} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        {asset.caption && <div className="creative-item-label">{asset.caption}</div>}
                      </div>
                    ))
                  : ['Static Ad', 'Static Ad', 'Email', 'Video Ad', 'Static Ad', 'Email'].map((type, i) => (
                      <div key={i} className="creative-item">
                        <div className="creative-item-label">{type}<br />[pending]</div>
                      </div>
                    ))
                }
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
