import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useFetchApi from './useFetchApi'

const Customhookrevision = () => {
    const [data,setData] = useState({
        name:"",
        age:"",
        salary:""
    })
    const [stud,setStud] = useState({
        st_name:"",
        st_per:"",
        st_sem:""
    })
    const [userdata] = useFetchApi("https://fakestoreapi.com/users")
    const [cartdata] = useFetchApi("https://fakestoreapi.com/carts")
    // const [userdata,setUserData] = useState([])
    // const [cartdata,setCartData] = useState([])
    // useEffect(()=>{
    //     axios.get('https://fakestoreapi.com/users')
    //     .then((res)=>setUserData(res.data))
    //     axios.get('https://fakestoreapi.com/carts')
    //     .then((res)=>setCartData(res.data))
    // },[])
    
  return (
    <div>       
      <table border={'3'} bgcolor='E6E6FA' cellSpacing={'3'} cellPadding={'5'}>
        <thead>
            <tr>
                <th>Uname</th>
                <th>Name</th>
                <th>Number</th>
            </tr>
        </thead>
        <tbody>
        
        {
                    userdata.map((i)=>{
                    return(
                            <tr>
                                <td>{i.username}</td>
                                <td>{i.name.firstname } {i.name.lastname }</td>
                                <td>{i.phone}</td>
                            </tr>
                    )
                })

        }
        </tbody>
      </table>
    </div>
  )
}

export default Customhookrevision
