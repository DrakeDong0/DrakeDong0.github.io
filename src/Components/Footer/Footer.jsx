import React from 'react';
import './Footer.css'

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <>
            <div className="footer-container">
            <a className="Source" href="https://github.com/DrakeDong0/DrakeDong0.github.io" target="_blank">&lt; &gt; Source Code</a>
            <p className="credit">© {currentYear} Drake Dong</p>
            </div>
        </>
    );
}