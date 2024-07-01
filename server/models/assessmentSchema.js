const mongoose = require('mongoose');
const RegisterModel = require('./register.js');

const assessmentSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    user:{
        type: String,
        required: true
        
    },
    
    normalizedScore: {
        type: Number,
        required: true
    },
    textSuggestion: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const AssessmentModel = mongoose.model("assessment",assessmentSchema)
module.exports = AssessmentModel