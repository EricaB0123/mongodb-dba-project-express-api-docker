export async function createUser(db, user) {
  
  return db.collection('users').insertOne(user);
}   

export async function findUserByCity(db, city) {
  return db.collection('users').find({ city }).toArray();
}


/* Routing the call to the service function, for finding city */
findUserByCity(db, req.params.city)

function validateUser(user) {
  if (!user.name || !user.city || typeof user.steps !== "number") {
    throw new Error("Invalid user data");
  }
}

//validateUser(req.body);
//dont need validateUser - as ther oute file now calls this.

export async function createCityIndex(db) {
    return db.collection('users').createIndex({ city: 1 });
}