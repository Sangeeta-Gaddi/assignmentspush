//form component  is used for write the operations to store(deposite, withdraw, set profile,reset), take i/p from users and dispatch the actions

//both form and account are connect from redux

import React from 'react'
import { useState } from 'react'
//use react-redux dispatch hook(useDispatch)
import { useDispatch } from 'react-redux'
//import desposit dispatch
import { deposit } from './Action'
import { withdrawAmt, setprofile, addTnx } from './Action'

export const Form = () => {
    const [amount, setAmount] = useState('')
    const [withdraw, setWithdraw] = useState('')
    const [fullName, setfullName] = useState('')
    const [mobile, setmobile] = useState('')


    //2 3 sates for transactions(create 3states)
    const [txnAmt, settxnAmt] = useState('')
    const [txnType, settxnType] = useState('credit')
    const [txnDate, settxnDate] = useState('')



    const dispatch = useDispatch()

    const handleDeposit = (e) => {
        e.preventDefault()
        // dispatch({ type: 'DEPOSIT', payload: Number(amount) })
        //use deposit dispatch from action.js
        dispatch(deposit(amount))
        setAmount('')
    };
    const handleWithdraw = (e) => {
        e.preventDefault()
        //dispatch({ type: 'WITHDRAW', payload: Number(withdraw) })
        dispatch(withdrawAmt(withdraw))
        setWithdraw('')
    }
    const handleSetProfile = (e) => {
        e.preventDefault()
        // dispatch({ type: 'SET_PROFILE', payload:{
        //     fullName:fullName,
        //     mobile:Number(mobile)
        // }})

        dispatch(setprofile(fullName, Number(mobile)))
        setfullName('')
        setmobile('')
    }

    //hanleAddtxn
    const handleAddTnx=(e)=>{
        e.preventDefault();
        dispatch (addTnx(Number(txnAmt), txnType,txnDate))
        settxnAmt('')
        settxnDate('')
    }
    return (
        <div>
            <form onSubmit={handleDeposit}>
                <h3>Deposit</h3>
                <input type='number' value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder='Enter the amount' />
                <button type='submit'>Deposit</button>
            </form>

            <form onSubmit={handleWithdraw}>
                <h3>WithDraw</h3>
                <input type='number' value={withdraw}
                    onChange={(e) => setWithdraw(e.target.value)}
                    placeholder='Enter the amount' />
                <button type='submit'>Withdraw</button>
            </form>

            <form onSubmit={handleSetProfile}>
                <h3>SetProfile</h3>
                <input type='text' value={fullName}
                    onChange={(e) => setfullName(e.target.value)}
                    placeholder='Enter your name' />

                <input type='number' value={mobile}
                    onChange={(e) => setmobile(e.target.value)}
                    placeholder='Enter your mobileNor' />
                <button type='submit'>SetProfile</button>
            </form>

            {/* //RESET */}
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

            {/* //2 form to enter thr transaction by users */}
            <form onSubmit={handleAddTnx}>
                <h2>Add Transactions</h2>
                <input
                    type='number'
                    value={txnAmt}
                    onChange={(e) => settxnAmt(e.target.value)}
                    placeholder='Enter the amount'
                />
                <select
                    value={txnType}
                    onChange={(e) => settxnType(e.target.value)}
                    placeholder='Select the transaction type u want to perform' >
                    <option value='credit'>
                        Credit
                    </option>
                    <option value='debit'>
                        Debit
                    </option>
                </select>

                <input
                    type='date'
                    value={txnDate}
                    onChange={(e) => settxnDate(e.target.value)}
                    placeholder='Enter the date'
                />
                <button type='submit'>ADD</button>
            </form>
        </div>
    )
}

export default Form;