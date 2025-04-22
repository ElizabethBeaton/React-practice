// updater functions

import React, { useState } from "react";

function Seeing() {
  let countWithLet = 0; // normal variable
  const [countWithState, setCountWithState] = useState(0); // React state

  const increaseLet = () => {
    countWithLet += 1;
    console.log("Let Count:", countWithLet);
  };

  const increaseState = () => {
    setCountWithState(countWithState + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter with let (doesn't re-render):</h2>
      <p>{countWithLet}</p>
      <button onClick={increaseLet}>Increase Let Counter</button>

      <h2 style={{ marginTop: "30px" }}>Counter with useState:</h2>
      <p>{countWithState}</p>
      <button onClick={increaseState}>Increase useState Counter</button>
    </div>
  );
}

export default Seeing;
