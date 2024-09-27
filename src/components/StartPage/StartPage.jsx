import React, { useState } from "react";
import Button from "../Button/Button";

import "./StartPage.css";
import "./../../App/App.css";
import image from "../../assets/start-page-witcher.jpg";

const StartPage = ({ onClick }) => {

    const downloadLastGame = (e) => {
        e.preventDefault();
        
    }

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
                    text='Start new game'
                    className='start-page-btn'
                    id='start-btn'
                />
                <Button
                    onClick={downloadLastGame}
                    text='Continue last game'
                    className='start-page-btn'
                    id='continue-btn'
                />
            </div>
        </div>
    );
};

export default StartPage;
