# 포트폴리오 사이트 — 진행 상태

> 다른 컴퓨터에서 이어서 할 때: `CLAUDE.md` 상단 "다른 컴퓨터에서 처음 시작할 때" 참고.
> 세션 시작하면 `npm run check` 먼저.
>
> **⚠️ 콘텐츠·서사 결정은 전부 `docs/CONTENT-PLAN.md`.** 이 STATUS.md는 사이트 빌드 진행상황만.
> CONTENT-PLAN이 아래 케이스 구조를 개정함: **케이스 4→3개**(bora-scope 독립 삭제, 디자인 시스템 케이스에 흡수),
> "Design System 2.0"→4년 아크, BoraPortal Result에 GA 프레이밍 추가. → Step 3에서 반영.

## 스택 (확정)
- Vite 8 + React 19.2 + TypeScript
- **Astryx** (@astryxdesign/core 0.5.2, theme-neutral) — dist에 StyleX 미리 컴파일되어 빌드 플러그인 불필요
- react-router-dom 7
- 제품 코드 스타일: 일반 CSS (`src/index.css`), StyleX 미사용
- 폴백: 막히면 shadcn/ui (같은 React)

## 완료
- [x] Step 1 — Astryx 설치 + 렌더 확인 (트립와이어 통과, 스크린샷 확인)
- [x] Step 2 — 사이트 골격 (라우팅, 네비, 케이스 4개, 더미 콘텐츠)
- [x] Step 2.5 — 디자인 방향 전환
  - **다크 고정** (테마 토글 삭제, `<Theme mode="dark">`, `data-theme="dark"`)
  - 시원시원한 에디토리얼 레이아웃: 넓은 여백(section 128px), 큰 타이포(hero clamp 48–112px)
  - **큰 프로젝트 카드**: 1열(모바일)/2열(≥900px), 첫 케이스는 풀폭 히어로(21:9), 나머지 16:10, hover 시 이미지 스케일 + 화살표
  - 참고: mateogrubisic.design, newtype.design/works/featured, Astryx 템플릿(gallery-hero/mixed-gallery/side-gallery)
  - 레이아웃은 커스텀 CSS, Astryx는 토큰(색/radius/spacing) 활용
  - `tsc -b` + `vite build` 통과 (JS gzip 91KB)

- [x] Step 2.6 — Home 정리 + BORA Portal 상세 페이지
  - Home/Work 상단 = 큰 `work` 타이틀만 (이름·직무 워드마크 제거)
  - 표시 이름 `Ewon`으로 통일, 라벨 영어화
  - 카드 4개 균등 크기 (히어로 처리 제거)
  - **BORA Portal 전용 상세 페이지** `src/routes/cases/BoraPortal.tsx`
    - PDF 내용 근거 (Problem 2 / Approach 3 / Result 3 / Design System)
    - 실제 이미지 6장 → `public/work/bora-portal/` (sips로 최적화)
    - 포맷 참고: newtype kakaobank-answer-ux, mateogrubisic leya-ai
    - full-bleed hero, 좌우 2단 figure, 넘버링 리스트, Next→BORA Scope
  - 정량 수치는 PDF에 없음 → "사내 기준상 생략" 명시, 정성 관찰로 서술

- [x] Step 2.7 — 톤/네비 조정
  - 배경 순수 블랙 → 뉴트럴 그레이 `#141416` (토큰 오버라이드, index.css 마지막에 재정의)
  - 타이틀 폰트 두께 600 → **500** (전역)
  - Work 카드 간격 ~50% 축소
  - GNB: 스크롤 시 숨김/표시(useHideOnScroll), 높이 축소(52–60px), 좌 `Ewon` / 우 이메일(`hello@ewon.design` placeholder, profile.email TODO)
  - Work/Contact 네비 링크 제거 (Contact는 Home Career 하단 링크로만 접근)

- [x] Step 2.8 — GNB/푸터 액션
  - GNB 우측: `PDF ↗`(새 탭, `profile.pdfHref` = `/Ewon-portfolio.pdf` — **파일 아직 없음, public/에 추가 필요**) + 이메일(링크 없이 텍스트, `user-select:all`, ≤520px 숨김)
  - 푸터: 좌 `© Ewon`, 우 `Top ↑`(smooth scroll)
  - Contact 페이지 유지 (Home 하단 링크로 접근)

- [x] Step 2.9 — 카드 간격 64px, 상세페이지 재구성
  - Work 카드 세로 간격 76 → 64px
  - 상세페이지 `← Work` 링크 삭제 (BoraPortal + 스텁 공통)
  - BoraPortal 섹션 순서를 PDF 순서로 재배치: 타이틀 → Problem → UX Approach → Screens(Swap/Farm/Convert/Liquidity) → Result(GA) → Design System
  - Overview·Credits 섹션 제거 (PDF에 없음), 화면 이미지 중심 구성

## 다음 (Step 3)
- [ ] Case 4 (Design System 2.0) 인터뷰로 내용 작성 — 필요 정보:
  기간·팀 / 시작 계기 / shadcn 선택 이유 + 직접 내린 결정 2~3개 / 현재 상태 / 자료 위치
- [ ] Case 1~3 (BORA Portal/Scope/DEEPS) Result·참여범위 문구 다시 쓰기
- [ ] 실제 화면 이미지 수집 → Placeholder 교체 (`src/data/cases.ts`의 image 블록)
- [ ] Home POV / tagline / career 실제 내용 (`src/data/profile.ts`)
- [ ] 별도: 이력서 1p, 경력기술서 손질, 자기소개서 크래프톤용 신규

## Git
- repo: **github.com/Ewonyyy/portfolio** (private, main)
- 커밋 작성자: Ewon / hello@ewon.design (로컬 설정, 실명 미노출)
- `.omc/` gitignore, node_modules/dist 제외

## 나중
- [ ] astryx.css 트리셰이킹 (현재 전체 컴포넌트 CSS 183KB / gzip 32KB 포함)
- [ ] GitHub Pages 배포 (username/repo 필요, BrowserRouter → basename/404 처리)
- [ ] PDF 조판 (콘텐츠 확정 후)

## 콘텐츠 위치
- `src/data/profile.ts` — 이름, tagline, POV, 커리어
- `src/data/cases.ts` — 케이스 4개 (slug, 제목, 태그, 요약, blocks[])
- 원본 재료: `/Users/ewonyu/Desktop/25po/` (Portfolio_ver1.pdf, 경력기술서.pdf, JPG/)

## 실행
```
cd /Users/ewonyu/Desktop/25po/site
npm run dev      # http://localhost:5173
npm run build
```
