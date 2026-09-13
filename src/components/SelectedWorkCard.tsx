import { Link } from 'react-router-dom'
import type { SelectedWorkProject } from '../data/selectedWork'
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

/**
 * 기존 CaseCard와 동일한 스타일(work-card__*)을 그대로 재사용한다.
 * 데이터 타입만 SelectedWorkProject로 다르고, 시각 스타일은 새로 만들지 않는다.
 */
export function SelectedWorkCard({ project }: { project: SelectedWorkProject }) {
  return (
    <Link
      to={`/selected-work/${project.slug}`}
      className={`work-card${project.featured ? ' work-card--featured' : ''}`}
    >
      <div className="work-card__frame">
        {project.listImage ? (
          <img
            className="work-card__media"
            src={withBase(project.listImage.src)}
            alt={project.listImage.alt}
          />
        ) : (
          <div className="placeholder" />
        )}
      </div>
      <div className="work-card__meta">
        <div className="work-card__title-row">
          <h3 className="work-card__title">{project.listTitle}</h3>
          <ArrowUpRight />
        </div>
        <p className="work-card__subtitle">{project.listDescription}</p>
        <p className="work-card__info">{project.cardMeta}</p>
      </div>
    </Link>
  )
}
