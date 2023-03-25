import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog", "cow", "gator", "horse"];
  const i = Math.trunc(Math.random() * animals.length);

  return animals[i];
}

console.log(getRandomAnimal());

function App() {
  const [animals, setAnimals] = useState([]);
  console.log(useState(0));

  // function naming convention: use "on" or "hanlde" + EventName, i.e., onClick, onMouseUp, onScroll, hanldeClick etc.
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
    console.log(animals);
  };

  const renderdAnimals = animals.map((animal, index) => {
    console.log(animal, index);
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}> Add Animal </button>
      {/* <div>Here are the anmilas: {[...new Set(animals)].join(", ")}</div> */}
      <div className="animal-list">{renderdAnimals}</div>
    </div>
  );
}

export default App;
