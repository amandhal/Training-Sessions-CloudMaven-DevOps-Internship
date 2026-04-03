# Assessment: Monitoring Implementation

### Running containers
<img width="1849" height="190" alt="image" src="https://github.com/user-attachments/assets/759922bc-a26d-44d6-9f92-8c0a4e3f1e54" />

---

### Prometheus targets
<img width="1848" height="463" alt="image" src="https://github.com/user-attachments/assets/f176aa30-0835-4f48-b43d-9e641cf5544a" />

---

### Grafana dashboards
- Infra Dashboard
<img width="1848" height="469" alt="image" src="https://github.com/user-attachments/assets/1a01769b-907d-40c2-b431-8be5bd96a9c4" />

---

- App Dashboard before traffic simulation
<img width="1847" height="547" alt="image" src="https://github.com/user-attachments/assets/8a7624e4-e44b-4711-be0f-4f5f739c2779" />

---

- App Dashboard after traffic simulation
<img width="1859" height="489" alt="image" src="https://github.com/user-attachments/assets/f47ee822-b2b6-48a4-98bc-6753ebd6a86e" />

### Observability analysis answers
1. Difference between infra and app metrics
- Infrastructure metrics measure the health by checking system resources like CPU, memory, disk, and network usage of servers. They help identify resource bottlenecks and system-level failures.
- Application metrics, on the other hand, focus on how the app behaves—like by checking request count, latency, error rates, and throughput.
- In short: infrastructure tells us if the system is healthy, application metrics tell you if the app is working correctly for users.

2. Why counters require rate() / increase() functions
- Counters in Prometheus only increase over time (they never decrease unless reset). Because of this, their raw value isn’t very useful for real-time insights.
- Functions like rate() or increase() calculate how fast the counter is growing over a time window.
- This helps us understand meaningful traffic trends like requests per second instead of just total requests since startup.

3. How monitoring helps in troubleshooting
- Monitoring helps detect problems early by continuously tracking system and application behavior.
- When an issue happens, metrics and alerts help identify when the failure started and what changed.
- It reduces guesswork by showing patterns like CPU spikes, memory leaks, slow queries, or increased error rates.
- Example: if response time increases and database latency also rises at the same moment, monitoring helps trace the root cause faster.
