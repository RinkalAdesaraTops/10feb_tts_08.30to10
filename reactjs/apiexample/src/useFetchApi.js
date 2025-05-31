import React,{useState,useEffect} from 'react'

const useFetchApi = (url) => {
    const [data,setData] = useState([])
    useEffect(()=>{
          axios.get(url)
          .then((res)=>setData(res.data))         
    },[])
    return [data]
}
export default useFetchApi
