# Use official Node.js image as the base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only package files first for caching dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of your app's code
COPY . .

# Build the Next.js app
RUN pnpm build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "start"]