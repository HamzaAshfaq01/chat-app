# Real-Time Chat Application

This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js) with TailwindCSS for styling. The application allows users to register, log in, send, and receive messages in real-time.

## Features

- User registration and authentication
- Real-time messaging using Socket.IO
- Display a list of registered users
- Individual chat with any registered user
- Persistent message storage with MongoDB

## Technologies Used

- **Frontend**: React, TailwindCSS, Axios, Socket.IO Client
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Socket.IO

## Requirements

- Node.js
- MongoDB

## Getting Started

### Prerequisites

Make sure you have Node.js and MongoDB installed on your machine.

### Installation

1. Clone the repository
    ```sh
    git clone [https://github.com/your-username/real-time-chat-app.git](https://github.com/HamzaAshfaq01/chat-app)
    cd chat-app
    ```

2. Install backend dependencies
    ```sh
    root folder (chat-app)
    npm install
    ```

3. Install frontend dependencies
    ```sh
    cd ./client
    npm install
    ```

4. Set up environment variables

   Create a `.env` file in the `root(chat-app)` directory and add the following:
    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

1. Start the backend server
    ```sh
    go to root directory (chat-app)
    npm run server
    ```

2. Start the frontend development server
    ```sh
    cd ./client
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### Authentication

- **Register a new user**
    ```http
    POST /api/auth/register
    ```

- **Login a user**
    ```http
    POST /api/auth/login
    ```

### Messages

- **Retrieve the last 50 messages**
    ```http
    GET /api/messages/:userId
    ```

- **Send a new message**
    ```http
    POST /api/messages
    ```

### Users

- **Retrieve all users**
    ```http
    GET /api/users
    ```

## Socket.IO Events

- **join**
    - Emitted by the client to join a specific room.
    - Payload: `userId`

- **sendMessage**
    - Emitted by the client to send a message.
    - Payload: `message`

- **receiveMessage**
    - Emitted by the server to send a received message to the client.
    - Payload: `message`


## Usage

1. **Register and Login**: Create a new account and log in using the registration and login forms.
2. **Chat**: Click on any registered user from the list to start a chat. Type your message and hit send to communicate in real-time.

## License

This project is licensed under the MIT License.


