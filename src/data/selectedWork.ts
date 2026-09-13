/**
 * 채용 제출용 "Selected Work" 콘텐츠 — /selected-work
 *
 * 목적: 완성형 Case Study가 아니라, 이력서·경력기술서와 함께 전달할
 * "최근 주요 작업을 빠르게 시각적으로 확인할 수 있는" 요약 사이트.
 * 기존 /work, /work/:slug 는 이 파일과 무관하게 그대로 유지된다.
 *
 * 카피는 임의로 재작성하지 않고 합의된 문구를 그대로 사용한다.
 */

export type SectionImage = {
  ratio: number
  src?: string
  alt?: string
  caption?: string
}

export type SelectedWorkSection = {
  label: string
  title: string
  /** 문단 단위. 대부분 1개, 필요한 경우에만 2개. */
  description: string[]
  /**
   * 기본 방식: 섹션 전체가 하나의 레이아웃(stack 또는 grid)을 공유.
   * imageRows가 있으면 이쪽이 우선 — 행마다 레이아웃을 다르게 섞을 때 사용
   * (예: 대표 이미지 1장 큰 행 다음에 2단 행). 기존 섹션은 그대로 images/imageLayout 사용.
   */
  images: SectionImage[]
  imageLayout: 'stack' | 'grid'
  /** 각 행: 원소 1개 = 풀와이드, 2개 = 2-column */
  imageRows?: SectionImage[][]
  /** 섹션 하단에 외부 링크로 연결되는 텍스트 버튼 (예: 배포된 Storybook) */
  link?: { label: string; href: string }
}

export type SelectedWorkProject = {
  slug: string
  /** Work List 카드 타이틀 (1줄) */
  listTitle: string
  listDescription: string
  listImage?: { src: string; alt: string }
  /** Work List 카드에 노출하는 짧은 Period · Role 메타 한 줄 (keyword/tag pill 대체) */
  cardMeta: string
  /** true면 Work List에서 2-column 전체 너비 카드로 노출 */
  featured?: boolean

  /** 상세 페이지 히어로 타이틀. 배열 = 줄바꿈 */
  detailTitleLines: string[]
  /** 문단 단위. 배열 원소마다 별도 <p>로 렌더링. */
  intro: string[]
  meta: {
    period: string[]
    role: string[]
    scope: string[]
  }
  heroImage?: { src: string; alt: string }
  sections: SelectedWorkSection[]
  result: string[]
}

