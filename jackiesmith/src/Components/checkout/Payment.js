import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import { Icon ,Accordion,AccordionButton,AccordionIcon,Box,AccordionItem,AccordionPanel,Radio,Stack,RadioGroup} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import './payment.css'
import {useSelector} from 'react-redux'

function Payment() {
  const store=useSelector((store)=>{return store.total})
  //console.log(store)
  const [total,setTotal]=useState(store)
  const [code,setCode]=useState("")
  const [card,setCard]=useState(true)
  const [car,setCar]=useState(true)
  const nav=useNavigate();

  return (
    <div className='address2'>
      <div className='details2'>
        <Link to={"/"}>
          <img src='https://cdn.shopify.com/s/files/1/0491/4541/3794/files/LogoNegro-01.png?12311' style={{ width: "40%", margin: "auto" }} alt='jackiesmith' />
        </Link>
        <div className='form2'>
          <div style={{ display: 'grid', }}><h2>PAYMENT</h2>
            <p style={{ fontWeight: "lighter", fontSize: "small" }}>All transactions are secure and encrypted. </p></div>
          <RadioGroup defaultValue='1' style={{padding:"10px"}}>
            <Stack spacing={4} >
              <Radio value='1' onClick={() => {
                setCard(true);
              }}>
                Credit card
              </Radio>
              {card ? <div style={{border:"1px solid black",padding:"25px",backgroundColor:"#fafafa"}}>
                  <input placeholder='CARD NUMBER' style={{padding:"5px",width:"100%",border:"1px solid black",marginBottom:"10px"}}/>
                  <input placeholder='NAME ON CARD' style={{padding:"5px",width:"100%",border:"1px solid black",marginBottom:"10px"}}/>
                  <input placeholder='EXPIRATION DATE (MM/YY)' style={{padding:"5px",width:"50%",border:"1px solid black",marginBottom:"10px"}}/>
                  <input placeholder='SECURITY CODE' style={{padding:"5px",border:"1px solid black",marginLeft:"10px"}}/>
                </div>: console.log("no")}
              <Radio value='2' onClick={() => {
                setCard(false);
              }}>
                <img style={{ width: "250px" }} src='https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/shopify_installments@2x-d7520ea8e57828208454f0290d5ae8e4269bda53ac0fa85f8329da8c081e7557.png' />
              </Radio>
              <Radio value='3' onClick={() => {
                setCard(false);
              }}>
                <img style={{ width: "100px" }} src='https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/paypal@2x-768388b0667bef1aa9a7cf02fa1cc2184c2915a90d4cdd62dde223f74f2acbfc.png' />
              </Radio>
            </Stack>
          </RadioGroup>
          

{/*/////////////////// billing start///////////////////////// */}
          <div style={{display:"grid", marginTop:"25px",paddingBottom:"25px",borderTop:"1px solid black"}}>
            <div style={{ display: 'grid', marginTop:"25px"}}><h2>BILLING ADDRESS</h2>
              <p style={{ fontWeight: "lighter", fontSize: "small" }}>Select the address that matches your card or payment method. </p></div>
            <RadioGroup defaultValue='1' style={{marginTop:"35px"}}>
              <Stack spacing={4} >
                <Radio value='1' onClick={() => {
                  setCar(true);
                }}>
                  Same as shipping address
                  
                </Radio>
                <Radio value='2' onClick={() => {
                  setCar(false);
                }}>
                  Use a different billing address
                </Radio>
                {car ? "" : <div><div ><input style={{padding:"5px",width:"40%",border:"1px solid black",marginBottom:"10px",marginRight:"10px",borderRadius:"10px"}} placeholder='First Name'/>
                <input style={{padding:"5px",width:"40%",border:"1px solid black",marginBottom:"10px",borderRadius:"10px"}} placeholder='Last Name'/></div>
        <div ><input style={{padding:"5px",width:"80%",border:"1px solid black",marginBottom:"10px",borderRadius:"10px"}} placeholder='Address'/></div>
        <div ><input style={{padding:"5px",width:"30%",border:"1px solid black",marginBottom:"10px",marginRight:"10px",borderRadius:"10px"}} placeholder='City'/>
        <input style={{padding:"5px",width:"30%",border:"1px solid black",marginBottom:"10px",marginRight:"10px",borderRadius:"10px"}} placeholder='State'/>
        <input style={{padding:"5px",width:"30%",border:"1px solid black",marginBottom:"10px",marginRight:"10px",borderRadius:"10px"}} placeholder='Pin Code'/></div>
        <div ><input style={{padding:"5px",width:"80%",border:"1px solid black",marginBottom:"10px",borderRadius:"10px"}} placeholder='Phone'/></div></div>}
              </Stack>
            </RadioGroup></div>
        <div><Link to={"/checkout"}><Icon as={ChevronLeftIcon} w={8} h={8} color='rgb(255, 64, 102)' />Return</Link><Link ><button onClick={()=>{
          alert('Your Total is $'+total)
          setTimeout(()=>{
            alert("Your order is Placed")
          },2000)
          setTimeout(()=>{
            //window.location="/"
            nav('/')
          },2000)

        }}>PAY</button></Link></div>
        </div>
        
      </div>
      <div className='total2'>
        <div className='coupon2'>
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
        <div className='calc'>Total: ${total}</div>
      </div>
    </div>
  )
}

export default Payment