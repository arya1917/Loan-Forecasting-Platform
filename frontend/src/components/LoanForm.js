import React, { useState } from 'react';
import { predictIncome } from '../services/api';

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
        <div>
            <h1>Predict Your Future Income</h1>
            <form onSubmit={handleSubmit}>
                <input name="education" onChange={handleChange} placeholder="Education Level" />
                <input name="jobTitle" onChange={handleChange} placeholder="Job Title" />
                <input name="location" onChange={handleChange} placeholder="Location" />
                <input name="skills" onChange={handleChange} placeholder="Skills" />
                <input name="experience" onChange={handleChange} placeholder="Experience" />
                <input name="status" onChange={handleChange} placeholder="Employment Status" />
                <button type="submit">Predict</button>
            </form>
            {prediction && <h2>Predicted Income: ${prediction}</h2>}
        </div>
    );
};

export default LoanForm;
