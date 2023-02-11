const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const { urlencoded } = require('express')
const app=express()
const router=require('./routes/routes')

app.use(cors())

mongoose.connect('mongodb://localhost:27017/bookList').then(()=>{
    console.log("dbconnected")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json())
app.use(urlencoded({extended:false}))

app.listen(8080,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server starts at 8080")
    }
})