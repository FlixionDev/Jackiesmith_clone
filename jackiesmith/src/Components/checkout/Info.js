import React, { useState } from 'react'
import './info.css'
import {Link} from "react-router-dom"
import { Icon } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'


function Info() {
  const [total,setTotal]=useState(500)
  const [code,setCode]=useState("")
  return (
    <div className='address'>
      <div className='details'>
        <Link to={"/"}>
         <img src='https://cdn.shopify.com/s/files/1/0491/4541/3794/files/LogoNegro-01.png?12311' alt='jackiesmith'/>
        </Link>
        <div className='form'>
        <h2>SHIPPING ADDRESS</h2>
        <div ><input placeholder='First Name'/><input placeholder='Last Name'/></div>
        <div ><input placeholder='Address'/></div>
        <div ><input placeholder='City'/><input placeholder='State'/><input placeholder='Pin Code'/></div>
        <div ><input placeholder='Phone'/></div>
        <div><Link><Icon as={ChevronLeftIcon} w={8} h={8} color='rgb(255, 64, 102)' />Return</Link><Link to={'/payment'}><button >CONTINUE TO PAYMENT</button></Link></div>
        </div>
        
      </div>
      <div className='total'>
        <div className='coupon'>
          <input placeholder='Gift Card or Discount Code' onChange={(e)=>{
            setCode(e.target.value)
            // console.log(e.target.value);
          }}/>
          <button onClick={()=>{
            console.log(code);
            if(code=="masai10"){
            setTotal(total-(total/10));
          }}}>Apply</button>
        </div>
        <div className='calc'>Total:{total}</div>
      </div>
    </div>
  )
}

export default Info