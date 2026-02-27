# Linux & Networking Test

## 1. Permissions & umask (Practical):

### Created a file named test.txt with default permissions. Default file permission for a new file before umask are 666. Since umask is 002, effective default file permissions for a new file become 664.
<img width="805" height="194" alt="image" src="https://github.com/user-attachments/assets/1c2c4bd0-d2d8-4e47-b4cb-e218d1930d03" />

## 2. Users (Practical):

### Created a user named intern1 with /bin/bash as the default shell and made sure that the account expires in 7 days.
<img width="1299" height="143" alt="image" src="https://github.com/user-attachments/assets/a0784462-e11a-4c78-80fd-d86848efaa9b" />

## 3. SSH (Practical):

### Generated an SSH keypair and added the public key into ~/.ssh/authorized_keys for passwordless login.
<img width="1075" height="726" alt="image" src="https://github.com/user-attachments/assets/125e38e2-e23a-4618-b1e7-a0b6e8722f46" />

### Demonstrated successful connectivity by ssh -i into localhost.
<img width="1100" height="595" alt="image" src="https://github.com/user-attachments/assets/97210ff9-1d76-4889-8a6c-5818ed7c0b73" />

## 4. Package management (Practical):

### Installed htop using apt
<img width="1144" height="760" alt="image" src="https://github.com/user-attachments/assets/a8b9bcef-617d-4f03-aa7d-87f0ba3067c2" />

### Figured out which package provides /bin/bash.
<img width="697" height="67" alt="image" src="https://github.com/user-attachments/assets/171961d8-e82d-45ed-8c71-3f7846ce89ca" />

## 5. Cron (Practical):

### Created a cron job that runs /usr/bin/date every minute and appends output to /tmp/cron_test.log and verified creation using crontab -l. Also demonstrated its successful working.
<img width="748" height="321" alt="image" src="https://github.com/user-attachments/assets/a1b815de-4dcf-45c9-b550-9783d84952d9" />

## 6. Systemd timer (Practical):

### Created a simple systemd service that echoes "Hello from systemd" into /tmp/hello.txt. Triggered it with a .timer every 2 minutes. Enabled the timer and verified it in systemctl list-timers. Also demonstrated its successful working.
<img width="1919" height="821" alt="image" src="https://github.com/user-attachments/assets/b560e321-b98d-47fc-a701-254596025cc0" />

## 7. Network (Practical):

### Pinged Google DNS once and ran traceroute to example.com and demonstrate checked if port 80 is open locally.
<img width="1658" height="839" alt="image" src="https://github.com/user-attachments/assets/e61b78b4-982e-4c63-818f-2bbe513d64c1" />

### Printed processes that are listening on TCP ports
<img width="1897" height="286" alt="image" src="https://github.com/user-attachments/assets/f4c2ede5-c97b-4115-be8e-6454182601c7" />

### Started a tcpdump capture for HTTP and saved 5 packets to /tmp/http.pcap by executing curl http://localhost.
<img width="1919" height="820" alt="image" src="https://github.com/user-attachments/assets/149ac776-5607-4094-8e2d-40e0934afbb6" />

### Added a firewall rule using ufw to block source IP 10.0.2.55 to port 80 and listed rules to verify. Used curl -I http://example.com to print the response headers and dig +short example.com to print its A records.
<img width="819" height="736" alt="image" src="https://github.com/user-attachments/assets/e4d4d00c-ee0b-43a2-bb38-13d0a16c37c2" />

## 8. Monitoring (Practical):

### Used df -h and du -sh /var/log to check disk usage + Printed top 3 processes by memory using ps aux command with --sort option to list all proccess by their memory utilization and then piping its output to head command to list top 3 processes.
<img width="1192" height="476" alt="image" src="https://github.com/user-attachments/assets/77137a16-9da8-4657-b885-fba722ca325f" />

### Printed the last 20 lines of the systemd journal and the last 20 lines of /var/log/syslog.
<img width="1918" height="602" alt="image" src="https://github.com/user-attachments/assets/5cbcdfdf-35b5-4c4f-8fa5-d3a7446752e7" />
<img width="1919" height="758" alt="image" src="https://github.com/user-attachments/assets/fa91af87-0360-4f24-8031-e12106816428" />

## 9. Logs (Practical):

### Printed the last 20 lines of system logs using journalctl + Demonstrated Nginx and Apache logs can be found at /var/log/nginx and /var/log/apache2 respectively if the web server were installed.
<img width="1881" height="672" alt="image" src="https://github.com/user-attachments/assets/20a5e78e-ec6c-4503-b4df-fda4bafdff56" />

## 10. Network troubleshooting (Practical):

### Ran tcpdump to capture only HTTP traffic on port 80 and save it into http.pcap with demonstration.
<img width="1917" height="843" alt="image" src="https://github.com/user-attachments/assets/c31b19ef-400d-401b-b471-d4e1ddc3365f" />

## 11. Small script(Practical):

### Created a bash script /tmp/check_disk.sh that checks / usage. If usage is over 80%, prints "Disk almost full" to stderr, otherwise, prints "Disk OK" to stdout. Exit with code 1 if full, 0 otherwise. Also demonstrated its working by increasing the disk usage temporarily.
<img width="766" height="842" alt="image" src="https://github.com/user-attachments/assets/c394659f-815b-4d1c-9919-8b6d32e2b913" />

## Bonus:

### Cron vs systemd timers comparison
#### Cron is used for simple task scheduling while systemd is used when better integration, logging and dependency handling is required.

### stdout vs stderr comparison
#### stdout (file descriptor 1) is normal program output whereas stderr (file descriptor 2) is used for error messages.

#### Redirection Example 1 - In this example only stdout is redirected, only stdout goes inside out.txt as > is used.
<img width="1093" height="131" alt="image" src="https://github.com/user-attachments/assets/c12c1ee9-7efe-4fb7-9cec-175ab0467e5a" />

#### Redirection Example 2 - In this example only stderr is redirected, only stderr goes inside err.txt as 2> is used.
<img width="1044" height="137" alt="image" src="https://github.com/user-attachments/assets/d79c1f60-a536-43b9-8225-3a6bf9f4137b" />
