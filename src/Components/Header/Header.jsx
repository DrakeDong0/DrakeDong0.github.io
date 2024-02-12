import './Header.css'
import "../../Components/style.css"

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
 

export default function Header(){
    const navigate = useNavigate();
    const HomeClick = (e) => {
        e.preventDefault();
        navigate('/');
        window.scrollTo(0, 0);
    };
    const AboutClick = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => window.scrollTo(0, 900), 100); 
      };


    return(
        <header className="header-container">
            <Link to="/">
                <button className="home-text" onClick={HomeClick}>Home</button>
            </Link>
            <div className="header-items">
                <Link to="/">
                    <button className="header-text" onClick={AboutClick}>About Me</button>
                </Link>
                <Link to="/Projects">
                    <button className="header-text">Projects</button>
                </Link>
                <Link to="/Extras">
                    <button className="header-text">Extras</button>
                </Link>
            </div>
        </header>
    );
}