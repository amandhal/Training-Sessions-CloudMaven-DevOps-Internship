# CI/CD Fundamentals - GitHub Actions

### Task 1: Risks of Manual Deployment
- Human Error - Wrong commands, wrong config, missed steps
- Inconsistent Deployments - Works on my machine problem
- Slow Releases - Manual steps take time consequently delays in shipping features or fixes
- No Easy Rollback - Without automation, reverting a broken deployment is slow and risky

### Task 2: GitHub Actions Exploration in a Public Repo
## I explored ci.yml workflow in https://github.com/clouddrove/github-shared-workflows.git
1. What triggered the workflow?
- Push to main or master
- Pull request targeting main or master
- Manual trigger (workflow_dispatch)

2. What jobs are running?
- validate-yaml - Validates all workflow YAML files for correct syntax
- lint-yaml - Enforces consistent YAML formatting and style
- validate-workflows - Ensures all workflows have required fields
- security-scan - Checks for security vulnerabilities and hardcoded secrets
- validate-docs - Verifies documentation exists and links are valid
- validate-naming - Ensures workflows follow naming standards
- actionlint - Advanced GitHub Actions workflow validation
- generate-docs - Generates Documentation Index
- check-deprecated - Warns about outdated action versions
- validate-permissions - Reviews workflow permissions for security
- ci-summary - Aggregates results, Creates a summary report & Displays statistics

3. What is the workflow trying to achieve?
- This CI/CD pipeline workflow is trying to ensure all workflows in the repository are validated, tested, secure & well-documented.

### Task 3: Correct CI/CD Pipeline Flow
1. Write code
2. Build tests
3. Run tests
4. Deploy application
5. Monitor application
