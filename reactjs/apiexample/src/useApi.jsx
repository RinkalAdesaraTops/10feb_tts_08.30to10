import React,{useState,useEffect} from 'react'
import axios from 'axios'
const useApi = (url) => {
    let [data,setData] = useState([])
      useEffect(()=>{
          axios.get(url)
          .then((res)=>setData(res.data))
      },[url])
      return [data]
}
export default useApi
