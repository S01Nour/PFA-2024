import express from "express";
import { DB, PORT } from "./back-end/database.js";
import { createUserAPI, deleteUserAPI, updateUserAPI } from "./services/usersApi.js";
import { ObjectId } from "mongodb";

const port = PORT || 3001;
var app = express();
const db = DB;

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Routes
app.get('/api/admin', async (req, res) => {
  let collection = await db.collection("users");
  let results = await collection.find({})
    // .limit(5)
    .toArray();

  // res.json({ results });
  res.send(results).status(200);
});

app.post('/api/admin', (req, res) => {
  console.log("server post");
  createUserAPI(req.body);

});


app.patch('/api/admin/:_id', async (req, res) => {
  if (!req.params._id) {
    return res.status(400).send("User ID is required");
  }
  if (!req.body) {
    return res.status(400).send("Request body is required");
  }
  console.log('update');
  // Remove the _id from the request body to prevent attempts to modify it
  const { _id, ...updateData } = req.body;
  console.log(updateData);

  const userID = new ObjectId(req.params._id);
  updateUserAPI(userID, updateData, res)
});

app.delete('/api/admin/:_id', (req, res) => {
  console.log("server delete");
  if (!req.params._id) {
    return res.status(400).send("User ID is required");
  }
  const userID = new ObjectId(req.params._id);
  deleteUserAPI(userID, res);

});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});