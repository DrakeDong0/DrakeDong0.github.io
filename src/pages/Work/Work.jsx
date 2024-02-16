import React from 'react';
import './Work.css'
import '../../Components/style.css'


import Header from "../../Components/Header/Header";

function WorkContent(){
    return(
        <div className="extras-container">
            <h1>Work</h1>
        </div>
    );
}

export default function (){
    return(
        <>
            <WorkContent></WorkContent>
            <Header></Header>
        </>
    );
}