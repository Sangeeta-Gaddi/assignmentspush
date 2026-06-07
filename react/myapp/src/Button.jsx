function Button(){
    function handleClick(){
        console.log("Hello")
    }
    return(
        <div>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
}

export default Button;