//onChange = event handler used primarily with form elements eg
// <input> <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes


// onChange event handler

import React, {useState} from "react"

function MySecondComponent() {
    
    
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    } 

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }
    return (
      <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity: {quantity}</p>

        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter delivery instructions"
        />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label> <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}/>Pick up</label><br></br>
        <label> <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>Delivery</label>
        <p>Shipping: {shipping}</p>
      </div>
    );


};
export default MySecondComponent;













/*what is happening?

when the person write their name in the inpput box, the name appears next to the text 'Name: ...'

useState lets your componenets remember values. In this case, its the name


this: 
function handleNameChange(event) {
        setName(event.target.value);
    }
runs every times the user types nto the input field.
event.target.value gives the current text inside the <input>
setName(..) updates the state with the new value
*/

/*

the different between a variable and useState:

normal varaible like let/const: just hold a value temporarily.
when they change, react doesnt know anythung had changed
updating them wont re-render your component.

whereas, useState is React-aware state.
it holds a value just like a varbale, but when you call setName(..), React knows something has changed.
it will rerender the component with the new value



*/