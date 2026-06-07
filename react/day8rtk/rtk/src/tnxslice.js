
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    transactions: []
}

const tnxSlice = createSlice({
    name: "tnx",
    initialState,
    reducers: {


        addTnx(state, action) {
            state.transactions.push(action.payload)
        },


        removeTnx(state, action) {
            state.transactions.splice(action.payload, 1)
        },

        clearAll(state) {
            state.transactions = []
        }
    }
})

export default tnxSlice.reducer

export const { addTnx, removeTnx, clearAll } = tnxSlice.actions