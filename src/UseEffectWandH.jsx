// useEffect

/*
useEffect is a React Hook that tells React to do this code when one of the following:
- this component re-renders
- this component mounts
- that state of a value

useEffect[function, [dependencies']] - dependency controls when the effect should run

*/

import React, { useState, useEffect } from 'react'

function UseEffectWandH() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added")

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("event Listener Removed")
        }
    },     
    [])

    useEffect(() => {
        document.title = `size: ${width} x ${height}`;
    }, [width, height]

)




    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
    <p>Window Wight: {width}px</p>
    <p>Window Height: {height}px</p>

    </>)
}

export default UseEffectWandH;