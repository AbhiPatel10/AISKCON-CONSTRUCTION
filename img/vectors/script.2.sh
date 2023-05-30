#!/bin/bash

# Get the current directory
current_dir=$(pwd)

# Find all jpg images in the current directory
jpg_files=$(find "$current_dir" -type f -name "*.jpg")

# Loop through the jpg files and convert them to WebP format
for jpg_file in $jpg_files; do

  # Get the name of the WebP file
  webp_file=${jpg_file%.jpg}.webp

  # Convert the jpg file to WebP format
  cwebp -q 40 "$jpg_file" -o "$webp_file"

  #Delete the jpg file
  rm "$jpg_file"

done
