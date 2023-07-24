import React,{useEffect,useState} from 'react'
import axios from 'axios';
import backimg from '../../../../Assets/Deals/back.png'
import { Link } from "react-router-dom";
import './Api.css'
const Api = () => {
    // const [back, setback] = useState(false)
    // const goback =() => {
    //     console.log('WERTYU',back,data1 )
    //     setback(true)
    //     data1(false)
    // }
    const [data, setData] = useState([])
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div className='api_main'>
     <div><h2>Data from API</h2></div>
     <div className='api_section'>
         {data.map((it) => (
         <span key={it.id} className="api">
           <span className='text'>{it.name}</span> 
           <span className='text1'> {it.email}</span> 
         </span>
         ))}
     </div>
       <span className='back_section'>
    <Link to='/'>       
    <img src={backimg} alt="/" className='back' /><span>Go Back</span>
    </Link>
   </span>  
    </div>
  )
}
export default Api;
