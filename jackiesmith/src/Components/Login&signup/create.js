import React from "react";

function Create(){
    return (
        <div style={{
            width:"90%",
            textAlign:"center",
            marginBottom:"15px",
            // border:"2px solid black"
        }}
        >
            <header style={{
                textAlign:"center",
                marginBottom:"50px"
            }}>
            <h1 style={{
                fontFamily:"Poppins,sans-serif",
                fontSize:"1.5em",
                fontWeight:"700",
                lineHeight:"1.3em",
                letterSpacing:".1em",
                color:"#000"
            }}
            >FIRST TIME AT JACKIE SMITH?</h1>
            <p style={{
                width:"60%",
                textAlign:"center",
                fontSize:"12px",
                fontWeight:"400",
                margin:"10px auto 0 auto",
                fontFamily:"Poppins,sans-serif",
                lineHeight:"1.5",
                letterSpacing:".025em",
                color:"#000",
                display:"block"
            }}
            >Create your account, it´s free and you can earn Jackie Club Points in many ways, which you can then redeem for discounts.</p>
            </header>
            <form>
                <div style={{
                    display:"block",
                    textAlign:"center",
                    margin:"auto",
                    width:"90%",

                }}>
                    <div style={{
                        // border:"2px solid red",
                        fontSize:"11px",
                        float:"left",
                        width: "31%",
                        clear:"none",
                        margin:"0 1%",
                        // height:"123px",
                        // minHeight:"123px",
                        fontFamily:"Poppins,sans-serif",
                lineHeight:"1.5",
                letterSpacing:".025em",
                color:"#000",
                display:"block",
                fontWeight:"400"
                    }}>
                        <img src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-03.png?v=95654152668196161291649082416" style={{
                            border:"0 none",
                            opacity:"1",
                            transition: "opacity .4s ease",
                            width:"100px",
                            height:"72px"
                        }}/><br/>START EARNING<br/>POINTS TODAY!
                    </div>
                    <div style={{
                        fontSize:"11px",
                        float:"left",
                        width: "31%",
                        clear:"none",
                        margin:"0 1%",
                        // height:"123px",
                        // minHeight:"123px"
                    }}>
                        <img src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-01.png?v=62499977227303702301649082380" style={{
                            border:"0 none",
                            opacity:"1",
                            transition: "opacity .4s ease",
                            width:"100px",
                            height:"72px"
                        }}></img><br/>FREE WORLDWIDE<br/>SHIPPING!
                    </div>
                    <div style={{
                        fontSize:"11px",
                        float:"left",
                        width: "31%",
                        clear:"none",
                        margin:"0 1%",
                        height:"123px",
                        minHeight:"123px"
                    }}>
                        <img src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-02.png?v=127982377375939117791649082402" style={{border:"0 none",
                            opacity:"1",
                            transition: "opacity .4s ease",
                            width:"100px",
                            height:"72px"}}></img><br/>BUY NOW, PAY LATER
                    </div>
                    <div style={{
                        fontSize:"11px",
                        float:"left",
                        width: "31%",
                        clear:"none",
                        margin:"0 1%",
                        height:"123px",
                        minHeight:"123px",
                        fontFamily:"Poppins,sans-serif",
                lineHeight:"1.5",
                letterSpacing:".025em",
                color:"#000",
                display:"block",
                fontWeight:"400"
                    }}><img src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-04.png?v=126386248362730904401649082430" style={{border:"0 none",
                    opacity:"1",
                    transition: "opacity .4s ease",
                    width:"100px",
                    height:"72px"}}></img><br/>CONTACT US!
                    </div>
                    <div style={{
                        fontSize:"11px",
                        float:"left",
                        width: "31%",
                        clear:"none",
                        margin:"0 1%",
                        height:"123px",
                        minHeight:"123px",
                        fontFamily:"Poppins,sans-serif",
                lineHeight:"1.5",
                letterSpacing:".025em",
                color:"#000",
                display:"block",
                fontWeight:"400"
                    }}><img src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-05.png?v=145907311157525875401649082525" style={{border:"0 none",
                    opacity:"1",
                    transition: "opacity .4s ease",
                    width:"100px",
                    height:"72px"}}></img><br/>FREE RETURNS ON ALL U.S. ORDERS
                    </div>
                    <div style={{
                        fontSize:"11px",
                        float:"left",
                        width: "31%",
                        clear:"none",
                        margin:"0 1%",
                        height:"123px",
                        minHeight:"123px",
                        fontFamily:"Poppins,sans-serif",
                lineHeight:"1.5",
                letterSpacing:".025em",
                color:"#000",
                display:"block",
                fontWeight:"400"
                    }}><img src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-06.png?v=62249246324677701381649082535" style={{border:"0 none",
                    opacity:"1",
                    transition: "opacity .4s ease",
                    width:"100px",
                    height:"72px"}}></img><br/>WISHLIST
                    </div>
                </div>
                <button style={{
                    marginTop:"30px",
                    marginBottom:"19px",
                    width:"80%",
                    padding:"13px 20px",
                    backgroundColor:"black",
                    color:"#e0d9cc"
                }}
                >CREATE ACCOUNT</button>
            </form>
        </div>
    )
}

export default Create;