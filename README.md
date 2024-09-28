# TaskMgrApp

**TaskMgrApp** is a microservices-based application built using Python, Go, and ReactJS. This application demonstrates how to manage user authentication, tasks, and a frontend interface in a distributed architecture. It uses:

- **Python** for the `auth-service`, which handles user authentication.
- **Go (Golang)** for the `task-service`, which manages task-related operations.
- **ReactJS** for the `frontend-service`, which provides a web-based user interface and handles JWT authentication.

This microservice architecture also incorporates **PostgreSQL** for user data storage in the `auth-service` and **MongoDB** for task management in the `task-service`.

## Prerequisites

To run the application locally, ensure that the following are installed on your machine:

- [Docker Desktop](https://www.docker.com/products/docker-desktop) (Windows/Mac)
- [Docker](https://docs.docker.com/engine/install/) (Linux)

## Application Architecture

- **Auth-Service (Python)**: Manages user authentication (register, login) and connects with PostgreSQL for persistent user data.
- **Task-Service (Go)**: Manages task creation, retrieval, and persistence using MongoDB.
- **Frontend-Service (ReactJS)**: A single-page application (SPA) that provides a user interface for interacting with the `auth-service` and `task-service`. It also handles JWT (JSON Web Token) for secure communication between services.

## Services and Technologies Used

- **Backend**:
  - `auth-service`: Python (Flask), PostgreSQL
  - `task-service`: Go (Golang), MongoDB
- **Frontend**:
  - `frontend-service`: ReactJS, JWT for authentication

## Folder Structure

- `auth-service`: Python microservice handling user authentication
- `task-service`: Go microservice handling task management
- `frontend-service`: ReactJS SPA for user interaction
- `docker-compose.yml`: Docker Compose file to orchestrate all services

## Steps to Run the Application

1. **Clone the Repository**:
   ```
   git clone https://github.com/logeshwarann-dev/TaskMgrApp.git
   cd TaskMgrApp
   ```

2. **Ensure Docker is Installed**:
   Make sure that you have Docker Desktop (Windows/Mac) or Docker (Linux) installed and running on your machine.

3. **Run the Application**:
   The services are containerized using Docker, so all you need to do is run:
   ```
   docker-compose up
   ```

   This command will:
   - Build the Docker images for the microservices (if not already built).
   - Start the containers for PostgreSQL, MongoDB, auth-service, task-service, and frontend-service.
   
4. **Access the Application**:
   Once all the services are up and running, the frontend of the application will be available at:

   ```
   http://localhost:80
   ```

   Use this URL to access the web-based interface where you can register, login, and manage tasks.

## API Endpoints

### Auth-Service (Python, Flask)

| Endpoint              | Method | Description              |
|-----------------------|--------|--------------------------|
| `/auth/register`       | POST   | Register a new user      |
| `/auth/login`          | POST   | Login and generate a JWT  |

### Task-Service (Go, Gorilla Mux)

| Endpoint              | Method | Description              |
|-----------------------|--------|--------------------------|
| `/tasks`              | POST   | Create a new task         |
| `/tasks`              | GET    | Retrieve all tasks        |

### Frontend-Service (ReactJS)

The `frontend-service` serves the web interface at `http://localhost:8080`. From the interface, users can:

- Register a new account
- Login and obtain a JWT token
- Create and manage tasks

## JWT Authentication

- **Auth-Service** issues a JWT upon successful login.
- **Task-Service** validates the JWT token to ensure only authenticated users can create or manage tasks.
- The **frontend-service** stores the JWT token in localStorage and attaches it to HTTP requests for task management.

## Database

- **PostgreSQL**: Used by the `auth-service` to store user data.
- **MongoDB**: Used by the `task-service` to store tasks.

## Docker Containers Overview

The `docker-compose.yml` orchestrates all the services using Docker. Here is a breakdown of the key services:

- `auth-service`: Python + Flask application for authentication, connected to PostgreSQL.
- `task-service`: Golang application for task management, connected to MongoDB.
- `frontend-service`: ReactJS web application handling user interaction.
- `postgres`: Database service for `auth-service`.
- `mongo`: Database service for `task-service`.


## Troubleshooting

- **Docker build issues**: Ensure that Docker is correctly installed and running. If the build fails, try running `docker-compose build` to manually build the services.
- **Database connection errors**: Ensure that the `postgres` and `mongo` containers are properly running. Check Docker logs using `docker logs <container_name>`.
- **JWT issues**: Ensure that the JWT token is correctly stored in localStorage and is attached to the Authorization headers in your HTTP requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.



