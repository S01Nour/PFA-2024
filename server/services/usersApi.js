import express from "express";
import { DB, PORT } from "../back-end/database.js";


const db = DB;
let collection = db.collection("users");

export function createUserAPI(dataJson) {
  // console.log(dataJson); // Log the request body to see what data is received
  // res.status(201).send({ message: "User created", user: dataJson });
  console.log("api fct");

  let ins = collection.insertOne(dataJson);
  if (!ins) {
    return res.status(400).send('Error creating new user');
  } else { console.log("success"); }
}

export async function updateUserAPI(userID, dataJson, res) {
  console.log("api update");
  try {
    // Use updateOne with $set to only modify specified fields excluding _id
    const result = await collection.updateOne(
      { _id: userID },
      { $set: dataJson }, { upsert: true }
    );

    if (result.matchedCount === 0) {
      return res.status(404).send('User not found');
    }

    res.json({ message: "User updated successfully", result: result });
  } catch (error) {
    console.error('Failed to update user:', error);
    // res.status(500).send('Internal Server Error');
  }
}

export function deleteUserAPI(userID, res) {
  console.log("api delete");
  try {
    // Use updateOne with $set to only modify specified fields excluding _id
    const result = collection.deleteOne({ _id: userID });
    if (result.deletedCount === 0) {
      return res.status(404).send('User not found');
    }

    res.json({ message: "User deleted successfully", result: result });
  } catch (error) {
    console.error('Failed to delete user:', error);
    res.status(500).send('Internal Server Error');
  }
}