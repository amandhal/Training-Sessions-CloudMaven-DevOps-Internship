# GitHub Actions Workflow - CI Practices & Pipeline Optimization

### Task 1: Trigger Configuration + Task 2: Job Dependency Design
```yaml
name: Task 1 & Task 2

on:
  pull_request:
    branches:
      - main
  workflow_dispatch:

jobs:
  build:
    name: Build Application
    runs-on: ubuntu-latest
    steps:
      - name: Build step
        run: echo "App Built Successfully"

  test:
    name: Run Tests
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Test step
        run: echo "App Tested Successfully"
```
<img width="1918" height="513" alt="image" src="https://github.com/user-attachments/assets/8d832981-e8f7-4092-b8b0-6808b571832b" />
<img width="1510" height="423" alt="image" src="https://github.com/user-attachments/assets/0d19992e-dab4-4e4c-accc-4a9f126d67c5" />


### Task 3: Using GitHub Context Variables
```yaml
name: Using GitHub Context Variables

on: [push, pull_request]

jobs:
  print-info:
    name: Print Branch Name and Commit ID
    runs-on: ubuntu-latest
    steps:
      - name: Print Branch Name and Commit ID
        run: |
          echo "Branch Name: ${{ github.ref }}"
          echo "Commit ID:   ${{ github.sha }}"
```
<img width="1917" height="444" alt="image" src="https://github.com/user-attachments/assets/cd00e427-b9ff-4c0a-9fb3-065134aa6d4a" />

### Task 5 : Docker Build & Push
```yaml
name: Build and Push Frontend Image

on:
  push:
    branches:
      - day2-day3-gh-actions-tasks
    paths:
      - "docker/day-2/frontend/**"
      - ".github/workflows/build-push-frontend.yaml"

env:
  REGISTRY: ghcr.io               
  REPOSITORY: frontend      
  IMAGE_TAG: ${{ github.sha }}   

jobs:
  build-push-frontend:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      packages: write

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v6

      - name: Log in to GitHub Container Registry
        uses: docker/login-action@v4
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build & Push Frontend Image to GHCR
        run: |
          docker build --build-arg ENV=dev -t $REGISTRY/${{ github.repository_owner }}/$REPOSITORY:$IMAGE_TAG ./docker/day-2/frontend
          docker push $REGISTRY/${{ github.repository_owner }}/$REPOSITORY:$IMAGE_TAG

      - name: Remove Local Image
        run: |
          docker rmi $REGISTRY/${{ github.repository_owner }}/$REPOSITORY:$IMAGE_TAG
```
<img width="1919" height="602" alt="image" src="https://github.com/user-attachments/assets/aa523860-5cb4-4ce4-91da-f2fd561e657f" />
<img width="1286" height="420" alt="image" src="https://github.com/user-attachments/assets/e85f7a18-e03a-4c52-ab24-94322a93010c" />

