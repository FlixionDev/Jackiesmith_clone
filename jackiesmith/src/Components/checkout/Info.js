import React, { useState } from 'react'
import './info.css'
import {Link} from "react-router-dom"
import { Icon } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

import {useSelector} from 'react-redux'
function Info() {
  const store=useSelector((store)=>{return store.total})
  //console.log(store)
  const [total,setTotal]=useState(store)
  const [code,setCode]=useState("");
  const [name,setName]=useState("");
  const [lname,setLname]=useState("");
  const [add,setAdd]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [pin,setPin]=useState("");
  const [mob,setMob]=useState("");
  const [istrue,setIstrue]=useState(false);
  const checkfill=()=>{
    if(name!="" && lname!="" && add!="" && city!="" && state!="" && pin!="" && mob!=""){
      setIstrue(true)
    }else{
      alert("Please, fill all the details")
    }
  }
  //console.log(total)
  return (
    <div className='address'>
      <div className='details'>
        <Link to={"/"}>
         <img src='https://cdn.shopify.com/s/files/1/0491/4541/3794/files/LogoNegro-01.png?12311' alt='jackiesmith'/>
        </Link>
        <div className='form'>
        <h2>SHIPPING ADDRESS</h2>
        <div ><input onChange={(e)=>{setName(e.target.value)}} placeholder='First Name'/><input onChange={(e)=>{setLname(e.target.value)}} placeholder='Last Name'/></div>
        <div ><input onChange={(e)=>{setAdd(e.target.value)}} placeholder='Address'/></div>
        <div ><input onChange={(e)=>{setCity(e.target.value)}} placeholder='City'/><input onChange={(e)=>{setState(e.target.value)}} placeholder='State'/><input onChange={(e)=>{setPin(e.target.value)}} placeholder='Pin Code'/></div>
        <div ><input onChange={(e)=>{setMob(e.target.value)}} placeholder='Phone'/></div>
        <div><Link><Icon as={ChevronLeftIcon} w={8} h={8} color='rgb(255, 64, 102)' />Return</Link><Link to={istrue ? '/payment' : null}><button onClick={checkfill} >CONTINUE TO PAYMENT</button></Link></div>
        </div>
        
      </div>
      {/* <div className='total'>
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
        <div className='calc'>Total:{store}</div>
      </div> */}
    </div>
  )
}

export default Info