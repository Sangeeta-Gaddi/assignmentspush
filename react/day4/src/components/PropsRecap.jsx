import React from "react";

function Greeting({name}){
    return <h3>Hello, {name}</h3>
}

const PropsRecap=()=>{
    const name="Sangeeta"
    return(
        <div>
            {/* PropsRecap */}
            <h3>Props Recap</h3>
            <Greeting name={name}/>
        </div>
    )
}

export default PropsRecap;