# MongoDB Mini Project — Docker + API (In Progress)

This project is part of my journey from Senior DBA to Data Platform Engineer, where I’m building hands‑on experience with containerised databases, NoSQL modelling, and API development.

I’m running MongoDB in Docker, exploring collections through VS Code, and building a Node.js API that will expose CRUD, indexing, and aggregation pipelines. A cloud version using MongoDB Atlas is planned.

##  Project Goals
- Build a containerised MongoDB environment using Docker
- Connect and manage MongoDB using VS Code MongoDB extension
- Design collections and insert sample documents
- Implement CRUD operations via a Node.js API 
- Demonstrate indexing and aggregation pipelines (planned)
- Deploy a cloud version using MongoDB Atlas (planned)

##  Project Objectives
- Run MongoDB locally using Docker
- Connect and manage collections via the VS Code MongoDB extension
- Design collections and seed sample documents
- Build a Node.js + Express API for CRUD operations
- Add indexing and aggregation pipeline examples (in progress)
- Deploy a cloud version using MongoDB Atlas (planned)

## Tech Stack
- MongoDB Community Edition (Docker)
- Docker Desktop
- VS Code MongoDB Extension
- Node.js + Express (API)
- MongoDB Atlas (planned)

## Docker Setup
- A full local MongoDB environment is included.
See [**Mongo Docker Setup Guide**](Mongo-docker-setup/MongoDbSetup.md) for detailed steps covering:
  - Pulling MongoDB image & running containers
  - Connecting via VS Code
  - Creating collections and inserting documents
  - Indexing strategies

## Project Structure

```
Mongo-docker-setup/
│
├── server.js
├── .env.express
│
└── src/
    ├── config/
    │   └── mongoClient.js
    │
    ├── controllers/
    │   └── userController.js
    │
    ├── services/
    │   └── userService.js
    │
    ├── routes/
    │   └── userRoutes.js
    │
    ├── models/
    │   └── userModel.js
    │
    └── seeds/
        ├── seedUsers.js
        └── testQueries.js

```

This structure follows a clean, modular Express architecture:

- Routes — define URL endpoints
- Controllers — handle HTTP logic (status codes, validation, responses)
- Services — perform database operations
- Models — provide collection access
- Config — MongoDB client + environment variables

## API Endpoints 

| Method	| Endpoint	| Description |
|---------|-----------|-------------|
|POST	    |  /users	    | Create a new user|
|GET	    |  	/users	   | Query users (filter, sort, paginate)
|GET	    |  	/users/city/:city	   | Get users by city
|POST	    |  	/users/index/city	   | Create index on city field
|GET	    |  	/users/stats/cities	   | Aggregation pipeline (city stats)



## Aggregation Examples

```
GET /users/stats/cities
```
Returns grouped statistics per city:
- total users
- average steps
- min/max steps

### Indexing Demo
- Creating indexes
- Measuring performance differences
- documentation and diagrams:
https://github.com/EricaB0123/mongodb-mongodb-api-mini-project/tree/main/Mongo-docker-setup/docs

#### example: Create an index on the city field:

```
POST /users/index/city
```

This improves query performance for city‑based lookups.

## Testing (Planned)
- Example API calls: https://github.com/EricaB0123/mongodb-mongodb-api-mini-project/tree/main/Mongo-docker-setup/docs

## Security Considerations
- .env file for secrets
- No credentials committed
- Notes on production hardening
- Planned: Atlas access rules + IP whitelisting

## MongoDB Atlas Version (Planned)
- A cloud‑hosted version of the project will include:
- Atlas cluster setup
- Connection string configuration
- Screenshots of cloud collections
- Differences between local Docker vs Atlas

## Architecture & Documentation
Full documentation and diagrams:
https://github.com/EricaB0123/mongodb-mongodb-api-mini-project/tree/main/Mongo-docker-setup/docs

Includes:
- Docker container setup
- VS Code MongoDB extension
- Sample documents
- Project overview
- (Soon) API responses
- (Soon) Atlas dashboard



## Roadmap
[x] Docker MongoDB setup
[x] VS Code MongoDB connection
[ ] Build Node.js API
[ ] Add CRUD endpoints
[ ] Add aggregation examples
[ ] Add indexing examples
[ ] Add MongoDB Atlas deployment
[ ] Add Postman collection
[ ] Add Jest tests
[ ] Add GitHub Actions CI/CD

## What I Learned
-  How MongoDB differs from SQL Server in schema design
-  How Docker volumes persist database files
-  How to use the VS Code MongoDB extension for browsing collections
-  How to structure a small API project around MongoDB
-  The importance of separating local and cloud environments
-  How NoSQL thinking changes data modelling decisions


# About Me
I’m Erica — a Senior Database Administrator transitioning into Data Platform Engineering, building modern data skills across SQL Server, PostgreSQL, Oracle, MongoDB, and AWS.
