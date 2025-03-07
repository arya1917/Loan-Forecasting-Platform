import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default Header;
