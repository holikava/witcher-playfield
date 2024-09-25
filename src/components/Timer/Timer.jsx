import React, { useState, useEffect } from "react";
import "./Timer.css";
import "./../../App/App.css";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const timerIcons = {
    play: (
        <img
            width='30'
            height='30'
            src='https://img.icons8.com/quill/30/play.png'
            alt='play'
        />
    ),
    pause: (
        <img
            width='30'
            height='30'
            src='https://img.icons8.com/quill/30/pause.png'
            alt='pause'
        />
    ),
};

const Timer = () => {
    const [currentSec, setCurrentSec] = useState(0);
    const [timerRun, setTimerRun] = useState(false);

    const timeFormating = (seconds) => {
        return new Date(seconds * 1000).toISOString().slice(11, 19);
    }

    const setActiveTimer = (e) => {
        e.preventDefault();
        if (!timerRun) {
            setTimerRun(true);
        } else {
            setTimerRun(false);
        }
    };

    useEffect(() => {
        if (timerRun) {
            const timer = setInterval(() => {
                setCurrentSec(currentSec + 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [currentSec, timerRun]);

    return (
        <div className='timer'>
            <span className='timer-title'>Session time: </span>
            <span className='timer-time'>{timeFormating(currentSec)}</span>
            <ButtonIcon
                icon={timerRun ? timerIcons.pause : timerIcons.play}
                onClick={setActiveTimer}
            />
        </div>
    );
};

export default Timer;
