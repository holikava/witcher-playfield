import React, { useState } from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import MemberCard from "../MemberCard/MemberCard";
import Battlefield from "../Battlefield/Battlefield";

import "./Playfield.css";
import "./../../App/App.css";

const icons = {
    addBtn: (
        <img width="30" height="30" src="https://img.icons8.com/quill/30/plus-math.png" alt="plus-math"/>
    ),
};

const Playfield = () => {
    const [playersCount, setPlayersCount] = useState(0);
    const [enemiesCount, setEnemiesCount] = useState(0);

    return (
        <>
            <div className='playfield'>
                <div className='playfield-cards'>
                    <div className='playfield-heading'>
                        <h2 className='playfield-title'>Players</h2>
                        <div className='playfield-add-btn'>
                            <ButtonIcon
                                icon={icons.addBtn}
                                onClick={() =>
                                    setPlayersCount(playersCount + 1)
                                }
                            />
                        </div>
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
                <div className='playfield-cards'>
                <div className='playfield-heading'>
                        <h2 className='playfield-title'>Enemies</h2>
                        <div className='playfield-add-btn'>
                            <ButtonIcon
                                icon={icons.addBtn}
                                onClick={() =>
                                    setEnemiesCount(enemiesCount + 1)
                                }
                            />
                        </div>
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
            <Battlefield />
        </>
    );
};

export default Playfield;
