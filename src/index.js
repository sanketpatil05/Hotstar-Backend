const express = require("express");
const connect = require("./configs/db")
const cors = require('cors');
const app = express();
const kidController= require("./controllers/kid.controller")
const trendingController= require("./controllers/trending.controller")
const sportController= require("./controllers/sport.controller")
const tvController= require("./controllers/tv.controller")

const sh=require("./controllers/show.js")
require("dotenv").config()
const port =process.env.PORT||1296
app.use(express.json())
app.use(cors());
app.use("/kids", kidController)
app.use("/trending", trendingController);
app.use("/sports", sportController);
app.use("/tv", tvController);
app.use("/show", sh);

app.listen( port,async()=>{
    try{
        await connect();
    }catch(err){
        console.log(err.message)
    }
    console.log(`Listening to port${port}`);
})
