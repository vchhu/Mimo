import React from "react";

const ScoreKeeper = (props) => {
    let score = 0;

    return (
        <div>
            <p>Team {props.teamName}: {score}</p>
            <button onClick={() => score++}>+1 Team {teamName}</button>
        </div>
    );
};

export default ScoreKeeper;