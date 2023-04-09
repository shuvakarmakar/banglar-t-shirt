import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h1>This is header</h1>
            <Link to="/">Home</Link>
            <Link to="/grandpa">GrandPa</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;