import React from "react";

function Profile(){
    return (
        <div>
            <div>
                <h1 style={{
                    textAlign:"center",
                    lineHeight:"1",
                    marginBottom:"0",
                    fontSize: "1.83333em",
                    letterSpacing:".1em",
                    fontFamily:"Poppins,sans-serif",
                    fontWeight:"200",
                    marginBlockStart:"0.67em",
                    marginBlockEnd:"0.67em",
                    marginInlineStart:"0px",
                    marginInlineEnd:"0px"
                }} 
                >MY ACCOUNT</h1>
                <img style={{
                    width:"150px",
                    height:"82px",
                    margin:"10px auto"
                }}
                src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/accountTitle3.png?v=135899930545251754481637078407"/>
                <h3 style={{
                    fontSize:"1.28333em",
                    fontWeight:"700",
                    lineHeight:"10px",
                    fontFamily:"Poppins,sans-serif",
                    letterSpacing:"0em"
                }}
                >Hello!</h3>
                <p style={{
                    fontSize:"1.28333em",
                    fontWeight:"300",
                    lineHeight:"10px",
                    fontFamily:"Poppins,sans-serif",
                    letterSpacing:"0em",
                    marginBlockStart:"1em",
                    marginBlockEnd:"1em",
                    marginInlineStart:"0px",
                    marginInlineEnd:"0px",
                    color:"grey"
                }}
                >Nice to see you again</p>
                <button style={{
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
                >KEEP SHOPPING</button>
            </div>
            <div>
                <div>
                    
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Profile;