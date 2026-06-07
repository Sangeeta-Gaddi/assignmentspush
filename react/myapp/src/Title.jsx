function Title(){

    //JavaScript statements cannot be written directly inside JSX like this:
    let msg="Hello World!"
// return <h1> Hi I am Title</h1>
return(
    <>
    <p>2*2={2*2}</p>
    
    <p>message syas {msg}</p>;
    </>
)
}

export default Title;