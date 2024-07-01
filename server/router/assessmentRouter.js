const express = require('express');
const mongoose = require('mongoose');
const AssessmentModel = require('../models/assessmentSchema');
const assessmentRouter = express.Router();
const { ObjectId } = mongoose.Types;

assessmentRouter.post('/create', async (req, res) => {
    console.log('Request received for /assessments/create');
    console.log(req.body);
    try {
        const { userId,userName, normalizedScore, textSuggestion } = req.body;
        console.log(userId,userName, normalizedScore,textSuggestion);
        if (!userId || !normalizedScore || !textSuggestion) {
            return res.status(400).json({ message: 'Missing required data' });
        }
        // if (!mongoose.Types.ObjectId.isValid(userId)) {
        //     console.log('Invalid userId', userId);
        //     return res.status(400).json({ message: 'Invalid userId' });
        // }

        const assessment = new AssessmentModel({
            id: userId,
            user: userName,
            normalizedScore,
            textSuggestion
        });
        await assessment.save();
        res.json({ message: 'Assessment created successfully' });
    } catch (error) {
        console.error("Error during assessment creation:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

assessmentRouter.get('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            console.log('Invalid userId in get request', userId);
            return res.status(400).json({ message: 'Invalid userId' });
        }

        const assessments = await AssessmentModel.find({ user: mongoose.Types.ObjectId(userId) }).sort({ date: -1 });
        res.json(assessments);
    } catch (error) {
        console.error("Error during assessment retrieval:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = assessmentRouter;
