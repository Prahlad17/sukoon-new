const mongoose = require('mongoose');
const RegisterModel = require('./register.js');

const assessmentSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RegisterModel',
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
const AssessmentModel = mongoose.model("Assessment",assessmentSchema)
module.exports = AssessmentModel