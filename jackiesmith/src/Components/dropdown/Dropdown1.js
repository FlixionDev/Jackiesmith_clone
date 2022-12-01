import React from 'react'
import { Link } from 'react-router-dom';
import "./drop1.css"
function dropdown1() {
   const products = [{ img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0023_dear_350x.jpg?v=1663359658", name: "DEAR" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0041_Moony_350x.jpg?v=1666719001", name: "MOONY" },
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/CP00724NPC03094_350x.jpg?v=1666973142", name: "NET" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0026_emma_350x.jpg?v=1666384735", name: "EMMA" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0021_Classic_130_350x.jpg?v=1663773750", name: "#130" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/CP01049MPC03094_350x.jpg?v=1666385041", name: "CORITA" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0034_Leather_Flora_350x.jpg?v=1666882681", name: "FLORA" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Bags_tokyo_350x.jpg?v=1661276392", name: "TOKYO" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0028_gotham_350x.jpg?v=1652375881", name: "GOTHAM" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0047_supernova_350x.jpg?v=1666718979", name: "SUPERNOVA" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0019_claire_350x.jpg?v=1666202997", name: "CLAIRE" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Bags_Antonia_350x.jpg?v=1653054943", name: "ANTONIA" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0016_Bellini_350x.jpg?v=1653055040", name: "BELLINI" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0042_Muse_350x.jpg?v=1656617438", name: "MUSE" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/MIRANDA_350x.jpg?v=1665090574", name: "MIRANDA" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/E-GIFT_CARD_COLLECTION_350x.png?v=1658343463", name: "E-GIFT CARD" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0049_The_monogram_series_350x.jpg?v=1659102168", name: "MONOGRAM" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Bags_Lina_350x.jpg?v=1666184821", name: "LINA" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Bags_jane_350x.jpg?v=1666385052", name: "JANE" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0045_SIMONA_350x.jpg?v=1666972391", name: "SIMONA" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0051_Verni_350x.jpg?v=1653055370", name: "VERNI" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Fotos_cuadradas_menu_0014_Alpha_350x.jpg?v=1666384746", name: "ALPHA" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/mr_smith_350x.jpg?v=1662742499", name: "MR. SMITH" }, 
  { img: "https://cdn.shopify.com/s/files/1/0491/4541/3794/collections/Bags-All_1_350x.gif?v=1653055530", name: "ALL BAGS" }]
  return (
    <div className='drop1'>
      {products.map(({img,name},ind)=>{
        //console.log(name);
        return <div key={ind+1} >
          <Link><div className='ele'><img src={img} width="50px" height={"50px"}/><p>{name}</p></div></Link>
        </div>
      })}
    </div>
  )
}

export default dropdown1