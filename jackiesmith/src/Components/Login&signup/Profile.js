import React from "react";
import { Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Profile(){
    const [state3, setState3]=React.useState(false)
    const div3=()=>{
        setState3(!state3)
    }
    const nav1=useNavigate()
    const keep=()=>{
        nav1('/')
    }
    return (
        <div style={{marginTop:"80px"}}>
            <div>
                <h1 style={{
                    textAlign:"center",
                    lineHeight:"1",
                    marginBottom:"0",
                    fontSize: "1.53333em",
                    letterSpacing:".1em",
                    fontFamily:"Poppins,sans-serif",
                    fontWeight:"200",
                    marginBlockStart:"0.67em",
                    marginBlockEnd:"0.67em",
                    marginInlineStart:"0px",
                    marginInlineEnd:"0px"
                }} >MY ACCOUNT</h1>
                <img style={{
                    width:"150px",
                    height:"82px",
                    margin:"10px auto"
                }}
                src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/accountTitle3.png?v=135899930545251754481637078407"/>
                <h3 style={{
                    fontSize:"1.18333em",
                    fontWeight:"700",
                    lineHeight:"10px",
                    fontFamily:"Poppins,sans-serif",
                    letterSpacing:"0em"
                }}>Hello!</h3>
                <p style={{
                    fontSize:"1.18333em",
                    fontWeight:"300",
                    lineHeight:"10px",
                    fontFamily:"Poppins,sans-serif",
                    letterSpacing:"0em",
                    marginBlockStart:"1em",
                    marginBlockEnd:"1em",
                    marginInlineStart:"0px",
                    marginInlineEnd:"0px",
                    color:"grey"
                }}>Nice to see you again</p>
                <Link to='/'><button onAuxClick={()=>keep()}
                style={{
                    padding:"12px 20px",
                    width:"250px",
                    lineHeight:"1.42",
                    textAlign:"center",
                    fontSize:"13px",
                    fontWeight:"700",
                    letterSpacing:".3em",
                    backgroundColor:"black",
                    color:"#e0d9cc",
                    border:"none"
                }}>KEEP SHOPPING</button></Link>
            </div>
            <div>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    border:"1px solid #d6d6d6",
                    padding:"10px",
                    width:"60%",
                    margin:"40px auto auto auto",
                    textAlign:"center",
                }}><p style={{
                    margin:"auto",
                    textAlign:"center",
                    fontFamily:"Poppins,sans-serif",
                    letterSpacing: ".3em",
                    fontSize: ".55em",
                    display: "block",
                }}>JACKIE CLUB STATUS </p>
                <h4 style={{
                    fontSize:"20px"
                }}><Icon as={ChevronDownIcon}/></h4>
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    border:"1px solid #d6d6d6",
                    padding:"10px",
                    width:"60%",
                    margin:"auto auto auto auto",
                    textAlign:"center",
                }}><p style={{
                    margin:"auto",
                    textAlign:"center",
                    fontFamily:"Poppins,sans-serif",
                    letterSpacing: ".3em",
                    fontSize: ".55em",
                    display: "block",
                }}>MY ADDRESSES </p>
                <h4 style={{
                    fontSize:"20px"
                }}><Icon as={ChevronDownIcon}/></h4>
                </div>
                <div onClick={()=>div3()} style={{
                    display:"flex",
                    flexDirection:"column",
                    border:"1px solid #d6d6d6",
                    padding:"10px",
                    width:"60%",
                    margin:"auto auto auto auto",
                    textAlign:"center",
                }}><div style={{display:"flex",flexDirection:"row"}}><p style={{
                    margin:"auto",
                    textAlign:"center",
                    fontFamily:"Poppins,sans-serif",
                    letterSpacing: ".3em",
                    fontSize: ".55em",
                    display: "block",
                }}>ORDER HISTORY</p>
                <h4 style={{
                    fontSize:"20px"
                }}><Icon as={ChevronDownIcon}/></h4>
                </div>
                <div><p>{!state3?"":"You haven't placed any orders yet."}</p></div>
                </div>
                <button style={{
                    marginTop:"50px",
                    padding:"12px 20px",
                    width:"250px",
                    lineHeight:"1.42",
                    textAlign:"center",
                    fontSize:"13px",
                    fontWeight:"700",
                    letterSpacing:".3em",
                    backgroundColor:"black",
                    color:"#e0d9cc",
                    border:"none"
                }}
                >LOGOUT</button>
            </div>
        </div>
    )
}

export default Profile;