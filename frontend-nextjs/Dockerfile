# Single Dockerfile for Ice Cream Store Frontend
# Generates placeholder images automatically - just build and run!

FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund --loglevel=error

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate placeholder images automatically
RUN mkdir -p public/images
RUN node -e "
const fs = require('fs');
const path = require('path');
const imagesDir = '/app/public/images';

const createSVG = (text, c1, c2) => \`<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<svg width=\"800\" height=\"800\" viewBox=\"0 0 800 800\" xmlns=\"http://www.w3.org/2000/svg\">
  <defs><linearGradient id=\"g\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">
    <stop offset=\"0%\" style=\"stop-color:\${c1};stop-opacity:1\" />
    <stop offset=\"100%\" style=\"stop-color:\${c2};stop-opacity:1\" />
  </linearGradient></defs>
  <rect width=\"800\" height=\"800\" fill=\"url(#g)\"/>
  <text x=\"50%\" y=\"50%\" font-family=\"Arial\" font-size=\"64\" fill=\"white\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-weight=\"bold\">\${text}</text>
</svg>\`;

const files = [
  ['hero-icecream.jpg', 'Premium Ice Cream', '#ff9a9e', '#fad0c4'],
  ['vanilla.jpg', 'Vanilla', '#a8edea', '#fed6e3'],
  ['chocolate.jpg', 'Chocolate', '#8E2DE2', '#4A00E0'],
  ['strawberry.jpg', 'Strawberry', '#ff9a9e', '#ff6a88'],
  ['mint.jpg', 'Mint', '#00b09b', '#96c93d'],
  ['caramel.jpg', 'Caramel', '#f6d365', '#fda085'],
  ['cookies.jpg', 'Cookies', '#434343', '#000000'],
  ['pistachio.jpg', 'Pistachio', '#a8ff78', '#78ffd6'],
  ['mango.jpg', 'Mango', '#f093fb', '#f5576c']
];

files.forEach(([name, text, c1, c2]) => {
  fs.writeFileSync(path.join(imagesDir, name), createSVG(text, c1, c2));
});
"

# Build Next.js
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy everything needed for production
COPY --from=builder /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/public/images ./public/images
COPY package.json ./
COPY next.config.mjs ./

# Expose port
EXPOSE 3000
ENV PORT=3000

# Start the application
CMD ["npm", "start"]
