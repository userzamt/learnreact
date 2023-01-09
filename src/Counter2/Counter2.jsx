import React from "react";
import { ClikedContext } from "../App";

export default () => {
    return (
        <div>
            <h2>Counter 2</h2>
            <ClikedContext.Consumer>
                {clicked => clicked ? <p>!! clicked !!</p> : null}
            </ClikedContext.Consumer>
        </div>
    );
};