import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name : "counter",
    initialState : {
        count : 0
    },
    reducers : {
        increement : (state, {type, payload})=>{
            state.count = state.count+1
        },
        decrement : (state, {type, payload})=>{
            state.count = state.count-1
        },
        reset : (state, {type, payload})=>{
            state.count = 0
        }
    }
})

export const {increement, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;