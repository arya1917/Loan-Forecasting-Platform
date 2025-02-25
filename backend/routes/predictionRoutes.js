const express = require('express');
const axios = require('axios');
const Prediction = require('../models/Prediction');
require('dotenv').config();

const router = express.Router();

router.post('/forecast', async (req, res) => {
    try {
        const response = await axios.post(process.env.ML_SERVICE_URL, req.body);
        const prediction = await Prediction.create({ predicted_income: response.data.predicted_income });
        res.json(prediction);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
