const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{type:"string", require:true}, 
    poster:{type:"string", require:true},
    time:{type:"string", require:true},
    description:{type:"string", require:true},
    
},{
    versionKey:false,
    timestamps:true,
})

module.exports={
    show: mongoose.model("show",movieSchema),
    trending:mongoose.model("trending",movieSchema),
   // sport:mongoose.model("sport",movieSchema),
    tv:mongoose.model("tv",movieSchema),
    
}