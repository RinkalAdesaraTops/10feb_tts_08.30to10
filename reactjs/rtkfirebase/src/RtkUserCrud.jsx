import React,{useState} from 'react'
import { add, del, upd } from './Rtk/RtkUserReducer'
import { useDispatch,useSelector } from 'react-redux'
const RtkUserCrud = () => {
    const [info,setInfo]= useState({ 
        name:'',
        age:'',
        salary:''
    })
const data= useSelector((state)=>state.user.data)
const [id,setId]=useState('')
const dispatch =useDispatch()
const saveData = (e)=>{
    e.preventDefault()
    if(id!=''){
        dispatch(upd({id,info}))
    } else {
        dispatch(add(info))
    }
    setId('')
    setInfo({
        name:'',
        age:'',
        salary:''
    })
}
const handle =(e)=>{
      const {name,value}=e.target
      setInfo({...info,[name]:value})
}
const editData = (id)=>{
    let res = data.find((i,index)=>index == id)
    setInfo(res)
    setId(id)
}
  return (
     <div>
        <form action="#" method='post' onSubmit={saveData} >
        <label htmlFor="">Name: </label>
        <input type="text" name='name' id='name' value={info.name} onChange={handle} /><br /><br />
    
        <label htmlFor="">Age: </label>
        <input type="number" name='age' value={info.age} id='age' onChange={handle} /><br /><br />
    
        <label htmlFor="">Salary: </label>
        <input type="number" name='salary' value={info.salary} id='salary' onChange={handle}/><br /><br />
    
        <input type="submit" value='save' />
          </form>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                    {
                      data.map((i,index)=>
                      
                        (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.salary}</td>
                                <td>
                                  <button onClick={()=>editData(index)}>Edit</button>
                                  <button onClick={()=>dispatch(del(index))}>Delete</button>
                                </td>
                            </tr>
                        )
                      
                      )
                    }
            </tbody>
          </table>
        </div>
  )
}

export default RtkUserCrud
