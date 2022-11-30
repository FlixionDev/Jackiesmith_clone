import React from 'react'
import './Displayproduct.css'
import { Navigate, Link } from 'react-router-dom'
export default function Displayproduct({ id, title, price, image_1, image_2 }) {
  //console.log(props)
  const storetoLocal = (id, title, price, image_1, image_2) => {
    var Wishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
    var obj = {
      id: id,
      title: title,
      price: price,
      image_1: image_1,
      image_2: image_2
    }
    Wishlist.push(obj);
    localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
  }
  const productdescription = () => {
    var productDescription = JSON.parse(localStorage.getItem("productDescription")) || [];
    var ob = {
      id: id,
      title: title,
      price: price,
      image_1: image_1,
      image_2: image_2
    }
    localStorage.setItem("productDescription", JSON.stringify(ob));
  }
  return (
    <div>
      <Link to='productdescription'>
        <div id='SingleProduct' onClick={productdescription} >
          <img onMouseOver={e => (e.currentTarget.src = image_2)} onMouseOut={e => (e.currentTarget.src = image_1)} src={image_1} />
          <p>{title}</p>
          <p>{price}</p>
          <button onClick={() => { storetoLocal(id, title, price, image_1, image_2) }}>&#9825;</button>
        </div></Link>
    </div>
  )
}
