#!/bin/bash

echo "🔧 Building Ice Cream Store Frontend..."

# Clean up old containers
docker stop web 2>/dev/null
docker rm web 2>/dev/null
docker rmi web 2>/dev/null

# Build
echo "🔨 Building Docker image..."
docker build -t web .

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 To run:"
    echo "   docker run -p 3000:3000 --name web web"
    echo ""
    echo "🌐 Then open: http://localhost:3000"
else
    echo "❌ Build failed"
    exit 1
fi