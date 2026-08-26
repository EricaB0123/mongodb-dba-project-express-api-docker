A. Insert operations
Show:

single insert

bulk insert

insertMany

seed scripts

Example:

Code
db.users.insertOne({ name: "Erica", city: "Nelson", steps: 8500 })
Bulk:

Code
db.users.insertMany([...])
B. Delete operations
Show:

deleteOne

deleteMany

delete by filter

delete by ID

Example:

Code
db.users.deleteOne({ name: "Sam" })
Delete many:

Code
db.users.deleteMany({ city: "Nelson" })
C. Add API endpoints
Add:

DELETE /users/:id

DELETE /users/city/:city

Document:

safe deletes

validation

error handling
