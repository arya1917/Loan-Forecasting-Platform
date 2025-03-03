import React, { useState } from 'react';
import { predictIncome } from '../services/api';
import './LoanForm.css';

const LoanForm = () => {
    const [formData, setFormData] = useState({
        education: '',
        jobTitle: '',
        location: '',
        skills: '',
        experience: '',
        status: ''
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await predictIncome({ features: Object.values(formData) });
        setPrediction(response.data.predicted_income);
    };

    return (
        <div className="glass-container">
            <h1 style={{ textAlign: 'center', color: '#fff' }}>💰 Predict Your Future Income</h1>
            <form onSubmit={handleSubmit}>
                <input name="education" onChange={handleChange} placeholder="🎓 Education Level" required />
                <input name="jobTitle" onChange={handleChange} placeholder="💼 Job Title" required />
                <input name="location" onChange={handleChange} placeholder="📍 Location" required />
                <input name="skills" onChange={handleChange} placeholder="🛠 Skills" required />
                <input name="experience" onChange={handleChange} placeholder="⌛ Experience (years)" required />
                <input name="status" onChange={handleChange} placeholder="🔄 Employment Status" required />
                <button type="submit">🔮 Predict</button>
            </form>
            {prediction && <h2 style={{ textAlign: 'center', color: '#ffd700' }}>Predicted Income: ${prediction}</h2>}
        </div>
    );
};

export default LoanForm;
