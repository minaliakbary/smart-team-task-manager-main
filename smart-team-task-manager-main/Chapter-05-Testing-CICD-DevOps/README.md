

# Chapter 5 - Testing, CI/CD and DevOps

## Project
Smart Team Task Manager

## 1. Testing

We used Jest and Supertest to test the backend API.

Five test cases were implemented:

1. Check that GET / returns status 200.
2. Check that GET /tasks returns a list of tasks.
3. Check that GET /unknown returns status 404.
4. Check that GET /tasks returns JSON.
5. Check that each task contains id, title and completed fields.

### Test Result

All five tests passed successfully.

- Test Suites: 1 passed
- Tests: 5 passed

## 2. CI/CD Pipeline

The conceptual pipeline consists of these stages:

1. Push code to GitHub.
2. Install dependencies.
3. Run automated tests.
4. Build Docker Image.
5. Generate report.

If a test fails, the pipeline stops at the Test stage.

## 3. Docker and CI/CD

Docker packages the application and its dependencies into a consistent environment.

The CI/CD Pipeline runs tests before building the Docker Image.

This ensures that only code that passes the tests proceeds to the build stage.

## 4. Tools Used

- Node.js
- Express.js
- Jest
- Supertest
- Docker
- GitHub
