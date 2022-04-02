// const express=require("express")

// const Product=require("../model/movie.model").sport; 


// const router=express.Router()

// const allcontroller=require("./allcontroller")


// router.get("",allcontroller(Product).get)
// module.exports=router

const express = require("express");

const Sport = require("../model/sport.model");

const router = express.Router();

router.get("", async (req, res) => {
    //console.log(req)
    try {
      const sports = await Sport.find().lean().exec();
    //  console.log("sport", sports)
      return res.send(sports);
    
    } catch (err) {
      res.status(500).send(err.message);
    }
  })

  module.exports = router;