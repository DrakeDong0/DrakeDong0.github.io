import React from 'react';
import './Work.css'
import '../../Components/style.css'
import LazyLoad from '../../Components/LazyLoad';
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer';
import WorkExperience from '../../Components/WorkSlide/WorkSlide';

import aws from '../../assets/workpage/beanstalk.png';
import silai_logo from '../../assets/work_logos/silai_logo.png';
import games_instutite_logo from '../../assets/work_logos/games_instutite_logo.png';
import emailgistics_logo from '../../assets/work_logos/emailgistics_logo.jpg';


function WorkContent() {
    return (
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
                <a target="_blank" href="https://www.figma.com/"><img className="tech-img" alt-text="Figma icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" /></a>
                <a target="_blank" href="https://www.mysql.com/"><img className="tech-img" alt-text="Mysql icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" /></a>
                <a target="_blank" href="https://aws.amazon.com/elasticbeanstalk/"><img className="tech-img" alt-text="AWS Beanstalk icon" src={aws} /></a>
                <a target="_blank" href="https://www.mongodb.com/"><img className="tech-img" alt-text="Mongodb icon" src=" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" /></a>
                <a target="_blank" href="https://go.dev/"><img className="tech-img" alt-text="Golang icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" /></a>
                <a target="_blank" href="https://www.docker.com/"><img className="tech-img" alt-text="Docker icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" /></a>
                <a target="_blank" href="https://www.portainer.io/"><img className="tech-img" alt-text="Portainer icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/portainer/portainer-original.svg" /></a>
                <a target="_blank" href="https://vuejs.org/"><img className="tech-img" alt-text="Vue icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" /></a>
                <a target="_blank" href="https://kubernetes.io/"><img className="tech-img" alt-text="K8 icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" /></a>
            </div>
            <div className="work-exp-container">
                <WorkExperience
                    logo={emailgistics_logo}
                    name="Emailgistics"
                    role="Software Engineer Intern"
                    date="May 2025 - Aug 2025"
                    responsibilities={[
                        "- Implemented a system-wide upgrade of 15+ backend microservices migrating to MongoDB Go driver v2 and JWT v5, refactoring core authentication and database workflows to address breaking API changes",
                        "- Leveraged Go channels to build concurrent, load-balanced email processing pipelines with RabbitMQ, handling 2,000+ messages per inbox and up to 10 publisher channels for high-throughput processing",
                        "- Refined automated monitoring of performance and workflow metrics across three logging destinations, powering a Vue3 analytics dashboard with up to 25 configurable gauges to optimize system performance",
                        "- Strengthened security by developing a new service registry and implementing SSRF validation for webhook endpoints, safeguarding 270+ request patterns handling 2,000+ daily requests",
                    ]}
                />
                <WorkExperience
                    logo={games_instutite_logo}
                    name="UWaterloo - Games Institute"
                    role="Full Stack Developer Intern"
                    date="Sept 2024 - Dec 2024"
                    responsibilities={[
                        "- Built 15 REST APIs for client and database CRUD operations using Golang and MongoDB",
                        "- Launched product to production with Docker, Traefik, and Portainer for containerization and routing",
                        "- Created a backup script that enabled direct database modifications, saving the data team over 100 hours",
                        "- Refactored over 2000 lines of frontend code using React and Tailwind",
                    ]}
                />
                <WorkExperience
                    logo={silai_logo}
                    name="Silai"
                    role="Full Stack Developer Intern"
                    date="Jan 2024 - Apr 2024"
                    responsibilities={[
                        "- Built client facing web pages utilizing HTML, CSS, JavaScript, and Jinja",
                        "- Engineered and integrated a backend database using MySQL",
                        "- Designed new REST API endpoints using Flask",
                        "- Deployed applications to AWS Beanstalk and managed databases on AWS RDS",
                        "- Developed a gyroscope verification tool with TensorFlow to validate camera input data accuracy"
                    ]}
                />
            </div>
        </div>
    );
}

export default function () {
    return (
        <>
            <WorkContent></WorkContent>
            <Header></Header>
            <Footer></Footer>
        </>
    );
}