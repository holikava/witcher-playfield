import React from "react";
import { useState } from "react";

import './App.css';

import StartPage from "../components/StartPage/StartPage";

const App = () => {
    const [startGame, setStartGame] = useState(false);

    return (
        <div className="main-container">
            {startGame ? <div>lola</div> : <StartPage />}
        </div>
    )
}

export default App;