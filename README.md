
# Node.js CI/CD Pipeline using GitHub Actions and Docker

## Project Overview

This project demonstrates an automated CI/CD pipeline for a Node.js web application using GitHub Actions and Docker.

Whenever code is pushed to the main branch, GitHub Actions automatically installs dependencies, runs automated tests, builds a Docker image, and publishes the image to Docker Hub.

## Objectives

- Develop a Node.js web application using Express.
- Create automated API tests using Jest and Supertest.
- Automate testing and Docker image building with GitHub Actions.
- Publish Docker images to Docker Hub.
- Manage credentials securely using GitHub Secrets.

## Technologies Used

- Node.js
- Express.js
- Jest
- Supertest
- Docker
- Docker Hub
- Git and GitHub
- GitHub Actions

## Application Features

- Home API: GET /
- Health Check API: GET /health
- Addition API: POST /add
- Input validation for API requests

## CI/CD Workflow

1. Developer pushes code to the GitHub main branch.
2. GitHub Actions starts the workflow.
3. The repository is checked out.
4. Node.js environment is configured.
5. Project dependencies are installed.
6. Automated tests are executed.
7. Docker image is built.
8. GitHub Actions authenticates with Docker Hub using GitHub Secrets.
9. Docker image is pushed to Docker Hub.

## Docker Image

Docker image repository:

`DOCKERHUB_USERNAME/nodejs-cicd-pipeline`

Tags:
- latest
- Git commit SHA

## GitHub Secrets

Configure these secrets in:

Repository → Settings → Secrets and variables → Actions

- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN

Never store Docker Hub credentials directly in source code.

## Run Locally

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Start the application:

```bash
npm start
```

Open:

`http://localhost:3000`

Health check:

`http://localhost:3000/health`

## Test the Addition API

Send a POST request to:

`http://localhost:3000/add`

JSON body:

```json
{
  "a": 10,
  "b": 20
}
```

Expected response:

```json
{
  "result": 30
}
```

## Run with Docker

Build the image:

```bash
docker build -t nodejs-cicd-pipeline .
```

Run the container:

```bash
docker run -d -p 3000:3000 --name nodejs-app nodejs-cicd-pipeline
```

Open `http://localhost:3000`.

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── tests/
│   └── app.test.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Original Project Reference

This implementation is based on the following public learning project:

https://github.com/devKartikeya/Nodejs-GitHub-Actions-CI-CD-Pipeline

The application, tests, workflow configuration, and documentation have been adapted for this task.

## Conclusion

This project demonstrates how GitHub Actions can automate application testing, Docker image creation, and Docker Hub publishing as part of a CI/CD pipeline.
