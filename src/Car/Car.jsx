/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Car.css";

export default (props) =>{
    console.log("Car");
    return(
        <article className="block">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <small>{props.referens}</small>
        </article>
    );
};