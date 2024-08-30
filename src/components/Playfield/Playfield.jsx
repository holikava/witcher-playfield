import React, { useState } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import MemberCard from "../MemberCard/MemberCard";

import "./Playfield.css";
import "./../../App/App.css";


const Playfield = () => {
    const [playersCount, setPlayersCount] = useState(0);
    const [enemiesCount, setEnemiesCount] = useState(0);

    return (
        <div className='playfield'>
            <div className='playfield-block'>
                <h2 className='playfield-title'>Players</h2>
                <div className='playfield-add-btn add-players' onClick={() => setPlayersCount(playersCount + 1)}>
                    <ButtonIcon
                        icon={
                            <img width="50" height="50" src="https://img.icons8.com/quill/50/filled-plus-2-math.png" alt="filled-plus-2-math"/>
                        }
                    />
                </div>
                {playersCount === 0 && (
                    <h3 className='playfield-message'>
                        The team is empty. Please add players.
                    </h3>
                )}
                <div className='playfield-list'>
                    {[...Array(playersCount)].map((_, index) => (
                        <MemberCard role='player' key={index} />
                    ))}
                </div>
            </div>
            <div className='playfield-block'>
                <h2 className='playfield-title'>Enemies</h2>
                <div className='playfield-add-btn add-enemies' onClick={() => setEnemiesCount(enemiesCount + 1)}>
                    <ButtonIcon
                        icon={
                            <img width="50" height="50" src="https://img.icons8.com/quill/50/filled-plus-2-math.png" alt="filled-plus-2-math"/>
                        }
                    />
                </div>
                {enemiesCount === 0 && (
                    <h3 className='playfield-message'>
                        Choose your enemies.
                    </h3>
                )}
                <div className='playfield-list'>
                    {[...Array(enemiesCount)].map((_, index) => (
                        <MemberCard role='enemy' key={index} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Playfield;
