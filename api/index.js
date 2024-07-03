import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

const app=express();
// to cofig the env file (we use env file variables file by using the dotenv package )
//directly without dotenv package cant use the env file
dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(()=>{
      console.log("MongoDb is connected");
})
.catch((err)=>{
      console.log(err);
})

app.listen(3000,()=>{
      console.log("Server is running on the port 3000!!");
})