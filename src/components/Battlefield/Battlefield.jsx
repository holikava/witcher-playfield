import React from "react";
import { useState } from "react";
import "./Battlefield.css";

const Battlefield = () => {
    const [memberCount, setMemberCount] = useState([]);

    const countingMembers = () => {
        setMemberCount([...document.querySelectorAll('.battlefield-screen-img')])
    }

    const removeMember = (e) => {
        e.preventDefault();
        const targetElem = e.target.closest('.battlefield-screen-img');
        if (targetElem) {
            targetElem.remove();
            setMemberCount([...document.querySelectorAll('.battlefield-screen-img')])
        } else {
            return;
        }
    }

    return (
        <div className='battlefield'>
            <div className='battlefield-heading'>
                <h3 className='battlefield-title'>Current battle</h3>
            </div>
            <div className='battlefield-screen' onPointerUp={countingMembers} onDoubleClick={removeMember}>
                {memberCount.length === 0 && <h4>Drag players here</h4>}
            </div>
        </div>
    );
};

export default Battlefield;
