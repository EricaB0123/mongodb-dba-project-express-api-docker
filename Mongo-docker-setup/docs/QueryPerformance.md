# Performance & Query Optimization (Work IN progress)

## A. Explain Plan Endpoints

Add the following routes:

- **GET /users/explain/city/:city**  
- **GET /users/explain/all**

### Service Example
```js
const result = await db.collection('users')
  .find({ city })
  .explain('executionStats');
```

### Document the following:

#### COLLSCAN vs IXSCAN
- **COLLSCAN**: Full collection scan  
- **IXSCAN**: Uses an index to jump directly to matching documents  

#### Key Execution Metrics
- **executionTimeMillis** — total time spent executing the query  
- **nReturned** — number of documents returned  
- **totalDocsExamined** — number of documents scanned  
- **totalKeysExamined** — number of index keys scanned  

---

## B. Compound Index Testing

### Create Compound Index
```js
db.users.createIndex({ city: 1, name: 1 })
```

### Add Endpoint
- **GET /users/search?city=Nelson&name=Erica**

### Document:

#### How Compound Indexes Improve Performance
- Queries using both fields (`city` + `name`) can use a single index  
- Reduces document scans  
- Improves execution time  

#### Why Index Order Matters
- `{ city: 1, name: 1 }` supports queries like:  
  - `{ city: "Nelson" }`  
  - `{ city: "Nelson", name: "Erica" }`  
- But **does not** efficiently support queries like:  
  - `{ name: "Erica" }` alone  

Index order defines which query patterns are optimized.

---

## C. Large Dataset Seeder

Create a file: **seedLargeUsers.js**

### Insert 10k–50k Documents
- Random names  
- Random cities  
- Random step counts  

Example snippet:
```js
const users = [];

for (let i = 0; i < 20000; i++) {
  users.push({
    name: faker.person.firstName(),
    city: faker.location.city(),
    steps: Math.floor(Math.random() * 15000)
  });
}

await db.collection('users').insertMany(users);
```

### Document:

#### Performance Before Indexing
- COLLSCAN  
- High `totalDocsExamined`  
- Slow `executionTimeMillis`  

#### Performance After Indexing
- IXSCAN  
- Low `totalDocsExamined`  
- Faster execution  
- Lower CPU usage  

#### Explain Plan Differences
- Compare `executionStats` before/after  
- Show how indexes reduce scanned documents  
- Show how compound indexes optimize multi‑field queries  
