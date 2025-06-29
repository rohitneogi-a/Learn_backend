import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb = async () => {
  try {


    const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    // console.log(connectInstance)

    console.log(`\nMongoDB Connected!! DB HOST: ${connectInstance.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

export default connectdb;
