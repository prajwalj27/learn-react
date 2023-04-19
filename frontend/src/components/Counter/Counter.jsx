import React, { useState } from 'react';

const Counter = ({name}) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter component</h1>
      <p>Name: {name}</p>
      <div>
        <button onClick={decrementCount}>-</button>
        {count}
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
};

export default Counter;
