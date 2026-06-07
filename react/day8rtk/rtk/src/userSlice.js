import { createSlice } from '@reduxjs/toolkit'


//createSlice:provide uniquename to createSlice

// createSlice({
//     name: sliceName,
//     initialState,
//     reducers: {
//         actionsName(state, action)
//     }
// })

//returns an object-->willhaveboth reducersand action

const initialState = {
    fullName: '',
    mobile: null,
    balance: 0,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateFullName(state, action) {
            state.fullName = action.payload
        },
        updateMobile(state, action) {
            state.mobile = action.payload
        },


        deposit(state, action) {
            state.balance += action.payload
        },

        withdraw(state, action) {
            state.balance -= action.payload
        },
        reset(state) {
            state.fullName = ''
            state.mobile = null
            state.balance = 0
        }
    }
})

//export both userSlice and reducer
export default userSlice.reducer

//export actions
export const { updateFullName, updateMobile, deposit, withdraw, reset } = userSlice.actions