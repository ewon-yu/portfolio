/**
 * GitHub Pages 프로젝트 사이트(예: ewon-yu.github.io/portfolio/)는 도메인 루트가 아니라
 * 하위 경로에 배포되므로, 코드에 하드코딩된 절대경로("/work/...")는 그대로 두면
 * 배포 후 깨진다. vite.config.ts의 base와 항상 일치하는 BASE_URL을 붙여 보정한다.
 */
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
