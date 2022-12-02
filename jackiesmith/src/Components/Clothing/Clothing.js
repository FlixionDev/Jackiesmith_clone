import React,{useEffect} from 'react'
import Displayproduct from '../Displayproduct/Displayproduct';
import Style from './Clothing.module.css'
export default function Clothing() {
    useEffect(()=>{
        fetchingclothing(`https://jackiesmithserver.onrender.com/clothing`);    
    },[])
    var ref1=React.useRef("");
    var ref2=React.useRef("");
    const [state,setState] = React.useState([]);
    const fetchingclothing=(url)=>{
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
            fetchingclothing(`https://jackiesmithserver.onrender.com/clothing`)
        }else if(sort!=='' && ref2.current.value===''){
            fetchingclothing(`https://jackiesmithserver.onrender.com/clothing?_sort=price&_order=${sort}`)
        }else if(sort==='' && ref2.current.value!==''){
            fetchingclothing(`https://jackiesmithserver.onrender.com/clothing?title_like=${ref2.current.value}`)
        }else{
            fetchingclothing(`https://jackiesmithserver.onrender.com/clothing?title_like=${ref2.current.value}&_sort=price&_order=${sort}`)
        }
        
    }
  return (
    <div>
        <form style={{marginTop:"120px"}} onChange={showfilter}>
                <select ref={ref1} >
                    <option value=''>Sorting</option>
                    <option value='asc'>Low to High</option>
                    <option value='desc'>High to Low</option>
                </select>
                <select ref={ref2}>
                <option value=''>Shop by brand</option>
                    <option value='In Bloom'>In Bloom</option>
                    <option value='>Mr Smith'>Distressed Denim</option>
                    <option value='Bisou'>Mr Smith</option>
                    <option value='Art We Live'>Art We Live</option>
                    <option value='Coat'>Coat</option>
                    <option value='Bisou Bisou'>Bisou Bisou</option>
                    <option value='Limited Edition'>Limited Edition</option>
                </select>
            </form>
            <h1 style={{fontSize:"30px",marginTop:"30px"}}>Clothings</h1>
        <div className={Style.Container}>
            {state.map((el,index)=>{
                   return <Displayproduct key={index+1} {...el} /> 
            })}
        </div>
    </div>
  )
}
