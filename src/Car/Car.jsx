/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Car.css";


class Car extends React.Component {

    render() {
        // console.log("Car");
        const carClasses = ["input"];

        if(this.props.title !== ""){
            carClasses.push("green");
        } else {
            carClasses.push("red");
            carClasses.push("bold");
        }

        if(this.props.title.length > 3) {
            carClasses.push("bold");
        }

        return(
            <article className="Car">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <input 
                    type="text"  
                    onChange={this.props.onChangeName} 
                    value={this.props.title}
                    className={carClasses.join(" ")}
                />
                <button onClick={this.props.onDelete}>Delete</button>
                <small>{this.props.referens}</small>
            </article>
        );
    }
}

export default Car;