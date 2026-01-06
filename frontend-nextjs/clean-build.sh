#!/bin/bash

echo "🧹 Cleaning up old builds..."

# Remove any existing containers
docker stop web 2>/dev/null
docker rm web 2>/dev/null

# Remove old images
docker rmi web 2>/dev/null
docker rmi icecream-store-frontend 2>/dev/null

# Clean Docker cache
docker system prune -f

echo "✅ Cleanup complete!"

echo ""
echo "🚀 Building fresh image..."
echo "⏱️  This should take 60-90 seconds"

# Build with no cache for fresh start
docker build -t web . --no-cache

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "🎯 To run:"
    echo "   docker run -p 3000:3000 --name web web"
    echo ""
    echo "🌐 Then open: http://localhost:3000"
else
    echo ""
    echo "❌ Build failed. Check errors above."
    exit 1
fi