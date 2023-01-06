import React from "react";
import "./Counter.css";
import Auxiliary from "../hoc/Auxiliary";


export default class Counter extends React.Component {
    state= {
        count: 0
    };

    addCounter = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <Auxiliary>
                <h2>Counter: {this.state.count}</h2>
                <button className="addButton" onClick={this.addCounter}>+</button>
                <button className="subButton" onClick={() => this.setState({count: this.state.count - 1})}>-</button>
            </Auxiliary>
        );
    };
};