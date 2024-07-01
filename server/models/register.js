const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        required: true
    }
});

RegisterSchema.pre('save',async function (next){
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
    }
    next();
});

const RegisterModel = mongoose.model("registration",RegisterSchema)
module.exports = RegisterModel
