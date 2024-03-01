const express = require('express')
const cors = require('cors')
const app = express();
const env = require('dotenv').config()

 

app.get("/",(req,res)=>{
    res.send("server is running").json({message:"server is running"}).status(200);
})




app.listen(process.env.PORT,()=>{
    console.log(`Server is runnig on port ${process.env.PORT}`)
})