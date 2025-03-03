import axios from 'axios';

// Use the correct backend API URL
const API_URL = 'http://localhost:5000/api';

// Auth Routes
export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);

// Loan Application
export const submitLoanApplication = (data) => axios.post(`${API_URL}/loan/apply`, data);

// Prediction API
export const predictIncome = (data) => axios.post(`${API_URL}/prediction/forecast`, data);
