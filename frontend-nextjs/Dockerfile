# Production-Grade Dockerfile for Ice Cream Store Frontend
# Multi-stage build optimized for speed and size

# Stage 1: Install ALL dependencies (dev + prod for building)
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund --loglevel=error

# Stage 2: Build application
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js (skip linting for speed)
RUN npm run build -- --no-lint

# Stage 3: Production image
FROM node:18-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

# Install production-only dependencies
COPY package.json package-lock.json* ./
RUN npm ci --only=production --no-audit --no-fund --loglevel=error

# Copy built app and images
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public/images ./public/images

# Expose port
EXPOSE 3000
ENV PORT=3000

# Start application
CMD ["npm", "start"]
