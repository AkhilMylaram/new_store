#!/bin/bash

# Build script for Ice Cream Store Frontend
# Handles common build issues

echo "🔧 Building Ice Cream Store Frontend..."

# Check for missing images
echo "📸 Checking for images..."
npm run check-images

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .next

# Build with no lint to avoid timeout
echo "🔨 Building application..."
npm run build:no-lint

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 To start: npm run start"
else
    echo "❌ Build failed. Check errors above."
    exit 1
fi