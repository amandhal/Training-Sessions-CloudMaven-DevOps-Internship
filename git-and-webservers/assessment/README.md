# Git Nginx Assessment

Name: Aman Dhal

## Section A — Practical Tasks 
PRACTICAL 01 - Git Installation, Configuration & First Repository
- 1a. Install Git on my Ubuntu VM and verify the installation by running git --version
- 1b. Configured my user.name and user.email globally using git config
- 1c. Create a directory called git-nginx-assessment and initialised a Git repository inside it using git init
<img width="1157" height="785" alt="test-1" src="https://github.com/user-attachments/assets/f8c26258-2d91-4001-8aea-1f98ed7614ed" />

------------------------------------------------------------------------

- 1d. Created 2 files: README.md and app.py using vim
<img width="1142" height="595" alt="image" src="https://github.com/user-attachments/assets/a20fb477-3dd2-4883-bf21-d36bcd0b463d" />

------------------------------------------------------------------------

- 1e. Staged and committed both files using git add & git commit
- 1f. Used git log to print the detailed commit history
<img width="1402" height="404" alt="image" src="https://github.com/user-attachments/assets/900bf7a0-30e7-4bde-b151-ab0d2fe842e9" />

------------------------------------------------------------------------

PRACTICAL 02 - Branching, Committing & Pull Request Workflow
- 2a. Created and switched to a new branch named feature/add-calculator from the main 
- 2b. + 2c. Added, Staged & Commited calculator.py file containing add & subtract functions.
- 2d. Updated and Commited README.md to add details about calculator module.
<img width="1919" height="663" alt="image" src="https://github.com/user-attachments/assets/4845bc7e-ca9f-4c74-85be-6b43aed69896" />

------------------------------------------------------------------------

- 2e. + 2f. Pushed the feature branch to GitHub and opened a Pull Request (PR) against main.
<img width="1642" height="527" alt="image" src="https://github.com/user-attachments/assets/4b9a593d-82e6-4d9b-a4e5-26de29bd4fce" />
<img width="1323" height="505" alt="image" src="https://github.com/user-attachments/assets/08fa9d32-ef49-4776-b2f3-0f02660d5378" />
<img width="1490" height="776" alt="image" src="https://github.com/user-attachments/assets/4505a1f7-dc7d-4ad7-a7fa-9c966241bb56" />
<img width="1918" height="393" alt="image" src="https://github.com/user-attachments/assets/4c45a326-5060-4dd9-bef4-88612979e7b1" />

------------------------------------------------------------------------

- 2g. Merged the PR on GitHub, then pulled the updated main branch locally using git pull
<img width="1540" height="692" alt="image" src="https://github.com/user-attachments/assets/0e039eb6-5c09-4c05-a819-251afe05f250" />

------------------------------------------------------------------------

PRACTICAL 03 - Stash, Undo & History (Revert, Reset, Amend)
- 3a. On a new branch called bugfix/stash-demo, modified app.py. Without committing, exectued git stash. Verified app.py is clean using git status. Poped the stash and confirmed that the changes returned.
<img width="1601" height="972" alt="image" src="https://github.com/user-attachments/assets/ba7bf0cb-7a88-4f8c-8e62-09ae32664fef" />

------------------------------------------------------------------------

- 3b. Created and commited a file named bug.txt. Then used git revert to undo this commit. Used git log --oneline to print both the original commit and the revert commit.
<img width="1329" height="527" alt="image" src="https://github.com/user-attachments/assets/05a05994-36dc-436b-9367-ecf753540c33" />

------------------------------------------------------------------------

- 3c. Created, staged & commited a file named hotfix.txt. Used git commit --amend to update the commit message
<img width="1336" height="742" alt="image" src="https://github.com/user-attachments/assets/6812aa33-130b-4c8a-aa0d-4790bdf1ba2c" />

------------------------------------------------------------------------

- 3d. Made two more commits. Used git reset --soft HEAD~1 to un-commit the last change while keeping it staged.
<img width="1112" height="872" alt="image" src="https://github.com/user-attachments/assets/25c2c6c3-4d0c-439c-882d-2791ba211473" />

