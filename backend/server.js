const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/loan', require('./routes/loanRoutes'));
app.use('/api/prediction', require('./routes/predictionRoutes'));

// Connect to PostgreSQL and start server
sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch(err => console.error('Database connection failed:', err));
