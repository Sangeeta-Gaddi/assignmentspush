import React, {createContext, useState,useContext} from 'react'

//1.create context
const UserContext=createContext(null);

//2.create child component/function(UserCard)
function UserCard(){
    const {username,setUsername}=useContext(UserContext)
    return(
        <>
        <p><strong>Hello, {username}</strong></p>
        <button className='btn btn-primary btn-sm me-2'
        onClick={()=>{
            setUsername("Bob")
        }}
        >
        Switch to Bob</button>
          <button className='btn btn-secondary btn-sm me-2'
          onClick={()=>{
            setUsername("Sammy")
        }}
        >
        Switch to Sammy</button>
        </>
    )
}


const UpdateValues = () => {
    //useState hook to update state/data/value(here username)
    const[username, setUsername]=useState("Sammy")
  return (
    <div>
        <h3 className='text-info'>Use context with objects</h3>
        {/* wrap using provider */}
        <UserContext.Provider value={{username,setUsername}}>
            <UserCard />
        </UserContext.Provider>
        
    </div>
  )
}

export default UpdateValues;