
# Smart Task Manager API - Docker

## Build Docker Image

docker build -t smart-task-api .

## Run Container

docker run -d -p 3000:3000 --name smart-task-container smart-task-api

## Check Running Containers

docker ps

## View Logs

docker logs smart-task-container

## API Endpoints

- GET http://localhost:3000/
- GET http://localhost:3000/tasks

## Stop Container

docker stop smart-task-container

## Remove Container

docker rm smart-task-container
