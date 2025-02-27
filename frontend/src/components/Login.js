import React, { useState } from 'react';
import { loginUser } from '../services/api';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' });

    const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser(user);
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
