#!/bin/bash

echo "🔍 Verifying Ice Cream Store Frontend Setup..."

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Run from project root."
    exit 1
fi

# Check if Dockerfile exists
if [ ! -f "Dockerfile" ]; then
    echo "❌ Dockerfile not found."
    exit 1
fi

# Check if placeholders script exists
if [ ! -f "scripts/create-browser-placeholders.js" ]; then
    echo "❌ Placeholder script not found."
    exit 1
fi

# Check if images directory exists
if [ ! -d "public/images" ]; then
    echo "📁 Creating public/images directory..."
    mkdir -p public/images
fi

# Count images
image_count=$(ls public/images/*.jpg 2>/dev/null | wc -l)
svg_count=$(ls public/images/*.svg 2>/dev/null | wc -l)

echo "📊 Image Status:"
echo "   JPG files: $image_count"
echo "   SVG files: $svg_count"

if [ $image_count -eq 0 ] && [ $svg_count -eq 0 ]; then
    echo "⚠️  No images found. Run: npm run placeholders"
fi

# Check Dockerfile content
if grep -q "npm start" Dockerfile; then
    echo "✅ Dockerfile uses correct start command"
else
    echo "❌ Dockerfile may have incorrect start command"
fi

# Check next.config.mjs
if grep -q "unoptimized: true" next.config.mjs; then
    echo "✅ Image optimization disabled (good for dev)"
else
    echo "⚠️  Image optimization may cause issues"
fi

# Check for required components
components=(
    "components/cards/ProductCard.tsx"
    "components/layout/IceCreamHero.tsx"
    "components/layout/ProductDetail.tsx"
    "components/layout/ProductGrid.tsx"
)

echo ""
echo "📦 Component Check:"
for comp in "${components[@]}"; do
    if [ -f "$comp" ]; then
        echo "✅ $comp"
    else
        echo "❌ $comp - MISSING"
    fi
done

echo ""
echo "🎯 Next Steps:"
echo "   1. npm run placeholders    (if no images)"
echo "   2. docker build -t icecream-store-frontend ."
echo "   3. docker run -p 3000:3000 --name web icecream-store-frontend"
echo "   4. Open http://localhost:3000"

echo ""
echo "✅ Setup verification complete!"