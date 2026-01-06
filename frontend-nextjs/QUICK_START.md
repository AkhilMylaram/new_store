# Quick Start - Docker Build

## 🎯 One-Command Setup

```bash
# 1. Generate placeholder images
npm run placeholders

# 2. Build Docker
docker build -t icecream-store-frontend .

# 3. Run container
docker run -p 3000:3000 --name web icecream-store-frontend

# 4. Open browser
# http://localhost:3000
```

## 📋 Exact Commands to Run

### **Step 1: Generate Images**
```bash
cd /path/to/frontend-nextjs
npm run placeholders
```
**Output**: Creates SVG placeholder images in `/public/images/`

### **Step 2: Build Docker**
```bash
docker build -t icecream-store-frontend .
```
**Expected output**:
```
[+] Building 60.0s (10/10) FINISHED
 => [internal] load build definition from Dockerfile
 => [internal] load metadata for docker.io/library/node:18-alpine
 => [internal] load .dockerignore
 => [1/5] FROM docker.io/library/node:18-alpine
 => [2/5] WORKDIR /app
 => [3/5] COPY package.json package-lock.json* ./
 => [4/5] RUN npm ci --no-audit --no-fund --loglevel=error
 => [5/5] COPY . .
 => [6/5] RUN npm run build
 => exporting to image
 => writing image sha256:...
 => naming to docker.io/library/icecream-store-frontend
```

### **Step 3: Run Container**
```bash
docker run -p 3000:3000 --name web icecream-store-frontend
```

**Expected output**:
```
> icecream-store-frontend@0.1.0 start
> next start

   ▲ Next.js 14.0.0
   - Local:    http://localhost:3000

✓ Ready in 2.3s
```

### **Step 4: Verify**
```bash
# Check container is running
docker ps

# Check logs
docker logs web

# Test endpoint
curl http://localhost:3000
```

## ✅ What You Should See

### **In Terminal (Docker Build)**
```
✅ Build completes in ~60 seconds
✅ No errors
✅ Image size: ~200MB
```

### **In Browser (http://localhost:3000)**
- ✅ Header with "Ice Cream Store"
- ✅ Hero section with gradient background
- ✅ Product grid with 8 items
- ✅ Each product shows gradient + emoji 🍦
- ✅ Footer with copyright
- ✅ No broken images
- ✅ No console errors

### **In Docker Logs**
```
> next start
✓ Ready in 2.3s
```

## 🎨 Image Output Details

### **Without Real Images (SVG Placeholders)**
- Shows gradient backgrounds
- Displays text labels (e.g., "Vanilla", "Chocolate")
- Shows 🍦 emoji as fallback
- **No broken images**
- **No 404 errors**

### **With AI-Generated Images**
- Shows premium ice cream photos
- Smooth hover effects
- Professional appearance
- Replace SVG files with JPG/PNG anytime

## 🔧 Troubleshooting

### **If Build Fails:**
```bash
# Clean and rebuild
docker system prune -a
docker build -t icecream-store-frontend . --no-cache
```

### **If Port 3000 is busy:**
```bash
# Use different port
docker run -p 8080:3000 --name web icecream-store-frontend
# Then open: http://localhost:8080
```

### **If Images Don't Show:**
```bash
# Check if placeholders exist
ls -la public/images/

# Regenerate if missing
npm run placeholders

# Rebuild Docker
docker build -t icecream-store-frontend .
```

## 📊 Complete Command Reference

```bash
# Generate images
npm run placeholders

# Build Docker
docker build -t icecream-store-frontend .

# Run
docker run -p 3000:3000 --name web icecream-store-frontend

# View logs
docker logs web -f

# Stop container
docker stop web

# Remove container
docker rm web

# Remove image
docker rmi icecream-store-frontend

# Full cleanup
docker stop web && docker rm web && docker rmi icecream-store-frontend
```

## 🎯 Expected Result

**After running all commands, you will have:**
- ✅ A running Docker container
- ✅ Web app accessible at http://localhost:3000
- ✅ Gradient image placeholders working
- ✅ No errors in console
- ✅ Ready for production deployment

**Next step**: Replace SVG placeholders with real AI-generated images for production quality!