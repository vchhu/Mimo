import React, { useState } from "react";

const ScoreKeeper = (props) => {
    const [score, setScore] = useState(0);

    return (
        <div>
            <p>Team {props.teamName}: {score}</p>
            <button onClick={() => setScore(score++)}>+1 Team {props.teamName}</button>
        </div>
    );
};

export default ScoreKeeper;