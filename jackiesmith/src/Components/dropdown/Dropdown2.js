import React from 'react'
import './drop2.css'
import { Link } from 'react-router-dom';

export default function Dropdown2() {
  const product=[{ img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0013_Billetera_350x.jpg?v=1652445556", name: "WALLETS" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0008_Sobre_350x.jpg?v=1652445417", name: "SMALL GOODS" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/CARD_HOLDERS_COLLECTION_350x.png?v=1662649386", name: "CARD HOLDERS" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/PHONE_BAG_COLLECTION_350x.png?v=1659102218", name: "PHONE CASES" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/beanie-01_350x.jpg?v=1657827247", name: "BEANIES" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Untitled-16-01_350x.jpg?v=1657828081", name: "SCARVES" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/E-GIFT_CARD_COLLECTION_350x.png?v=1658343463", name: "E-GIFT CARD" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Wallets-All-2_1_350x.gif?v=1653055509", name: "ALL ACCESSORIES" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Acc-Caps_350x.jpg?v=1662493376", name: "CAPS" }
]
  return (
    <div className='Dropdown2'>
      {product.map(({img,name},ind)=>{
        //console.log(name);
        return <div key={ind+1} >
          <Link><div className='ele'><img src={img} width="50px" height={"50px"}/><p>{name}</p></div></Link>
        </div>
      })}
    </div>
  )
}
