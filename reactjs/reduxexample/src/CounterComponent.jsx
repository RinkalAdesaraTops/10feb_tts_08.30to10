import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addAction, minusAction } from './action/CounterAction'
import { decrement, increment } from './RTK/CounterReducer'
const CounterComponent = () => {
    const count = useSelector((state)=>state.Counter.count)
    const dispatch = useDispatch()
    const minusFunc = ()=>{
        dispatch(decrement())
    }
  return (
    <div>
      <h3>Count -- {count}</h3>
      <button onClick={()=>dispatch(increment())}>Add</button>
      <button onClick={minusFunc}>Minus</button>
    </div>
  )
}

export default CounterComponent
