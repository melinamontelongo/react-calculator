import React from "react";
import "../stylesheets/Alert.css";

const Alert = ({ isVisible, visibilityHandler }) => {
    return (
        <div id="myModal" className={`modal ${isVisible ? "" : "invisible"}`}>
            <div className="modal-content">
                <span className="close" onClick={visibilityHandler}>&times;</span>
                <p>Enter a valid operation, please.</p>
            </div>
        </div>
    );
};

export default Alert;