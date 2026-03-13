# -------- Stage 1: Build the React app --------
FROM node:20-alpine AS builder

# working directory
WORKDIR /app

# copy dependency files first (better caching)
COPY package*.json ./

# install dependencies
RUN npm ci

# copy source code
COPY . .

# build the app 
RUN npm run build


# -------- Stage 2: Serve with Nginx --------
FROM nginx:alpine

# remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html


EXPOSE 80

# start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]