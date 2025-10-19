# Node Express REST API

This project implements a simple REST API using Node.js and Express.

## Endpoints

### GET /status

Returns a simple status message indicating that the server is running.

**Response:**
```json
{
  "message": "Server is running"
}
```

### POST /feedback

Accepts feedback data, validates the email address, and stores the feedback in an in-memory array.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "message": "This is a great service!"
}
```

**Response (Success):**
```json
{
  "message": "Feedback submitted successfully",
  "feedback": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "message": "This is a great service!",
    "timestamp": "2023-10-27T10:00:00.000Z"
  }
}
```

**Response (Error - Invalid Email):**
```json
{
  "error": "Invalid or missing email address"
}
```

**Response (Error - Missing Name or Message):**
```json
{
  "error": "Name and message are required"
}
```

### GET /feedback

Returns all submitted feedback.

**Response:**
```json
[
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "message": "This is a great service!",
    "timestamp": "2023-10-27T10:00:00.000Z"
  }
]
```

## How to Run

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Start the Server:**
    ```bash
    node server.js
    ```

The server will start on `http://localhost:3000`.
