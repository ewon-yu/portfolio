#!/usr/bin/env bash
# 포트폴리오 세션 시작 시 실행 — Astryx / 핵심 의존성 / Claude Code 업데이트 확인.
# 업데이트가 있으면 적용 명령을 그대로 출력한다. (적용은 사용자 확인 후)
set -u
cd "$(dirname "$0")/.." || exit 1

ver_local() { node -e "try{console.log(require('./node_modules/$1/package.json').version)}catch(e){console.log('-')}"; }
ver_latest() { npm view "$1" version 2>/dev/null || echo '-'; }

updates=()
row() { # $1 = pkg
  local cur lat
  cur=$(ver_local "$1"); lat=$(ver_latest "$1")
  if [ "$cur" = "$lat" ] || [ "$lat" = '-' ]; then
    printf "  %-30s %-10s (최신)\n" "$1" "$cur"
  else
    printf "  %-30s %-10s -> %s   ⬆ UPDATE\n" "$1" "$cur" "$lat"
    updates+=("$1@$lat")
  fi
}

echo "── Astryx ─────────────────────────────"
for p in @astryxdesign/core @astryxdesign/build @astryxdesign/cli @astryxdesign/theme-neutral; do row "$p"; done

echo "── 핵심 의존성 ────────────────────────"
for p in react react-dom vite @vitejs/plugin-react react-router-dom @stylexjs/stylex @stylexjs/unplugin; do row "$p"; done

echo "── Claude Code CLI ────────────────────"
cc_cur=$(claude --version 2>/dev/null | grep -oE '[0-9]+\.[0-9]+\.[0-9]+' | head -1)
cc_lat=$(npm view @anthropic-ai/claude-code version 2>/dev/null)
if [ "$cc_cur" = "$cc_lat" ]; then
  printf "  claude-code                    %-10s (최신)\n" "$cc_cur"
else
  printf "  claude-code                    %-10s -> %s   ⬆ UPDATE\n" "$cc_cur" "$cc_lat"
  echo "  적용: claude update   (또는 npm i -g @anthropic-ai/claude-code@latest)"
fi

echo
if [ ${#updates[@]} -eq 0 ]; then
  echo "✅ npm 패키지 모두 최신."
else
  echo "⬆ 업데이트 가능한 npm 패키지:"
  printf '   %s\n' "${updates[@]}"
  echo
  echo "적용 명령 (확인 후 실행):"
  echo "   npm i ${updates[*]}"
  echo "   npx tsc -b && npm run build   # 회귀 확인"
fi
