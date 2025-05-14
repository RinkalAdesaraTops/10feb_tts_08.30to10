import React from 'react'
import { add,del,upd } from './UserAction'
const initialState = {
    userdata:[]
}
const UserReducer = (state=initialState,action) => {
    switch(action.type){
        case add:{
            return {
                ...state,
                userdata: [
                    ...state.userdata,
                    action.payload
                ]
            }
        }
        case del: return {
            ...state,
            userdata: state.userdata.filter((i,index)=>index != action.payload)
        }
        case upd: return {
            ...state,
            userdata: state.userdata.map((i,index)=>{
                if(index == action.payload.id){
                    i = action.payload.data
                }
                return i
            })  
        }
        default: return state
    }
}   

export default UserReducer
