import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Astryx는 dist에 StyleX를 미리 컴파일해 배포하므로(astryx.css) 별도 빌드 플러그인 없이 사용.
// 제품(우리) 코드의 스타일은 StyleX 대신 일반 CSS로 작성한다.
// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@astryxdesign/core', '@astryxdesign/theme-neutral'],
  },
})
