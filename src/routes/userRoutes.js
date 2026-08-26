import express from "express";
//import { createUser, findUserByCity, createCityIndex } from "../services/userService.js";
/* commented out import of service function to replace with updated logic */
import { 
    createUser, 
    findUserByCity, 
    createCityIndex, 
    validateUser 
} from "../services/userService.js";
const router = express.Router();

// POST /users
router.post("/", async (req, res) => {
  try {
    validateUser(req.body);
    const result = await createUser(req.db, req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// GET /users/city/:city
router.get("/city/:city", async (req, res) => {
  const users = await findUserByCity(req.db, req.params.city);
  res.json(users);
});

// POST /users/index/city
router.post("/index/city", async (req, res) => {
  const result = await createCityIndex(req.db);
  res.json({ message: "City index created", result });
});

export default router;


/* Routing the call to the service function, for finding city */    
/* script contains:
import express
import your service functions
define endpoints
export the router

*/