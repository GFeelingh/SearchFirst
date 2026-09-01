#!/bin/zsh
set -e
cd "$(dirname "$0")"

INPUT="SouBa-iOS-v1.0-unsigned.shortcut"
OUTPUT="SouBa-iOS-v1.0.shortcut"

if ! command -v shortcuts >/dev/null 2>&1; then
  echo "错误：未找到 macOS shortcuts 命令。需要 macOS 12 或更高版本。"
  exit 1
fi

shortcuts sign --mode anyone --input "$INPUT" --output "$OUTPUT"
echo "已生成：$OUTPUT"
open "$OUTPUT"
