import React, { useState } from "react";

const Practice = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="h-9 w-10">Practice:{count}</div>
      <button onClick={handleClick}> click me</button>
    </div>
  );
};

export default Practice;
