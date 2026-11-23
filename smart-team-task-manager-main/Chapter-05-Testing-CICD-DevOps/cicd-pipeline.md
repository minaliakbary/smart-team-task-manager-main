

# CI/CD Pipeline - Smart Team Task Manager

## Pipeline Flow

```text
Developer Pushes Code to GitHub
              |
              v
       Install Dependencies
              |
              v
          Run Tests
              |
         +----+----+
         |         |
       PASS       FAIL
         |         |
         v         v
    Build Docker  Stop Pipeline
       Image      and Report Error
         |
         v
       Report
```

## Failure Stage

If any test fails during the Test stage:
- The Pipeline stops.
- Docker Image is not built.
- The error is reported to the developer.
- The developer fixes the code and pushes it again.

## Relationship Between Pipeline and Docker

The Pipeline automatically runs tests before building the Docker Image.

Docker packages the application and its dependencies into a consistent environment.

This helps ensure that only tested code proceeds to the build stage.
