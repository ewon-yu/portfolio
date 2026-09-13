import { withBase } from '../../lib/url'

const base = withBase('/work/bora-portal')

/**
 * BORA Portal 케이스 스터디.
 * 섹션 순서 = Portfolio_ver1.pdf 순서: 타이틀 → Problem → UX Approach
 *   → Screens(Swap·Farm 등) → Result(GA) → Design System.
 * 포맷 참고: newtype.design / mateogrubisic.design 케이스 페이지.
 * ⚠️ 이미지는 실제 작업물(JPG/), 정량 수치는 PDF에 없어 정성 관찰로 서술.
 */
export function BoraPortal() {
  return (
    <article className="cs">
      <div className="page">
        {/* Title */}
        <header className="cs__head" style={{ paddingTop: 48 }}>
          <h1 className="cs__title">BORA Portal</h1>
          <p className="cs__tagline">
            서로 다른 성격의 기능이 한 화면에 뒤섞인 Web3 포털을, 한 번에 하나의
            행동만 고민하도록 단계 중심으로 재설계했습니다.
          </p>
          <dl className="cs__meta">
            <div>
              <dt>Period</dt>
              <dd>2022.10 – 2023.07</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>UI 시안 · 화면 구축/운영 · 디자인 시스템 구축</dd>
            </div>
            <div>
              <dt>Contribution</dt>
              <dd>70%</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>BORA 블록체인 생태계의 자산·NFT·토큰 및 Web3 활동 플랫폼</dd>
            </div>
          </dl>
        </header>

        {/* Hero */}
        <figure className="cs__figure">
          <img src={`${base}/swap.jpg`} alt="BORA Portal Swap 화면" />
        </figure>

        {/* 1. Problem */}
        <section className="cs__section">
          <span className="cs__eyebrow">Problem</span>
          <h2 className="cs__h">기능은 다른데, 화면은 똑같이 생겼다</h2>
          <ul className="cs__list cs__list--counter">
            <li>
              Swap, Farm 등 성격이 다른 기능들이 유사한 UI 구조로 구성되어 있어,
              메뉴 간 차이를 직관적으로 인지하기 어려웠습니다.
            </li>
            <li>
              한 화면에서 여러 선택과 정보가 동시에 제공되어, 지금 어느 단계에
              있고 다음에 무엇을 해야 하는지 파악하기 어려운 구조였습니다.
            </li>
          </ul>
        </section>

        {/* 2. UX Approach */}
        <section className="cs__section">
          <span className="cs__eyebrow">UX Approach</span>
          <h2 className="cs__h">단계 중심의 UX 재구성</h2>
          <ul className="cs__list cs__list--counter">
            <li>
              사용자가 한 번에 하나의 액션만 고민하도록, 화면을 단계 중심으로
              나눠 재구성했습니다.
            </li>
            <li>기능이 아니라 사용자 행동 단위를 기준으로 화면 흐름을 다시 짰습니다.</li>
            <li>
              정보 노출 순서를 조정해, 지금 판단에 필요하지 않은 정보로 인한
              부담을 줄이는 방향으로 개선했습니다.
            </li>
          </ul>
        </section>

        {/* 3. Screens */}
        <section className="cs__section">
          <span className="cs__eyebrow">Screens</span>
          <h2 className="cs__h">같은 원칙을 세 화면에 적용</h2>

          <p className="cs__p">
            <strong>Swap</strong> — 지불 → 수령 → 확인의 순서를 상단 스테퍼로
            고정 노출해, 진행 상황과 다음 행동이 항상 보이도록 했습니다. (위
            히어로 이미지)
          </p>

          <figure className="cs__figure">
            <img
              src={`${base}/farms_stake.jpg`}
              alt="Farm Stake 화면 — 입력과 예상내역이 나란히 배치됨"
            />
            <figcaption>
              Farm — Stake / Unstake를 먼저 고르게 하고, 예상 수익·APR 같은 판단
              정보를 실행 버튼 옆에 붙여 한 맥락에서 결정하도록 했습니다.
            </figcaption>
          </figure>

          <p className="cs__p">
            입력과 결과 예측을 좌우로 분리하고, 교환비율·슬리피지·수수료 같은 부가
            정보는 '예상내역'으로 묶어 실행 직전에 필요한 만큼만 보이도록 노출
            순서를 조정했습니다.
          </p>

          <div className="cs__grid2">
            <figure className="cs__figure">
              <img src={`${base}/transfer.jpg`} alt="Convert 화면" />
              <figcaption>Convert — 입력(좌) / 예상내역(우) 분리</figcaption>
            </figure>
            <figure className="cs__figure">
              <img
                src={`${base}/liquidity_withdraw.jpg`}
                alt="Liquidity Withdraw 화면"
              />
              <figcaption>Liquidity — 같은 좌우 패턴으로 일관성 유지</figcaption>
            </figure>
          </div>
        </section>

        {/* 4. Result */}
        <section className="cs__section">
          <span className="cs__eyebrow">Result</span>
          <h2 className="cs__h">GA로 확인한 개편 후 흐름</h2>
          <p className="cs__p">
            출시 후 GA로 주요 플로우를 관찰했습니다. (정량 지표는 사내 기준상
            생략, 정성 관찰 중심으로 정리)
          </p>
          <div className="cs__result-grid">
            <div className="cs__result">
              <strong>이용 흐름 유지</strong>
              <span>
                Swap·Farm 등 주요 기능에서 이탈 없이 안정적인 이용 흐름이
                유지됐습니다.
              </span>
            </div>
            <div className="cs__result">
              <strong>DAU 추세 유지</strong>
              <span>개편에도 DAU가 급감 없이 안정적인 추세를 이어갔습니다.</span>
            </div>
            <div className="cs__result">
              <strong>의도대로 이어진 행동</strong>
              <span>
                설계한 단계 순서대로 사용자 행동이 이어져, 운영 관점에서 의미
                있는 결과를 확인했습니다.
              </span>
            </div>
          </div>
        </section>

        {/* 5. Design System */}
        <section className="cs__section">
          <span className="cs__eyebrow">Design System</span>
          <h2 className="cs__h">개편과 함께 정리한 공통 UI</h2>
          <p className="cs__p">
            개편과 병행해 포털 전반의 UI 컴포넌트를 구성했습니다. 공통 요소를
            구축·관리하고 진행 상황에 맞춰 수정하며 유관부서와 협업했고, 이
            작업이 이후 별도 프로젝트인 BORA Scope(디자인 시스템 구축·마이그레이션)로
            이어졌습니다.
          </p>
          <figure className="cs__figure" style={{ maxWidth: 460 }}>
            <img src={`${base}/access-modal.png`} alt="지갑 연결 모달 컴포넌트" />
            <figcaption>공통 컴포넌트 예 — 지갑 연결 모달</figcaption>
          </figure>
        </section>
      </div>
    </article>
  )
}
