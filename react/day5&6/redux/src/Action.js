//Action creators: simple fuction(reusable code/performs repeative work)-->returns object(whuch will have action and payload in it)

//create 'deposit' dispatch
export const deposit=(amount)=>({
    type:'DEPOSIT',
    payload:amount
})

//witdraw
export const withdrawAmt=(withdraw)=>({
    type:'WITHDRAW',
    payload:withdraw
})

//setprofile
export const setprofile=(fullName, mobile)=>({
    type:'SET_PROFILE',
    payload:{fullName,mobile}
})

//reset
export const reset=()=>({
    type:'RESET'
    
})

//2. now for transactions
export const addTnx=(amt,type,date)=>({
    type:"ADD",
    payload:{amt,type,date}
})
