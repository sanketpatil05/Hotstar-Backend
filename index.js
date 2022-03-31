const express = require("express");
const connect = require("./src/configs/db")
const app = express();
const kidController= require("./src/controllers/kid.controller")

app.use(express.json())
app.use("/kids", kidController)

app.listen(process.env.PORT || 1296,async()=>{
    try{
        await connect();
    }catch(err){
        console.log(err.message)
    }
    console.log("Listening to port 1296");
})
