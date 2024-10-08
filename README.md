<h1 align="center">Simply Solved</h1>

<p align="center">
  <img src="https://github.com/aphrochl/SolveMyProblem/blob/main/frontend/src/logo.png?raw=true" alt="Logo">
</p>

---

## Team Members 

**Afroditi Marianthi Chlapani [github](https://github.com/aphrochl)**  
**Takis Stamatopoulos [github](https://github.com/ntua-el20096)**  
**Kyriaki Karatzouni [github](https://github.com/ntua-el20634)**  

---

## Project Overview

**SolveMyProblem** is a **SaaS** web application that allows users to solve complex computational problems, such as simulations or optimizations, using cloud-based resources without requiring expensive hardware or software licenses. Users pay for resources only when they use the service.

### Key Features
- **Microservices architecture**: Independent services for payments, problem handling, solving, and statistics, ensuring scalability and flexibility.
- **Google OR-Tools**: The platform utilizes Google’s OR-Tools library for solving optimization and operations research problems.
- **Credit-based system**: Users purchase credits to solve problems based on the computational resources consumed.
- **User-friendly frontend**: A web interface enables users to submit problems and view statistics.

### Architecture & Technologies
- **Microservices**: Each service (payment, problem, solver, statistics) runs independently.
- **API Gateway**: Routes requests from the frontend to appropriate services.
- **Dockerized deployment**: The entire platform is containerized, ensuring easy deployment and scaling.
- **PostgreSQL**: Used for managing user data, transactions, and problem submissions.
- **Development tools**: Pycharm, Node.js, Python, Bootstrap for frontend/backend; GitHub for version control.

### Core Functions
1. **Buy credits**: Users purchase credits to submit and solve problems.
2. **Submit problems**: Users submit their problems for automated solving.
3. **View status**: Users track their problem submissions and resolutions.
4. **View statistics**: Analytics on problem-solving performance and usage.

The application is stress-tested with **JMeter** and deployed using **Docker** containers.


---

## Our Project Consists of

### [Documentation](https://github.com/aphrochl/SolveMyProblem/tree/main/architecture)
### [Backend](https://github.com/aphrochl/SolveMyProblem/tree/main/backend)
### [Frontend](https://github.com/aphrochl/SolveMyProblem/tree/main/frontend)
### [Payment-Service](https://github.com/aphrochl/SolveMyProblem/tree/main/payment-service)
### [Problem-Service](https://github.com/aphrochl/SolveMyProblem/tree/main/problem-service)
### [Solver-Service](https://github.com/aphrochl/SolveMyProblem/tree/main/solver-service)
### [Statistics-Service](https://github.com/aphrochl/SolveMyProblem/tree/main/statistics-service)
### [AI-Log](https://github.com/aphrochl/SolveMyProblem/tree/main/ai-log/README.md)

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
git clone https://github.com/aphrochl/SolveMyProblem.git
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

