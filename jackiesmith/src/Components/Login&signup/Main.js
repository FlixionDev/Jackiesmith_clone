import React from "react";
import Login from "./Login";
import Create from "./create";
import CreateInput from "./createinput";
import Password from "./password";
import "./Main.css";
import "./create.css";
import "./createinput.css";
import "./Login.css";
import "./password.css";

function Main(){
    const [right, setRight]=React.useState(true)
    const [left, setLeft]=React.useState(true)
    return(
        <div className="main">
        <div className="main1">
            <div className="leftmain">{left?
            <div className="login">
            <header className="logheader">
            <h1>NICE TO SEE YOU AGAIN!</h1>
            <p>By signing you will be able to know the status of your
            orders, the products saved in your Wishlist and your
            Jackie Club Points available to redeem them for
            discounts</p>
            </header>
            <form>
                <label className="emaillabel">EMAIL</label>
                <input type="email" className="emailinput"></input>
                <div className="passdivmain">
                    <div className="passdivleft">
                        <label className="passlabelleft">PASSWORD</label>
                    </div>
                    <div className="passdivright">
                        <label className="passlabelright" onClick={()=>setLeft(!left)}>Forgot password?</label>
                    </div>
                </div>
                <input className="passinput" type="password"></input>
                <button className="btnsignin">SIGN IN</button>
            </form>
            <div className="lastdiv">
                <button className="facebookbtn">Facebook Login</button>
                <button className="googlebtn">Google Login</button>
            </div>
        </div>
            :
            <div className="password">
            <header className="passwordheader">
            <h1>CREATE ACCOUNT</h1>
            <p>Create your account, it´s free and you can earn Jackie Club Points in many ways, which you can then get discounts on</p>
            </header>
            <form>
                <label className="passwordlabel">EMAIL</label>
                <input className="passwordinput" type="email"></input>
                <div className="passwordlastdiv">
                    <button className="passwordsubmit">SUBMIT</button>
                    <button className="passwordcancel" onClick={()=>setLeft(!left)}>CANCEL</button>
                </div>
            </form>
        </div>
            }</div>
            <span className="span"></span>
            <div className="rightmain">{right?
            
            <div className="create" >
            <header className="createheader">
            <h1>FIRST TIME AT JACKIE SMITH?</h1>
            <p>Create your account, it´s free and you can earn Jackie Club Points in many ways, which you can then redeem for discounts.</p>
            </header>
            <form>
                <div className="imgcontainer">
                    <div className="imagedivs">
                        <img className="images" src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-03.png?v=95654152668196161291649082416" alt="img"/><br/>START EARNING<br/>POINTS TODAY!
                    </div>
                    <div className="imagedivs">
                        <img className="images" src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-01.png?v=62499977227303702301649082380" alt="img"></img><br/>FREE WORLDWIDE<br/>SHIPPING!
                    </div>
                    <div className="imagedivs">
                        <img className="images" src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-02.png?v=127982377375939117791649082402" alt="img"></img><br/>BUY NOW, PAY LATER
                    </div>
                    <div className="imagedivs"><img className="images" src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-04.png?v=126386248362730904401649082430" alt="img"></img><br/>CONTACT US!
                    </div>
                    <div className="imagedivs"><img className="images" src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-05.png?v=145907311157525875401649082525" alt="img"></img><br/>FREE RETURNS ON ALL U.S. ORDERS
                    </div>
                    <div className="imagedivs"><img className="images" src="https://cdn.shopify.com/s/files/1/0491/4541/3794/t/12/assets/login-06.png?v=62249246324677701381649082535" alt="img"></img><br/>WISHLIST
                    </div>
                </div>
                <button className="createbtn" onClick={()=>setRight(!right)}>CREATE ACCOUNT</button>
            </form>
        </div>
            :
            <div className="signup">
            <header className="signupheader">
            <h1>CREATE ACCOUNT</h1>
            <p>Create your account, it´s free and you can earn Jackie Club Points in many ways, which you can then get discounts on</p>
            </header>
            <form>
                <label className="labels">FIRST NAME</label>
                <input className="inputs" type="text"></input>
                <label className="labels">LAST NAME</label>
                <input className="inputs" type="text"></input>
                <label className="labels">EMAIL</label>
                <input className="inputs" type="email"></input>
                <label className="labels">PASSWORD</label>
                <input className="inputs" type="password"></input>
                <div className="signuplastdiv">
                    <button className="signupsubmit">SUBMIT</button>
                    <button className="signupcancel" onClick={()=>setRight(!right)}>CANCEL</button>
                </div>
            </form>
        </div>
            }</div>
        </div>
        </div>
    )
}

export default Main;