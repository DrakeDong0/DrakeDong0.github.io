import React from 'react';
import './Extras.css'
import '../../Components/style.css'


import Header from "../../Components/Header/Header";

function ExtrasContent(){
    return(
        <div className="extras-container">
            <h1>test</h1>
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