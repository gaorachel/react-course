import React from "react";
import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

function CounterPage({ initalCount }) {
  const { count, handleIncrement } = useCounter(initalCount);

  return (
    <div>
      <h1> Count is {count} </h1>
      <Button primary onClick={handleIncrement}>
        Increment
      </Button>
    </div>
  );
}

export default CounterPage;
