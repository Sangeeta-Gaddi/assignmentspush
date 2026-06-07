//account component used to read the operations from store, display the data inform of table

import React from 'react'
//import useSelector
import { useSelector } from 'react-redux'

const Account = () => {
    //useSelector-->takes state as i/p and returns complete state

    let data = useSelector((state) => {
        // return state
        //now add the reducer of the Account(u have given account:accReducer)
        return state.account;
    });

    //now add the transaction reducer
    let {transactions} = useSelector((state) => {
        return state.transactions;
    })
    console.log(data)
    return (
        <div>
            <h2>Account Details</h2>
            <table border='2'>
                <thead>
                    <tr>
                        <th>Field Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Full Name</td><td>{data.fullName}</td></tr>
                    <tr><td>Mobile</td><td>{data.mobile}</td></tr>
                    <tr><td>Balance</td><td>{data.balance}</td></tr>
                </tbody>
            </table>

            //create table for transactions
            <h2>Transactions Details</h2>
            <table border='2'>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length===0?(
                        <tr>
                            <td colSpan="3">
                                No transactions yet
                            </td>
                        </tr>
                    )
                    :
                    
                    (transactions.map((t,i)=>(
                        <tr key={i}>
                            <td>{t.amt}</td>
                            <td>{t.type}</td>
                            <td>{t.date}</td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    )
}

export default Account;

{/* transactions are in array, so use map ftn() */}