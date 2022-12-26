/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Car.css";

export default (props) =>{
    console.log("Car");
    return(
        <article className="block">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button onClick={props.onChangeTitle}>Change</button>
            <small>{props.referens}</small>
        </article>
    );
};