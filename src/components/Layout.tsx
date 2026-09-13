import { useEffect, useRef, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { profile } from '../data/profile'

/** 스크롤 내리면 헤더 숨김 / 올리면 다시 표시 (mateogrubisic·newtype 참고) */
function useHideOnScroll() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY.current
      if (y < 64) setHidden(false)
      else if (goingDown && y - lastY.current > 6) setHidden(true)
      else if (!goingDown && lastY.current - y > 6) setHidden(false)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}

export function Layout() {
  const hidden = useHideOnScroll()

  return (
    <>
      <header className={`site-header${hidden ? ' site-header--hidden' : ''}`}>
        <div className="page site-header__inner">
          <Link to="/selected-work" className="site-brand">
            {profile.name}
          </Link>
          <div className="site-nav">
            {/* 이메일: 링크 없이 텍스트만 (복사해서 사용) */}
            <span className="site-nav__email">{profile.email}</span>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="page site-footer__inner">
          <span className="site-footer__copy">
            © {new Date().getFullYear()} Ewon Portfolio
          </span>
          <button
            type="button"
            className="to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Top ↑
          </button>
        </div>
      </footer>
    </>
  )
}
