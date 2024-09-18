import React from "react";
import "./ButtonIcon.css";
import "./../../App/App.css";

const ButtonIcon = ({ icon, onClick }) => {
    return (
        <button className='icon-btn' onClick={onClick}>{icon}</button>
    );
};

export default ButtonIcon;
