// useEffect

import React, { useState, useEffect } from "react";

function UseEffectComponent() {
  const [count, setCount] = useState(0);
  const [colour, setColour] = useState("green")

  useEffect(() => {
    document.title = `count: ${count} ${colour}`;
  }, [count, colour]); // we write count here and this changes the title of the document. If we passed an empty array, the title would not update
  // [count] is a dependency array. It says to React 'only run this effect again if one of these values changes'. Thats why, if we just pass through an empty array, nothing will change in the title.
  // if the values havent changed, React will skip the effect
  // now, if the count or the colour changes, then update the title
  function addCount() {
    setCount((c) => c + 1);
  }
  function subtractCount() {
    setCount((c) => c - 1);
  }
  function changeColour() {
    setColour(c => c === "green" ? "red" : "green")
  }

  return (
    <>
      <p style={{color:colour}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <br/>
      <button onClick={changeColour}>Change colour</button>

    </>
  );
}

export default UseEffectComponent;


/*
Event if we deleted useEffect, the title is still going to update.
We use useffect because it keeps our code more organised. We can see when exactly the code runs - eg in this project it runs when the count or the colour is changed
*/