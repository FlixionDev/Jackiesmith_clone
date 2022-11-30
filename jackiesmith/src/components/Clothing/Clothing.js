import React,{useEffect} from 'react'
import Displayproduct from '../Displayproduct/Displayproduct';
import './Clothing.css'
export default function Clothing() {
    useEffect(()=>{
        fetchingclothing();    
    },[])
    const [state,setState] = React.useState([]);
    const fetchingclothing=()=>{
        fetch(`http://localhost:3001/clothing`).then((res)=>{
            return res.json();
        }).then((res)=>{
             setState(res)
        })
    }
  return (
    <div>
        <div id='Container'>
            {state.map((el,index)=>{
                   return <Displayproduct key={index+1} {...el} /> 
            })}
        </div>
    </div>
  )
}
