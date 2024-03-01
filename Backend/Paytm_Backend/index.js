const express = require('express')
const cors = require('cors');
const connectToDb = require('./db');
const app = express();
const env = require('dotenv').config()

 
// database connect
connectToDb();
 
app.get("/",(req,res)=>{
    res.send("server is running").json({message:"server is running"}).status(200);
})
 



app.listen(process.env.PORT,()=>{
    console.log(`Server is runnig on${process.env.PORT}`)
}) 