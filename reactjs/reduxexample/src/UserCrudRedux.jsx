import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction } from './action/CounterAction'
import { addFun, delFun, updFun } from './reduxcrud/UserAction'

const UserCrudRedux = () => {
    const [info,setInfo]=useState({
        name:"",
        age:""
    })
    const [id,setId] = useState('')
    const data=useSelector((state)=>state.userdata)
    const dispatch = useDispatch()
const handle=(e)=>{
    const {name,value}=e.target;
    setInfo({...info,[name]:value})
}
const savData = (e)=>{
    e.preventDefault()
    if(id != ''){
        dispatch(updFun(id,info))
    } else {
        dispatch(addFun(info))
    }
    setId('')
    setInfo({
        name:'',
        age:""
    })
}
const editFun = (id)=>{
    let res = data.find((i,index)=> index == id)
    setInfo(res)
    setId(id)
}
  return (
    <div>

    <form action="#" method='post' onSubmit={savData}>

        <label htmlFor="">Name:</label>
        <input type="text" value={info.name} onChange={handle} name="name" />
        <br /><br />

        <label htmlFor="">Age:</label>
        <input type="text" value={info.age} onChange={handle} name="age" />

        <br /><br />

        <input type="submit" value="Submit Data" />

    </form>

    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>               
                <th>Action</th>               
            </tr>
        </thead>
        <tbody>
            {
                data.map((i,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>
                            <button onClick={()=>editFun(index)}>Edit</button>
                            <button onClick={()=>dispatch(delFun(index))}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
      
    </div>
  )
}

export default UserCrudRedux
