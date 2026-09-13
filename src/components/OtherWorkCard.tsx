import type { OtherWork } from '../data/selectedWork'
import { withBase } from '../lib/url'

/**
 * Other Works 전용 작은 카드 — 상세 페이지로 연결되지 않는 정적 카드.
 * Featured Project(work-card)보다 위계가 낮게 보이도록 이미지·타이틀을 축소하고
 * arrow/링크를 없앤다. 새 디자인 시스템을 만들지 않고 기존 톤(테두리·radius·태그)만 재사용.
 */
export function OtherWorkCard({ work }: { work: OtherWork }) {
  return (
    <div className="other-work-card">
      <div className="other-work-card__frame">
        {work.image ? (
          <img className="other-work-card__media" src={withBase(work.image.src)} alt={work.image.alt} />
        ) : (
          <div className="placeholder" />
        )}
      </div>
      <div className="other-work-card__meta">
        <h4 className="other-work-card__title">{work.title}</h4>
        <p className="other-work-card__desc">{work.description}</p>
        <p className="other-work-card__info">{work.meta}</p>
      </div>
    </div>
  )
}
