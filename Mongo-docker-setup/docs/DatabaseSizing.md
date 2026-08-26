A. Show how to check collection stats
Code
db.users.stats()
Document:

storageSize

totalIndexSize

avgObjSize

count

B. Show how to estimate growth
Example:

If avgObjSize = 120 bytes
And you expect 1M users:

Code
120 bytes * 1,000,000 = 120 MB
Add index overhead:

Code
indexSize ≈ 40–60% of data size
C. Show how to check database stats
Code
db.stats()
Document:

dataSize

indexSize

fileSize

D. Add Atlas sizing notes
Explain:

cluster tier selection

storage auto‑scaling

performance vs cost
