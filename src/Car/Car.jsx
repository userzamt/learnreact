/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Car.css";

export default (props) =>{
    console.log("Car");
    return(
        <article 
            className="block" 
            style={{
                boxShadow: "0 10px 7px rgba(0,0,0,0.7)"
        }}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <input type="text"  onChange={props.onChangeName} value={props.title}/>
            <button onClick={props.onDelete}>Delete</button>
            <small>{props.referens}</small>
        </article>
    );
};