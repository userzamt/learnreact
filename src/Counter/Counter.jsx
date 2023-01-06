import React from "react";
import "./Counter.css";
import Auxiliary from "../hoc/Auxiliary";


export default class Counter extends React.Component {
    state= {
        count: 0
    };

    changeCounter = (val) => {
        this.setState((prevState) => {
            return {
                count: prevState.count + val
            };
        });
    } 

    render() {
        return (
            <Auxiliary>
                <h2>Counter: {this.state.count}</h2>
                <button className="addButton" onClick={() => this.changeCounter(1)}>+</button>
                <button className="subButton" onClick={() => this.changeCounter(-1)}>-</button>
            </Auxiliary>
        );
    };
};