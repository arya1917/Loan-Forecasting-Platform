const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LoanApplication = sequelize.define('LoanApplication', {
    education: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    location: DataTypes.STRING,
    skills: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    status: DataTypes.STRING
});

module.exports = LoanApplication;
