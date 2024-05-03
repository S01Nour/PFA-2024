import express from "express";
// import { PORT } from "database.js";
// import PORT from "./database.js";
import { PORT } from "./database.js";

const port = PORT || 3001;
var app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});