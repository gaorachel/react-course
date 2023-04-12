import React, { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ initalCount }) {
  const [count, setCount] = useState(initalCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // let inputNum = 0;
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg"> Current count is {count} </h1>
      <div className="flex flex-row gap-5">
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button primary onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label> Add a lot! </label>
        <input
          onChange={handleChange}
          value={valueToAdd || ""}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button secondary> Add </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
