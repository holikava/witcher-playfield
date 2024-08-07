import React from "react";
import Button from "../Button/Button";
import "./StartPage.css";
import "./../../App/App.css";
import image from "../../assets/start-page-witcher.jpg";

const StartPage = () => {
    return (
        <div className='start-page'>
            <div className='start-page-content'>
                <img
                    className='start-page-img'
                    src={image}
                    alt='witcher emblem'
                />
                <div className='start-page-controls'>
                    <div className='start-page-input'>
                        <label for='start-page-input'>Players:</label>
                        <input
                            id='start-page-input'
                            type='number'
                            min='1'
                            max='8'
                            step='1'
                            placeholder='1'
                            required
                        />
                    </div>
                    <Button text='Start game' className='start-page-btn' />
                </div>
            </div>
        </div>
    );
};

export default StartPage;
