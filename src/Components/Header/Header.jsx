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
    const ProjectClick = (e) => {
        e.preventDefault();
        navigate('/Projects');
        window.scrollTo(0, 0);
    };
    const WorkClick = (e) => {
        e.preventDefault();
        navigate('/Work');
        window.scrollTo(0, 0);
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
                    <button className="header-text" onClick={ProjectClick}>Projects</button>
                </Link>
                <Link to="/Work">
                    <button className="header-text" onClick={WorkClick}>Work</button>
                </Link>
            </div>
        </header>
    );
}