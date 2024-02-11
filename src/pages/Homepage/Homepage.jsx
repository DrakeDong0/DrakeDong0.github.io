import React, { useEffect } from "react"

import "./Homepage.css"
import "../../Components/style.css"
import "../../pages/Homepage/text-animation.css"

import Header from "../../Components/Header/Header"
import ProfilePicture from '../../assets/pfp.jpg'
import bg from '../../assets/bg-video.mp4';



function HomeContent(){
    useEffect(() => {
        import('../../../src/js/weather.js');
        import('../../../src/js/Homepage.js');
      }, []);
    return(
        <div className="container">
            <div id="black-cover"></div>
            <div class="op-container">
                <div class="box">
                    <div class="title">
                        <span class="block"></span>
                        <h1 id="title-text"><span></span></h1>
                    </div>
                    <div class="role">
                        <div class="block"></div>
                        <p>It's nice to meet you.</p>
                    </div>

                </div>
            </div>
            <div className="weather-info-container">  
                <h1 id="temp"></h1>
                <span id="weather_icon"></span>
                <div id="location-text"></div>
            </div>
            <div className="video-container">
                <video loop autoPlay muted id='bg-video'>
                    <source src={bg} type="video/mp4" />
                </video>
            </div>
            <button>
                <span class="material-symbols-outlined" id="down-arrow">
                    keyboard_arrow_down
                </span>
            </button>
            <div className="profile-container">
                <img id="pfp" src={ProfilePicture} alt='Drake profile picture'></img>
                <div className="title-container">
                    <div className="title-text">Hi! My name is Drake</div>
                    <div>I'm a first year student at the University of Waterloo.</div>
                    <div>This website is currently under construction!</div>
                </div>
            </div>
        </div>
    );
}

export default function Home(){
    return(
        <>
            <HomeContent></HomeContent>
            <Header></Header>
        </>
    );
}

