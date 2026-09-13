import { Link } from 'react-router-dom'
import type { CaseStudy } from '../data/cases'
import { Placeholder } from './Placeholder'
import { withBase } from '../lib/url'

const ArrowUpRight = () => (
  <svg
    className="work-card__arrow"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link to={`/work/${study.slug}`} className="work-card">
      <div className="work-card__frame">
        {study.thumb ? (
          <img className="work-card__media" src={withBase(study.thumb)} alt={study.title} />
        ) : (
          <Placeholder label={`${study.title} — 대표 이미지 예정`} />
        )}
      </div>
      <div className="work-card__meta">
        <div className="work-card__title-row">
          <h3 className="work-card__title">{study.title}</h3>
          <ArrowUpRight />
        </div>
        <p className="work-card__subtitle">{study.subtitle}</p>
        <div className="tag-row">
          {study.tags.slice(0, 4).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
