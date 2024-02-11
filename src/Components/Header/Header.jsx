import './Header.css'
import "../../Components/style.css"
import React from 'react';
export default function Header(){
    return(
        <header className="header-container">
            <div className="home-text">Home</div>
            <div className="header-items">
                <p className="header-text">About Me</p>
                <p className="header-text">Projects</p>
                <p className="header-text">Extras</p>
            </div>
        </header>
    );
}