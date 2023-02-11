const express = require('express')
const router = express.Router()
const userData = require('../models/userData')
const addbook = require('../models/bookData')
router.post('/', (req, res) => {
    userData.create({
        uName: req.body.uName,
        password: req.body.password,
        conPass: req.body.conPass
    }).then((res) => {
        res.json({ message: "succefully logged In" })
    })
})
router.post("/addbook", (req, res) => {
    addbook.create({
        title: req.body.title,
        ISBN: req.body.ISBN,
        Author: req.body.Author,
        Desc: req.body.Desc,
        pub: req.body.pub,
        pubD: req.body.pubD
    })
})
router.get("/bookList",(req,res)=>{
    addbook.find({})
})
module.exports = router
