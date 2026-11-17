# REST API Documentation

## Project: Smart Team Task Manager

### Base URL

/api

### Users API

#### Get All Users
- Method: GET
- Endpoint: /users
- Success Response: 200 OK

#### Get User By ID
- Method: GET
- Endpoint: /users/:id
- Success Response: 200 OK
- Error Response: 404 Not Found

#### Create User
- Method: POST
- Endpoint: /users
- Success Response: 201 Created
- Error Response: 400 Bad Request

### Tasks API

#### Get All Tasks
- Method: GET
- Endpoint: /tasks
- Success Response: 200 OK

#### Get Task By ID
- Method: GET
- Endpoint: /tasks/:id
- Success Response: 200 OK
- Error Response: 404 Not Found

#### Create Task
- Method: POST
- Endpoint: /tasks
- Success Response: 201 Created
- Error Response: 400 Bad Request

#### Update Task
- Method: PUT
- Endpoint: /tasks/:id
- Success Response: 200 OK
- Error Response: 404 Not Found

#### Delete Task
- Method: DELETE
- Endpoint: /tasks/:id
- Success Response: 200 OK
- Error Response: 404 Not Found
