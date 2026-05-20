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
import super_logo from '../../assets/work_logos/super_logo.jpg';


function WorkContent() {
    return (
        <div className="work-container">
            <LazyLoad className="section-title fadeBot">Work Experience</LazyLoad>
            <div className="tech-bar">
                <a target="_blank" href="https://www.python.org"><img className="tech-img" alt="Python icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /></a>
                <a target="_blank" href="https://html.spec.whatwg.org/"><img className="tech-img" alt="HTML icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /></a>
                <a target="_blank" href="https://www.w3.org/Style/CSS/"><img className="tech-img" alt="CSS icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" /></a>
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img className="tech-img" alt="Javascript icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /></a>
                <a target="_blank" href="https://flask.palletsprojects.com/en/3.0.x/"><img className="tech-img" alt="Flask icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" /></a>
                <a target="_blank" href="https://git-scm.com/"><img className="tech-img" alt="Git icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /></a>
                <a target="_blank" href="https://code.visualstudio.com/"><img className="tech-img" alt="VScode icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" /></a>
                <a target="_blank" href="https://www.figma.com/"><img className="tech-img" alt="Figma icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" /></a>
                <a target="_blank" href="https://www.mysql.com/"><img className="tech-img" alt="Mysql icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" /></a>
                <a target="_blank" href="https://aws.amazon.com/elasticbeanstalk/"><img className="tech-img" alt="AWS Beanstalk icon" src={aws} /></a>
                <a target="_blank" href="https://www.mongodb.com/"><img className="tech-img" alt="Mongodb icon" src=" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" /></a>
                <a target="_blank" href="https://go.dev/"><img className="tech-img" alt="Golang icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" /></a>
                <a target="_blank" href="https://www.docker.com/"><img className="tech-img" alt="Docker icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" /></a>
                <a target="_blank" href="https://www.portainer.io/"><img className="tech-img" alt="Portainer icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/portainer/portainer-original.svg" /></a>
                <a target="_blank" href="https://vuejs.org/"><img className="tech-img" alt="Vue icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" /></a>
                <a target="_blank" href="https://kubernetes.io/"><img className="tech-img" alt="K8 icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" /></a>
                <a target="_blank" href="https://kafka.apache.org/"><img className="tech-img" alt="Kafka icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" /></a>
                <a target="_blank" href="https://redis.io/"><img className="tech-img" alt="Redis icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" /></a>
            </div>
            <div className="work-exp-container">
                <WorkExperience
                    logo={super_logo}
                    name="Super.com"
                    role="Software Engineer Intern"
                    date="Jan 2026 - Apr 2026"
                    responsibilities={[
                        "- Automated ETL workflows to ingest Amplitude Experiment data into Snowflake and published A/B testing results; modeled and implemented event-focused DDTracing to monitor feature rollouts",
                        "- Developed Kafka consumer service to process and route analytic events to various third-party platforms",
                        "- Refactored legacy in-memory registry caches into Redis for better scalability and visibility",
                        "- Implemented backend consumer event sampling to reduce Amplitude ingestion, saving $40K annually",
                        "- Consolidated and incrementalized scheduled dbt models to increase efficiency by 97%",
                        "- Designed amenities taxonomy and mapped third-party data into a unified schema; built supporting data models and internal tooling for filtering and downstream management",
                        "- Authored automated UTM URL generator to standardize campaign tracking for the marketing department",
                    ]}
                />
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

export default function WorkPage() {
    return (
        <>
            <WorkContent />
            <Header />
            <Footer />
        </>
    );
}