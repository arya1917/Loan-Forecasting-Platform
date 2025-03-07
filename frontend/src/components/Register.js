import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/register", user);
            alert("Registration successful!");
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <input type="text" name="name" placeholder="Full Name" className="input-field" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" className="input-field" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" className="input-field" onChange={handleChange} />
            <button className="btn" onClick={handleSubmit}>Register</button>
            <p className="footer">Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default Register;
