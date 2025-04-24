import { createContext, useContext,useState } from "react"

const Userdata = createContext()
const UseContextExample = () => {
     const [name,setName] = useState("Hello")
  return (
    <div>
      <h3>Component1 called..</h3>
      <h4>Name is -- {name}</h4>
      <Userdata.Provider value={name}>
        <Component2 />
      </Userdata.Provider>
    </div>
  )
}
const Component2 = ()=>{
    return (
        <div>
            <h3>Component2 called..</h3>
            <Component3 />
        </div>
    )
}
const Component3 = ()=>{
    return (
        <div>
            <h3>Component3 called..</h3>
            <Component4 />
        </div>
    )
}
const Component4 = ()=>{
    let name = useContext(Userdata)
    return (
        <div>
            <h3>Component4 called..</h3>
            <h4>Final name is -- {name}</h4>
        </div>
    )
}
export default UseContextExample
