# Ice Cream Store Frontend

A pixel-close replica frontend for an Ice Cream Store application built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and modern tooling.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + ShadCN-like utilities
- **State**: Zustand (cart & global UI)
- **Data**: TanStack Query (React Query)
- **Validation**: Zod
- **Animations**: Framer Motion (ready)
- **UX**: React Toastify (toasts), Skeleton loaders
- **Tooling**: ESLint, Prettier

## 📁 Project Structure

```
frontend-nextjs/
├── app/
│   ├── (auth)/           # Auth pages (login, signup)
│   ├── (shop)/           # Shop pages (products, cart, checkout, profile)
│   ├── (admin)/          # Admin pages (UI only)
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── providers.tsx     # React Query + Toast provider
│   └── globals.css       # Tailwind + base styles
├── components/
│   ├── ui/               # Reusable primitives (Button, etc.)
│   ├── layout/           # Header, Footer, Hero, ProductGrid, ProductDetail
│   └── cards/            # ProductCard
├── lib/                  # API layer, utils
├── hooks/                # Custom hooks (useProducts)
├── store/                # Zustand stores (cart)
├── public/images/        # AI-generated ice cream images
├── Dockerfile            # Multi-stage production build
└── package.json
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Steps

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Setup Images** (IMPORTANT):
   ```bash
   # Check for missing images
   npm run check-images
   
   # Generate placeholder SVGs (temporary)
   node scripts/create-placeholders.js
   
   # Get AI prompts for HD images
   cat scripts/generate-images.md
   ```
   
   **Required images in `/public/images/`:**
   - `hero-icecream.jpg` (Hero section)
   - `vanilla.jpg`, `chocolate.jpg`, `strawberry.jpg`, `mint.jpg`
   - `caramel.jpg`, `cookies.jpg`, `pistachio.jpg`, `mango.jpg`

3. **Environment variables**:
   Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

   The app will run on **http://localhost:3000** by default.

   To use a different port:
   ```bash
   PORT=3001 npm run dev
   ```

### Scripts

- `npm run dev` – Start dev server
- `npm run build` – Build for production
- `npm start` – Start production server
- `npm run lint` – ESLint check
- `npm run format` – Prettier format

## 🐳 Docker

### Build and Run Locally

```bash
# Build the image
docker build -t icecream-store-frontend .

# Run the container
docker run -p 8080:80 icecream-store-frontend
```

Open [http://localhost:8080](http://localhost:8080).

### Kubernetes Ready

The Dockerfile is multi-stage and optimized for container orchestration. You can push the image to a registry and deploy to Kubernetes.

## 🌐 API Integration

- The app uses a placeholder API layer in `lib/api.ts`.
- Set `NEXT_PUBLIC_API_BASE_URL` in `.env.local` to point to your backend.
- Mock responses are provided for development without a backend.

## 🖼️ Image Handling

### Graceful Fallbacks
All components use **Next.js Image** with automatic fallbacks:
- If an image is missing, the app shows a gradient background
- No broken images or errors in the console
- Works perfectly for development without images

### Setup HD Images
1. **Generate AI images** using prompts in `scripts/generate-images.md`
2. **Place them** in `/public/images/` with exact filenames
3. **Run check**: `npm run check-images`

### Using Remote URLs
Update image paths in components to use CDN URLs:
```tsx
{ id: 1, name: 'Vanilla Dream', price: 4.99, image: 'https://your-cdn.com/vanilla.jpg', ... }
```

### Temporary Placeholders
```bash
# Create SVG placeholders
node scripts/create-placeholders.js
```

This creates SVG files that can be replaced with JPG/PNG later.

## 📱 Responsive Design

- **Mobile-first**: All layouts start from mobile and scale up.
- **Breakpoints**: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).
- **Touch-friendly**: Large tap targets and accessible spacing.
- **Desktop**: Sidebar-like nav, multi-column grids.

## 📄 Pages Overview

### Public
- `/` – Home with hero and featured products
- `/products` – Product listing
- `/products/[id]` – Product details
- `/login` – Login form
- `/signup` – Signup form

### User
- `/cart` – Cart management
- `/checkout` – Checkout form
- `/order-summary` – Order confirmation
- `/profile` – User profile

### Admin (UI only)
- `/admin/products` – Product management
- `/admin/inventory` – Inventory view
- `/admin/orders` – Orders dashboard

## 🎨 Images & AI Generation

### **Quick Setup (Get Images in Browser Immediately)**
```bash
# Generate SVG placeholders that work in browser
npm run placeholders

# Check what's missing
npm run check-images
```

### **How to Get AI-Generated Images**

1. **Generate placeholders first** (works immediately):
   ```bash
   npm run placeholders
   ```

2. **Get AI prompts** from `scripts/generate-images.md`

3. **Generate real images** using DALL-E, Midjourney, etc.

4. **Save to** `/public/images/` with exact names:
   - `hero-icecream.jpg` (Hero section)
   - `vanilla.jpg`, `chocolate.jpg`, `strawberry.jpg`, `mint.jpg`
   - `caramel.jpg`, `cookies.jpg`, `pistachio.jpg`, `mango.jpg`

5. **Rebuild Docker**:
   ```bash
   docker build -t icecream-store-frontend .
   docker run -p 3000:3000 icecream-store-frontend
   ```

### **Image Behavior**
- ✅ **Without images**: Shows gradient backgrounds + 🍦 emoji
- ✅ **With SVG placeholders**: Shows gradients with text labels
- ✅ **With AI images**: Shows premium ice cream photos

**See `IMAGES_COMPLETE.md` for detailed guide.**

## 🔐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_BASE_URL` | API base URL | `http://localhost:4000/api` |

## ✅ Next Steps

- [ ] Add real API endpoints
- [ ] Implement authentication (JWT)
- [ ] Add Framer Motion animations
- [ ] Add skeleton loaders
- [ ] Generate and add AI images
- [ ] Run end-to-end tests
- [ ] Deploy to Vercel / Kubernetes

## � Troubleshooting

If you see errors like:
- **404 on JS chunks** → Run `npm run build:clean`
- **400 on images** → Run `npm run check-images` and add images
- **Font preload warnings** → Already fixed, ignore

See `TROUBLESHOOTING.md` for detailed fixes.

## 📝 Notes

- This is a **frontend-only** project.
- No backend code included.
- Ready to plug into microservices later.
- All UI is built from scratch — no direct code reuse from reference repo.
- **Development mode**: Works without images (shows gradients)
- **Production**: Add HD images to `/public/images/`
