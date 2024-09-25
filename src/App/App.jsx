import React from "react";
import { useState } from "react";

import "./App.css";

import StartPage from "../components/StartPage/StartPage";
import Playfield from "../components/Playfield/Playfield";

const App = () => {
    const [startGame, setStartGame] = useState(true);

    return (
        <>
            {startGame ? <Playfield /> : <StartPage onClick={() => setStartGame(true)} />}
        </>
    );
};

export default App;
