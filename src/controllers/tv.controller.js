const express=require("express")

const Product=require("../model/movie.model").tv; 


const router=express.Router()

const allcontroller=require("./allcontroller")


router.get("",allcontroller(Product).get)



module.exports=router