import React from 'react'
import './Displayproduct.css'
export default function Displayproduct({id,title,price,image_1,image_2}) {
    //console.log(props)
    const storetoLocal=(id,title,price,image_1,image_2)=>{
        var Wishlist=JSON.parse(localStorage.getItem("Wishlist")) || [];
        var obj={
            id: id,
            title: title,
            price: price,
            image_1: image_1,
            image_2: image_2
        }
        Wishlist.push(obj);
        localStorage.setItem("Wishlist",JSON.stringify(Wishlist));
    }
  return (
    <div>
        <div id='SingleProduct'>
                    <img  src={image_1}/>
                    <p>{title}</p>
                    <p>{price}</p>
                    <button onClick={()=>{storetoLocal(id,title,price,image_1,image_2)}}>&#9825;</button>
                </div>
    </div>
  )
}
