const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const RegisterModel = require('./models/register')
const bcrypt = require('bcryptjs');
const assessmentRouter = require('./router/assessmentRouter');
// const AssessmentModel = require('./models/assessmentSchema');


const app = express()
app.use(express.json())
app.use(cors())
app.use('/assessments',assessmentRouter);


mongoose.connect("mongodb://localhost:27017/SukoonApplication",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.post("/login",async (req,res)=>{

    try{
        const {loginEmail, loginPassword} = req.body;
        const user = await RegisterModel.findOne({email: loginEmail});
        // localStorage.setItem('userId',mongoose.Types.ObjectId(user.userId))
        // console.log(localStorage.getItem('userId'));
        if(!user){
            return res.json({status: "Invalid credentials"});
        }
        const isMatch = await bcrypt.compare(loginPassword, user.password);
        if(!isMatch){
            return res.json({status: "Invalid credentials"});
        }
        res.json({status: "Success",name: user.name});
    } catch(error){
        console.error("Error during login:" ,error);
        res.status(500).json({status: "Internal server error"});
    }
    // const {loginEmail,loginPassword} = req.body;
    // RegisterModel.findOne({email:loginEmail})
    // .then(user =>{
    //     if(user){
    //        if(user.password===loginPassword){
    //         res.json({status: "Success",name: user.name});
    //        } else{
    //         res.json({status: "The password is incorrect"})
    //        }
    //     } else{
    //         res.json({status: "No record exists"})
    //     }
    // })
    
});

app.post('/register',async (req,res)=>{
    try{
        const {email} = req.body;
        const existingUser = await RegisterModel.findOne({email});
        if(existingUser){
            return res.json({status: "Email already exists"});
        }
        const newUser = new RegisterModel(req.body);
        await newUser.save();
        res.json({status: "Registration successful"});

    } catch(error){
        console.error("Error during registration:" ,error);
        res.status(500).json({status: "Internal server error"});
    }
    // const {email} = req.body;
    // RegisterModel.findOne({email:email})
    // .then(user=>{
    //     if(user){
    //         res.json("Used")
    //     }
    //     else{
    //         RegisterModel.create(req.body)
    //         .then(Registration=> res.json(Registration))
    //         .catch(err => res.json(err))
    //     }
    // })
    
});

// assessmentRouter.post('/assessments/create', async (req,res) =>{
//     console.log('Request received for /assessments/create')
//     try{
//         const {userId,normalizedScore,textSuggestion} = req.body;
//         if(!userId||!normalizedScore || !textSuggestion){
//             return res.status(400).json({message: 'Missing required data'});
//         }
//         const assessment = new AssessmentModel({
//             user: userId,
//             normalizedScore,
//             textSuggestion
//         });
//         await assessment.save();
//         res.json({message: 'Assessment create successfully'});
//     } catch(error){
//         console.error("Error during assessment creation:" ,error);
//         res.status(500).json({message: 'Internal server error'});
//     }
// });

// assessmentRouter.get('/assessments/user/:userId', async(req,res) =>{
//     try{
//         const userId = req.params.userId;

//         const assessments = await AssessmentModel.find({user: userId}).sort({date: -1});

//         res.json(assessments);
//     } catch(error){
//         console.error("Error during assessment retrieval:" ,error);
//         res.status(500).json({message: 'Internal server error'});
//     }
// });

app.listen(3001, ()=>{
    console.log("server is running")
})