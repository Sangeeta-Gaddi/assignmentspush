//user usercomponent to build and usethe actions(states)

import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
//import action(fetchUser)
import { fetchUser } from './actionsasync';



export const UserComp = () => {
    //use useDispatch
    const dispatch=useDispatch()
const {user, loading, error}=useSelector((state)=>state)
  return (
    <div>
        <h3>Fetching User using Thunk</h3>
        <button onClick={()=>dispatch(fetchUser(1))}>Load User</button>

        {/* //if loading is true, we will just say loading */}
        {loading && <p>Loading......</p>}

        {error && <p style={{color:'red'}}>Error...:{error}</p>}

        {/* if data is availabe(user/users is available show it) */}
        {user && (
            <table border='1'>
                <tbody>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            {user.name}
                        </td>
                         <td>
                            Email
                        </td>
                        <td>
                            {user.email}
                        </td>
                         <td>
                            Contact
                        </td>
                        <td>
                            {user.phone}
                        </td>
                    </tr>
                </tbody>
            </table>
        )}
    </div>
  )
}
