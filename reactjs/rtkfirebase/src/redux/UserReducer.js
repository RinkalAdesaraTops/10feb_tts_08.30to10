import { add, del,upd } from "./UserAction"

const abc = {
    data:[]
}
const UserReducer = (state=abc,action) => {
  switch(action.type){
    case add:return {
        ...state,
        data:[
            ...state.data,
            action.payload
        ]
    }
    case del:return {
        ...state,
        data:state.data.filter((i,index)=>index != action.payload)
    }
    case upd:return {
        ...state,
        data:state.data.map((i,index)=>{
                if(index == action.payload.id){
                    i = action.payload.userdata
                    // i.name = action.payload.data.name
                    // i.age = action.payload.data.age
                }
                return i
        })
    }
    default:return state
    
  }
}

export default UserReducer
