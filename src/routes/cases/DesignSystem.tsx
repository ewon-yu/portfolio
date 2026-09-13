import { Placeholder } from '../../components/Placeholder'

/**
 * Design System 케이스 스터디 — 여러 프로젝트에서 반복되던 디자인 시스템
 * 작업을 2026년 shadcn 컴포넌트 라이브러리로 수렴시킨 과정.
 *
 * 실제 화면/Storybook 캡처가 아직 없어 히어로 이미지 대신 타임라인으로
 * 시작하고, 2023~2025는 한 섹션에 묶어 지나가듯 보여준 뒤 2026을
 * 메인 딥다이브로 크게 다룬다.
 */
export function DesignSystem() {
  return (
    <article className="cs">
      <div className="page">
        {/* Title */}
        <header className="cs__head" style={{ paddingTop: 48 }}>
          <h1 className="cs__title">Design System</h1>
          <p className="cs__tagline">
            여러 프로젝트에서 반복되던 디자인 시스템 작업을, 2026년 코드 기반
            컴포넌트 라이브러리 하나로 수렴시켰습니다.
          </p>
          <dl className="cs__meta">
            <div>
              <dt>Period</dt>
              <dd>2026</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>제안 · 검증 스파이크 · 2인 리딩</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>shadcn 기반 컴포넌트 라이브러리, Storybook</dd>
            </div>
          </dl>
        </header>

        {/* 타임라인 — 이미지 없는 케이스라 히어로 대신 판단의 배경을 먼저 보여준다 */}
        <div className="cs__timeline" role="list" aria-label="2026 판단의 배경이 된 이전 시도들">
          <div className="cs__timeline-item" role="listitem">
            <span className="cs__timeline-year">2023 — Scope</span>
            <span className="cs__timeline-label">첫 시스템, 출시</span>
          </div>
          <div className="cs__timeline-item" role="listitem">
            <span className="cs__timeline-year">2024 — Dark/Light</span>
            <span className="cs__timeline-label">팀원도 다룰 수 있는 구조로</span>
          </div>
          <div className="cs__timeline-item" role="listitem">
            <span className="cs__timeline-year">2025 — 광역 Figma BDS</span>
            <span className="cs__timeline-label">구조적 한계 확인</span>
          </div>
          <div className="cs__timeline-item cs__timeline-item--pivot" role="listitem">
            <span className="cs__timeline-year">2026 — shadcn</span>
            <span className="cs__timeline-label">코드로 전환</span>
          </div>
        </div>

        {/* 1. Context */}
        <section className="cs__section">
          <span className="cs__eyebrow">Context</span>
          <h2 className="cs__h">왜 같은 문제를 네 번 풀었나</h2>
          <p className="cs__p">
            METABORA는 라이브 익스플로러, 게임 리워드 포털, 브랜드 사이트처럼
            성격이 전혀 다른 제품을 동시에 운영했습니다. 하나의 디자인
            시스템으로 묶을 수 없는 구조였고, 매 프로젝트마다 버튼 하나부터
            다시 만드는 일이 반복됐습니다.
          </p>
        </section>

        {/* 2. 2026 판단의 배경 — 2023~2025를 한 섹션에 압축, 근거로만 다룬다 */}
        <section className="cs__section">
          <span className="cs__eyebrow">Background</span>
          <h2 className="cs__h">2026 판단의 배경</h2>
          <ul className="cs__list cs__list--counter">
            <li>
              <strong>2023, Scope.</strong> Figma Variables로 첫 시스템을
              만들어 전 페이지에 적용, 출시했습니다. 라이브와 디자인 파일
              사이의 간극이 줄면서 운영 대응 속도가 빨라졌습니다.
            </li>
            <li>
              <strong>2024, Dark/Light.</strong> 골드거래소·KBO 프로젝트에서
              다크·라이트 모드를 대응하며, 팀원이 스스로 컴포넌트를 관리하고
              확장할 수 있도록 구조를 정리했습니다.
            </li>
            <li>
              <strong>2025, 광역 Figma BDS.</strong> 생태계 전체를 아우르는
              시스템을 시도하면서, Figma Variable이 파일 단위로 묶여
              부분적으로 재사용하기 어렵다는 구조적 한계를 확인했습니다. 이
              경험이 2026년 코드 기반 접근을 선택한 근거가 됐습니다.
            </li>
          </ul>
        </section>

        {/* 3. 2026 — 메인 딥다이브 */}
        <section className="cs__section">
          <span className="cs__eyebrow">2026</span>
          <h2 className="cs__h">왜 Figma가 아니라 코드였나</h2>
          <p className="cs__p">
            6~7월에 구상하고 8월 초 스터디를 시작해 9월 첫째 주 Storybook을
            완성했습니다. 개발팀이 이미 React를 쓰고 있었으니, 디자인
            산출물도 같은 스택으로 만들면 개발 리소스 없이도 디자인팀이
            직접 리뉴얼을 제안할 수 있는 구조가 된다고 판단했습니다. 리서치
            끝에 베이스를 shadcn으로 정했습니다. 목표는 크지 않았습니다 —
            자주 쓰는 사이즈·케이스를 정의하고, 프로젝트별로는 스타일만
            교체하는 것.
          </p>
        </section>

        <div className="cs__subsection">
          <span className="cs__eyebrow">Architecture</span>
          <h2 className="cs__h">3층 구조와 검증 스파이크</h2>
          <p className="cs__p">
            <code>Foundation/Primitive → Semantic → Component</code> 3층
            구조를 정의하고, 각 시멘틱 토큰이 언제 쓰이는지 정리했습니다.
          </p>
          <div className="cs__layers">
            <div className="cs__layer">
              <strong>Component</strong>
              <span>Button, Card, Input …</span>
            </div>
            <div className="cs__layer">
              <strong>Semantic</strong>
              <span>
                surface.*, text.*, border.*, icon.*, brand.*, status.*
              </span>
            </div>
            <div className="cs__layer">
              <strong>Foundation / Primitive</strong>
              <span>raw color, spacing, radius scale</span>
            </div>
          </div>
          <p className="cs__p">
            리스크는 "이 시멘틱 레이어가 실제 컴포넌트에 입혔을 때 버티는가,
            개발 스택(React/shadcn)에서 실제로 되는가"였습니다. 시멘틱
            정의를 실제 컴포넌트에 적용해보며 정의를 수정했고, shadcn
            스택에서 동작함을 직접 검증한 뒤에야 팀원 2명에게 나머지
            컴포넌트를 맡기고 Storybook 작업을 리딩했습니다. 크기·형태
            같은 구조적 속성(size, variant, disabled)은 전 서비스가
            공유하고, 색상·radius 같은 브랜드 값만 서비스별로 분리되도록
            아키텍처를 짰습니다.
          </p>
          <div className="cs__figure" style={{ aspectRatio: '16/9' }}>
            <Placeholder label="Storybook 컴포넌트 뷰 — 공개 배포 예정" />
          </div>
        </div>

        {/* 4. Result */}
        <section className="cs__section">
          <span className="cs__eyebrow">Result</span>
          <h2 className="cs__h">무엇을 만들었나</h2>
          <p className="cs__p">
            검증 스파이크로 시멘틱 토큰이 실제 컴포넌트에서 동작함을 먼저
            확인한 뒤, 팀원 2명에게 나머지 컴포넌트를 맡기고 Storybook
            작업을 리딩했습니다.
          </p>
          <div className="cs__result-grid">
            <div className="cs__result">
              <strong>핵심 컴포넌트 구현</strong>
              <span>Data Display, Accordion 등 실제 서비스에 쓰이는 컴포넌트를 shadcn 기반으로 구현.</span>
            </div>
            <div className="cs__result">
              <strong>구조 검증 완료</strong>
              <span>시멘틱 토큰이 실제 컴포넌트에서 동작함을 직접 검증하고, 팀원에게 위임 가능한 프로세스로 정리.</span>
            </div>
            <div className="cs__result">
              <strong>재사용 가능한 아키텍처</strong>
              <span>구조적 속성과 브랜드 토큰을 분리해, 다음 프로젝트부터 바로 재사용할 수 있는 형태로 설계.</span>
            </div>
          </div>
        </section>

        {/* 5. Reflection */}
        <section className="cs__section">
          <span className="cs__eyebrow">Reflection</span>
          <p className="cs__reflection">
            재사용은 완성도가 아니라 꺼내기 쉬움으로 결정된다. 개발 스택에
            직접 붙는 형태여야, 실제로 쓰인다.
          </p>
        </section>
      </div>
    </article>
  )
}
