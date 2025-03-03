const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Fixes CORS issues
app.use(express.json()); // Parse JSON requests

// Import Routes
const authRoutes = require('./routes/authRoutes');
const loanRoutes = require('./routes/loanRoutes');
const predictionRoutes = require('./routes/predictionRoutes');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/loan', loanRoutes);
app.use('/api/prediction', predictionRoutes);

// Test Route to Check API
app.get('/api', (req, res) => {
    res.send({ message: 'API is running!' });
});

// Connect to PostgreSQL and Start Server
sequelize.sync().then(() => {
    console.log('✅ PostgreSQL Database Connected');
    app.listen(process.env.PORT, () => {
        console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
    });
}).catch(err => console.error('❌ Database connection failed:', err));

