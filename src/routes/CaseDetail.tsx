import { useParams, Link } from 'react-router-dom'
import { getCase } from '../data/cases'
import { Placeholder } from '../components/Placeholder'
import { BoraPortal } from './cases/BoraPortal'
import { DesignSystem } from './cases/DesignSystem'

export function CaseDetail() {
  const { slug } = useParams()

  if (slug === 'bora-portal') return <BoraPortal />
  if (slug === 'design-system') return <DesignSystem />

  const study = slug ? getCase(slug) : undefined

  if (!study) {
    return (
      <section className="page section">
        <div style={{ display: 'grid', gap: 16 }}>
          <h1 className="case-hero__title">케이스를 찾을 수 없습니다</h1>
          <Link to="/work" className="back-link">
            ← Work로 돌아가기
          </Link>
        </div>
      </section>
    )
  }

  return (
    <article className="page section">
      <div className="case-hero">
        <h1 className="case-hero__title">{study.title}</h1>
        <p className="case-hero__subtitle">{study.subtitle}</p>
        <div className="case-meta">
          <span>{study.role}</span>
          <span>{study.period}</span>
          <span>{study.tags.join(' · ')}</span>
        </div>
      </div>

      <p className="case-blocks__text" style={{ marginTop: 40, fontSize: 20 }}>
        {study.summary}
      </p>

      <div className="case-blocks">
        {study.blocks.map((block, i) =>
          block.type === 'image' ? (
            <div
              key={i}
              className="case-figure"
              style={{ aspectRatio: String(block.ratio) }}
            >
              <Placeholder label={block.label} />
            </div>
          ) : (
            <p key={i} className="case-blocks__text">
              {block.body}
            </p>
          ),
        )}
      </div>
    </article>
  )
}
