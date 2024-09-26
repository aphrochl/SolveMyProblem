![Logo](https://github.com/ntua/saas2024-55/blob/main/frontend/src/logo.png?raw=true)

# API Gateway

This service acts as an API Gateway for routing requests to different microservices.

## Installation

Run `npm install` to install the dependencies.

## Running

Run `npm start` to start the server.

## Docker

To build and run this service with Docker:

```sh
docker build -t api-gateway .
docker run -p 3000:3000 api-gateway
