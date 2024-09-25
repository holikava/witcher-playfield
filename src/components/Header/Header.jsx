import React, { useState } from "react";
import "./Header.css";
import "./../../App/App.css";
import Button from "../Button/Button";
import Timer from "../Timer/Timer";
import Battlefield from "../Battlefield/Battlefield";

const Header = () => {
    const [startBattle, setStartBattle] = useState(false);

    const openBattlefield = () => {
        if (!startBattle) {
            setStartBattle(true);
            document.getElementById("header-fight-btn").innerText =
                "Finish the fight";
        } else {
            setStartBattle(false);
            document.getElementById("header-fight-btn").innerText =
                "Let`s fight!";
            document.querySelector(".battlefield-screen").innerHTML = "";
        }
    };

    return (
        <>
            <header className='header'>
                <div className='header-timer'>
                    <Timer />
                </div>
                <div className='header-fight-btn'>
                    <Button
                        text='Let`s fight!'
                        onClick={openBattlefield}
                        id='header-fight-btn'
                    />
                </div>
                <div className='header-save-btn'>
                    <Button text='Save game' />
                </div>
            </header>
            {startBattle && <Battlefield />}
        </>
    );
};

export default Header;
