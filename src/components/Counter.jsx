import  { useRef, useState } from "react";

const Counter = () => {
  const countRef = useRef(0);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    countRef.current += 1; // Updates the ref value
    setCounter(counter + 1); // Re-renders the component
    console.log("Ref value:", countRef.current);
  };

  return (
    <div>
      <p>State Counter: {counter}</p>
      <p>Ref Counter (Logged in console only): {countRef.current}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
