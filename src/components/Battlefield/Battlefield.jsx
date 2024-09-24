import React from "react";
import { useState } from "react";
import "./Battlefield.css";

const Battlefield = () => {
    const [memberCount, setMemberCount] = useState([]);

    const countingMembers = () => {
        setMemberCount([
            ...document.querySelectorAll(".battlefield-screen-member"),
        ]);
    };

    const removeMember = (e) => {
        e.preventDefault();
        const targetElem = e.target.closest(".battlefield-screen-member");
        if (targetElem) {
            targetElem.remove();
            setMemberCount([
                ...document.querySelectorAll(".battlefield-screen-member"),
            ]);
        } else {
            return;
        }
    };

    const pointActiveMember = (e) => {
        e.preventDefault();
        const targetElem = e.target.closest(".battlefield-screen-member");
        if (targetElem) {
            [...document.querySelectorAll(".battlefield-screen-member")].map(
                (item) =>
                    item.classList.remove("battlefield-screen-member-active")
            );
            targetElem.classList.add("battlefield-screen-member-active");
        } else {
            return;
        }
    };

    const dragAndDropMember = () => {
        const battlefieldScreen = document.querySelector(".battlefield-screen");
        const members = document.querySelectorAll(".battlefield-screen-member");

        members.forEach((item) => {
            item.draggable = true;
        });

        battlefieldScreen.ondragstart = (e) => {
            e.target.parentElement.classList.add("selected");
        };

        battlefieldScreen.ondragover = (e) => {
            e.preventDefault();

            const activeElement = battlefieldScreen.querySelector(".selected");
            if (!activeElement) return;
            const currentElement = e.target.parentElement;

            const isMoveable =
                activeElement !== currentElement &&
                currentElement.classList.contains("battlefield-screen-member");

            if (!isMoveable) {
                return;
            }

            const nextElement =
                currentElement === activeElement.nextElementSibling
                    ? currentElement.nextElementSibling
                    : currentElement;

            battlefieldScreen.insertBefore(activeElement, nextElement);
        };

        battlefieldScreen.ondragend = (e) => {
            e.target.parentElement.classList.remove("selected");
        };
    };

    return (
        <div className='battlefield'>
            <div className='battlefield-heading'>
                <h3 className='battlefield-title'>Current battle</h3>
            </div>
            <div
                className='battlefield-screen'
                onPointerUp={countingMembers}
                onDoubleClick={removeMember}
                onClick={pointActiveMember}
                onDragStart={dragAndDropMember}
            >
                {memberCount.length === 0 && <h4>Drag players here</h4>}
            </div>
        </div>
    );
};

export default Battlefield;
