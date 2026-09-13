# Setup Guide

## Prerequisites
- Docker Desktop  
- Node.js  
- VS Code MongoDB extension (optional)

---

## 1. Start MongoDB in Docker
```bash
docker pull mongo
docker run -d -p 27017:27017 --name mongodb mongo
```

---

## 2. Install Dependencies
```bash
npm install
```

---

## 3. Configure Environment Variables
Create a file named **.env.express**:

```
MONGO_URI=mongodb://localhost:27017
DB_NAME=basicDB
```

---

## 4. Seed Sample Data (Optional)
```bash
node src/seeds/seedUsers.js
```

Expected output:  
```
Seed data inserted.
```

---

## 5. Start the API Server
```bash
node src/server.js
```

Expected output:  
```
Server running on port 3000
```

---

## 6. Test Endpoints
Example:  
`http://localhost:3000/users/city/Nelson`

You can use:
- Postman  
- VS Code REST Client  
- curl  

Example:
```bash
curl http://localhost:3000/users/city/Nelson
```
