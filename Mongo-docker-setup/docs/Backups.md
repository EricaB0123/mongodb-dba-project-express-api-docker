
### Logical backup (mongodump)
``
mongodump --db basicDB --out ./backups/basicDB-backup
``
### Logical restore (mongorestore)
``
mongorestore --db basicDB ./backups/basicDB-backup/basicDB
``
### Docker volume backup
Explain that your MongoDB container stores data in:

``
/data/db
``
#### Show how to snapshot the volume:

``
docker run --rm \
  -v mongodb:/data \
  -v $(pwd)/backups:/backup \
  alpine tar czvf /backup/mongo-volume.tar.gz /data
``
### Atlas backup explanation
