# Centralized Logging Setup using ELK

### Run the application and Elastic Stack
```bash
docker compose up -d
docker compose ps -a
```
<img width="1853" height="349" alt="image" src="https://github.com/user-attachments/assets/1a3e845c-537c-4c55-a837-2524818d6ec4" />

---

### Log Generation
- This Application generates INFO logs on accessing http://localhost:8081/api/v1/customers/all and http://localhost:8081/api/v1/customers?customerId= if correct customer Id is provided
<img width="606" height="462" alt="image" src="https://github.com/user-attachments/assets/fcc43e81-0a77-418f-b3a8-b68da1814ec6" />

---

- This Application generates ERROR logs on accessing http://localhost:8081/api/v1/customers?customerId= if wrong customer Id is provided

### Kibana Access & Exploration
<img width="1919" height="823" alt="image" src="https://github.com/user-attachments/assets/d70e85df-64a0-4e8a-b3d4-7b6b72d24a5d" />

---

### Kibana Dashboard
<img width="1919" height="650" alt="image" src="https://github.com/user-attachments/assets/9de75df1-03be-45fc-8a19-0ca5b1272de9" />

