const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const RegisterModel = require('./models/register')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/SukoonApplication");


app.post("/login",(req,res)=>{
    const {loginEmail,loginPassword} = req.body;
    RegisterModel.findOne({email:loginEmail})
    .then(user =>{
        if(user){
           if(user.password===loginPassword){
            res.json("Success")
           } else{
            res.json("The password is incorrect")
           }
        } else{
            res.json("No record exists")
        }
    })
    
})

app.post('/register',(req,res)=>{
    const {email} = req.body;
    RegisterModel.findOne({email:email})
    .then(user=>{
        if(user){
            res.json("Used")
        }
        else{
            RegisterModel.create(req.body)
            .then(Registration=> res.json(Registration))
            .catch(err => res.json(err))
        }
    })
    
})

app.listen(3001, ()=>{
    console.log("server is running")
})