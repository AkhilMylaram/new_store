# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production --no-audit --no-fund --loglevel=error

# Stage 2: Build dependencies
FROM node:18-alpine AS build-deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund --loglevel=error

# Stage 3: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY --from=build-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 4: Production image
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000
ENV PORT=3000

CMD ["node", ".next/standalone/server.js"]
