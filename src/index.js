// require('dotenv').config({path : './env'})


import dotenv from "dotenv";
import connectdb from "./db/index.js";

dotenv.config(
    {
        path:"./env"
    }
)

connectdb();




// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
// import express from "express";
// const app = express();

// const connectdb  = async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
//         app.on("error",(err)=>{
//             console.error("Error in app:", err);
//             throw err;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     } 
    
//     catch (error) {
//         console.error("Database connection failed:", error);
//         throw error;
//     }
// }