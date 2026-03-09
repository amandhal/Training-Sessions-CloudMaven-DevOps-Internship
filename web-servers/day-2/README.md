## Nginx Web Server - SSL/TLS - Load Balancing Hands-On Tasks 

Task 1: Inspect a live TLS certificate
- Used curl to fetch the TLS certificate details from a HTTPS site + Identified issuer (CA), subject (domain), expiry date, key algorithm and Key size.
<img width="1145" height="243" alt="image" src="https://github.com/user-attachments/assets/b1092a7a-8641-4bae-af82-258f4ea0e658" />
------------------------------------------------------------------------
Tast 2: Simulate Certbot on a local domain with a self-signed cert
- Created a self-signed certificate for myapp.local using openssl.
<img width="1919" height="292" alt="image" src="https://github.com/user-attachments/assets/99d6578c-eb21-4159-b6e7-ba8c8f5f4978" />
- Configured Nginx to use the self-signed cert on port 443 for myapp.local + Accessed https://myapp.local in my browser, noted and understood the browser warning about self-signed certs.
<img width="1916" height="729" alt="image" src="https://github.com/user-attachments/assets/a5db89a4-0093-4221-a9ce-faffe8ef7d8d" />
------------------------------------------------------------------------
Task 3: Set up Nginx load balancing across two Docker containers
-  Created two whoami Docker containers on ports 8081 and 8082.
<img width="1299" height="207" alt="image" src="https://github.com/user-attachments/assets/a3c236dc-ef2b-41dd-b03a-9840fbf854f7" />
- Configured Nginx upstream with both backends and a server block proxying to them + Hit the endpoint 10 times with a loop and observed the round-robin distribution from the whoami responses (different hostnames/CONTAINER IDs).
<img width="1287" height="830" alt="image" src="https://github.com/user-attachments/assets/e5cadd11-dad3-4a6b-9cb6-6c7673dcf822" />
