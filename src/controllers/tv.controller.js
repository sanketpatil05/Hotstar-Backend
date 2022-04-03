const express=require("express")

const Product=require("../model/movie.model").tv; 


const router=express.Router()

const allcontroller=require("./allcontroller")


router.get("",allcontroller(Product).get)
router.get("/:id",allcontroller(Product).getbyid)


module.exports=router