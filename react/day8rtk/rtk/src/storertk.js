//import configureStore
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import tnxReducer from './tnxslice'

//create store
const store= configureStore({
    reducer:{
        user: userReducer,   // manages user profile + balance
        tnxs: tnxReducer 
    }
})

export default store;