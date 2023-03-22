// 1) Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the dix with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a componet
function App() {
  // let msg = "Hello there!!";

  // if (Math.random() > 0.5) {
  //   msg = "Bye bye";
  // }
  // const date = new Date();
  // const currentDate = new Date().toLocaleDateString();
  const name = "Tutu";
  const age = 29;

  return (
    <h1>
      {/* {currentDate} */}
      Hi this is {name} and {name} is {age} years old.
      <h2>hahahah</h2>
    </h1>
  );
}

// 5) Show the component on the screen
root.render(<App />);
