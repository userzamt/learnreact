/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Car.css";

export default (props) =>{
    // console.log("Car");
    const carClasses = ["input"];

    if(props.title !== ""){
        carClasses.push("green");
    } else {
        carClasses.push("red");
        carClasses.push("bold");
    }

    if(props.title.length > 3) {
        carClasses.push("bold");
    }

    return(
        <article className="Car">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <input 
                type="text"  
                onChange={props.onChangeName} 
                value={props.title}
                className={carClasses.join(" ")}
            />
            <button onClick={props.onDelete}>Delete</button>
            <small>{props.referens}</small>
        </article>
    );
};