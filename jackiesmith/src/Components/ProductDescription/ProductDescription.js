import React, { useRef } from 'react'
import Style from './ProductDescription.module.css'
import giftbox from '../Images/giftbox.jpeg'
import card from '../Images/card.png';
import ret from '../Images/return.png';
import store from '../Images/store.png';
import ship from '../Images/shipping.png';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  border
} from '@chakra-ui/react'
import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
export default function ProductDescription() {
  var cart =JSON.parse(localStorage.getItem("cart")) || [];
  var productDescription = JSON.parse(localStorage.getItem("productDescription")) || [];
  const [state, setState] = React.useState(productDescription);
  const [quantity, setQuantity] = React.useState(1);
  const [image1, setImg1] = React.useState(true);
  const [image2, setImg2] = React.useState(false);
  return (
    <div className={Style.Container}>
      <div className={Style.imageContainer}>
        <div className={Style.imagebox}>
          <img style={image1 ? { "border": "2px solid black" } : null} onClick={() => {
            setImg1(true);
            setImg2(false)
          }} src={state.image_1} />
          <img style={image2 ? { "border": "2px solid black" } : null} onClick={() => {
            setImg1(false);
            setImg2(true)
          }} src={state.image_2} />
        </div>
        <div>
          {image1 ? <img src={state.image_1} /> : null};
          {image2 ? <img src={state.image_2} /> : null};
        </div>
      </div>
      <div className={Style.productDetailsTopRIght}>
        <h1 style={{ "fontSize": "1.57667em" }}>{state.title}</h1>
        <h2 style={{ "fontSize": "14px", "fontWeight": "bold", "marginTop": "10px" }}>$ {state.price}</h2>
        <p style={{ "marginTop": "10px", 'marginBottom': "10px" }}> 3 interest-free installments of $10,497 with Visa, Master and Amex cards.</p>
        <hr />
        <h3 style={{ "fontSize": "15px", "fontWeight": "bold", marginTop: "10px" }}>You have 1 day , 11 hours and 22 minutes left to place your order and receive it at home no later than December 12! QUANTITY</h3>
        <p style={{ "fontSize": ".75em", "fontWeight": "400", marginTop: "10px", 'marginBottom': "10px" }}>QUANTITY</p>
        <Stack spacing={4} direction='row' align='center'>
          <Button disabled={quantity==1 ? true : false} onClick={()=>{setQuantity(quantity-1)}}  colorScheme='teal' size='lg'>
            -
          </Button>
          <p>{quantity}</p>
          <Button disabled={quantity==10 ? true : false} onClick={()=>{setQuantity(quantity+1)}} colorScheme='teal' size='lg'>
            +
          </Button>
        </Stack>



        {/* //////////////////////ADD TO CART////////////////////////// */}
        <div><button onClick={()=>{
          state.quantity=quantity;
          cart.push(state);
          localStorage.setItem("cart", JSON.stringify(cart));
        }} style={{ "width": "100%", "backgroundColor": "black", "color": "white", "padding": "7px", "marginTop": "20px" }}>ADD TO CART</button></div>
        {/* ///////////////////////////////////////////////// */}
        
        <div><button style={{ "width": "100%", "backgroundColor": "white", "color": "black", "padding": "6px", "marginTop": "20px", "border": "1px solid black" }}>WISH LIST &#9825;</button></div>
        <div style={{ display: "flex", 'marginTop': "30px" }}>
          <div><img style={{ backgroundColor: "white", "width": "150px", "height": "150px" }} src='https://cdn.shopify.com/s/files/1/0208/1956/t/52/assets/pinkBoxes.jpg?v=12727441625400655661660156897' /></div>
          <div style={{ "marginLeft": "10px" }}>
            <h3 style={{ "fontSize": ".75em", "fontWeight": "bold", marginTop: "10px" }}>THE PINK BOX!</h3>
            <p style={{ "fontSize": "1em", marginTop: "10px" }}>All our products come<br />wrapped to give away or treat yourself to!</p>
            <p style={{ "fontSize": "1em" }}>We love gift wrapping!</p>
          </div>
        </div>
        <hr />
        <div className={Style.detailsofshipdiv}>
          <div style={{ "border": "0.1px solid gray", "width": "150px" }}>
            <div><img style={{ backgroundColor: "white", "width": "100px", "height": "100px", margin: "auto" }} src={ship} /></div>
            <div><p>FREE SHIPPING TO THE WHOLE COUNTRY!</p></div>
          </div>
          <hr />
          <div style={{ "border": "0.1px solid gray", "width": "150px" }}>
            <div><img style={{ backgroundColor: "white", "width": "100px", "height": "100px", margin: "auto" }} src={store} /></div>
            <div><p>WITHDRAWAL IN STORE IN 2 HS!</p></div>
          </div>
          <div style={{ "border": "0.1px solid gray", "width": "150px" }}>
            <div><img style={{ backgroundColor: "white", "width": "100px", "height": "100px", margin: "auto" }} src={ret} /></div>
            <div><p>CHANGES AND RETURNS WITHOUT CHARGE!</p></div>
          </div>
          <div style={{ "border": "0.1px solid gray", "width": "150px" }}>
            <div><img style={{ backgroundColor: "white", "width": "100px", "height": "100px", margin: "auto" }} src={card} /></div>
            <div><p>3 INSTALLMENTS WITHOUT INTEREST!</p></div>
          </div>
        </div>
        <div className={Style.Aboutproduct}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    SEE STORES WITH AVAILABLE STOCK…
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                You can pick up this product in just two hours in one of these stores!
                Add the product to the Cart and then select the Store at Checkout.
                After paying, you can choose the day and time of withdrawal (within business hours).
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    WHY WE LOVE IT
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A limited edition in which our love for graphic design and color flourishes, in its most fiery nuances. Designed in 2017, the Dear Backpack has become a Jackie Smith classic. Made of microfiber, its simple and exquisite silhouette is joined by a maxi closure, matching metal fittings and an adorable glossy PU charm. Adjustable straps in custom design ribbon and a zippered back pocket to carry your cell phone. Say It With A Pattern.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    DETAILS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                A limited edition in which our love for graphic design and color flourishes, in its most fiery nuances. Designed in 2017, the Dear Backpack has become a Jackie Smith classic. Made of microfiber, its simple and exquisite silhouette is joined by a maxi closure, matching metal fittings and an adorable glossy PU charm. Adjustable straps in custom design ribbon and a zippered back pocket to carry your cell phone. Say It With A Pattern.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    REVIEWS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
