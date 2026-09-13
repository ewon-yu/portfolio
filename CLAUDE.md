# 포트폴리오 사이트 — 작업 규칙

## 다른 컴퓨터에서 처음 시작할 때

```bash
git clone https://github.com/Ewonyyy/portfolio.git
cd portfolio
npm install                     # node >= 20.19 필요
git config user.name  "Ewon"    # ⚠️ .git/config는 clone에 안 따라옴 — 매 머신 재설정
git config user.email "hello@ewon.design"
npm run check                   # 업데이트 확인
npm run dev
```

- private repo → 그 머신에서 `gh auth login` 또는 GitHub 로그인 필요.
- 실제 원본 자료(PDF·경력기술서·자기소개서)는 repo에 없음. 로컬 `~/Desktop/25po/`(이 머신)에만 있음.

## 세션 시작 시 (매번)

포트폴리오 작업을 시작하면 **가장 먼저** 업데이트를 확인한다:

```bash
npm run check
```

- Astryx(`@astryxdesign/*`), 핵심 의존성, Claude Code CLI의 설치 버전 vs 최신 버전 비교.
- 업데이트가 있으면: **사용자에게 먼저 보고** → 승인 후 출력된 명령으로 적용 → `npx tsc -b && npm run build` 로 회귀 확인 → 결과 보고.
- Claude Code 업데이트는 `claude update` (CLI 재시작 필요할 수 있음).

## 확인 후 진행 (사용자 승인 필수)

아래는 **실행 전 반드시 사용자에게 확인**한다:

- 파일 **삭제**, 대량 이동/이름 변경
- 여러 파일에 걸친 리팩터/일괄 수정
- `git commit` / `git push` / PR 생성 / 브랜치 조작
- 의존성 **메이저 버전** 업그레이드, 스택 교체(예: Astryx → shadcn 폴백)
- `public/` 자산 대량 교체·삭제

작은 단위 편집(단일 컴포넌트/CSS/콘텐츠 파일)은 바로 진행하고 결과만 보고한다.

## 스택 메모

- Vite + React 19 + Astryx(dark 고정), react-router. StyleX 빌드 플러그인 불필요(dist에 프리컴파일).
- 콘텐츠: `src/data/`, 케이스 상세: `src/routes/cases/`
- 전체 진행 상황: `STATUS.md`
