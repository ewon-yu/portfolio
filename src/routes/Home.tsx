import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { cases } from '../data/cases'
import { CaseCard } from '../components/CaseCard'

export function Home() {
  return (
    <>
      {/* 큰 타이틀 (newtype "works" 스타일) */}
      <section className="page" style={{ paddingTop: 72, paddingBottom: 64 }}>
        <h1 className="page-title">work</h1>
      </section>

      {/* Work grid */}
      <section className="page" style={{ paddingBottom: 128 }}>
        <div className="work-list">
          {cases.map((c) => (
            <CaseCard key={c.slug} study={c} />
          ))}
        </div>
      </section>

      <div className="page">
        <hr className="stack-hr" />
      </div>

      {/* Career */}
      <section className="page section">
        <div style={{ display: 'grid', gap: 40 }}>
          <span className="eyebrow">Career</span>
          <div className="timeline">
            {profile.career.map((row) => (
              <div key={row.company} className="timeline__row">
                <span className="timeline__period">{row.period}</span>
                <span>
                  {row.company} · {row.role}
                </span>
              </div>
            ))}
          </div>
          <Link to="/contact" className="back-link">
            Contact →
          </Link>
        </div>
      </section>
    </>
  )
}
