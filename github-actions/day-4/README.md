# Utilized CloudDrove github shared workflow to build and push docker image to docker hub

#### Created workflow that calls CloudDrove's docker-build-push shared workflow
```yaml
name: Build and Push Frontend Image using clouddrove shared workflow

on:
  push:
    branches:
      - main
    paths:
      - "docker/day-2/frontend/**"
      - ".github/workflows/build-push-frontend-using-shared-workflow.yml"

jobs:
  build-push-frontend:
    uses: clouddrove/github-shared-workflows/.github/workflows/docker-build-push.yml@master
    
    secrets:
      DOCKERHUB_USERNAME: ${{ secrets.DOCKERHUB_USERNAME }}
      DOCKERHUB_PASSWORD: ${{ secrets.DOCKERHUB_PASSWORD }}
      
    with:
      BUILD_PATH: ./docker/day-2/frontend
      provider: DOCKERHUB
      images: amandhal/frontend
      IMAGE_TAG: ${{ github.run_id }}
```
<img width="1919" height="827" alt="image" src="https://github.com/user-attachments/assets/6a73ea9c-faed-4cc0-86c2-e68f222037c7" />
<img width="1915" height="665" alt="image" src="https://github.com/user-attachments/assets/9172c2db-8c4c-47d3-87e7-8f713fcd56a3" />

