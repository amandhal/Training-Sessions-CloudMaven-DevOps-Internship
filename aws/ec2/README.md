# AWS EC2 (Elastic Compute Cloud) - Hands-On Tasks

### Task 1: Launched Simple EC2 Instance with 20GB root volume and default security group in default vpc and subnet
<img width="1619" height="672" alt="image" src="https://github.com/user-attachments/assets/aa5fe972-2ef3-4ee6-920f-b57efeff4623" />
<img width="1620" height="245" alt="image" src="https://github.com/user-attachments/assets/9aab2c67-1b1e-4292-b7af-5d1f526dd327" />
<img width="1615" height="255" alt="image" src="https://github.com/user-attachments/assets/8ac223af-bb24-4a7a-a9ce-15010a918ac3" />

---

### Task 2: Created an S3 bucket and uploaded a file to it from EC2 instance using AWS CLI
- Step 1: Created an S3 bucket from console
<img width="1045" height="409" alt="image" src="https://github.com/user-attachments/assets/8f67ddcb-2e45-4d2e-bb9b-72a57b3329cf" />

---

- Step 2: Created an IAM policy allowing uploading files to a specific s3 bucket
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:PutObject",
            "Resource": "arn:aws:s3:::cloud-maven-s3-bucket/*"
        }
    ]
}
```
<img width="1569" height="100" alt="image" src="https://github.com/user-attachments/assets/7cc1b1d9-001e-432c-874d-5af72bdf7e6e" />

---

- Step 3: Created an IAM Role with trust policy allowing ec2 service to assume it and attached this role to the permission policy created in previous step
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "ec2.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
```
<img width="1301" height="63" alt="image" src="https://github.com/user-attachments/assets/919b733c-c6f6-4da6-92ad-3c474dfd9b0d" />

---

- Step 4: Attached the IAM Role to EC2 so files can be uploaded to s3 bucket from it using aws cli
<img width="541" height="421" alt="image" src="https://github.com/user-attachments/assets/7d877dd7-0d1c-42f8-a82e-a7ad039fd00c" />

---

- Step 5: Accessed ec2 instance using ssh and uploaded a txt file to it using aws cli
<img width="1067" height="249" alt="image" src="https://github.com/user-attachments/assets/886c0ec0-db43-4db1-aad0-7b6a5cdb50f4" />
<img width="1559" height="413" alt="image" src="https://github.com/user-attachments/assets/40edc391-4ff3-49e6-a696-b201d537f549" />

---

### Task 3: Launched 2 ec2 instances using a 2 different user data script
- Step 1: Added this script in user data section of 1st instance
```bash
#!/bin/bash
apt-get update -y
apt-get install -y nginx
systemctl start nginx
systemctl enable nginx
```

---

- Step 2: Added an inbound rule in the security group to allow external access to nginx server on port 80
<img width="1571" height="275" alt="image" src="https://github.com/user-attachments/assets/0c2e26b0-5678-48e4-bbfb-c24c76dd8646" />
<img width="1919" height="445" alt="image" src="https://github.com/user-attachments/assets/c0bd0eb4-7007-4e1b-a29c-446f617bdce6" />

---

- Step 3: Added this script in user data section of 1st instance
```bash
#!/bin/bash
sudo apt update
sudo apt install docker.io -y

sudo docker run -d --name apache -p 8080:80 httpd
sudo docker run -d --name nginx -p 80:80 nginx
```

---

- Step 4: Added an inbound rule in the security group to allow external access to nginx and apache docker container on port 80 and 8080 respectively
<img width="1630" height="140" alt="image" src="https://github.com/user-attachments/assets/830164d2-3abb-465e-87bd-3e0970f0a64b" />

---

- Step 5: Tested access to both apache and nginx container
<img width="774" height="196" alt="image" src="https://github.com/user-attachments/assets/fe031752-17a3-4149-8a6b-e700d6113e4b" />
<img width="1420" height="552" alt="image" src="https://github.com/user-attachments/assets/52a7ecac-faf9-43e8-a1bd-8d05454ab02b" />

---

### Task 4: Accessed a private ec2 instance using bastion host
- Step 1: Created a private subnet attached to a private route table
<img width="1636" height="485" alt="image" src="https://github.com/user-attachments/assets/1f49eece-c85b-4b86-9a4f-e827bcaddf18" />

---

- Step 2: Launched an ec2 instance in the private subnet
<img width="1643" height="395" alt="image" src="https://github.com/user-attachments/assets/2ceab5ff-0a21-4228-9e56-993e4b61e7ad" />

---

- Step 3: Tried to access it from my local machine but failed as it only have private ip and my local machine is not in the same vpc
<img width="994" height="98" alt="image" src="https://github.com/user-attachments/assets/5bb3d435-a2bb-4a6e-920e-40b3b39c6e0d" />

---

- Step 4: Tried to access from another ec2 in the same vpc and it worked
<img width="865" height="824" alt="image" src="https://github.com/user-attachments/assets/8e1c2e12-433b-434c-85a9-7145d1afa1c8" />

