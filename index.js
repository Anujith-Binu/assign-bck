// import express
const express=require("express")


// import
const logic=require('./service/logic')

// import cors
const cors = require('cors')


// server creation
const server = express()

// convert json into js
server.use(express.json())

// connect front end
server.use(cors({origin:'http://localhost:4200'}))


server.listen(3000,()=>{
    console.log("......server started @3000....");
})

// api resolve

// register post

server.post('/product/register',(req,res)=>{
    logic.register(req.body.fname,req.body.uname,req.body.email,req.body.phone,req.body.psw).then(result=>{
        res.status(result.statuscode).json(result)
    })
})

// login api

server.post('/product/login',(req,res)=>{
    logic.login(req.body.phone,req.body.psw).then(result=>{
        res.status(result.statuscode).json(result)
    })
})


// getall api

server.get('/product/shopnow',(req,res)=>{
    logic.getAllProduct().then(result=>{
        res.status(result.statuscode).json(result)
    })
})
