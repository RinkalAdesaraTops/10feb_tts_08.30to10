import { des, ins } from "./CounterAction"

const initialState = {
    count:0
}
const CounterReducer = (state=initialState,action) => {
    switch(action.type){
        case ins:return {
            ...state,
            count:state.count+1
        }
        case des:return {
            ...state,
            count:state.count-1
        }
        default: return state

    }
}

export default CounterReducer
