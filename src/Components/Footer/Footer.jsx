import React, { useEffect } from 'react';
import './Footer.css';
import LazyLoad from '../LazyLoad';

import resumePDF from '../../../public/Drake_Dong_Resume.pdf'


export default function Footer() {
  return (
    <>
      <div className="footer-bg">
        <LazyLoad className="fadeBot footer-container">
            <div id="vert-line"></div>
            <div className="footer-content1">
                <div>Made by Drake Dong</div>
                <a className="source" href="https://github.com/DrakeDong0/DrakeDong0.github.io" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
            <div className="footer-content2">
                <a href="https://github.com/DrakeDong0" aria-label="Github URL" target="_blank"className="fa-brands fa-github"></a>
                <a href="https://www.linkedin.com/in/drakedong/" aria-label="Linkedin URL" target="_blank"className="fa-brands fa-linkedin"></a>
                <a href="mailto: drakewdong@gmail.com" aria-label="Email URL" target="_blank" className="fa-regular fa-envelope"></a>
                <a href={resumePDF} download="Drake_Dong_Resume.pdf" aria-label="Resume Download"  className="fa-regular fa-file"></a>
            </div>
        </LazyLoad>

      </div>
    </>
  );
}
