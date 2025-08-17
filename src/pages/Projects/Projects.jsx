import React, { useState } from 'react';
import './Projects.css';
import '../../Components/style.css';

import Header from "../../Components/Header/Header";
import LazyLoad from '../../Components/LazyLoad';
import Footer from '../../Components/Footer/Footer';
import ProjectSlide from '../../Components/ProjectSlide/ProjectSlide';

import smartnose from '../../assets/project-imgs/smartnose/smartnose.png';
import smartnoseDG from '../../assets/project-imgs/smartnose/smartnose-diagram.png';
import stm32 from '../../assets/project-imgs/stm32.png';
import website1 from '../../assets/project-imgs/website_new/website1.png'
import website2 from '../../assets/project-imgs/website_new/website2.png'
import uploadify1 from '../../assets/project-imgs/uploadify/uploadify1.png'
import uploadify2 from '../../assets/project-imgs/uploadify/uploadify2.png'
import uploadify3 from '../../assets/project-imgs/uploadify/uploadify3.png'
import farming1 from '../../assets/project-imgs/farming/farming1.png'
import farming2 from '../../assets/project-imgs/farming/farming2.png'
import devo1 from '../../assets/project-imgs/devolotics/devo1.png'
import devo2 from '../../assets/project-imgs/devolotics/devo2.jpg'
import devo3 from '../../assets/project-imgs/devolotics/devo3.jpg'
import devo4 from '../../assets/project-imgs/devolotics/devo4.jpg'
import devo5 from '../../assets/project-imgs/devolotics/devo5.png'
import maze1 from '../../assets/project-imgs/mazewalker/maze1.png'
import maze2 from '../../assets/project-imgs/mazewalker/maze2.png'
import uploadify11 from '../../assets/project-imgs/uploadify/uploadify11.png'
import uploadify12 from '../../assets/project-imgs/uploadify/uploadify12.png'
import doorbot1 from '../../assets/project-imgs/doorbot/doorbot1.jpg'
import doorbot2 from '../../assets/project-imgs/doorbot/doorbot2.jpg'
import websiteold from '../../assets/project-imgs/oldwebsite/oldwebsite.png'
import wip from '../../assets/project-imgs/wip.jpg'
import freq from '../../assets/project-imgs/wsb/freq.png'
import nvda from '../../assets/project-imgs/wsb/nvda.png'
import nvda_real from '../../assets/project-imgs/wsb/nvda_real.png'


