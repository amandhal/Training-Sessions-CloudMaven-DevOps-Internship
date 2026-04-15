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
<img width="1585" height="473" alt="image" src="https://github.com/user-attachments/assets/0f4338f5-3891-47a4-9cf4-1b22f31a3054" />

---

- Step 5: Create an S3 bucked using crete-s3-user and verified that this user only have access to create S3 buckets
<img width="945" height="81" alt="image" src="https://github.com/user-attachments/assets/6ae4eeb6-7bb4-4b86-a100-ebe73fa0dc8c" />
<img width="1850" height="153" alt="image" src="https://github.com/user-attachments/assets/f5337eac-f683-4116-8396-e30f9815a976" />
<img width="1518" height="402" alt="image" src="https://github.com/user-attachments/assets/02063487-5c5f-4f67-a9db-728e11ff85f5" />
