function Newbutton() {
    
    const handleClick = (e) => e.target.textContent = "Ouch!!" //when the button is clicked it changes to this
    return(
        <button onClick={(e) => handleClick(e)}>Click me</button>
    )
}

export default Newbutton
