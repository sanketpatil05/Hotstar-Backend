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

  module.exports = router;
