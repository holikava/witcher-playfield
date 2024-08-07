import React from "react";
import "./Button.css";
import "./../../App/App.css";

const Button = ({className, text, onClick}) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    );
};

export default Button;
