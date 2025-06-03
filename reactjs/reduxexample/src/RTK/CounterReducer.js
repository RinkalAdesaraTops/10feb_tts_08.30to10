import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    count:10
}
const CounterReducer = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment: (state)=> {
            state.count += 1
        },
        decrement: (state)=>{
            state.count -= 1
        }
    }
})

export const {increment,decrement} = CounterReducer.actions
export default CounterReducer.reducer
