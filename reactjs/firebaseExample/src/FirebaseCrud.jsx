import React, { useEffect, useState } from 'react'
import {db} from '../firebase'
import { addDoc, collection, deleteDoc, onSnapshot, query,doc, getDoc, updateDoc } from 'firebase/firestore'
const FirebaseCrud = () => {
    const [data,setData] = useState({
        name:"",
        age:"",
        salary:""
    })
    const [id,setId] = useState('')
    const [alldata,setAllData] = useState([])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = async(e)=>{
        e.preventDefault()
        if(id!=''){
            let result = await updateDoc(doc(db,"users",id),data)

        } else {
            let result = await addDoc(collection(db,"users"),data)

        }
        setData({
            name:'',
            age:'',
            salary:''
        })
        setId('')
    }
    useEffect(()=>{
        const q = query(collection(db,"users"))
        let result = onSnapshot(q,(i)=>{
            let allArray = []
            i.forEach((j)=>{
               allArray.push({...j.data(),id:j.id})
            })
            setAllData(allArray)
        })
        return () => result();
    },[])
    const delData = async(id)=>{
        let result = await deleteDoc(doc(db,"users",id))
    }
    const editData = async(id)=>{
        let res = await getDoc(doc(db,"users",id))
        setData(res.data());
        setId(id)
    }
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" value={data.name} onChange={handleChange} /> <br /><br />
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="age" value={data.age} onChange={handleChange} /> <br /><br />
        <label htmlFor="">Salary:</label>
        <input type="number" name="salary" id="salary" value={data.salary} onChange={handleChange} /> <br /><br />
        <input type="submit" name="save" value='Save' /> <br /><br />
      </form>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                alldata.map((i,index)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.salary}</td>
                            <td><button onClick={()=>editData(i.id)}>Edit</button><button onClick={()=>delData(i.id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default FirebaseCrud
