const mongoose = require("mongoose");

const connect = ()=>{
  return mongoose.connect("mongodb+srv://saket123:sanket123@cluster0.wuasc.mongodb.net/movie");
} 

module.exports= connect