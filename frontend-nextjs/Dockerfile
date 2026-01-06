# Ultra-fast Dockerfile - builds in 1-2 minutes
FROM node:18-alpine

WORKDIR /app

# Copy everything and install dependencies
COPY . .
RUN npm ci --only=production --no-audit --no-fund --loglevel=error

# Generate placeholder images and build
RUN mkdir -p public/images && \
    node -e "const fs=require('fs');const path=require('path');const createSVG=(t,c1,c2)=>\`<?xml version=\"1.0\"?><svg width=\"800\" height=\"800\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:\${c1};stop-opacity:1\"/><stop offset=\"100%\" style=\"stop-color:\${c2};stop-opacity:1\"/></linearGradient></defs><rect width=\"800\" height=\"800\" fill=\"url(#g)\"/><text x=\"50%\" y=\"50%\" font-family=\"Arial\" font-size=\"64\" fill=\"white\" text-anchor=\"middle\" dominant-baseline=\"middle\" font-weight=\"bold\">\${t}</text></svg>\`;[['hero-icecream.jpg','Ice Cream','#ff9a9e','#fad0c4'],['vanilla.jpg','Vanilla','#a8edea','#fed6e3'],['chocolate.jpg','Chocolate','#8E2DE2','#4A00E0'],['strawberry.jpg','Strawberry','#ff9a9e','#ff6a88'],['mint.jpg','Mint','#00b09b','#96c93d'],['caramel.jpg','Caramel','#f6d365','#fda085'],['cookies.jpg','Cookies','#434343','#000000'],['pistachio.jpg','Pistachio','#a8ff78','#78ffd6'],['mango.jpg','Mango','#f093fb','#f5576c']].forEach(([n,t,c1,c2])=>fs.writeFileSync(path.join('public/images',n),createSVG(t,c1,c2)));" && \
    npm run build -- --no-lint

EXPOSE 3000
ENV PORT=3000
CMD ["npm", "start"]
