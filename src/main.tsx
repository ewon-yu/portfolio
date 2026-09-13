import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Astryx: 리셋 → 미리 컴파일된 컴포넌트 CSS → 테마 토큰 CSS 순서로 로드
import '@astryxdesign/core/reset.css'
import '@astryxdesign/core/astryx.css'
import '@astryxdesign/theme-neutral/theme.css'
import './index.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
