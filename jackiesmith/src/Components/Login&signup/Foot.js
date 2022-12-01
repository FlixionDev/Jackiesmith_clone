import React from "react";
import "./Foot.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    <ul style={{
                        listStyle:"none outside",
                        display:"flex",
                        flexDirection:"row"
                    }}>
                        <li><img src="https://tse2.mm.bing.net/th?id=OIP.h1NSz4FHs2HQHGo2x1emHAHaEo&pid=Api&P=0"/></li>
                        <li style={{borderLeft:"1px solid white"}}></li>
                        <li>
                            <ul style={{
                        listStyle:"none outside"
                    }}
                            >
                                <li>English</li>
                                <li>Spanish</li>
                            </ul>
                        </li>
                        <li style={{color:"white",cursor:"pointer",border:"1px solid white"}}></li>
                        <h4><FontAwesomeIcon icon="fa-regular fa-angle-down" /></h4>
                    </ul>
                    </div>
                    <div style={{
                    // border:"2px solid white",
                    width:"20%",
                    padding:"10px 0 10px 0"}}>
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
            </div>
        </footer>
    )
}

export default Foot;