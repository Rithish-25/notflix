FROM node:22-alpine AS frontend-build

# Set working directory for frontend
WORKDIR /app/front

# Copy frontend package files and install dependencies
COPY front/package*.json ./
RUN npm install

# Copy the rest of the frontend source code
COPY front/ .

# Build the frontend application (Vite builds to /dist by default)
# You can pass build arguments here if needed, e.g.
# ARG VITE_API_URL
# ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

# Stage 2: Setup the Backend and Serve
# We use a node image to run the backend, which will also serve the frontend
FROM node:22-alpine

# Set working directory for the application
WORKDIR /app

# Copy backend package files and install dependencies
COPY back/package*.json ./
RUN npm install --production

# Copy the backend source code
COPY back/ .

# Copy the built frontend assets from the previous stage to the 'public' folder
# The backend is configured to serve static files from this directory
COPY --from=frontend-build /app/front/dist ./public

# Expose the port the application runs on
EXPOSE 5000

# Define the command to run the application
CMD ["node", "index.js"]
