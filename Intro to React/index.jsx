import React from "react";
import { createRoot } from "react-dom/client";
import { ScoreKeeper } from "./ScoreKeeper.jsx";

const ScoreBoard = () => {
    return (
        <div>
            <h1>Score Keeper</h1>
            <ScoreKeeper />
            <ScoreKeeper />
        </div>
    );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<ScoreBoard />);