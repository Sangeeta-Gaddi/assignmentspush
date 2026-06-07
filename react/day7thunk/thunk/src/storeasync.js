import { createStore } from 'redux';
//import applymiddleware(applies middleware to dispatch)
import { applyMiddleware } from 'redux';
//import thunk(to enable the middleware/and call asynchronous calls)
import {thunk} from 'redux-thunk';


//2. have initial state
const initialState = {
    //for success(we will get the data, if it is success, so we need to store it)
    user: null,
    //for pending
    loading: false,
    //for failure
    error: null
}

//3. create reducer
function userReducer(state=initialState, action){
    //have all the 3 states(action)
    switch(action.type) {
        //pendng(we started to fetch), no need to make error true(becoz state is loading/pending, so no need of error)
        case 'FETCH_USER_START':
            return { ...state, loading: true }
        //success, loading will be false, beco here we got data(fetched users successfully, we got data, so we get payload)
        case 'FETCH_USER_SUCCESS':
            return { ...state, loading: false, user: action.payload }
        //failure, here also loading no need, becoz we get error, so update the error
        case 'FETCH_USER_FAIL':
            return { ...state, loading: false, error: action.payload }
        //default
        default:
            return state
    }
}

//1.create obj using createStore
//apply the middleware and pass thunk(to help to call asunhrnous call, enables actions as functions  not as plain object)
const storeasync = createStore(userReducer,applyMiddleware(thunk))

export default storeasync;