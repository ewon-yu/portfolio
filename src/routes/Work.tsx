import { cases } from '../data/cases'
import { CaseCard } from '../components/CaseCard'

export function Work() {
  return (
    <>
      <section className="page" style={{ paddingTop: 72, paddingBottom: 64 }}>
        <h1 className="page-title">work</h1>
      </section>
      <section className="page" style={{ paddingBottom: 128 }}>
        <div className="work-list">
          {cases.map((c) => (
            <CaseCard key={c.slug} study={c} />
          ))}
        </div>
      </section>
    </>
  )
}
