import React from 'react';
import './Work.css'
import '../../Components/style.css'


import Header from "../../Components/Header/Header";

function ExtrasContent(){
    return(
        <div className="extras-container">
            <h1>work in progress</h1>
        </div>
    );
}

export default function (){
    return(
        <>
            <ExtrasContent></ExtrasContent>
            <Header></Header>
        </>
    );
}