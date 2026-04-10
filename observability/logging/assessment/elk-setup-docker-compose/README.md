# ELK stack deployment for springboot application using docker compose

### Docker Compose File
```yaml
services:
  elasticsearch:
    image: elasticsearch:8.19.12
    container_name: elasticsearch
    restart: always
    volumes:
      - elastic_data:/usr/share/elasticsearch/data/
    environment:
      - xpack.security.enabled=false 
      - ES_JAVA_OPTS=-Xmx256m -Xms256m
      - discovery.type=single-node
    ports:
      - '9200:9200'
    networks:
      - elk-network

  logstash:
    image: logstash:8.19.12
    container_name: logstash
    restart: always
    volumes:
      - ./logstash/:/logstash_dir
    command: logstash -f /logstash_dir/pipeline/logstash.conf
    depends_on:
      - elasticsearch
    ports:
      - '5044:5044'
    environment:
      - LS_JAVA_OPTS=-Xmx256m -Xms256m
    networks:
      - elk-network

  kibana:
    image: kibana:8.19.12
    container_name: kibana
    restart: always
    ports:
      - '5601:5601'
    environment:
      - ELASTICSEARCH_URL=http://elasticsearch:9200
    depends_on:
      - elasticsearch
    networks:
      - elk-network

  mysql:
    image: mysql:8.0
    container_name: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: aman-dhal
      MYSQL_DATABASE: customer-service-db
    ports:
      - '3306:3306'
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - elk-network
    
  customer-service:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: customer-service
    restart: always
    ports:
      - '8081:8081'
    depends_on:
      - elasticsearch
      - mysql
    networks:
      - elk-network


networks:
  elk-network:
    driver: bridge

volumes:
  elastic_data: {}
  mysql_data: {}
```

## Start Application and ELK stack
```bash
docker compose up -d
```
<img width="1847" height="348" alt="image" src="https://github.com/user-attachments/assets/d09454fa-aeff-4292-9f56-48f3ebd17031" />

## Analysed application logs using kibana
<img width="1916" height="821" alt="image" src="https://github.com/user-attachments/assets/610794ee-47eb-4675-b0b6-9d39538ed450" />

## Created kibana dashboard
<img width="1915" height="817" alt="image" src="https://github.com/user-attachments/assets/ee5d5211-3c07-4818-8269-bda299c9d8f9" />

