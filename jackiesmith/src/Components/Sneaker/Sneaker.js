import React,{useEffect} from 'react';
import Displayproduct from '../Displayproduct/Displayproduct';
import './Sneaker.css'
export default function Sneaker() {
    useEffect(()=>{
        fetchingsneaker();    
    },[])
    const [state,setState] = React.useState([]);
    const fetchingsneaker=()=>{
        fetch(`http://localhost:3001/sneaker`).then((res)=>{
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
