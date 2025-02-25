const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Prediction = sequelize.define('Prediction', {
    predicted_income: DataTypes.FLOAT
});

module.exports = Prediction;
