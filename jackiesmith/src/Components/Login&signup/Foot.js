import React from "react";
import "./Foot.css"
import { ChevronDownIcon, Icon } from "@chakra-ui/icons";

function Foot(){
    return(
        <footer className="footer">
            <div style={{
                // border:"2px solid white",
                width:"90%",
                marginLeft:"40px",
                display:"flex",
                flexDirection:"row",
                padding:"10px 0 10px 0"
            }}>
                <div style={{
                    // border:"2px solid white",
                    width:"20%",
                    padding:"10px 0 10px 0"
                }}>
                    <p className="para">SHOP</p>
                    <ul style={{
                        listStyle:"none outside"
                    }}>
                        <li style={{textAlign:"left"}}>BAGS</li>
                        <li style={{textAlign:"left"}}>ACCESSORIES</li>
                        <li style={{textAlign:"left"}}>CLOTHINGS</li>
                        <li style={{textAlign:"left"}}>SNEAKERS</li>
                        <li style={{textAlign:"left"}}>E-GIFT CARD</li>
                    </ul>
                    </div>
                    <div style={{
                    // border:"2px solid white",
                    width:"20%",
                    padding:"10px 0 10px 0"}}
                    >
                        <p className="para">BRAND</p>
                    <ul style={{
                        listStyle:"none outside"
                    }}>
                        <li style={{textAlign:"left"}}>HISTORY</li>
                        <li style={{textAlign:"left"}}>MAKE IT BEAUTIFUL</li>
                        <li style={{textAlign:"left"}}>CUSTOM SHOP</li>
                        <li style={{textAlign:"left"}}>OUR STORES</li>
                    </ul>
                    </div>
                    <div style={{
                    // border:"2px solid white",
                    width:"20%",
                    padding:"10px 0 10px 0"}}
                    > <p className="para">HELP</p>
                    <ul style={{
                        listStyle:"none outside"
                    }}>
                        <li style={{textAlign:"left"}}>CUSTOMER SERVICE HELP CENTER</li>
                        <li style={{textAlign:"left"}}>TRACK MY ORDER</li>
                        <li style={{textAlign:"left"}}>SHIPPING</li>
                        <li style={{textAlign:"left"}}>RETURNS</li>
                        <li style={{textAlign:"left"}}>TERMS AND CONDITIONS</li>
                        <li style={{textAlign:"left"}}>PRIVACY POLICY</li>
                    </ul></div>
                    <div style={{
                    // border:"2px solid white",
                    width:"20%",
                    padding:"10px 0 10px 0"}} 
                    >
                        <p className="para" style={{width:"250px"}}>SHIPPING DESTINATION, CURRENCY & LANGUAGE</p>
                    <div style={{
                        listStyle:"none outside",
                        display:"flex",
                        flexDirection:"row",
                        // justifyContent:"center"
                    }}>
                        <span><img className="india" src="https://tse2.mm.bing.net/th?id=OIP.h1NSz4FHs2HQHGo2x1emHAHaEo&pid=Api&P=0"/></span>
                        <span style={{borderLeft:"1px solid white", marginLeft:"10px", height:"20px",marginTop:"5px"}}></span>
                        <ul style={{listStyle:"none outside", marginLeft:"10px"}}>
                            <li style={{fontSize:"13px"}}>English</li>
                            <li style={{fontSize:"13px"}}>Spanish</li>
                        </ul>
                        <h2 style={{marginLeft:"10px", fontSize:"25px", marginTop:"-10px"}}><Icon as={ChevronDownIcon}/></h2>
                        </div>
                        </div>
                    <div style={{
                    // border:"2px solid white",
                    width:"20%",
                    padding:"10px 0 10px 0"}}>
                        <p className="para">SHOP</p>
                    <ul style={{
                        listStyle:"none outside",
                        margin:"10px 0 10px 0"
                    }}>
                        <li style={{textAlign:"left"}}>CUSTOMER SERVICE TEAM</li>
                        <li style={{color:"black", backgroundColor:"black",display:"flex", flexDirection:"row", marginTop:"20px"}}>
                            <img style={{backgroundColor:"white", width:"30px"}}src="https://cdn-icons-png.flaticon.com/512/37/37409.png"/>
                            <img style={{width:"30px", marginLeft:"10px"}} src="data:image/png;base64,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"/>
                            <img style={{width:"40px", backgroundColor:"black",marginLeft:"10px"}} src="https://png.monster/wp-content/uploads/2022/02/png.monster-722.png"/>
                        </li>
                        <li style={{textAlign:"left", marginTop:"20px"}}>ACCESSABILITY</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Foot;