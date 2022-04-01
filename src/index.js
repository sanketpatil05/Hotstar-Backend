const express = require("express");
const connect = require("./configs/db")
const cors = require('cors');
const app = express();
const kidController= require("./controllers/kid.controller")
require("dotenv").config()
const port =process.env.PORT||1296
app.use(express.json())
app.use(cors());
app.use("/kids", kidController)

app.listen( port,async()=>{
    try{
        await connect();
    }catch(err){
        console.log(err.message)
    }
    console.log(`Listening to port${port}`);
})
