import React from 'react';
import './Work.css'
import '../../Components/style.css'
import LazyLoad from '../../Components/LazyLoad';
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer';

import aws from '../../assets/beanstalk.png';
import silai_logo from '../../assets/work_logos/silai_logo.png';
function WorkContent(){
    return(
        <div className="work-container">
            <LazyLoad className="section-title fadeBot">Work Experience</LazyLoad>
            <div className="tech-bar">
                <a target="_blank" href="https://www.python.org"><img className="tech-img" alt-text="Python icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /></a>
                <a target="_blank" href="https://html.spec.whatwg.org/"><img className="tech-img" alt-text="HTML icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /></a>
                <a target="_blank" href="https://www.w3.org/Style/CSS/"><img className="tech-img" alt-text="CSS icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" /></a>
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img className="tech-img" alt-text="Javascript icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /></a>
                <a target="_blank" href="https://flask.palletsprojects.com/en/3.0.x/"><img className="tech-img" alt-text="Flask icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" /></a>
                <a target="_blank" href="https://git-scm.com/"><img className="tech-img" alt-text="Git icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /></a>
                <a target="_blank" href="https://code.visualstudio.com/"><img className="tech-img" alt-text="VScode icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" /></a>
                <a target="_blank" href="https://www.figma.com/"><img className="tech-img" alt-text="Figma icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"  /></a>
                <a target="_blank" href="https://www.mysql.com/"><img className="tech-img" alt-text="Mysql icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"  /></a>
                <a target="_blank" href="https://aws.amazon.com/elasticbeanstalk/"><img className="tech-img" alt-text="AWS Beanstalk icon" src={aws}/></a>
            </div> 
            <div className="work-exp-container">
                <div className="work-exp">
                    <img className="company_logo" src={silai_logo}></img>
                    <div className="work-text">
                        <div className="top-row">
                            <div id="work-name">Silai</div>
                        </div>
                        <div id="work-role">Full Stack Developer</div>
                        <div id="work-date">Jan 2024 - Apr 2024</div>
                        <div className="work-content">
                            <p>- Built mobile webpages utilizing HTML, CSS, JavaScript, and Jinja</p>
                            <p>- Engineered and integrated a backend database using MySQL.</p>
                            <p>- Designed REST API endpoints using Flask</p>
                            <p>- Deployed applications to AWS Beanstalk and managed databases on AWS RDS, optimizing cloud operations and scalability.</p>
                            <p>- Developed a gyroscope verification tool with TensorFlow to validate camera input data accuracy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function (){
    return(
        <>
            <WorkContent></WorkContent>
            <Header></Header>
            <Footer></Footer>
        </>
    );
}