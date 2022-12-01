import React ,{useState}from 'react'
import './navbar.css'
import {Link} from "react-router-dom"
import { Image } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { ChevronDownIcon,CloseIcon,SearchIcon} from '@chakra-ui/icons'
import Dropdown1 from '../dropdown/Dropdown1'
import Dropdown2 from '../dropdown/Dropdown2'
import Dropdown3 from '../dropdown/Dropdown3'
import Dropdown4 from '../dropdown/Dropdown4'

function Navbar() {
  const [d1,setd1]=useState(false);
  const [d2,setd2]=useState(false);
  const [d3,setd3]=useState(false);
  const [d4,setd4]=useState(false);
  const [cart,setCart]=useState(false);
  const [cartlen,setCartlen]=useState([{
    "id": 1,
    "title": "GOTHAM POWER COLOR BELT BAG",
    "price": "$140",
    "image_1": "https://cdn.shopify.com/s/files/1/0491/4541/3794/products/CP00988MPA87X94_BAJA_A_1800x1800.jpg?v=1663269548",
    "image_2": "https://cdn.shopify.com/s/files/1/0491/4541/3794/products/CP00988MPA87X94_BAJA_B_1800x1800.jpg?v=1663269548"
  },
  {
    "id": 2,
    "title": "GOTHAM ",
    "price": "$140",
    "image_1": "https://cdn.shopify.com/s/files/1/0491/4541/3794/products/CP00988MPC03K94_BAJA_A_1800x1800.jpg?v=1663269816",
    "image_2": "https://cdn.shopify.com/s/files/1/0491/4541/3794/products/CP00988MPC03K94_BAJA_B_1800x1800.jpg?v=1663269816"
  },
  {
    "id": 3,
    "title": "GOTHAM POWER",
    "price": "$140",
    "image_1": "https://cdn.shopify.com/s/files/1/0491/4541/3794/products/CP00988MPD29R94_BAJA_A_1800x1800.jpg?v=1663269990",
    "image_2": "https://cdn.shopify.com/s/files/1/0491/4541/3794/products/CP00988MPD29R94_BAJA_B_1800x1800.jpg?v=1663269990"
  }]);
  const [num,setNum]=useState(1)
  return (
    <div>
<div className='navbar'>
      <div className='upper'>
        <div>
          <p>English <Icon as={ChevronDownIcon} /></p>
        </div>
        <div>
          <div className='img'>
            <Image src='https://cdn.shopify.com/s/files/1/0491/4541/3794/files/LogoNegro-01_300x.png?v=1639481194' alt='Jackie_Smith'  />
          </div>
        </div>
        <div>  
          <div className='icons'>
            <Link><i className="fa-regular fa-user"></i></Link>
            <Link><Icon as={SearchIcon} /></Link>
            <Link><i className="fa-light fa-heart"></i></Link>
            <Link><div onClick={()=>{
                setCart(true);
            }}><i className="fa-light fa-bag-shopping"></i></div></Link>
          </div>
        </div>
      </div>
      <div className='lower'>
          <div className='links'>
          <Link>   NEW ARRIVALS</Link>
            <Link onMouseOver={()=>{setd1(true);}}onMouseOut={()=>{setd1(false);}}>   BAGS<Icon as={ChevronDownIcon} /></Link>
            <Link onMouseOver={()=>{setd2(true);}}onMouseOut={()=>{setd2(false);}}>   ACCESSORIES<Icon as={ChevronDownIcon} /></Link>
            <Link onMouseOver={()=>{setd3(true);}}onMouseOut={()=>{setd3(false);}}>   CLOTHING<Icon as={ChevronDownIcon} /></Link>
            <Link>   SNEAKERS</Link>
            <Link onMouseOver={()=>{setd4(true);}}onMouseOut={()=>{setd4(false);}}>   OUR COMMUNITY<Icon as={ChevronDownIcon} /></Link>
          </div>
      </div>
    </div>
    {cart?<div className='cart'>{/* cart start */}
        <div className='cart_header'>
          <div>CART</div>
          <div onClick={()=>{
                setCart(false);
            }}><Icon as={CloseIcon} /></div>
          <hr></hr>
        </div>
        <div className='cart_footer'>
          {cartlen.length>0? <div><div className='prodiv'>
            {cartlen.map((ele,ind)=>{
              
              return <div className='prod'  key={ind+1}>
                <div><img src={ele.image_1} width={'50px'} height={"50px"} /></div>
                <div>
                <div>{ele.title}</div>
                <div> <button onClick={()=>{setNum(num-1)}}>-</button>{num}<button onClick={()=>{setNum(num+1)}}>+</button></div>
                </div>
              </div>
            
            })}
          </div>
          <div className='checkout'><Link to={"/checkout"}><button className='btn'>CHECKOUT</button></Link></div></div>:"Your cart is currently empty."}
        </div>
        </div>:""}{/* cart end */}
    
    <div  >{/* dropdown start*/}
      {d1?<div onMouseOver={()=>{setd1(true);}}onMouseOut={()=>{setd1(false);}} ><Dropdown1 /></div>:""}
      {d2?<div onMouseOver={()=>{setd2(true);}}onMouseOut={()=>{setd2(false);}}><Dropdown2 /></div>:""}
      {d3?<div onMouseOver={()=>{setd3(true);}}onMouseOut={()=>{setd3(false);}}><Dropdown3 /></div>:""}
      {d4?<div onMouseOver={()=>{setd4(true);}}onMouseOut={()=>{setd4(false);}}><Dropdown4 /></div>:""}
    </div>{/* dropdown end */}
    </div>
    
  )
}

export default Navbar