## API Documentation

### Overview

This API provides CRUD operations, indexing, and aggregation examples using MongoDB and Express. It is part of a modular architecture consisting of routes, controllers, services, and configuration layers.

## Server Status
<img width="1007" height="109" alt="API Server Running" src="https://github.com/user-attachments/assets/b6b4594f-83ab-4878-9dba-1d833374b698" />

## Example Request: GET /users/city/Nelson
<img width="1252" height="175" alt="Testing GET users by city" src="https://github.com/user-attachments/assets/873f3a16-0281-448c-ae93-c4ef75c7dbdc" />

## Seeding Data
<img width="1058" height="106" alt="Inserted Data Using Seeds js File _Updatedjpg" src="https://github.com/user-attachments/assets/0c6a1532-1b2b-4729-8adc-c6774ef7935a" />





#### Base URL

http://localhost:3000

#### Endpoints

1. Create User

POST /users

Creates a new user document in the users collection.

Request Body

{
  "name": "string",
  "city": "string",
  "steps": number
}

Success Response

{
  "acknowledged": true,
  "insertedId": "..."
}

Error Response

{
  "error": "Invalid user data"
}

2. Get Users by City

GET /users/city/:city

Returns all users matching the provided city.

Example

GET /users/city/Nelson

Success Response

[
  {
    "name": "Erica",
    "city": "Nelson",
    "steps": 8500
  }
]

3. Create Index on City

POST /users/index/city

Creates a MongoDB index on the city field.

Success Response

{
  "message": "City index created",
  "result": "city_1"
}

4. City Statistics (Aggregation Pipeline)

GET /users/stats/cities

Returns grouped statistics per city.

Example Response

[
  {
    "city": "Nelson",
    "totalUsers": 2,
    "avgSteps": 7750,
    "minSteps": 7000,
    "maxSteps": 8500
  }
]

Data Model

Collection: users
Field
Type
Description
name
string
User's name
city
string
User's city
steps
number
Daily step count

#### Indexes

{ city: 1 } — created via /users/index/city

#### Architecture Summary

- Routes define API endpoints
- Controllers handle HTTP logic and validation
- Services perform database operations
- Config contains MongoDB client and environment variables

#### Environment Variables

MONGO_URI=
MONGO_USER=
MONGO_PASS=
DB_NAME=

#### Testing

Endpoints can be tested using:

Postman
VS Code REST Client
curl

Example:
curl http://localhost:3000/users/city/Nelson

#### Setup

- Start MongoDB Docker container
- Run seed scripts (optional)
- Start the API
- Test endpoints

