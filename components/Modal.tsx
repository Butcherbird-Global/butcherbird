'use client'

import { useEffect } from 'react'
import { CaseStudy } from '@/lib/data'

interface ModalProps {
  study: CaseStudy | null
  onClose: () => void
}

export default function Modal({ study, onClose }: ModalProps) {
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
    <div
      className="modal-overlay open"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal">
        <button className="modal-x" onClick={onClose}>&#x2715;</button>
        <div className="modal-hero-ph">
          <div className="modal-hero-lbl">{study.brand}</div>
          <div className="modal-hero-tag">{study.tag}</div>
        </div>
        <div className="modal-body">
          <div className="gold-rule" />
          <h2 className="f-h1" style={{ marginBottom: 10 }}>{study.brand}</h2>
          <p className="f-italic" style={{ marginBottom: 0 }}>{study.desc}</p>
          <div className="modal-metrics">
            {study.metrics.map((m) => (
              <div key={m.lbl}>
                <div className="mm-val">{m.val}</div>
                <div className="mm-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
          <p className="f-body" style={{ marginBottom: 28 }}>{study.story}</p>
          <p className="f-gold" style={{ marginBottom: 14 }}>Performance screenshots</p>
          <div className="modal-ss-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="modal-ss-ph">
                <div className="modal-ss-txt">[Screenshot {n} — supply to Tian]</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
