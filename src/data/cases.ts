// ⚠️ 더미 콘텐츠 — Step 3에서 케이스별 실제 내용/이미지로 교체
export type CaseBlock =
  | { type: 'text'; body: string }
  | { type: 'image'; ratio: number; label: string }

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  role: string
  period: string
  tags: string[]
  summary: string
  thumb?: string
  blocks: CaseBlock[]
}

export const cases: CaseStudy[] = [
  {
    slug: 'bora-portal',
    title: 'BORA Portal',
    subtitle: 'Web3 포털을 단계 중심 UX로 재설계',
    role: 'UI 시안 · 화면 구축/운영 · 디자인 시스템',
    period: '2022.10 – 2023.07',
    tags: ['서비스 플로우', '단계 중심 UX', 'GA', '디자인 시스템'],
    summary:
      'Swap·Farm이 뒤섞이던 포털을 행동 단위로 재구성하고, GA로 개편 후 흐름을 확인한 프로젝트.',
    thumb: '/work/bora-portal/swap.jpg',
    blocks: [], // → routes/cases/BoraPortal.tsx 에 전용 페이지
  },
  {
    slug: 'bora-scope',
    title: 'BORA Scope',
    subtitle: '디자인 시스템 구축 · 마이그레이션',
    role: '주 담당 · 디자인 시스템 리딩',
    period: '2023.09 – 2023.10',
    tags: ['디자인 시스템', '토큰', '컴포넌트', '다크모드'],
    summary:
      '컴포넌트·토큰·상태 정의를 정리하고 기존 화면을 새 시스템으로 이관한 프로젝트. (더미 요약)',
    blocks: [
      { type: 'image', ratio: 16 / 9, label: 'BORA Scope — 컴포넌트 라이브러리 예정' },
      { type: 'text', body: '문제 정의: (작성 예정)' },
      { type: 'image', ratio: 4 / 3, label: '토큰 체계 표 예정' },
      { type: 'text', body: '접근: (작성 예정)' },
      { type: 'text', body: '결과: (작성 예정)' },
    ],
  },
  {
    slug: 'bora-deeps',
    title: 'BORA DEEPS',
    subtitle: '게임 리워드 포털 (Booster 컨셉)',
    role: '참여 · UI 설계 / 비주얼',
    period: '2024.07 – 진행 중',
    tags: ['게임 인접', '리워드', '시즌/랭킹'],
    summary:
      '퀘스트·시즌·랭킹·미니게임 보상을 다루는 리워드 포털. 현재 진행 중. (더미 요약)',
    blocks: [
      { type: 'image', ratio: 16 / 9, label: 'BORA DEEPS — Main 화면 예정' },
      { type: 'image', ratio: 16 / 9, label: 'Quest / Game 화면 예정' },
      { type: 'text', body: '문제 정의 / 접근 / 현재 상태: (작성 예정, "진행 중" 명시)' },
    ],
  },
  {
    slug: 'design-system',
    title: 'Design System',
    subtitle: '여러 프로젝트의 반복을 shadcn 컴포넌트 라이브러리로 수렴시키다',
    role: '제안 · 검증 스파이크 · 2인 리딩',
    period: '2026 (이전 시도 2023 – 2025)',
    tags: ['디자인 시스템', 'shadcn/ui', 'Storybook', '토큰', 'AI 툴링'],
    summary:
      '여러 프로젝트에서 반복되던 디자인 시스템 작업을, 2026년 코드 기반 컴포넌트 라이브러리로 수렴시킨 프로젝트.',
    blocks: [], // → routes/cases/DesignSystem.tsx 에 전용 페이지
  },
]

export const getCase = (slug: string) => cases.find((c) => c.slug === slug)
