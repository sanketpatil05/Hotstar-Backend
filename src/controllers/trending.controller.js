const express=require("express")

const Product=require("../model/movie.model").trending; 


const router=express.Router()

const allcontroller=require("./allcontroller")


router.get("",allcontroller(Product).get)



module.exports=router