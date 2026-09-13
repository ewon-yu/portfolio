import { selectedWork, otherWorks } from '../data/selectedWork'
import { SelectedWorkCard } from '../components/SelectedWorkCard'
import { OtherWorkCard } from '../components/OtherWorkCard'

/**
 * 채용 제출용 Selected Work 리스트. /work 와 완전히 별개 route.
 * 스타일은 기존 work-list / work-card 그대로 재사용.
 */
export function SelectedWork() {
  return (
    <>
      <section className="page" style={{ paddingTop: 72, paddingBottom: 64 }}>
        <h1 className="page-title">work</h1>
      </section>
      <section className="page" style={{ paddingBottom: 96 }}>
        <div className="work-list">
          {selectedWork.map((p) => (
            <SelectedWorkCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <section className="page" style={{ paddingBottom: 128 }}>
        <h2 className="other-works__title">Other Works</h2>
        <div className="other-works-list">
          {otherWorks.map((w) => (
            <OtherWorkCard key={w.title} work={w} />
          ))}
        </div>
      </section>
    </>
  )
}