function ProjectsContent() {
    const wipCarousel = [wip]
    const smartNoseCarousel = [smartnose, smartnoseDG]
    const website_newCarousel = [website2, website1]
    const uploadifyCarousel = [uploadify1, uploadify2, uploadify3, uploadify11, uploadify12]
    const farmingCarousel = [farming1, farming2]
    const devoloticsCarousel = [devo5, devo2, devo1, devo3, devo4]
    const mazeCarousel = [maze1, maze2]
    const doorbotCarousel = [doorbot1, doorbot2]
    const website_oldCarousel = [websiteold]
    const wsb = [freq, nvda, nvda_real]

    return (
        <div className="projects-container">
            <LazyLoad className="section-title fadeBot">Projects</LazyLoad>
            <div className="tech-bar">
                <a target="_blank" href="https://docs.oracle.com/en/java/"><img className="tech-img" alt-text="java icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" /></a>
                <a target="_blank" href="https://devdocs.io/cpp/"><img className="tech-img" alt-text="C++ icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" /></a>
                <a target="_blank" href="https://www.python.org"><img className="tech-img" alt-text="Python icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /></a>
                <a target="_blank" href="https://devdocs.io/c/"><img className="tech-img" alt-text="C icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" /></a>
                <a target="_blank" href="https://html.spec.whatwg.org/"><img className="tech-img" alt-text="HTML icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /></a>
                <a target="_blank" href="https://www.w3.org/Style/CSS/"><img className="tech-img" alt-text="CSS icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" /></a>
                <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img className="tech-img" alt-text="Javascript icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /></a>
                <a target="_blank" href="https://flask.palletsprojects.com/en/3.0.x/"><img className="tech-img" alt-text="Flask icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" /></a>
                <a target="_blank" href="https://git-scm.com/"><img className="tech-img" alt-text="Git icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /></a>
                <a target="_blank" href="https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html"><img className="tech-img stm32" alt-text="STM32 icon" src={stm32} /></a>
                <a target="_blank" href="https://react.dev/"><img className="tech-img" alt-text="Reactjs icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /></a>
                <a target="_blank" href="https://vitejs.dev/"><img className="tech-img" alt-text="Vitejs icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></a>
                <a target="_blank" href="https://go.dev/"><img className="tech-img" alt-text="Golang icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" /></a>
                <a target="_blank" href="https://www.mongodb.com/"><img className="tech-img" alt-text="Mongodb icon" src=" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" /></a>

            </div>
            <ProjectSlide
                images={wipCarousel}
                title="BlueTrinket"
                date="Jul 2025"
                description={[
                    "Working on a fog-of-war app hopefully done by the end of the year...",
                    "First project in mobile/app development! More to come."
                ]}
                skills={[
                    { name: "Go", level: 10 }, { name: "Swift", level: 7 }, { name: "MongoDB", level: 8 }
                ]}
                sourceLink="https://github.com/DrakeDong0/BlueTrinket"
            />
            <ProjectSlide
                images={wsb}
                title="Inverse r/WallStreetBets Trader"
                date="Dec 2024"
                description={[
                    "This is a trading bot that analyzes posts on r/wallstreetbets and takes inverse positions on the most frequent YOLOs. Over the past couple of months, I've discovered the world of options trading. On the popular subreddit r/WallStreetBets, there is a long running joke to avoid analysis posts and to do the opposite of what the subreddit recommends. I wanted to test this.",
                    "On the other hand, it was a good opportunity to do try something outside of typical web development, and I really enjoyed it."
                ]}
                skills={[
                    { name: "Python", level: 6 },
                ]}
                sourceLink="https://github.com/DrakeDong0/trader"
            />
            <ProjectSlide
                images={wipCarousel}
                title="Eye Tracker"
                date="May 2024"
                description={[
                    "This eye tracker uses a mediapipe face mesh with OpenCV to track eye movement in real-time, in order to simulate mouse commands based on iris positions and blinking patterns.",
                    "This project is something that doesn't feel fully complete just yet. I'm not as focused on AI/ML skills right now, but I'm hoping that I could expand the functionality/effectiveness of this later on. I wanted to use this to play CSGO, but I think the anticheat would've caught me red handed."
                ]}
                skills={[
                    { name: "Python", level: 6 },
                ]}
                sourceLink="https://github.com/DrakeDong0/trader"
            />
            <ProjectSlide
                images={website_newCarousel}
                title="Personal Website"
                date="Feb 2024"
                description={[
                    "This website was an application of the react skills I learned from Uploadify. Before this, I also held the title of having the lamest website between my friends. This time around, I focused more on experimenting with web development concepts like lazy loading, as well as responsiveness.",
                    "I also made a quick square-image-generator script in python that quickly crops or resizes an image for my galleries. There aren't many fancy features, but you might notice the home page being a little different sometimes."
                ]}
                skills={[
                    { name: "ReactJS", level: 1 },
                    { name: "Vite", level: 2 }
                ]}
                sourceLink="https://github.com/DrakeDong0/DrakeDong0.github.io"
            />
            <ProjectSlide
                images={uploadifyCarousel}
                title="Uploadify"
                date="Jan 2024"
                description={[
                    "Uploadify is a spotify web app that imports/exports users' spotify playlists. Selected playlists are downloaded in a .json format and can be easily imported into new accounts.",
                    "The main challenge was working with OAuth 2.0, learning token exchanges, as well as web APIs. Lots of headaches there. This was also the first time learning ReactJS and javascript, along with web development. Unfortunately, this app likely won't be launched unless it approved by Spotify."
                ]}
                skills={[
                    { name: "Node", level: 3 },
                    { name: "ReactJS", level: 1 }
                ]}
                sourceLink="https://github.com/DrakeDong0/Uploadify"
            />
            <ProjectSlide
                images={smartNoseCarousel}
                title="SmartNose"
                date="Nov 2023"
                description={[
                    "The SmartNose is a rotten food detector built around an STM32F401RE Microcontroller and multiple MQ-series gas sensors made by Ivan Korneychuk and I for our ECE198 Project studio course.",
                    "When activated, the device reads and stores various gas concentrations in the air in an array, which is then sorted. The standard deviation is calculated and used along with the z-score to remove outliers. Buzzers and LEDs are sounded if the average PPM is above a threshold."
                ]}
                skills={[
                    { name: "C", level: 4 },
                    { name: "STM32", level: 6 }
                ]}
                sourceLink="https://github.com/DrakeDong0/SmartNose"
            />
            <ProjectSlide
                images={farmingCarousel}
                title="Farming Simulator"
                date="Jun  2023"
                description={[
                    "This game is a object-oriented farming game inspired by the Zen Garden in Plants vs Zombies. It was made using Java Processing, a graphics library, for my Grade 12 Computer Science Project.",
                    "The biggest hurdle was how to coordinating and handling interactions between each object and the environment around it, such as the season and time."
                ]}
                skills={[
                    { name: "Java", level: 5 },
                    { name: "Processing", level: 3 }
                ]}
                sourceLink="https://github.com/DrakeDong0/Farming-Game"
            />
            <ProjectSlide
                images={devoloticsCarousel}
                title="Devolotics"
                date="Apr 2023"
                description={[
                    "I was a builder and driver of our FIRST Tech Challenge team, 19498 Devolotics, I designed, programmed and tested various components of the robot, with a primary focus on the drivetrain.",
                    "Our robot featured a vertical four bar extension, as well using roadrunner and dead wheel odometry for movement. I'm proud to say that we were among the two Ontario teams to qualify for the World Championships in Houston, Texas, making us the first to do so in our school board's history."
                ]}
                skills={[
                    { name: "Java", level: 5 }
                ]}
                sourceLink="https://devolotics.github.io/"
            />
            <ProjectSlide
                images={website_oldCarousel}
                title="Old Personal Website"
                date="Jul  2022"
                description={[
                    "This website was my first encounter with web development, being a lightweight project with few css attributes. During this project, I also began learning git for code management. ",
                    "Stuck exiting vim..."
                ]}
                skills={[
                    { name: "Jekyll", level: 2 },
                    { name: "HTML/CSS", level: 1 },
                    { name: "Django", level: 3 }
                ]}
                sourceLink="https://github.com/DrakeDong0/DrakeDong0-old.github.io"
            />
            <ProjectSlide
                images={mazeCarousel}
                title="Maze Walker"
                date="Jun  2022"
                description={[
                    "This is a 2D dungeon crawler made using Pygame Zero as a submission for my grade 11 Computer Science course. ",
                    "The main technical part was building the maze layouts, which compiled a map using a two-dimensional array in the code. Other features included patrolling hostiles, interactive doors & maps, and an optional fog of war."
                ]}
                skills={[
                    { name: "Python", level: 6 },
                ]}
                sourceLink="https://github.com/DrakeDong0/Maze-Walker"
            />
            <ProjectSlide
                images={doorbotCarousel}
                title="DoorBot"
                date="May  2022"
                description={[
                    "The DoorBot is a door opening device that I made for my Grade 11 Computer Engineering course. Using a motor, audio sensors and cardboard, this project was built using arduino and java.",
                    "Building the bot around a clamp made the device portable and compatible with many types of dimensions and floor materials. Unfortunately, two arduinos were hurt in the making of this project."
                ]}
                skills={[
                    { name: "Java", level: 5 },
                    { name: "Arduino", level: 2 }
                ]}
                sourceLink=""
            />
        </div>
    );
}

export default function () {
    return (
        <>
            <ProjectsContent></ProjectsContent>
            <Header></Header>
            <Footer></Footer>
        </>
    );
}