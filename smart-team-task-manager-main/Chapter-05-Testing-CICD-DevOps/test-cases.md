
# Chapter 05 - Test Cases

Project: Smart Team Task Manager

## Test Case 1: API Health Check

- Endpoint: GET /
- Expected Result: HTTP 200
- Expected Response: API running successfully.

## Test Case 2: Get Tasks

- Endpoint: GET /tasks
- Expected Result: HTTP 200
- Expected Response: A list of tasks in JSON format.

## Test Case 3: Invalid Endpoint

- Endpoint: GET /unknown
- Expected Result: HTTP 404
- Expected Response: Not Found.

## Test Case 4: JSON Response

- Endpoint: GET /tasks
- Expected Result: Response content type is application/json.
- Expected Response: Valid JSON data.

## Test Case 5: Server Availability

- Action: Start the application.
- Expected Result: Server listens on port 3000.
- Expected Response: Server running on port 3000.
