const mongoose=require('mongoose')
const bookData=new mongoose.Schema({
    title:{
        type:String
    },
    ISBN:{
        type:String
    },
    Author:{
        type:String
    },
    Desc:{
        type:String
    },
    pub:{
        type:String
    },
    pubD:{
        type:String
    }
})
const bookD=new mongoose.model("book",bookData)
module.exports=bookD