------------------------------------------------------------------------

PRACTICAL 04 - NGINX Install, Config & Hosting Multiple Static Sites
- 4a. Installed NGINX on Ubuntu and verified it is running with systemctl status nginx. Enabled it to start on boot.
<img width="1298" height="1029" alt="image" src="https://github.com/user-attachments/assets/31989142-26d2-4552-9d59-0fc42a538ff1" />

------------------------------------------------------------------------

- 4b. Executed sudo nginx -t to confirm the default config is valid.
<img width="679" height="99" alt="image" src="https://github.com/user-attachments/assets/4a128d39-69e5-40af-b050-f70245527a9d" />

------------------------------------------------------------------------

- 4c. Created two separate site directories: /var/www/app1.local/html and /var/www/app2.local/html. Added a unique index.html to each.
<img width="1097" height="239" alt="image" src="https://github.com/user-attachments/assets/dd1b42ab-1baf-453a-a015-fd9b0feb842e" />

------------------------------------------------------------------------

- 4d. Created NGINX server block config files for app1.local and app2.local in /etc/nginx/sites-available/
- 4e. Enable both sites using symlinks to sites-enabled. Test the config and reload NGINX.
<img width="1460" height="838" alt="image" src="https://github.com/user-attachments/assets/cfa8f456-9464-4395-a0cf-3cc72a9140b5" />

------------------------------------------------------------------------

- 4f. Added both domains to /etc/hosts pointing to 127.0.0.1. Used curl http://app1.local and curl http://app2.local to verify both responses.
<img width="872" height="269" alt="image" src="https://github.com/user-attachments/assets/2da1c4c3-3d64-44a4-bd20-e0f835901c4f" />

------------------------------------------------------------------------

PRACTICAL 05 - Reverse Proxy with Docker Backend
- 5a. Pulled and created an nginx:alpine Docker container as a backend app on port 8080: docker run -d -p 8080:80 --name backend-app nginx:alpine. Verified it responds with curl http://localhost:8080
<img width="1673" height="792" alt="image" src="https://github.com/user-attachments/assets/2df8d630-5ec8-4e56-8910-50dff56b23ac" />

------------------------------------------------------------------------

- 5b. Created a new NGINX site config at /etc/nginx/sites-available/myapp.local that proxies all requests to http://127.0.0.1:8080 using proxy_pass.
- 5c. Included all four required proxy headers: Host, X-Real-IP, X-Forwarded-For, X-Forwarded-Proto.
- 5d. Enabled the site, tested the config, reloaded NGINX. Added myapp.local to /etc/hosts.
<img width="1461" height="604" alt="image" src="https://github.com/user-attachments/assets/3b28c7a1-3b8e-4cfc-a39f-2f26385bd1cc" />

------------------------------------------------------------------------

- 5e. Used curl http://myapp.local and printed the response proving NGINX is proxying to the Docker backend.
<img width="1704" height="1048" alt="image" src="https://github.com/user-attachments/assets/37f6c5db-3e6b-4cc3-8b79-206fbc39c3df" />

------------------------------------------------------------------------

PRACTICAL 06 - SSL/TLS, Load Balancing & Merge Conflict Resolution
- 6a. [SSL Concept — Local Self-Signed Cert] Generated a self-signed SSL certificate using openssl. Updated the myapp.local NGINX config to listen on port 443 with ssl_certificate and ssl_certificate_key directives. Tested with curl -k https://myapp.local.
<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/6e15afe2-ffee-4d5f-81f0-597bb27f0f19" />

------------------------------------------------------------------------

- 6b. [Load Balancer Config] Created a new NGINX config file that defines an upstream block with two backend entries pointing to 127.0.0.1:8080 for this exercise. Configured NGINX to proxy_pass to this upstream group. Reloaded and verified.
<img width="1726" height="998" alt="image" src="https://github.com/user-attachments/assets/90d08670-43e1-489b-87c6-8770d3f6b2ea" />

