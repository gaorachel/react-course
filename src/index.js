// 1) Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom/client";
import App, { msg } from "./App";

console.log(msg);

// "./" means some level
// "../" means one level up
// "/componentName" one level down

// 2) Get a reference to the dix with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a componet
// the code has been moved to App.js
// 5) Show the component on the screen
root.render(<App />);
