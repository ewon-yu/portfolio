import { useParams, Link } from 'react-router-dom'
import { getSelectedWork } from '../data/selectedWork'
import type { SectionImage } from '../data/selectedWork'
import { withBase } from '../lib/url'

/** 이미지가 있으면 <img>, 없으면 텍스트 없는 플레이스홀더 박스. */
function Figure({ ratio, src, alt, caption }: SectionImage) {
  return (
    <figure
      className="cs__figure"
      style={src ? undefined : { aspectRatio: String(ratio) }}
    >
      {src ? <img src={withBase(src)} alt={alt ?? ''} /> : <div className="placeholder" />}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

/**
 * DEEPS / Portal / Design System 세 프로젝트가 공유하는 단일 상세 페이지 구조.
 * (Hero + Meta + 대표 이미지) → (Label + Title + 설명 + 이미지) 섹션 반복 → Result.
 * /work/:slug 의 기존 케이스 페이지와는 독립된 별도 route.
 */
export function SelectedWorkDetail() {
  const { slug } = useParams()
  const project = slug ? getSelectedWork(slug) : undefined

  if (!project) {
    return (
      <section className="page section">
        <div style={{ display: 'grid', gap: 16 }}>
          <h1 className="case-hero__title">페이지를 찾을 수 없습니다</h1>
          <Link to="/selected-work" className="back-link">
            ← Work로 돌아가기
          </Link>
        </div>
      </section>
    )
  }

  return (
    <article className="cs cs--wide">
      <div className="page">
        <header className="cs__head" style={{ paddingTop: 48 }}>
          <h1 className="cs__title">
            {project.detailTitleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < project.detailTitleLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <div className="cs__text-group">
            {project.intro.map((paragraph, i) => (
              <p className="cs__tagline" key={i}>
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="cs__meta">
            <div>
              <dt>Period</dt>
              <dd>
                {project.meta.period.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>
                {project.meta.role.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>
                {project.meta.scope.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </dd>
            </div>
          </dl>
        </header>

        <Figure ratio={16 / 9} src={project.heroImage?.src} alt={project.heroImage?.alt} />

        {project.sections.map((section, i) => (
          <section className="cs__section" key={i}>
            <span className="cs__eyebrow">{section.label}</span>
            <h2 className="cs__h">{section.title}</h2>
            <div className="cs__text-group">
              {section.description.map((paragraph, j) => (
                <p className="cs__p" key={j}>
                  {paragraph}
                </p>
              ))}
            </div>
            {section.imageRows
              ? section.imageRows.map((row, r) =>
                  row.length > 1 ? (
                    <div className="cs__grid2" key={r}>
                      {row.map((img, k) => (
                        <Figure key={k} {...img} />
                      ))}
                    </div>
                  ) : (
                    <Figure key={r} {...row[0]} />
                  ),
                )
              : section.imageLayout === 'grid' ? (
                  <div className="cs__grid2">
                    {section.images.map((img, k) => (
                      <Figure key={k} {...img} />
                    ))}
                  </div>
                ) : (
                  section.images.map((img, k) => <Figure key={k} {...img} />)
                )}
            {section.link ? (
              <a
                className="cs__link-btn"
                href={section.link.href}
                target="_blank"
                rel="noreferrer"
              >
                {section.link.label} ↗
              </a>
            ) : null}
          </section>
        ))}

        <section className="cs__section">
          <span className="cs__eyebrow">Result</span>
          <div className="cs__result-grid">
            {project.result.map((line, i) => (
              <div className="cs__result" key={i}>
                <strong>{line}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}
