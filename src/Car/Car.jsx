import React from "react";
import styles from "./Car.module.css";
import withClass from "../hoc/withClass";
import PropTypes from "prop-types";


class Car extends React.Component {

    constructor(props){
        super(props);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if(this.props.index === 0)
            this.inputRef.current.focus();
    }

    render() {
        const carClasses = [styles.input];

        console.log(carClasses, styles);

        if(this.props.title !== ""){
            carClasses.push(styles.green);
        } else {
            carClasses.push(styles.red);
            carClasses.push(styles.bold);
        }

        if(this.props.title.length > 3) {
            carClasses.push(styles.bold);
        }

        return(
            <>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <input 
                    ref={this.inputRef}
                    type="text"  
                    onChange={this.props.onChangeName} 
                    value={this.props.title}
                    className={carClasses.join(" ")}
                />
                <button onClick={this.props.onDelete}>Delete</button>
                <small>{this.props.referens}</small>
            </>
        );
    }
}

Car.propTypes = {    
    index: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    referens: PropTypes.string
};

export default withClass(Car, styles.Car);