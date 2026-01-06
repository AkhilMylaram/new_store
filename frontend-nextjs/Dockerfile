# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --silent
COPY . .
RUN npm run build

# Stage 2: Production image
FROM nginx:stable-alpine
COPY --from=builder /app/.next /usr/share/nginx/html
# Expose port 3000 (Next.js default) or 80 (Nginx default)
EXPOSE 3000
# Optional: override PORT via build args
ARG PORT=3000
ENV PORT=$PORT
# For Nginx, you can also expose 80 and configure Nginx to proxy to 3000
# This setup serves the static build from .next/export
CMD ["nginx", "-g", "daemon off;"]
