# Data Operations

## A. Insert Operations

### Single Insert
```js
db.users.insertOne({ name: "Erica", city: "Nelson", steps: 8500 })
```

### Bulk Insert
```js
db.users.insertMany([
  { name: "John", city: "New York", steps: 10000 },
  { name: "Trish", city: "Australia", steps: 9000 }
])
```
<img width="1177" height="362" alt="image" src="https://github.com/user-attachments/assets/cd469820-b14b-4518-bedf-f755861a5b57" />



### Seed Scripts
Seed scripts can be executed using Node.js to populate the database with sample data.

---

## B. Delete Operations

### deleteOne
```js
db.users.deleteOne({ name: "Sam" })
```

<img width="507" height="82" alt="image" src="https://github.com/user-attachments/assets/ec20560a-c656-4450-a727-2bca700993b4" />


### deleteMany
```js
db.users.deleteMany({ city: "Nelson" })
```

### Delete by Filter
```js
db.users.deleteMany({ steps: { $lt: 5000 } })
```

### Delete by ID
```js
db.users.deleteOne({ _id: ObjectId("YOUR_ID_HERE") })
```
<img width="760" height="407" alt="image" src="https://github.com/user-attachments/assets/0a6db382-8f8f-4444-99ae-f0adf04a9555" />

---

### Safe Deletes
- Validate IDs before deleting  
- Ensure filters are correct to avoid accidental mass deletion  
- Log delete operations for auditing  

### Validation
- Check required fields  
- Ensure correct data types  
- Reject malformed requests  

### Error Handling
- Return meaningful error messages  
- Handle missing documents  
- Handle invalid ObjectId formats  
