import React, { useState } from 'react'

const UserCrud = () => {

    const [info,setInfo] = useState({
        name:'',
        age:''
    })
    const [id,setId] = useState('')
    const[data,setData]=useState([]);
    const savedata =(e)=>{
        e.preventDefault()
        if(id!=''){
            let res = data.map((i,index)=>{
                if(id==index){
                    i = info
                }
                return i
            })
            setData(res)
        } else {
            setData([
                ...data,
                info
            ])
        }
      setInfo({
            name:'',
            age:''
        })
        setId('')
    }   
    const handleChange = (e)=>{
        let {name,value} = e.target
        // let v = e.target.value
        // let n = e.target.name
        setInfo({
            ...info,
            // [n]:v
            [name]:value
        })
    }
    const delData = (id) => {
      let res = data.filter((i,index)=>{
        return id!=index
      })
      setData(res)
    }
    const edtData = (id) => {
        console.log(id);     
        let res = data.find((i,index)=>{
            return id == index
        })
        console.log(res)
        setInfo(res)
        setId(id)
    }
  return (
    <div>
        <form action="#" method='post' onSubmit={savedata}>
        <label htmlFor="">Name</label> 
        <input type="text" name='name' id='name' onChange={handleChange} value={info.name}/> 
        <br /><br />
        <label htmlFor="">Age</label>
        <input type="number" name="age" id="age" onChange={handleChange} value={info.age}/>
        <br /><br />
        <input type="submit" value="Submit Data" />
        </form ><br /><br />
        <table border={'2'}>
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
                    data.map((i,index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>
                                    <button onClick={()=>edtData(index)}>Edit</button>
                                    <button onClick={()=>delData(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
export default UserCrud
