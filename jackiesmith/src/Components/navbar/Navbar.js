import React ,{useState,useEffect}from 'react'
import './navbar.css'
import {Link} from "react-router-dom"
import { Image } from '@chakra-ui/react'
import { FaTrash } from "react-icons/fa";
import { Icon } from '@chakra-ui/react'
import { ChevronDownIcon,CloseIcon,SearchIcon} from '@chakra-ui/icons'
import Dropdown1 from '../dropdown/Dropdown1'
import Dropdown2 from '../dropdown/Dropdown2'
import Dropdown3 from '../dropdown/Dropdown3'
import Dropdown4 from '../dropdown/Dropdown4'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { actiontotal } from '../../Redux/Action/Action'

function Navbar() {
  const [d1,setd1]=useState(false);
  const [d2,setd2]=useState(false);
  const [d3,setd3]=useState(false);
  const [d4,setd4]=useState(false);
  const [cart,setCart]=useState(false);
  const store=useSelector((store)=>{return store.Cart})
  const isAuth=useSelector((store)=>{return store.isAuth})

  console.log(store)
  const dispatch=useDispatch();
  var lcart =JSON.parse(localStorage.getItem("cart")) || [];
  const [cartlen,setCartlen]=useState(lcart);
  const [num,setNum]=useState(1);
  const [total,setTotal]= useState(0);
  useEffect(()=>{

    if(store.length>0){
      let tot=store.reduce((acc,el)=>{
        return acc+Number(el.price)*Number(el.count);
      },0)
      //console.log(tot)
     setTotal(tot)
    }
  })
  const sendtoaction=()=>{
    actiontotal(total,dispatch);
  }
  return (
    <div>
<div className='navbar'>
      <div className='upper'>
        <div>
          <p>English <Icon as={ChevronDownIcon} /></p>
        </div>
        <div>
          <div className='img'>
            <Link to='/'><Image src='https://cdn.shopify.com/s/files/1/0491/4541/3794/files/LogoNegro-01_300x.png?v=1639481194' alt='Jackie_Smith'  /></Link>
          </div>
        </div>
        <div>  
          <div className='icons'>
            <Link to='/login'><img src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0" style={{width:"25px",backgroundColor:"white"}}/></Link>
            <Link><img src="https://lh6.googleusercontent.com/proxy/JBuU-Tv99eywZsNpsNs-wiLYO-Ard7SCfqaj5RaanfHJOkcd-tMAAMtnO-6N7426W4zQ2qDqxXdx-gES5q2t041EVpY=s0-d" style={{width:"25px",backgroundColor:"white"}}/></Link>
            <Link to='/wishlist'><img src="https://cdn.onlinewebfonts.com/svg/img_126692.png" style={{width:"25px",backgroundColor:"white"}}/></Link>
            <Link><div onClick={()=>{
                setCart(true);
            }}><img src="https://cdn.onlinewebfonts.com/svg/img_573020.png" style={{width:"25px",backgroundColor:"white"}}/></div></Link>
          </div>
        </div>
      </div>
      <div className='lower'>
          <div className='links'>
          <Link to={'/'}>   NEW ARRIVALS</Link>
            <Link to='/bags' onMouseOver={()=>{setd1(true);}}onMouseOut={()=>{setd1(false);}}>   BAGS<Icon as={ChevronDownIcon} /></Link>
            <Link to='#' onMouseOver={()=>{setd2(true);}}onMouseOut={()=>{setd2(false);}}>   ACCESSORIES<Icon as={ChevronDownIcon} /></Link>
            <Link to='/clothing' onMouseOver={()=>{setd3(true);}}onMouseOut={()=>{setd3(false);}}>   CLOTHING<Icon as={ChevronDownIcon} /></Link>
            <Link to='/sneaker'>   SNEAKERS</Link>
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
          {store.length>0? <div><div className='prodiv'>
            {store.map((ele,ind)=>{
              //setNum(ele.quantity);
              return <div className='prod' style={{margin:"auto"}}  key={ind+1}>
                <div><img src={ele.image_1} width={'50px'} height={"50px"} /></div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
                <div>{ele.title}</div>
                <div>{`Quantity : ${ele.count}`}</div>
                
                {/* <div> <button onClick={()=>{setNum(num-1)}}>-</button>{num}<button onClick={()=>{setNum(num+1)}}>+</button></div> */}
                </div>
                <div>
                {/* <div style={{display:"none"}}>var t=Number(ele.price)*Number(ele.count)</div> */}
                <div style={{marginTop:"20px"}}>$ {(Number(ele.price)*Number(ele.count)).toFixed(2)}</div>
                </div>
                <div style={{marginTop:"20px"}}><button><FaTrash/></button></div>
              </div>
            
            })}
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <p>Subtotal Amount</p>
            <p>$ {total.toFixed(2)}</p>
            </div>
          <div className='checkout'><Link onClick={sendtoaction} to={isAuth ? "/checkout" : '/login'}><button className='btn'>CHECKOUT</button></Link></div></div>:"Your cart is currently empty."}
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