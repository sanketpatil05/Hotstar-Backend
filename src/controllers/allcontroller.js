const get=(Type)=>async(req,res)=>{
    console.log(req)
    try{

        const product=await Type.find().lean().exec()
        
        res.send(product)

    }   
    catch(er){
        console.log(er.message)
    }
}
const getbyid=(Type)=> async(req,res)=>{
    console.log(req.params.id)
    try{
        const product= await Type.findById(req.params.id).lean().exec()
        console.log(product)
        res.send(product)
    }
    catch(er){
        console.log(er.message)
    }
}

module.exports=(Type)=>{
    return{
       
        get:get(Type),
        getbyid:getbyid(Type)
        
    }
}