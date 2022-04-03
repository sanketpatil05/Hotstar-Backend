const express = require("express");

const Kid = require("../model/kids.model");

const router = express.Router();

router.get("", async (req, res) => {
    try {
      const kids = await Kid.find().lean().exec();
      console.log(kids)
      return res.send(kids);
    
    } catch (err) {
      res.status(500).send(err.message);
    }
  })
  router.get("/:id", async (req, res) => {
    try{
        const kid = await Kid.findById(req.params.id).lean().exec();
        console.log(kid)
        return res.send(kid)
    }
    catch (er){
      console.log(er.message)
    }
  })

  module.exports = router;
