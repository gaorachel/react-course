import { useEffect, useState } from "react";

function useCounter(initalCount) {
  const [count, setCount] = useState(initalCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return { count, handleIncrement };
}

export default useCounter;
