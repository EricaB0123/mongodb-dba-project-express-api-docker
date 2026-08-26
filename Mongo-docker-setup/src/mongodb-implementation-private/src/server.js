/*
imports express - as you need it to create an api server
gives the server access to the db
connects the users endpoints to the server
creates the express app
adds json middleware
connects to mongodb, server waits untial mongodb is ready before starting
attaches db to every request

*/

import express from "express";
import { connectDB } from "./scripts/config/mongoClient.js";
import userRoutes from "./scripts/routes/userRoutes.js";

const app = express();
app.use(express.json());

async function startServer() {
  const db = await connectDB();

  // Attach db to every request
  app.use((req, res, next) => {
    req.db = db;
    next();
  });

  // Mount routes
  app.use("/users", userRoutes);

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

startServer();
