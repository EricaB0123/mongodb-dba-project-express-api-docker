## Database Sizing Guide
A. Check Collection Stats
db.users.stats()

Fields:
- storageSize
- totalIndexSize
- avgObjSize
- count

### B. Estimate Collection Growth
Example:

- avgObjSize = 120 bytes
- expected users = 1,000,000
- 120 bytes * 1,000,000 = 120 MB

#### Index overhead:
indexSize ≈ 40–60% of data size

### C. Check Database Stats
db.stats()

Fields:
- dataSize
- indexSize
- fileSize

### D. Atlas Sizing Notes (Cloud Version)
Atlas manages:

- cluster tier selection
- storage auto‑scaling
- performance vs cost

Cloud version:
https://github.com/EricaB0123/mongodb-dba-project-atlas