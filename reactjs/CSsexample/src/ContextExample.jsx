import React, { useState } from 'react'

const ContextExample = () => {
    const [name,setName] = useState("Hello")
  return (
    <div>
      <h3>Component1 called..</h3>
      <h4>Name is -- {name}</h4>
      <Component2 name={name}/>
    </div>
  )
}
const Component2 = ({name})=>{
    return (
        <div>
            <h3>Component2 called..</h3>
            <Component3 name={name}/>
        </div>
    )
}
const Component3 = ({name})=>{
    return (
        <div>
            <h3>Component3 called..</h3>
            <Component4 name={name}/>
        </div>
    )
}
const Component4 = ({name})=>{
    return (
        <div>
            <h3>Component4 called..</h3>
            <h4>Final name is -- {name}</h4>
        </div>
    )
}

export default ContextExample
