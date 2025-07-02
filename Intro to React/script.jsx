import React from "react";
import { createRoot } from "react-dom/client";

const Page = () => {
    return <h1>Testing... Hello, React</h1>
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<Page />);