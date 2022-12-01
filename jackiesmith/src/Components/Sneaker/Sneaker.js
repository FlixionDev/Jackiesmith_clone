import React,{useEffect} from 'react';
import Displayproduct from '../Displayproduct/Displayproduct';
import Style from './Sneaker.module.css';
import {Outlet} from 'react-router-dom'
export default function Sneaker() {
    useEffect(()=>{
        fetchingsneaker(`https://jackiesmithserver.onrender.com/sneaker`);    
    },[]);
    var ref1=React.useRef("");
    var ref2=React.useRef("");
    const [state,setState] = React.useState([]);
    const fetchingsneaker=(url)=>{
        fetch(url).then((res)=>{
            return res.json();
        }).then((res)=>{
             setState(res)
        })
    }
    const showfilter = (e) => {
        e.preventDefault();
        
        var sort=ref1.current.value;
        if(sort==='' && ref2.current.value===''){
            fetchingsneaker(`https://jackiesmithserver.onrender.com/sneaker`)
        }else if(sort!=='' && ref2.current.value===''){
            fetchingsneaker(`https://jackiesmithserver.onrender.com/sneaker?_sort=price&_order=${sort}`)
        }else if(sort==='' && ref2.current.value!==''){
            fetchingsneaker(`https://jackiesmithserver.onrender.com/sneaker?title_like=${ref2.current.value}`)
        }else{
            fetchingsneaker(`https://jackiesmithserver.onrender.com/sneaker?title_like=${ref2.current.value}&_sort=price&_order=${sort}`)
        }
        
    }
  return (
    <div>
        <form style={{marginTop:"30px"}} onChange={showfilter}>
                <select ref={ref1} >
                    <option value=''>Sorting</option>
                    <option value='asc'>Low to High</option>
                    <option value='desc'>High to Low</option>
                </select>
                <select ref={ref2}>
                <option value=''>Shop by brand</option>
                    <option value='Limited Edition'>Limited Edition</option>
                    <option value='High Top'>High Top</option>
                    <option value='Bisou'>Bisou</option>
                </select>
            </form>
            <h1 style={{fontSize:"30px",marginTop:"30px"}}>Sneakers</h1>
        <div className={Style.Container}>
            {state.map((el,index)=>{
                   return <Displayproduct key={index+1} {...el} /> 
            })}
        </div>
        <Outlet/>
    </div>
  )
}
