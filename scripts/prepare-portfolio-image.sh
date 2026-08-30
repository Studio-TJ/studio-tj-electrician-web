#!/usr/bin/env bash

set -euo pipefail

usage() {
  echo "Usage: $0 /path/to/photo.jpg project-id"
  echo "Example: $0 ~/Desktop/IMG_1234.JPG distribution-board-01"
}

if [[ $# -ne 2 ]]; then
  usage
  exit 1
fi

input_path="$1"
project_id="$2"

if [[ ! -f "$input_path" ]]; then
  echo "Input image not found: $input_path" >&2
  exit 1
fi

if [[ ! "$project_id" =~ ^[a-z0-9][a-z0-9-]*$ ]]; then
  echo "Project ID may only contain lowercase letters, numbers and hyphens." >&2
  exit 1
fi

if ! command -v magick >/dev/null 2>&1; then
  echo "ImageMagick is required. On macOS, install it with: brew install imagemagick" >&2
  exit 1
fi

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
output_dir="$repo_root/assets/images/portfolio"
output_path="$output_dir/$project_id.webp"

mkdir -p "$output_dir"

if [[ -e "$output_path" ]]; then
  echo "Output already exists: $output_path" >&2
  echo "Choose another project ID or remove the existing image first." >&2
  exit 1
fi

magick "$input_path" \
  -auto-orient \
  -resize '1600x1600>' \
  -strip \
  -quality 82 \
  -define webp:method=6 \
  "$output_path"

echo "Created: $output_path"
echo "YAML image path: /assets/images/portfolio/$project_id.webp"
