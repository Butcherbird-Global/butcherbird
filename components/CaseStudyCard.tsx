import { CaseStudy } from '@/lib/data'

interface Props {
  study: CaseStudy
  onClick: () => void
  metrics: { val: string; lbl: string }[]
}

export default function CaseStudyCard({ study, onClick, metrics }: Props) {
  return (
    <div className="cs-card reveal" onClick={onClick}>
      <div className="cs-ph">
        <div className="cs-ph-txt">{study.brand}</div>
        <div className="cs-hover-layer">
          <div className="cs-hover-icon">↗</div>
        </div>
      </div>
      <div className="cs-body">
        <div className="cs-tag">{study.tag}</div>
        <div className="cs-brand">{study.brand}</div>
        <div className="cs-desc">{study.subtitle}</div>
        <div className="cs-mets">
          {metrics.map((m) => (
            <div key={m.lbl} className="cs-mv">
              {m.val}
              <span className="cs-ml">{m.lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
