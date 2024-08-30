import React, { useState } from "react";
import "./MemberCard.css";
import "./../../App/App.css";
import Input from "../Input/Input";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const icons = {
    playerHealth: (
        <img
            width='40'
            height='40'
            src='https://img.icons8.com/quill/40/diamond-heart.png'
            alt='diamond-heart'
        />
    ),
    playerArmor: (
        <img
            width='40'
            height='40'
            src='https://img.icons8.com/quill/40/armored-gauntlet.png'
            alt='armored-gauntlet'
        />
    ),
    enemyHealth: (
        <img
            width='40'
            height='40'
            src='https://img.icons8.com/quill/40/punisher.png'
            alt='punisher'
        />
    ),
    enemyArmor: (
        <img
            width='40'
            height='40'
            src='https://img.icons8.com/quill/40/knight-shield.png'
            alt='knight-shield'
        />
    ),
    enemyEvading: (
        <img
            width='40'
            height='40'
            src='https://img.icons8.com/quill/40/sagittarius.png'
            alt='sagittarius'
        />
    ),
    enemyEndurance: (
        <img
            width='40'
            height='40'
            src='https://img.icons8.com/quill/40/volunteering.png'
            alt='volunteering'
        />
    ),
    removeBtn: (
        <img
            width='20'
            height='20'
            src='https://img.icons8.com/quill/20/multiply.png'
            alt='multiply'
        />
    ),
};

const avatars = {
    player: "https://cdn1.ozone.ru/s3/multimedia-3/6584262771.jpg",
    enemy: "https://img.goodfon.ru/original/960x854/c/e6/the-witcher-volk-fon.jpg",
};

const MemberCard = ({ role }) => {
    const [member, setMember] = useState({
        name: "",
        type: "",
        avatar: "",
        health: "",
        armor: "",
        evading: "",
        endurance: "",
    });

    const watchHealthStatus = (e) => {
        const parentElem = e.target.closest(".member-card");
        if (!member.health) {
            return;
        }
        if (member.health < 10) {
            {
                role === "player" &&
                    parentElem.classList.add("player-almost-dead");
            }
            {
                role === "enemy" &&
                    parentElem.classList.add("enemy-almost-dead");
            }
        } else {
            parentElem.classList.remove("player-almost-dead");
            parentElem.classList.remove("enemy-almost-dead");
        }
    };

    const setAvatar = (e) => {
        if (document.querySelector(".member-avatar-input")) {
            document.querySelector(".member-avatar-input").remove();
            return;
        }
        const imgParent = e.target.closest(".member-card-img");
        const elem = document.createElement("input");
        elem.setAttribute("type", "url");
        elem.className = "member-avatar-input";
        e.target.closest(".member-card").append(elem);

        elem.addEventListener("change", (e) => {
            setMember({
                ...member,
                avatar: e.target.value,
            });
            imgParent.style.opacity = "1";
            document.querySelector(".member-avatar-input").remove();
        });
    };

    const removeCard = (e) => {
        e.target.closest(".member-card").remove();
    };

    return (
        <div
            className={
                role === "player"
                    ? "member-card player-card"
                    : "member-card enemy-card"
            }
        >
            <div className='member-card-remove-btn' onClick={removeCard}>
                <ButtonIcon icon={icons.removeBtn} />
            </div>
            <div className='member-card-img' onDoubleClick={setAvatar}>
                {!member.avatar && (
                    <img
                        src={role === "player" ? avatars.player : avatars.enemy}
                        alt='member avatar'
                    />
                )}
                {member.avatar && (
                    <img src={member.avatar} alt='member avatar' />
                )}
            </div>

            <div className='member-card-info'>
                <Input
                    className='member-card-name'
                    type='text'
                    onChange={(e) =>
                        setMember({
                            ...member,
                            name: e.target.value,
                        })
                    }
                />
                {role === "player" && (
                    <Input
                        type='text'
                        onChange={(e) =>
                            setMember({
                                ...member,
                                type: e.target.value,
                            })
                        }
                    />
                )}

                <div className='member-card-stats'>
                    <div className='member-stat' onChange={watchHealthStatus}>
                        {role === "player"
                            ? icons.playerHealth
                            : icons.enemyHealth}
                        <Input
                            type='number'
                            onChange={(e) => {
                                setMember({
                                    ...member,
                                    health: Number(e.target.value),
                                });
                            }}
                        />
                    </div>
                    <div className='member-stat'>
                        {role === "player"
                            ? icons.playerArmor
                            : icons.enemyArmor}
                        <Input
                            type='number'
                            onChange={(e) => {
                                setMember({
                                    ...member,
                                    armor: Number(e.target.value),
                                });
                            }}
                        />
                    </div>
                    {role === "enemy" && (
                        <div className='member-stat'>
                            {icons.enemyEvading}
                            <Input
                                type='number'
                                onChange={(e) => {
                                    setMember({
                                        ...member,
                                        evading: Number(e.target.value),
                                    });
                                }}
                            />
                        </div>
                    )}
                    {role === "enemy" && (
                        <div className='member-stat'>
                            {icons.enemyEndurance}
                            <Input
                                type='number'
                                onChange={(e) => {
                                    setMember({
                                        ...member,
                                        endurancer: Number(e.target.value),
                                    });
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
