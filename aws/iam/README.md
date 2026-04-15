# Identity and Access Management

### Task 1:
- Step 1: Created an IAM User
```bash
aws iam create-user --user-name create-s3-user
```
<img width="1741" height="265" alt="image" src="https://github.com/user-attachments/assets/79a19061-e687-4ca5-b8a6-d87b3fee5bc6" />

---

- Step 2: Created an IAM policy with permission for creating S3 bucket
<img width="1497" height="766" alt="image" src="https://github.com/user-attachments/assets/b3bfb1a2-22bf-4c13-8593-72fbfe7c3ebf" />

---

- Step 3: Attached IAM Policy to the IAM User
<img width="1708" height="788" alt="image" src="https://github.com/user-attachments/assets/72fed1d7-a557-4942-9ed5-5e7f4b2cbffc" />

---

- Step 4: Created access keys for create-s3-user and configured a profile using them
<img width="1919" height="370" alt="image" src="https://github.com/user-attachments/assets/802a7b63-5b48-4a99-8c54-4ad8b5750b65" />

---

- Step 5: Create an S3 bucked using crete-s3-user and verified that this user only have access to create S3 buckets
<img width="945" height="81" alt="image" src="https://github.com/user-attachments/assets/6ae4eeb6-7bb4-4b86-a100-ebe73fa0dc8c" />
<img width="1850" height="153" alt="image" src="https://github.com/user-attachments/assets/f5337eac-f683-4116-8396-e30f9815a976" />
<img width="1518" height="402" alt="image" src="https://github.com/user-attachments/assets/02063487-5c5f-4f67-a9db-728e11ff85f5" />

---

### Task 2:
- Step 1: Created a trust policy and a role using it
```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Principal": {
				"AWS": "arn:aws:iam::185137893823:user/create-s3-user"
			},
			"Action": "sts:AssumeRole"
		}
	]
}
```
<img width="1651" height="687" alt="image" src="https://github.com/user-attachments/assets/214e14d7-a399-4f63-82b6-08d48a848b44" />

---

- Step 2: Created an IAM policy to delete a specific S3 bucked and attached it to the IAM role
```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": "s3:DeleteBucket",
			"Resource": "arn:aws:s3:::s3-cloudmaven"
		}
	]
}
```
<img width="1711" height="787" alt="image" src="https://github.com/user-attachments/assets/70118988-4eb7-4e93-b01a-d7aa6351757b" />

---

- Step 3: Deleted S3 bucket by assuming the role
```bash
aws sts assume-role --role-arn arn:aws:iam::185137893823:role/delete-s3-role --role-session-name delete-bucket-session --profile create-s3-user
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
export AWS_SESSION_TOKEN=
aws s3 rb s3://s3-cloudmaven
```
<img width="1801" height="303" alt="image" src="https://github.com/user-attachments/assets/05d363c9-86cd-4ba1-9260-10ad1d0fca10" />

---

### Task 3:
- Step 1: Created IAM-ROLE-1 with trust policy to assumed by an IAM user with no permission policy at all
```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Principal": {
				"AWS": "arn:aws:iam::185137893823:user/create-s3-user"
			},
			"Action": "sts:AssumeRole"
		}
	]
}
```
<img width="1611" height="628" alt="image" src="https://github.com/user-attachments/assets/2ff5b7f4-0e05-4954-9380-6b93778f0886" />

---

- Step 2: Created IAM-ROLE-2 with trust policy to assumed by IAM-ROLE-1
```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Principal": {
				"AWS": "arn:aws:iam::185137893823:role/IAM-ROLE-1"
			},
			"Action": "sts:AssumeRole"
		}
	]
}
```
<img width="1639" height="628" alt="image" src="https://github.com/user-attachments/assets/84cbef4c-9f74-450f-8d85-b9fe6bee89ed" />

---

- Step 3: Created an IAM permission policy allowing creation and listing of s3 buckets and attached the policy to IAM-ROLE-2
```json

	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": [
				"s3:CreateBucket",
				"s3:ListAllMyBuckets"
			],
			"Resource": "arn:aws:s3:::*"
		}
	]
}
```
<img width="1619" height="416" alt="image" src="https://github.com/user-attachments/assets/f8e7d64a-3b7b-48cf-8e56-3f24e2541179" />
<img width="1723" height="299" alt="image" src="https://github.com/user-attachments/assets/d2d3753a-3e08-4e11-bf76-3cd8965e3c6f" />

---

- Step 4: Assumed IAM-ROLE-1 using create-s3-user and tried to create s3 bucket but it failed as IAM-ROLE-1 does not have required permission
<img width="1853" height="500" alt="image" src="https://github.com/user-attachments/assets/ce4b5a15-fb5c-4871-83db-04af5aab2b40" />

---

- Step 5: Assumend IAM-ROLE-2 using IAM-ROLE-1 and tried to create and list bucked anit worked as IAM-ROLE-2 had necessary permissions in the policy
<img width="1856" height="413" alt="image" src="https://github.com/user-attachments/assets/d517c4fc-b8bd-4a9e-b10a-9cb67c2aa199" />


