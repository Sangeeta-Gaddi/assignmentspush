//create actions(plain objects, then call API)

//1. starting(pending), just started to fetch(so there will be no data)
export const fetchUserStart=()=>({
    type:'FETCH_USER_START'
})

//1.2  success
export const fetchUserSuccess=()=>({
    type:'FETCH_USER_SUCCESS',
    payload:user
})

//1.3 error
export const fetchUserFail=()=>({
    type:'FETCH_USER_FAIL',
    payload:message
})

//2. now focus on thunk-action creator, helps for calling api
//thunk-action-creator-->returns another function(outer and inner ftn)
//outer-ftn: will call api(fetchUser)
//inner-ftn: it receives dispatch and getState(from middleware, takes care of async calls, and dispatched plain ob)

//create ftn to call api
export const fetchUser=(userId)=>async(dispatch,getState)=>{
    //dispatch starting action(fetchStart), ntg is passed becoz now started
    dispatch(fetchUserStart())
    try{
        const res=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        //fetch doesn't return data(parse it)
        const data=await res.json()
        //if data iscorrect dispatch fetchUser(pass data to display on browser)
        dispatch(fetchUserSuccess(data))
    }
    catch(error){
        //if something goes wrong, catch th error
        dispatch(fetchUserFail(error.message))
    }
}