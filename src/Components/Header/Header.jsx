import './Header.css'
import "../../Components/style.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const AboutClick = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => window.scrollTo(0, 900), 100);
    };
    return (
        <header className="header-container">
            <button className="header-text underline" onClick={() => navigate('/')}>Home</button>
            <div className="header-items">
                <button className="header-text underline" onClick={AboutClick}>About Me</button>
                <button className="header-text underline" onClick={() => navigate('/Projects')}>Projects</button>
                <button className="header-text underline" onClick={() => navigate('/Work')}>Work</button>
            </div>
            <div className="invisblock"></div>
        </header>
    );
}