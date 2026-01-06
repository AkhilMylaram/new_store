# Troubleshooting Guide

## ❌ Common Errors & Fixes

### **1. 404 Errors on JS Chunks**
```
GET /_next/static/chunks/...js 404 (Not Found)
```

**Cause**: The app hasn't been built yet, or the build is incomplete.

**Fix**:
```bash
# Clean build
npm run build:clean

# Or if using dev mode with Turbo (faster)
npm run dev --turbo
```

### **2. 400 Bad Request on Images**
```
GET /_next/image?url=%2Fimages%2Fcaramel.jpg 400 (Bad Request)
```

**Cause**: 
- Image files don't exist in `/public/images/`
- Next.js Image Optimization is trying to process non-existent files

**Fix**:
1. **Check what's missing**:
   ```bash
   npm run check-images
   ```

2. **Create placeholders** (temporary):
   ```bash
   node scripts/create-placeholders.js
   ```

3. **Or generate real HD images**:
   ```bash
   cat scripts/generate-images.md  # Get AI prompts
   ```

4. **Or disable optimization** (already done in code):
   - All Image components now have `unoptimized={true}`
   - This prevents 400 errors during development

### **3. Font Preload Warning**
```
The resource ... was preloaded but not used
```

**Cause**: Font loading configuration issue.

**Fix**: Already fixed in `app/layout.tsx` with proper `preload: true` and `display: 'swap'`.

### **4. "Module not found" Errors**

**Cause**: Missing dependencies or incorrect imports.

**Fix**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### **5. "Port 3000 in use"**

**Fix**:
```bash
# Use a different port
PORT=3001 npm run dev

# Or kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

## 🚀 Quick Start Commands

```bash
# 1. Check for missing images
npm run check-images

# 2. Create temporary placeholders (if needed)
node scripts/create-placeholders.js

# 3. Start development server
npm run dev

# 4. If issues persist, clean build
npm run build:clean
npm run start
```

## 📊 Understanding the Errors

### **Why 404 on JS chunks?**
- Next.js compiles JS on-the-fly in dev mode
- If compilation fails or is incomplete, chunks are missing
- **Solution**: Restart dev server or run clean build

### **Why 400 on images?**
- Next.js Image component tries to optimize images
- If image doesn't exist, optimization fails with 400
- **Solution**: Add images OR use `unoptimized={true}` (already done)

### **Why preloaded font warning?**
- Next.js preloads fonts for performance
- If font isn't used immediately, browser warns
- **Solution**: Proper font config (already fixed)

## ✅ Verification Steps

After applying fixes, verify:

1. **No 404 errors** in console
2. **No 400 errors** on images
3. **No font warnings**
4. **App loads** at http://localhost:3000

## 🎯 Production Notes

For production deployment:
1. **Add real images** to `/public/images/`
2. **Remove `unoptimized={true}`** from Image components
3. **Run production build**:
   ```bash
   npm run build
   npm run start
   ```

The current setup is optimized for **development without images**. Production needs real HD images.