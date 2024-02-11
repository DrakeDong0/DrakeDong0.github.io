import './Header.css'
import "../../Components/style.css"

import React from 'react';
import { Link } from 'react-router-dom';
 

export default function Header(){
    return(
        <header className="header-container">
            <Link to="/">
                <button className="home-text">Home</button>
            </Link>
            <div className="header-items">
                <button className="header-text">About Me</button>
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