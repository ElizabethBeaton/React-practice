// updater functions
// a function passed as an arument to setState() usually. 
// allows for safe updates based on the previous state
// used with multiple state updates and asynchronous functions
// good prace to use updater functions

import React, { useState } from "react";

function UpdateCounter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        // Takes the pending state to caluclate the next state
        // React outs your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        
}

    const reset = () => {
    setCount(0);
    };

    return (
      <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>
          Decrement
        </button>
        <button className="counter-button" onClick={reset}>
          Reset
        </button>
        <button className="counter-button" onClick={increment}>
          Increment
        </button>
      </div>
    );
}
export default UpdateCounter;
