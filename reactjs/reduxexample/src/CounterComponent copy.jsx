import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addAction, minusAction } from './action/CounterAction'
const CounterComponent = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    const minusFunc = ()=>{
        dispatch(minusAction())
    }
  return (
    <div>
      <h3>Count -- {count}</h3>
      <button onClick={()=>dispatch(addAction())}>Add</button>
      <button onClick={minusFunc}>Minus</button>
    </div>
  )
}

export default CounterComponent
