import React from 'react'
import './drop3.css'
import { Link } from 'react-router-dom';

export default function Dropdown3() {
  const product=[
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/COLLECTION-TSHIRTS_350x.png?v=1667401306", name: "T-SHIRTS" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0001_Pantalon_350x.jpg?v=1662493445", name: "PANTS" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/COAT_COLLECTION_350x.png?v=1668095611", name: "COATS" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0002_Jean_350x.jpg?v=1656531075", name: "DENIM" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/COLLECTION-KNITWEAR_350x.png?v=1656529472", name: "KNITWEAR" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/TARTAN_JACKET_COLLECTION_350x.png?v=1657828879", name: "JACKETS" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/E-GIFT_CARD_COLLECTION_350x.png?v=1658343463", name: "E-GIFT CARD" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Clothings-All-2_1_350x.gif?v=1657895176", name: "ALL CLOTHING" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Clothing_Shorts_350x.jpg?v=1669236485", name: "SHORTS" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0003_Sweatshirt_350x.jpg?v=1657827477", name: "SWEATSHIRTS" }
  ]
  return (
    <div className='Dropdown3'>
      {product.map(({img,name},ind)=>{
        //console.log(name);
        return <div key={ind+1} >
          <Link><div className='ele'><img src={img} width="50px" height={"50px"}/><p>{name}</p></div></Link>
        </div>
      })}
    </div>
  )
}
