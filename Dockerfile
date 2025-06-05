# Use official Node.js image as the build environment
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the Next.js app
RUN npm run build

# Production image, copy built assets from builder
FROM node:-alpine AS runner

WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy built app and other necessary files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env.local ./.env.local
#COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]