import React from "react";
import "./Button.css";
import "./../../App/App.css";

const Button = ({className, text, onClick, id}) => {
    return (
        <button className={className} onClick={onClick} id={id}>{text}</button>
    );
};

export default Button;
