import React, { useState } from "react";
import "./MemberCard.css";
import "./../../App/App.css";
import Input from "../Input/Input";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Button from "../Button/Button";

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
    player: "https://img.goodfon.ru/original/960x854/c/e6/the-witcher-volk-fon.jpg",
    enemy: "https://i.pinimg.com/originals/84/f7/29/84f72966699a9c124c64372cffa49b4c.jpg",
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
        e.preventDefault();
        const parentElem = e.target.closest(".member-card");
        if (!e.target.value) {
            return;
        }
        if (e.target.value <= 5) {
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
        e.preventDefault();
        const target = e.target;
        if (target.files && target.files.length) {
            const avatar = target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(avatar);
            reader.onload = () => {
                const result = reader.result;
                if (result) {
                    setMember({
                        ...member,
                        avatar: result
                    });
                }
            }
        }
    };

    const checkoutSavedMemberData = (value) => {
        if (localStorage.getItem(value)) {
            let savedData = JSON.parse(localStorage.getItem(value));
            for (let key in savedData) {
                setMember({
                    ...member
                })
                member[key] = savedData[key] ?? '';
            }
            updateAvatar();
        }
    };

    const updateAvatar = () => {
        //TODO: find better way to get current avatar container
        let avatarContainer = document.getElementById(String(member.name).slice(0, -1));
        avatarContainer.querySelector('.member-card-avatar img').src = member.avatar;
    }

    const addMemberToBattle = (e) => {
        e.preventDefault();
        const memberAvatar = e.target.closest(".member-card-img img");
        const battleScreen = document.querySelector(".battlefield-screen");

        function onMouseMove(event) {
            let elemBelow = document.elementFromPoint(
                event.clientX,
                event.clientY
            );

            if (elemBelow.closest(".battlefield-screen")) {
                const imgWrapper = document.createElement("div");
                imgWrapper.className = "battlefield-screen-member";
                imgWrapper.innerHTML = memberAvatar.outerHTML;
                battleScreen.append(imgWrapper);
            } else {
                return;
            }

            document.removeEventListener("pointermove", onMouseMove);
        }
        document.addEventListener("pointermove", onMouseMove);
    };

    const removeCard = (e) => {
        e.target.closest(".member-card").remove();
    };

    return (
        <div
            id={member.name}
            className={
                role === "player"
                    ? "member-card player-card"
                    : "member-card enemy-card"
            }
        >
            <div className='member-card-remove-btn' onClick={removeCard}>
                <ButtonIcon icon={icons.removeBtn} />
            </div>
            <div
                className='member-card-avatar'
                onDragStart={addMemberToBattle}
            >
                <div className="member-card-img">
                {!member.avatar && (
                    <img
                        src={role === "player" ? avatars.player : avatars.enemy}
                        alt={member.name}
                    />
                    )}
                {member.avatar && <img src={member.avatar} alt={member.name} />}
                </div>
                <label className='member-avatar-label'>Set avatar
                    <Input type='file' onChange={setAvatar} className='member-avatar-input' />
                </label>
            </div>

            <div className='member-card-info'>
                <Input
                    className='member-card-name'
                    type='text'
                    name='name'
                    value={member.name}
                    onChange={(e) => {
                        setMember({
                            ...member,
                            name: String(e.target.value).toLocaleLowerCase(),
                        });
                        checkoutSavedMemberData(e.target.value)
                    }}
                />
                {role === "player" && (
                    <Input
                        type='text'
                        name='type'
                        value={member.type}
                        onChange={(e) =>
                            setMember({
                                ...member,
                                type: e.target.value,
                            })
                        }
                    />
                )}

                <div className='member-card-stats'>
                    <div className='member-stat'>
                        {role === "player"
                            ? icons.playerHealth
                            : icons.enemyHealth}
                        <Input
                            type='number'
                            name='health'
                            value={member.health}
                            onChange={(e) => {
                                setMember({
                                    ...member,
                                    health: Number(e.target.value),
                                });
                                watchHealthStatus(e);
                            }}
                        />
                    </div>
                    <div className='member-stat'>
                        {role === "player"
                            ? icons.playerArmor
                            : icons.enemyArmor}
                        <Input
                            type='number'
                            name='armor'
                            value={member.armor}
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
                                name='evading'
                                value={member.evading}
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
                                name='endurancer'
                                value={member.endurance}
                                onChange={(e) => {
                                    setMember({
                                        ...member,
                                        endurance: Number(e.target.value),
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
