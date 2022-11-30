import React,{useEffect} from 'react'
import Displayproduct from '../Displayproduct/Displayproduct';
import './Bags.css'
export default function Bags() {
    useEffect(()=>{
        fetchingAllBags();    
    },[])
    const [state,setState] = React.useState([]);
    const [filter,setFilter]=React.useState(false);
    const fetchingAllBags=()=>{
        fetch(`https://jackiesmithserver.onrender.com/allBags`).then((res)=>{
            return res.json();
        }).then((res)=>{
             setState(res)
        })
    }
    const showfilter=()=>{
        setFilter(!filter)
    }
    
  return (
    <div>
        <div style={{width:'10%'}}>
            <button onClick={showfilter}>Filter</button>
        </div>
        <div id='Containers'>
            {state.map((el,index)=>{
                   return <Displayproduct key={index+1} {...el} /> 
            })}
        </div>
    </div>
  )
}
