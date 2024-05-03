import express from "express";
import mongo from "mongodb";
import mongoose from "mongoose";

var app = express();

const DB_URL = "mongodb+srv://nour:connectAtlas@cluster0.sxd2mrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const DB_URL = ;

const MongoClient = new mongo.MongoClient(DB_URL);

async function listDatabases(client) {
  var databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

let conn;
conn = await MongoClient.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    wtimeoutMS: 2500
  })
  .catch(err => {
    console.log("Error connecting to database");
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    // app.listen(PORT, () => {
    //   console.log(`listening on port ${PORT}`)
    // })
    console.log("****************");
    listDatabases(MongoClient)
  }
  );

let database = MongoClient.db("test");

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Mongoose connected to database')
});
export const DB = database;
export const client = MongoClient;
export const PORT = 5000;