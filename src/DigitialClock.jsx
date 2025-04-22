// digital clock app

import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());   // this keeps track of the current time using javascript's date object


  useEffect(() => {       // this is updating the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
// setInterval runs a function every 1000 miliseconds (1 second) tp update the time
// the clearup function (clearInterval) stops the interval when the component is removed from the screen, preventing memory leaks
// with point abpce, its telling javascript to stop tunning the repeated programme when we leave the page. This is important because otherwise the clock would keep running in the background even if were not looking at it anymore, and can cause memory leaks (wasting system memory of slowing app down)



  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number
  }

  return (
    <div className="clock-body">
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