export const selectedWork: SelectedWorkProject[] = [
  {
    slug: 'bora-deeps',
    listTitle: 'BORA DEEPS',
    listDescription: '게임 콘텐츠 확장성을 고려한 반응형 서비스 개편',
    cardMeta: '2025–현재 · UI/UX Design · Design Leading',
    listImage: { src: '/work/bora-deeps/img-deeps.jpg', alt: 'BORA DEEPS 메인 화면' },
    featured: true,

    detailTitleLines: ['BORA DEEPS'],
    intro: [
      '1차 구축부터 2차 개편까지 참여하며, Main을 중심으로 서비스의 정보 구조와 비주얼 방향을 설계했습니다.',
      '콘텐츠와 퀘스트 규모 변화에 대응할 수 있는 구조를 만들고, 게임 정보·배너·관련 콘텐츠 등 기획을 보완하는 UI를 제안해 실제 서비스에 반영했습니다.',
    ],
    meta: {
      period: ['2025–현재', '1차 런칭 2025.08', '2차 런칭 2026.03.31'],
      role: ['UI/UX Design', 'Project Leading'],
      scope: ['Main · Quest · Play', 'Responsive · Multi-language'],
    },
    heroImage: { src: '/work/bora-deeps/img-deeps.jpg', alt: 'BORA DEEPS 메인 화면' },
    sections: [
      {
        label: '01. SERVICE DESIGN',
        title: '확장 가능한 서비스 구조',
        description: [
          '콘텐츠와 퀘스트 규모 변화에 대응할 수 있도록 Main의 Hero와 콘텐츠 구조를 설계하고, 게임 정보·배너·관련 콘텐츠 및 다른 페이지로 이어지는 사용자 동선을 추가 제안했습니다.',
          'Main·Quest·Play 개편 과정에서는 정보 구조·반응형·컴포넌트 적용 방향을 리딩하고 팀원 결과물을 리뷰했으며, 당첨 안내 등 일부 기능은 비주얼 중심의 UI로 추가 제안해 실제 서비스에 반영했습니다.',
        ],
        images: [],
        imageLayout: 'stack',
        imageRows: [
          [{ ratio: 16 / 10, src: '/work/bora-deeps/img-deeps1.jpg', alt: 'BORA DEEPS Main 화면' }],
          [{ ratio: 16 / 10, src: '/work/bora-deeps/img-deeps2.jpg', alt: 'BORA DEEPS Quest 화면' }],
          [{ ratio: 16 / 10, src: '/work/bora-deeps/img-deeps3.jpg', alt: 'BORA DEEPS Play 화면' }],
          [{ ratio: 16 / 10, src: '/work/bora-deeps/img-deeps4.jpg', alt: 'BORA DEEPS Reward Modal' }],
        ],
      },
      {
        label: '02. RESPONSIVE & MULTI-LANGUAGE',
        title: '다양한 환경을 고려한 UI 대응',
        description: [
          'PC와 Mobile 환경에 대응하는 반응형 UI를 구성하고, 4개 국어에서도 정보 구조와 주요 UI가 안정적으로 유지되도록 대응했습니다.',
        ],
        images: [],
        imageLayout: 'stack',
        imageRows: [
          [{ ratio: 16 / 10, src: '/work/bora-deeps/img-deeps5.jpg', alt: 'BORA DEEPS 반응형·다국어 대응 화면' }],
        ],
      },
    ],
    result: [
      '2차 메인 디자인 시안 최종 채택',
      'Main·Quest·Play 주요 화면에 최종 디자인 원안 중심 반영 및 공식 런칭',
      '추가 제안한 게임 정보·관련 콘텐츠·사용자 동선 및 일부 Modal UI 실제 서비스 반영',
    ],
  },

  {
    slug: 'bora-portal',
    listTitle: 'BORA Portal',
    listDescription: '복잡한 Web3 거래 과정을 행동 단위로 재구성',
    cardMeta: '2022.10–2023.07 구축 · UI/UX Design',
    listImage: { src: '/work/bora-portal/img-portal.jpg', alt: 'BORA Portal 메인 화면' },

    detailTitleLines: ['BORA Portal'],
    intro: [
      'BORA Portal 리뉴얼에서 Brand·Earn 주요 화면을 디자인하고, Swap·Farm의 복잡한 Web3 거래 과정을 행동 단위로 재구성했습니다.',
      '사용자가 현재 단계와 다음 행동을 명확히 인지할 수 있도록 거래 흐름과 상태 UI를 설계했습니다.',
    ],
    meta: {
      period: ['2022.10–2023.07 구축', '이후 운영'],
      role: ['UI/UX Design'],
      scope: ['Main · Brand · Earn', 'Swap · Farm'],
    },
    heroImage: { src: '/work/bora-portal/img-portal.jpg', alt: 'BORA Portal 메인 화면' },
    sections: [
      {
        label: 'SWAP',
        title: '단계형 거래 플로우',
        description: [
          '복잡한 Swap 과정을 토큰 선택 → 수량 입력 → 승인 등 사용자의 행동 단위로 나누어 단계형 UI로 구성했습니다.',
        ],
        images: [
          { ratio: 4 / 3, src: '/work/bora-portal/img-swap1.jpg', alt: 'Swap 01 토큰 선택', caption: '01 토큰 선택' },
          { ratio: 4 / 3, src: '/work/bora-portal/img-swap2.jpg', alt: 'Swap 02 수량 입력', caption: '02 수량 입력' },
          { ratio: 4 / 3, src: '/work/bora-portal/img-swap3.jpg', alt: 'Swap 03 프로세스 안내', caption: '03 프로세스 안내' },
          { ratio: 4 / 3, src: '/work/bora-portal/img-swap4.jpg', alt: 'Swap 04 프로세스 진행', caption: '04 프로세스 진행' },
          { ratio: 4 / 3, src: '/work/bora-portal/img-swap5.jpg', alt: 'Swap 05 완료', caption: '05 완료' },
        ],
        imageLayout: 'grid',
      },
      {
        label: 'FARM',
        title: '핵심 정보 중심의 화면 구성',
        description: [
          'Farm 화면의 다량의 정보와 설명을 정리하고, 사용 목적과 직접 연결되는 수익률 정보를 핵심 정보로 강조했습니다.',
        ],
        images: [
          { ratio: 4 / 3, src: '/work/bora-portal/img-farm.jpg', alt: 'BORA Portal Farm 화면' },
        ],
        imageLayout: 'stack',
      },
      {
        label: 'COMPONENT LIBRARY',
        title: '서비스 전반의 UI 기준 관리',
        description: [
          '포털 컴포넌트 라이브러리를 구축하고 주요 화면에 공통 UI 기준을 적용했습니다.',
        ],
        images: [
          { ratio: 4 / 3, src: '/work/bora-portal/img-library.jpg', alt: 'BORA Portal 컴포넌트 라이브러리' },
        ],
        imageLayout: 'stack',
      },
    ],
    result: [
      '메인 디자인 시안 최종 채택 및 BORA Portal 리뉴얼 서비스 공식 출시',
      'Swap·Farm 등 주요 Web3 서비스 플로우와 UI 실제 서비스 반영',
    ],
  },

  {
    slug: 'design-system',
    listTitle: 'Design System & Component Library',
    listDescription: 'Figma Design System에서 Code Component R&D까지',
    cardMeta: '2023–2026 · UI/UX Design',
    listImage: { src: '/work/design-system/img-ds0.jpg', alt: 'BORA Design System 구조' },

    detailTitleLines: ['Design System', '& Component Library'],
    intro: [
      '프로젝트별 컴포넌트 구축 경험을 바탕으로 Figma Design System을 설계하고, 이후 범용 Code Component Library R&D까지 확장했습니다.',
      '프로젝트마다 달라지는 도메인과 스타일을 고려해 공통화할 영역과 분리할 영역을 정리했습니다.',
    ],
    meta: {
      period: ['2023–2026'],
      role: ['UI/UX Design', 'System Design · R&D'],
      scope: ['Figma Variables', 'Dark/Light', 'Semantic Token', 'Storybook'],
    },
    heroImage: { src: '/work/design-system/img-ds0.jpg', alt: 'BORA Design System 구조' },
    sections: [
      {
        label: '01. DESIGN SYSTEM',
        title: '프로젝트 경험을 기반으로 확장한 디자인 시스템',
        description: [
          'BORA Scope에서 Figma Variables 기반 컴포넌트 라이브러리를 구축해 전체 페이지에 적용했고, Deepair에서는 Dark/Light 환경에 대응하는 컴포넌트 라이브러리를 구축했습니다.',
          '이 경험을 바탕으로 BORA Design System에서 Dark/Light 통합 Foundation·Semantic Token·공용 UI Component 체계를 설계하고, 실제 사용 과정의 혼용을 줄이기 위해 Semantic Token 구조와 공통 사용 기준을 정리했습니다.',
        ],
        images: [],
        imageLayout: 'stack',
        imageRows: [
          [
            { ratio: 4 / 3, src: '/work/design-system/img-ds1.jpg', alt: 'BORA Scope 컴포넌트 화면', caption: 'BORA Scope' },
            { ratio: 4 / 3, src: '/work/design-system/img-ds2.jpg', alt: 'Deepair Dark/Light 화면', caption: 'Deepair · Dark / Light' },
          ],
          [{ ratio: 16 / 9, src: '/work/design-system/img-ds3.jpg', alt: 'Foundation & Semantic Token', caption: 'Foundation & Semantic Token' }],
          [{ ratio: 16 / 9, src: '/work/design-system/img-ds4.jpg', alt: 'BORA Design System 공용 UI Component', caption: 'Components' }],
        ],
      },
      {
        label: '02. CODE COMPONENT R&D',
        title: '범용 코드 컴포넌트 구조 검증',
        description: [
          '프로젝트별 도메인과 스타일 차이로 하나의 Figma Design System을 그대로 재사용하기 어렵다는 점을 확인하고, 범용 기초 UI Component Library의 필요성을 제안했습니다.',
          '여러 구조를 검토한 뒤 shadcn 기반 방식을 선정해 브랜드 스타일과 Variant 확장 가능성을 검증하고, Foundation·Semantic Token 범위와 구현 대상 Component를 정리해 팀원 2명과 구현을 분담하고 Storybook 결과물을 리뷰했습니다.',
        ],
        images: [],
        imageLayout: 'stack',
        imageRows: [
          [{ ratio: 16 / 9, src: '/work/design-system/storybook-demo.gif', alt: 'BDS Storybook 컴포넌트 라이브러리' }],
        ],
        link: { label: 'Storybook 보기', href: 'https://ewon-yu.github.io/bds-storybook/' },
      },
    ],
    result: [
      'BORA Scope 전체 페이지에 Figma Variables 기반 공용 컴포넌트 체계 적용',
      'Foundation 및 약 20종의 공용 UI Component로 구성된 Dark/Light Design System 구축',
      'shadcn 기반 Code Component Prototype 및 Storybook 검증 완료',
    ],
  },
]

