# MongoDB Mini Project — Docker + API (In Progress)

This project is part of my journey from Senior DBA to Data Platform Engineer, where I’m building hands‑on experience with containerised databases, NoSQL modelling, and API development.

I’m running MongoDB in Docker, exploring collections through VS Code, and building a Node.js API that exposes CRUD, indexing, and aggregation pipelines.

A **separate cloud version using MongoDB Atlas** is being developed here:  
https://github.com/EricaB0123/mongodb-dba-project-atlas

---

## Project Goals
- Build a containerised MongoDB environment using Docker  
- Connect and manage MongoDB using the VS Code MongoDB extension  
- Design collections and insert sample documents  
- Implement CRUD operations via a Node.js API  
- Demonstrate indexing and aggregation pipelines  
- Deploy a cloud version using MongoDB Atlas (separate project)

---

## Project Objectives
- Run MongoDB locally using Docker (**completed**)  
- Connect and manage collections via the VS Code MongoDB extension (**completed**)  
- Design collections and seed sample documents  
- Build a modular Node.js + Express API for CRUD operations (**completed**)  
- Add indexing examples (**completed**)  
- Add aggregation pipeline examples (**in progress**)  
- Deploy a cloud version using MongoDB Atlas (**separate project**)  

---

## Tech Stack
- MongoDB Community Edition (Docker)  
- Docker Desktop  
- VS Code MongoDB Extension  
- Node.js + Express (API)  
- MongoDB Atlas (cloud version in separate repo)

---

## Docker Setup

A full local MongoDB environment is included.

See **Mongo Docker Setup Guide**:  
`Mongo-docker-setup/MongoDbSetup.md`

Covers:
- Pulling MongoDB image & running containers  
- Connecting via VS Code  
- Creating collections and inserting documents  
- Indexing strategies  

---

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

- **Routes** — define URL endpoints  
- **Controllers** — handle HTTP logic  
- **Services** — perform database operations  
- **Models** — provide collection access  
- **Config** — MongoDB client + environment variables  

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /users | Create a new user |
| GET | /users | Query users (filter, sort, paginate) |
| GET | /users/city/:city | Get users by city |
| POST | /users/index/city | Create index on city field |
| GET | /users/stats/cities | Aggregation pipeline (city stats) |

---

## Aggregation Examples

### `GET /users/stats/cities`

Returns grouped statistics per city:
- total users  
- average steps  
- min/max steps  

---

## Indexing Demo

Documentation and diagrams:  
https://github.com/EricaB0123/mongodb-mongodb-api-mini-project/tree/main/Mongo-docker-setup/docs

### Example: Create an index on the `city` field


This improves query performance for city‑based lookups.

---

## Testing (Planned)
Example API calls:  
https://github.com/EricaB0123/mongodb-mongodb-api-mini-project/tree/main/Mongo-docker-setup/docs

---

## Security Considerations
- `.env` file for secrets  
- No credentials committed  
- Notes on production hardening  
- Planned: Atlas access rules + IP whitelisting (in cloud version)

---

# MongoDB Atlas Version (Separate Project)

The Atlas version of this project lives here:  
**https://github.com/EricaB0123/mongodb-dba-project-atlas**

It includes:
- Atlas cluster setup  
- SRV connection configuration  
- Cloud collections  
- Indexing & query plan differences  
- Enterprise features (RBAC, network access, backups, monitoring)

This Docker project and the Atlas project are intentionally separate to keep environments clean and focused.

---

## Architecture & Documentation
Full documentation and diagrams:  
https://github.com/EricaB0123/mongodb-mongodb-api-mini-project/tree/main/Mongo-docker-setup/docs

Includes:
- Docker container setup  
- VS Code MongoDB extension  
- Sample documents  
- Project overview  
- (Soon) API responses  
- (Soon) Atlas dashboard (in cloud repo)

---

## Roadmap

### Completed
- Run MongoDB locally using Docker  
- Connect and manage collections via VS Code  
- Design collections and seed sample documents  
- Build modular Node.js + Express API  
- Implement CRUD operations  
- Add indexing endpoints  
- Create documentation structure  

### In Progress
- Add aggregation pipeline endpoints  
- Expand API documentation  
- Improve error handling and validation  
- Add filtering, sorting, pagination  

### Planned
- Cloud version using MongoDB Atlas (separate repo)  
- Add Postman collection for API testing  

---

## What I Learned
- How MongoDB differs from SQL Server in schema design  
- How Docker volumes persist database files  
- How to use the VS Code MongoDB extension  
- How to structure a small API project  
- The importance of separating local and cloud environments  
- How NoSQL thinking changes data modelling decisions  

---

