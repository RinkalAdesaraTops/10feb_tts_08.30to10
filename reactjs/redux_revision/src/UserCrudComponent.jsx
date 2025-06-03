import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ins,del,upd} from './Rtk/UserReducer'
const UserCrudComponent = () => {
    const [data,setData]=useState({
        name:"",
        age:"",
        salary:""
    })
    const [id,setId] = useState('')
    const alldata = useSelector((state)=>state.user.data)
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    let dispatch = useDispatch()
    const saveData=(e)=>{
        e.preventDefault()
        if(id !=''){
            dispatch(upd({id,data}))
        } else {
            dispatch(ins(data))
        }
        setData({
            name:"",
            age:"",
            salary:""
        })
        setId('')
    }
    const editData = (id)=>{
        let res = alldata.find((i,index)=> index == id)
        setData(res)
        setId(id)
    }
  return (
    <div>
        <form action="#" method='post' onSubmit={saveData}>
            <label htmlFor="">Name :</label>
            <input type="text" name='name' id='name' onChange={handleChange} value={data.name} /> <br />

            <label htmlFor="">age :</label>
            <input type="number" name='age' id='age' onChange={handleChange} value={data.age} /><br />

             <label htmlFor="">Salary :</label>
            <input type="number" name='salary' id='salary' onChange={handleChange} value={data.salary}  /><br />

            <input type="submit" value="save data" />


        </form>
        <table border={2}>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
            </thead>
            <tbody>
                {
                    alldata.map((i,index)=>{
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.salary}</td>
                                <td>
                                    <button onClick={()=>editData(index)}>Edit</button>
                                    <button onClick={()=>dispatch(del(index))}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserCrudComponent
