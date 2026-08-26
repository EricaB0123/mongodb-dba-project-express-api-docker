A. Add explain endpoints
Add routes:

/users/explain/city/:city

/users/explain/all

Service example:

js
const result = await db.collection('users')
  .find({ city })
  .explain('executionStats');
Document:

COLLSCAN vs IXSCAN

executionTimeMillis

nReturned

totalDocsExamined

B. Add compound index testing
Create index:

Code
db.users.createIndex({ city: 1, name: 1 })
Add endpoint:

/users/search?city=Nelson&name=Erica

Document:

how compound indexes improve performance

how order matters

C. Add large dataset seeder
Create seedLargeUsers.js:

10k–50k documents

random names, cities, steps

Document:

performance before/after indexing

explain plan differences
