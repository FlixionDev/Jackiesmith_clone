import React from "react";

function Login(){
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
            >NICE TO SEE YOU AGAIN!</h1>
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
            >By signing you will be able to know the status of your
            orders, the products saved in your Wishlist and your
            Jackie Club Points available to redeem them for
            discounts</p>
            </header>
            <form>
                <label style={{
                    display:"block",
                    fontWeight:"400",
                    fontFamily:"Poppins,sans-serif",
                    lineHeight:"1.5",
                    fontSize:".75em",
                    letterSpacing:".3em",
                    marginBottom:"5px",
                    boxSizing:"border-box",
                    color:"#000",
                    textAlign:"left",
                    marginLeft:"50px"
                }}
                >EMAIL</label>
                <input type="email" style={{
                    border:"1px solid #d6d6d6",
                    width:"80%",
                    marginBottom:"30px",
                    display:"block",
                    boxSizing:"border-box",
                    color:"inherit",
                    backgroundColor:"inherit",
                    padding:"8px 10px",
                    lineHeight:"1.5",
                    fontFamily:"Poppins,sans-serif",
                    letterSpacing:".025em",
                    marginLeft:"50px"
                }}></input>
                <div style={{
                    margin:"0 0 0 -22px",
                    display:"grid",
                    gridTemplateColumns:"repeat(2, 2fr)"
                }}>
                    <div style={{
                        width:"50%",
                        float:"left",
                        paddingLeft:"22px",
                        minHeight:"1px",
                        marginLeft:"50px"
                    }}>
                        <label style={{
                            textAlign:"left",
                            letterSpacing:".3em",
                            fontSize:".75em",
                            fontWeight:"400",
                            marginBottom:"10px",
                            display:"block"
                        }}
                        >PASSWORD</label>
                    </div>
                    <div style={{
                        marginLeft:"60px",
                        width:"50%",
                        textAlign:"right",
                        float:"right",
                        paddingLeft:"22px",
                        minHeight:"1px"
                    }}>
                        <label style={{
                            marginLeft:"20px",
                            textAlign:"right",
                            // letterSpacing:".3em",
                            fontSize:".85em",
                            fontWeight:"400",
                            marginBottom:"10px",
                            display:"block"
                        }}
                        >Forgot password?</label>
                    </div>
                </div>
                <input type="password" style={{
                    border:"1px solid #d6d6d6",
                    width:"80%",
                    marginBottom:"30px",
                    display:"block",
                    boxSizing:"border-box",
                    color:"inherit",
                    backgroundColor:"inherit",
                    padding:"8px 10px",
                    lineHeight:"1.5",
                    fontFamily:"Poppins,sans-serif",
                    letterSpacing:".025em",
                    marginLeft:"50px"
                }}
                ></input>
                <button style={{
                    marginBottom:"19px",
                    width:"80%",
                    padding:"13px 20px",
                    backgroundColor:"black",
                    color:"white"
                }}
                >SIGN IN</button>
            </form>
        </div>
    )
}

export default Login;