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
            "Close battlefield";
        } else {
            setStartBattle(false);
            document.getElementById("header-fight-btn").innerText =
            "Open battlefield";
        }
        document.querySelector(".battlefield").classList.toggle("active");
    };

    const saveMembersStats = (e) => {
        e.preventDefault();
        const membersArray = document.querySelectorAll('.member-card');
        membersArray.forEach((item) => {
            if (item.id) {
                if (localStorage.getItem(item.id)) {
                    localStorage.removeItem(item.id);
                }
                let memberStats = {};
                const inputs = item.querySelectorAll('input');
                inputs.forEach(input => memberStats[input.name] = input.value);
                memberStats.avatar = item.querySelector('.member-card-img img').src;
                localStorage.setItem(item.id, JSON.stringify(memberStats))
            }
            console.log(JSON.parse(localStorage.getItem(item.id)));
        })
    };

    return (
        <>
            <header className='header'>
                <div className='header-timer'>
                    <Timer />
                </div>
                <div className='header-fight-btn'>
                    <Button
                        text='Open battlefield'
                        onClick={openBattlefield}
                        id='header-fight-btn'
                    />
                </div>
                <div className='header-save-btn'>
                    <Button text='Save players stats' onClick={saveMembersStats} />
                </div>
            </header>
            <Battlefield />
        </>
    );
};

export default Header;
