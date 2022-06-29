



function Keypad() {

    const changeHandler = () => {
        console.log("Entering password...")
    }
    return(
        <input onChange={changeHandler} type="password" />
    )
}

export default Keypad
