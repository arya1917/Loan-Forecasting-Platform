const express = require('express');
const LoanApplication = require('../models/LoanApplication');

const router = express.Router();

router.post('/apply', async (req, res) => {
    try {
        const application = await LoanApplication.create(req.body);
        res.status(201).json(application);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
