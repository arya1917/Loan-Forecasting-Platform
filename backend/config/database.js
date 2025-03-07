const { Sequelize } = require('sequelize');
require('dotenv').config();

// Database connection configuration using environment variables
const sequelize = new Sequelize(process.env.loan_forecasting, process.env.loan_user, process.env.password, {
    host: process.env.DB_HOST, // Use DB_HOST instead of localhost
    port: process.env.DB_PORT || 5432, // Default to 5432 if DB_PORT is not defined
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize;
