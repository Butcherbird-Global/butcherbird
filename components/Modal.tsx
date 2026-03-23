'use client'

import { useState, useEffect } from 'react'
import { CaseStudy } from '@/lib/data'

interface ModalProps {
  study: CaseStudy | null
  onClose: () => void
  initialTab?: 'creative' | 'story'
}

export default function Modal({ study, onClose, initialTab = 'story' }: ModalProps) {
  const [tab, setTab] = useState<'creative' | 'story'>(initialTab)

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
        <div className="modal-header">
          <div>
            <p className="f-label" style={{ marginBottom: 6 }}>{study.tag}</p>
            <h2 className="f-h2" style={{ marginBottom: study.website || study.instagram ? 10 : 0 }}>{study.brand}</h2>
            {(study.website || study.instagram) && (
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {study.website && (
                  <a href={study.website} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                    ↗ {study.website.replace('https://', '').replace('www.', '')}
                  </a>
                )}
                {study.instagram && (
                  <a href={`https://instagram.com/${study.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: 'var(--mid)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                    {study.instagram}
                  </a>
                )}
              </div>
            )}
          </div>
          <button className="modal-x" onClick={onClose}>&#x2715;</button>
        </div>

        <div className="modal-tabs">
          <button className={`modal-tab${tab === 'creative' ? ' active' : ''}`} onClick={() => setTab('creative')}>
            Creative Work
          </button>
          <button className={`modal-tab${tab === 'story' ? ' active' : ''}`} onClick={() => setTab('story')}>
            The Story
          </button>
        </div>

        <div className="modal-media">
          {tab === 'creative' && (
            study.creativeAssets?.length
              ? study.creativeAssets.map((asset, i) => (
                  <div key={i} className="modal-media-item">
                    <img src={asset.src} alt={asset.caption ?? ''} style={{ width: '100%', display: 'block' }} />
                  </div>
                ))
              : ['Static Ad', 'Static Ad', 'Email', 'Video Ad', 'Static Ad', 'Email'].map((type, i) => (
                  <div key={i} className="modal-media-ph">
                    <span className="modal-media-ph-txt">{type} — pending</span>
                  </div>
                ))
          )}
          {tab === 'story' && (
            <div style={{ padding: '8px 0 16px' }}>
              {study.story.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: 'var(--light)',
                    marginBottom: 20,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
