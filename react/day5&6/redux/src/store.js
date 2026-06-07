//import createSTore(will be provided by redux)
import {createStore} from 'redux';
//import comineReducer to combine multiple reducers
import { combineReducers } from 'redux';

//single object with 3 vvalues(store the complte data)
const initialState={
    fullName:"",
    mobile:null,
    balance:0,
}

//2. transaction reducer
//transcation will be having empty object(we will multiple transactions)
const transinitialState={
    transactions:[],
    nextId:1
}

//1.creat Account reducer
function accReducer(state=initialState,action){
    switch(action.type){
        case 'DEPOSIT':
            return{
                ...state, balance:state.balance + action.payload
            };
        case 'SET_PROFILE':
            return{
                ...state, fullName:action.payload.fullName, mobile:action.payload.mobile
            }
        case 'WITHDRAW':
            return{
                ...state, balance:state.balance-action.payload
            }
        case 'RESET':
            return initialState
            default:
                return state
    }
}

//2.1 build transaction reducer
function transReducer(state=transinitialState,action){
    switch(action.type){
        case'ADD':
        return{
            ...state,
            nextId:state.nextId+1,
            transactions:[
                ...state.transactions,
                {
                    id:state.nextId,
                    amt:action.payload.amt,
                    type:action.payload.type,
                    date:action.payload.date,
                }
            ]
        }
        default:
            return state
    }
}


//2.2 combine two reducers
const rootReducer=combineReducers({
    account:accReducer,
    transactions:transReducer
});


//create store and pass the reducer
//enable 'redux devtool'
//2.3 pass the rootreducer(which have combined reducer9accountreducer nad transactioreducer)
// const store=createStore(accReducer,
const store=createStore(rootReducer,
window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)

// console.log('state',store.getState());
// //dispatch(for DEPOSIT action)
// store.dispatch({type:'DEPOSIT',payload:500})
// console.log('state',store.getState());
// //for (SET_PROFILE) action
// store.dispatch({type:'SET_PROFILE',payload:{fullName:"Sangu",mobile:8976756907}})
// console.log('state',store.getState());
// //dispatch(for WITHDRAW action)
// store.dispatch({type:'WITHDRAW',payload:100})
// console.log('state',store.getState());
// //dispatch(for RESET action)
// store.dispatch({type:'RESET'})
// console.log('state',store.getState());

export default store;