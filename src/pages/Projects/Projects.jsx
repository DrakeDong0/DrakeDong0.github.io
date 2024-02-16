import React from 'react';
import './Projects.css'
import '../../Components/style.css'


import Header from "../../Components/Header/Header";

function ProjectsContent(){
    return(
        <div className="projects-container">
            <div className="section-title">Projects</div>
        </div>
    );
}

export default function (){
    return(
        <>
            <ProjectsContent></ProjectsContent>
            <Header></Header>
        </>
    );
}