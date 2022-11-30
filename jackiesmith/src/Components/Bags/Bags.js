import React,{useEffect} from 'react'
import Displayproduct from '../Displayproduct/Displayproduct';
import './Bags.css'
export default function Bags() {
    useEffect(()=>{
        fetchingAllBags();    
    },[])
    const [state,setState] = React.useState([]);
    const fetchingAllBags=()=>{
        fetch(`http://localhost:3001/allBags`).then((res)=>{
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
