import React from "react";
import "./ButtonIcon.css";
import "./../../App/App.css";

const ButtonIcon = ({icon}) => {
    return (
        <button className='icon-btn'>{icon}</button>
    );
};

export default ButtonIcon;
