import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);
export const submitLoanApplication = (data) => axios.post(`${API_URL}/loan/apply`, data);
export const predictIncome = (data) => axios.post(`${API_URL}/prediction/forecast`, data);
