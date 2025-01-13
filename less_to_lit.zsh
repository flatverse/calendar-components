#!/bin/zsh

# Check if the input file name argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <input-file.less>"
  exit 1
fi;

INPUT_FILE="$1";
TMP_CSS_OUTPUT_FILE="/tmp/cal-comp-compiled-less.tmp.css";
OUTPUT_FILE="$( dirname "$1" )/$( basename "$1" .${1##*.} ).ts";

npx lessc "$INPUT_FILE" "$TMP_CSS_OUTPUT_FILE" &&
printf 'import { css } from "lit";\n\nexport default css`\n' > "$OUTPUT_FILE" &&
cat "$TMP_CSS_OUTPUT_FILE" >> "$OUTPUT_FILE" &&
printf '`;\n' >> "$OUTPUT_FILE";
