#!/bin/bash

# Build and run script for Ice Cream Store Frontend

echo "🔧 Building Ice Cream Store Frontend..."

# Generate placeholder images if they don't exist
if [ ! -f "public/images/hero-icecream.jpg" ]; then
    echo "📸 Generating placeholder images..."
    npm run placeholders
fi

# Build Docker image
echo "🔨 Building Docker image..."
docker build -t icecream-store-frontend .

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 To run the container:"
    echo "   docker run -p 3000:3000 --name web icecream-store-frontend"
    echo ""
    echo "🌐 Then open: http://localhost:3000"
else
    echo "❌ Build failed. Check errors above."
    exit 1
fi