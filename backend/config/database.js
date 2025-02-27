const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.loan_forecasting, process.env.loan_user, process.env.password, {
    host: process.env.localhost,
    port: process.env.5432,
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize;
