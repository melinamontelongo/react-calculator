import React from "react";
import "../stylesheets/Button.css";

const Button = (props) =>{
    //Determine if value is an operator
const isOperator = value => {
    return isNaN(value) && (value !== ".") && (value !== "=")
    };

    return(
        <button /* assign className in common with all buttons and another one depending on whether it's an operator*/
            className={`btn-container ${isOperator(props.children) ? "operator" : ""}`.trimEnd()}
            onClick={() => props.clickHandler(props.children)}>
            {props.children}
        </button>
    );
};

export default Button;