export const getSelectedWork = (slug: string) =>
  selectedWork.find((p) => p.slug === slug)

/**
 * Other Works — 대표 프로젝트와 같은 비중으로 보이지 않도록 작게 노출.
 * 상세 페이지 없음 (Link 없이 카드만).
 */
export type OtherWork = {
  title: string
  description: string
  /** Period · Role 한 줄 (keyword/tag pill 대체) */
  meta: string
  image?: { src: string; alt: string }
}

export const otherWorks: OtherWork[] = [
  {
    title: 'Deepair',
    description: 'Dark/Light 환경의 Web UI 및 컴포넌트 라이브러리 구축',
    meta: '2024 · UI/UX Design',
    image: { src: '/work/other/img-deepair.jpg', alt: 'Deepair 화면' },
  },
  {
    title: 'MTB',
    description: '모바일 게임 UI 디자인',
    meta: '2023–2024 · UI Design',
    image: { src: '/work/other/img-mtb.jpg', alt: 'MTB 화면' },
  },
  {
    title: 'METABORA',
    description: '브랜드 사이트 UI 디자인 및 반응형 웹 구축',
    meta: '2023 · UI/UX Design',
    image: { src: '/work/other/img-metabora.jpg', alt: 'METABORA 브랜드 사이트 화면' },
  },
]
