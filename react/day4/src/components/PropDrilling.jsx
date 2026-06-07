import React from 'react'

//APP(here, PropDrilling which has the data)->Layout->Page->UserCard
//1. create the UserCard componet/function(which returs username)
function UserCard({username}){
    return <p><strong>Logged In as: {username}</strong></p>

}

//2. now we will create Page component(parent of UserCard)-->Page rturns UserCard(which accepts the username)
function Page({username}){
    return <UserCard username={username} />
}

//3. Layout(calls page)
function Layout({username}){
    return <Page username={username} />
}

const PropDrilling = () => {
    //now Prop drilling is the main app(APP) which has the data(calls Layout)
    const username="Nishita"

  return (
    <div>
       <h3> PropDrilling</h3>
       <Layout username={username}/>
    </div>
  )
}

export default PropDrilling;