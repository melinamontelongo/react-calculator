import React from "react";
import "../stylesheets/ButtonClear.css";
const ButtonClear = (props) => {
 return (
    <button className="btn-clear" onClick={props.clearHandler}>
        {props.children}
    </button>
 );
};

export default ButtonClear;