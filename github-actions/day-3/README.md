# GitHub Shared WorkFlows

### Task 1: Created a Shared CI Quality Check Workflow in a seperate repo
```yaml
name: shared-ci-quality-check

on:
  workflow_call:

jobs:
  quality-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6

      - name: Run Basic CI Check
        run: echo "Running Shared CI Quality Check"
```

---

### Task 2: Called Shared Workflow from Another Repository and Verified workflow run.
```yaml
name: use-shared-ci

on: push

jobs:
  run-shared-ci:
    uses: amandhal/shared-workflows/.github/workflows/shared-ci.yml@main
```
<img width="1919" height="749" alt="image" src="https://github.com/user-attachments/assets/c6cd09eb-897e-4c68-aafd-8471b24d0167" />

---

### Task 3: Modified Shared Workflow & Observed Impact
```yaml
name: shared-ci-quality-check

on:
  workflow_call:

jobs:
  quality-check:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Shared workflow updated!"
```
<img width="1919" height="589" alt="image" src="https://github.com/user-attachments/assets/af10f070-d086-42f5-a108-451ee9ae6c07" />
