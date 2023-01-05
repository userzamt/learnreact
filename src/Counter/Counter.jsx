import React from "react";
import "./Counter.css";


export default class Counter extends React.Component {
    state= {
        count: 0
    };

    addCounter = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return [
            <h2 key={1}>Counter: {this.state.count}</h2>,
            <button key={2} className="addButton" onClick={this.addCounter}>+</button>,
            <button key={3} className="subButton" onClick={() => this.setState({count: this.state.count - 1})}>-</button>
        ];
    };
};