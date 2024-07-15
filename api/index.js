import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

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

//means we allows to send data in the json format from our backend(backend ke post request me apn input fied/form me data json format me bj kar skate hai) aur accwpt kar sjte hai
app.use(express.json());

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

//middleware for handlint the error
app.use((error,req,res,next)=>{
      const statusCode=error.statusCode || 500;
      const message=error.message || 'Internal Server Error';
      res.status(statusCode).json({
            success:false,
            statusCode,
            message
      })
});

app.listen(3000,()=>{
      console.log("Server is running on the port 3000!!");
})

