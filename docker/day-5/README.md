# MEAN Stack App Deployment with Docker Compose

### Step 1: Create Docker Compose File
```yaml
services:
  backend:
    build: ./backend
    container_name: backend
    depends_on:
      - mongo
    networks:
      - mean-network

  frontend:
    build: ./frontend
    container_name: frontend
    depends_on:
      - backend
    networks:
      - mean-network

  mongo:
    image: mongo:8
    container_name: mongo
    volumes:
      - mongo-data:/data/db
    networks:
      - mean-network

  nginx:
    image: nginx:alpine
    container_name: nginx
    ports:
      - "80:80"
    volumes:
      - ./nginx-reverse-proxy/default.conf:/etc/nginx/conf.d/default.conf
    networks:
      - mean-network
    depends_on:
      - frontend
      - backend

networks:
  mean-network:
    driver: bridge

volumes:
  mongo-data:
```

### Step 2: Deploy Application using Docker Compose File & Test its functionality in the browser.
```bash
docker compose up -d
```
<img width="1837" height="993" alt="image" src="https://github.com/user-attachments/assets/919d5aed-0803-434b-bab5-7fddc1a034b4" />

