<h1 align="center">Simply Solved</h1>

<p align="center">
  <img src="https://github.com/ntua/saas2024-55/blob/main/frontend/src/logo.png?raw=true" alt="Logo">
</p>

---

## Team Members 

**Takis Stamatopoulos [el20096@mail.ntua.gr](https://github.com/ntua-el20096)**  
**Afroditi Marianthi Chlapani [el20889@mail.ntua.gr](https://github.com/ntua-el20889)**  
**Kyriaki Karatzouni [el20634@mail.ntua.gr](https://github.com/ntua-el20634)**  

---

## Project Overview

This project implements **Simply Solved**, a microservices-based platform designed to manage user-submitted problems, automatically solve them, and handle payments and statistics. The application follows a full-stack implementation with separate services for core functionalities, communication through REST APIs, and Docker-based orchestration.

Key features:
- **Backend microservices**: Several microservices, including user management, problem handling, solution generation, payments, and statistics, each running as an independent service. 
- **API Gateway**: A reverse proxy that routes requests from the frontend to the appropriate backend microservices.
- **Problem submission and solving**: Users can submit problems, which are automatically processed and solved by the system.
- **Payment handling**: The platform manages transactions related to user credits and balances.
- **Statistics and analytics**: Extraction of detailed usage metrics and performance statistics based on user-submitted problems and solutions.
- **Dockerized architecture**: The system is fully containerized, making it easy to deploy and scale.
- **Version control and project management**: GitHub is used for source code management, version control, and project tracking.

---

## Our Project Consists of

### [Documentation](https://github.com/ntua-el20889/SolveMyProblem/tree/main/architecture)
### [Backend](https://github.com/ntua-el20889/SolveMyProblem/tree/main/backend)
### [Frontend](https://github.com/ntua-el20889/SolveMyProblem/tree/main/frontend)
### [Payment-Service](https://github.com/ntua-el20889/SolveMyProblem/tree/main/payment-service)
### [Problem-Service](https://github.com/ntua-el20889/SolveMyProblem/tree/main/problem-service)
### [Solver-Service](https://github.com/ntua-el20889/SolveMyProblem/tree/main/solver-service)
### [Statistics-Service](https://github.com/ntua-el20889/SolveMyProblem/tree/main/statistics-service)
### [AI-Log](https://github.com/ntua-el20889/SolveMyProblem/tree/main/ai-log/README.md)

---

## Installation

### Requirements

Ensure you have the following installed:
- **PgAdmin4**
- **JMeter**
- **Node.js** and **npm** (for JavaScript dependencies)
- **Python** (for OR tools and other functionalities)
- **Docker**

### Setup

1. **Clone the repository:**

```bash
git clone https://github.com/ntua-el20889/SolveMyProblem.git
```

2. **Install dependencies**:
First, install Python dependencies specified in requirements.txt.

```bash
pip install -r requirements.txt
```

3. **Connect Database:**
Connect Postgresql Database.

#### Docker

SimplySolved is Dockerized for easy deployment.

1. **Build and run Docker containers:**
   
```bash
docker-compose up --build
```
   This commmand builds the Docker images and starts the containers defined in `docker-compose.yml`.

2. **Verify container status:**
Run the following command in order to verify that all the necessary containers are running:

```bash
docker ps
```

Here are the microservices that should be running: 
# Solve My Problem - Microservices Architecture

This project is a microservices-based application designed to handle various aspects of a problem-solving platform. Each microservice is responsible for a specific task, such as user management, payment processing, problem submission, problem solving, and statistics generation. The system is orchestrated using Docker Compose.

## Microservices

### 1. **Payment Service**
- **Description**: Handles payment transactions, including credit purchasing and balance management.
- **Port**: `3002`
- **Directory**: `./payment-service`

### 2. **Problem Service**
- **Description**: Allows users to submit problems, view them, and manage problem-related data.
- **Port**: `3003`
- **Directory**: `./problem-service`

### 3. **Solver Service**
- **Description**: This service manages the actual solving of the submitted problems. It has access to the Docker socket for running SDKs.
- **Port**: `5000`
- **Directory**: `./solver-service`
- **Special Requirement**: The Docker socket (`/var/run/docker.sock`) is mounted to allow the service to run containers dynamically.

### 4. **Statistics Service**
- **Description**: Provides statistics and analytics on user submissions, problem-solving performance, and platform usage.
- **Port**: `3004`
- **Directory**: `./statistics-service`

### 5. **API Gateway**
- **Description**: Acts as a reverse proxy, routing requests to the appropriate microservices. All client requests pass through this gateway.
- **Port**: `3000`
- **Directory**: `./api-gateway`

### 6. **Frontend**
- **Description**: The user interface for the platform. This service provides the web-based frontend for users to interact with the system.
- **Port**: `3006` (mapped to `80` internally)
- **Directory**: `./frontend`

### 7. **Backend**
- **Description**: The core backend service. It interacts with the PostgreSQL database.
- **Port**: `3007`
- **Directory**: `./backend`
- **Environment Variables**:
  - `POSTGRES_USER`: `postgres`
  - `POSTGRES_HOST`: `host.docker.internal`
  - `POSTGRES_DB`: `mydatabase`
  - `POSTGRES_PASSWORD`: `123`
  - `POSTGRES_PORT`: `5432`

## Network Configuration

All services are connected via the Docker bridge network named `solveMyProblemNetwork`. This allows inter-service communication and ensures isolation from external networks.


### License

This project is licensed under the MIT License. See the LICENSE file for more details.

