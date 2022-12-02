import React,{useEffect} from 'react'
import Displayproduct from '../Displayproduct/Displayproduct';
import Style from './Wishlist.module.css'
export default function Wishlist() {
    const [state,setState]= React.useState([]);
    useEffect(()=>{
        productWishlist();
    },[])
    const productWishlist=()=>{
        var productDescription = JSON.parse(localStorage.getItem("Wishlist")) || [];
        setState(productDescription);
    }
  return (
    <div>
        <h1 style={{fontSize:"30px",marginTop:"8%"}}>Wishlist</h1>
        <div className={Style.Container}>
            {state.map((el,index)=>{
                   return <Displayproduct key={index+1} {...el} /> 
            })}
        </div>
    </div>
  )
}
