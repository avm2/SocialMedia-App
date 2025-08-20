import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

// Load environment variables
dotenv.config();

const connectToMongo = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in .env file");
    }

    const connectionInstance = await mongoose.connect(`${mongoURI}/${DB_NAME}`);
    console.log(`✅ Connected to MongoDB !! HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectToMongo;
