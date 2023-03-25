import { useState } from "react";
import AnimalShow from "./AnimalShow";

function App() {
  const [count, setCount] = useState(0);
  console.log(useState(0));

  // function naming convention: use "on" or "hanlde" + EventName, i.e., onClick, onMouseUp, onScroll, hanldeClick etc.
  const handleClick = () => {
    setCount(count + 1);
    console.log("Button was clikced!");
  };

  return (
    <div>
      <button onClick={handleClick}> Add Animal </button>
      <div> Number of animals: {count}</div>
    </div>
  );
}

export default App;
