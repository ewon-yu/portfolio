import { profile } from '../data/profile'
import { withBase } from '../lib/url'

export function Contact() {
  return (
    <section className="page section">
      <div style={{ display: 'grid', gap: 32, maxWidth: 640 }}>
        <span className="eyebrow">Contact</span>
        <h1 className="case-hero__title">
          함께 일할 기회를
          <br />
          기다립니다.
        </h1>
        <p className="hero__tagline" style={{ fontSize: 20, maxWidth: '32ch' }}>
          연락 주시면 빠르게 회신드리겠습니다.
        </p>
        <div style={{ display: 'grid', gap: 14, paddingTop: 8 }}>
          {profile.links.map((l) => (
            <a
              key={l.label}
              href={l.href.startsWith('/') ? withBase(l.href) : l.href}
              className="back-link"
              style={{ fontSize: 18, textDecoration: 'underline', textUnderlineOffset: 4 }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
