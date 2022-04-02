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

module.exports=(Type)=>{
    return{
       
        get:get(Type),
        
    }
}