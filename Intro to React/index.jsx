import React from "react";
import { createRoot } from "react-dom/client";
import { ScoreKeeper } from "./ScoreKeeper";

const ScoreBoard = () => {
    return (
        <div>
            <h1>Score Keeper</h1>
            <ScoreKeeper teamName={"One"}/>
            <ScoreKeeper teamName={"Two"}/>
        </div>
    );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<ScoreBoard />);