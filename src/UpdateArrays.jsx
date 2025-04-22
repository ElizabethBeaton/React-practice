// update arrays in state

import React, { useState}  from 'react'

function UpdateArrays() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);      // 'food' - the current array of food names. 'setFoods' = a function to update that array

    function handleAddFood() {
      const newFood = document.getElementById("foodInput").value;
      document.getElementById("foodInput").value = "";
 

      setFoods((foods) => [...foods, newFood]);

      //setFoods(foods => [...foods, newFood]) - this creates a new array that includes all the old foods plus the new one.
      // its using an update function '(foosd => ...)' so it always works with the most recent state

    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }

    // '_' is a throwaway variablr for the actual item since youre not suing it 

    return (
      <div>
        <h2>List of Food</h2>
        <ul>
          {foods.map((foods, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)}>{foods}</li>
          ))}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add food</button>
        <button onClick={handleRemoveFood}>Remove food</button>
      </div>
    );
}

export default UpdateArrays