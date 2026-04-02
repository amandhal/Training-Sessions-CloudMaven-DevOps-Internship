# Monitoring and Alerting Demo

### alertmanager file
```yaml
route:
  receiver: "slack"

receivers:
  - name: "slack"
    slack_configs:
      - api_url: "${SLACK_WEBHOOK}" 
        channel: "#aman-dhal-prometheus-alerts"
        send_resolved: true
```

### prometheus.yml
```yaml
global:
  scrape_interval: 5s

rule_files:
  - "alerts.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
            - "alertmanager:9093"

scrape_configs:

  - job_name: "prometheus"
    static_configs:
      - targets: ["prometheus:9090"]

  - job_name: "node"
    static_configs:
      - targets: ["node-exporter:9100"]

  - job_name: "mongodb"
    static_configs:
      - targets: ["mongodb-exporter:9216"]

  - job_name: "nginx"
    static_configs:
      - targets: ["nginx-exporter:9113"]
```

### alerts.yml
```yaml
groups:
  - name: demo-alerts
    rules:
      - alert: NginxDown
        expr: up{job="nginx"} == 0
        for: 5s
        labels:
          severity: critical
        annotations:
          summary: "NGINX is down"

      - alert: MongoDown
        expr: up{job="mongodb"} == 0
        for: 5s
        labels:
          severity: critical
        annotations:
          summary: "MongoDB exporter down"
```

### docker-compose.yml
```yaml

volumes:
  mongo-data:

services:
  backend:
    build: ./backend
    container_name: backend
    depends_on:
      - mongo

  frontend:
    build: ./frontend
    container_name: frontend
    depends_on:
      - backend

  prometheus:
    image: prom/prometheus
    container_name: prometheus
    volumes:
      - ./prometheus:/etc/prometheus
    ports:
      - "9090:9090"
    depends_on:
      - alertmanager

  alertmanager:
    image: prom/alertmanager
    container_name: alertmanager
    volumes:
      - ./alertmanager:/etc/alertmanager
    ports:
      - "9093:9093"

  node-exporter:
    image: prom/node-exporter
    container_name: node-exporter
    ports:
      - "9100:9100"

  mongo:
    image: mongo
    container_name: mongo
    volumes:
      - mongo-data:/data/db
    ports:
      - "27017:27017"

  mongodb-exporter:
    image: percona/mongodb_exporter:0.49.0
    container_name: mongodb-exporter
    environment:
      - MONGODB_URI=mongodb://mongo:27017
    ports:
      - "9216:9216"
    depends_on:
      - mongo

  nginx:
    image: nginx:alpine
    container_name: nginx
    volumes:
      - ./nginx-reverse-proxy/default.conf:/etc/nginx/conf.d/default.conf
    ports:
      - "8080:80"
    depends_on:
      - frontend
      - backend


  nginx-exporter:
    image: nginx/nginx-prometheus-exporter
    container_name: nginx-exporter
    command:
      - -nginx.scrape-uri=http://nginx/status
    ports:
      - "9113:9113"
    depends_on:
      - nginx
```

### Tested Alerts
<img width="817" height="481" alt="image" src="https://github.com/user-attachments/assets/e0a864e4-26c4-4c44-a907-d5bc81b0cf9e" />

### Queried Metrics
<img width="1838" height="618" alt="image" src="https://github.com/user-attachments/assets/04720d41-3b1f-4e8f-90b6-21ee00895521" />
<img width="1841" height="405" alt="image" src="https://github.com/user-attachments/assets/e35ffd94-9d62-4209-9d1b-72ef7c3f8ece" />

