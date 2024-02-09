import React, { useEffect } from "react"

import "./Homepage.css"
import "../../Components/style.css"

import Header from "../../Components/Header/Header"
import ProfilePicture from '../../assets/pfp.jpg'
import bg from '../../assets/bg-video.mp4';



function HomeContent(){
    return(
        <div className="container">
            <div className="video-container">
                <video loop autoPlay muted id='bg-video'>
                    <source src={bg} type="video/mp4" />
                </video>
            </div>
            <div className="top-container">
                <img id="pfp" src={ProfilePicture} alt='Drake profile picture'></img>
                <div className="title-container">
                    <div className="title-text">Hi! My name is Drake</div>
                    <div>I'm a first year student at the University of Waterloo.</div>
                    <div>This website is currently under construction!</div>
                </div>
            </div>
            <div className="bot-container">

            </div>
        </div>
    );
}

export default function Home(){
    useEffect(() => {
        document.title = "Uploadify"
    })
    return(
        <>
            <HomeContent></HomeContent>
            <Header></Header>
        </>
    );
}

