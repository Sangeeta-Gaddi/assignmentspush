import React from 'react'

// 3 steps
//1. createContext: creates the channel
//2. contextProvider
//3. contextUse

//1. import createContext(built-in react soln), returns context object(which will have 2 imp things: Provider and useContext)
//3. import useContext(react hook)
import { createContext, useContext } from "react";
// call the createContext and store in the variable(UserContext), give default value(null for context)
const UserContext=createContext(null);


//code which causes propDrilling
//3. use the Context(useContext is a hook)
function UserCard(){
    // use useContext:accepts the context u have created(UserContext)
    const username=useContext(UserContext);
    return (
     <p>
        <strong>Logged In as: {username}</strong>
    </p>
    )
}

function Page(){
    return <UserCard  />
}


function Layout(){
    return <Page />
}

const ContextAPII = () => {
    const username="Nishita"

  return (
    <div>
       <h3> ContextAPII</h3>
       {/* //2. wrap the context(data) using provider */}
       {/* //wrap using provider:providing access to layout: components related to layout(here, page nad usercard) can use the data*/}
       <UserContext.Provider value={username}>
            <Layout />
       </UserContext.Provider>
       
    </div>
  )
}

export default ContextAPII;