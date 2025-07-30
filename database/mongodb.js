import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("Please define the mongodb uri in the environment varialbe inside .env.local")
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI)
    console.log(`connected to the database in ${NODE_ENV} mode`)
  } catch (error) {
    console.log("Error while connecting to the database", error)
  }
}

export default connectToDatabase
