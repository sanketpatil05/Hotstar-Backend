const mongoose = require("mongoose");

const kidSchema = new mongoose.Schema({
    title:{type:"string", require:true}, 
    poster:{type:"string", require:true},
    time:{type:"string", require:true},
    description:{type:"string", require:true},
    
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("kid",kidSchema);