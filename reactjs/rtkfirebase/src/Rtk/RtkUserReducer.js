import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
    data:[]
}
const RtkUserReducer = createSlice({
    name:'user',
    initialState,
    reducers:{
        add: (state,action)=>{
            state.data = [...state.data,action.payload]
        },
        del:(state,action)=>{
            state.data = state.data.filter((i,index)=>{
                    return index != action.payload
            })
        },
        upd:(state,action)=>{
                state.data = state.data.map((i,index)=>{
                        if(index == action.payload.id){
                            i = action.payload.info
                        }
                            return i
                })
        }   
    }
})
export const {add,upd,del} = RtkUserReducer.actions
export default RtkUserReducer.reducer
