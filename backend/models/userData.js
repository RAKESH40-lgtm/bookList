const mongoose=require('mongoose')
const uData=new mongoose.Schema({
    uName:{
        type:String
    },
    password:{
        type:String
    },
    conPassword:{
        type:String
    }
})
const userData=new mongoose.model("userData",uData)
module.exports=userData