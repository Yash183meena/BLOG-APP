import express from 'express';
const app=express();

app.get('/server',(req,res)=>{
      res.send("Hello this is an backend server");
})
app.listen(3000,()=>{
      console.log("Server is running on the port 3000!!");
})