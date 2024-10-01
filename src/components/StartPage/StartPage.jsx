import React, { useState } from "react";
import Button from "../Button/Button";

import "./StartPage.css";
import "./../../App/App.css";
import image from "../../assets/start-page-witcher.jpg";

const StartPage = ({ onClick }) => {

    return (
        <div className='start-page'>
            <div className='start-page-content'>
                <img
                    className='start-page-img'
                    src={image}
                    alt='witcher emblem'
                />
                <Button
                    onClick={onClick}
                    text='Start game'
                    className='start-page-btn'
                    id='start-btn'
                />
            </div>
        </div>
    );
};

export default StartPage;
