import React from "react";
import "./Main.css";
import "./create.css";
import "./createinput.css";
import "./Login.css";
import "./password.css";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { createAccdata } from "../../Redux/Action/Action";
import {useSelector} from 'react-redux'
import { logAuth } from "../../Redux/Action/Action";
function Main(){
    const [right, setRight]=React.useState(true)
    const [left, setLeft]=React.useState(true)
    const [logmail, setLogmail]=React.useState("")
    const [logpassword, setLogpassword]=React.useState("")
    const [fname, setFname]=React.useState("")
    const [lname, setLname]=React.useState("")
    const [signmail, setSignmail]=React.useState("")
    const [signpassword, setSignpassword]=React.useState("")
    const store=useSelector((store)=>{return store})
    const dispatch=useDispatch();
    console.log(store)
    const nav = useNavigate()
    const logechange=(e)=>{
        setLogmail(e.target.value)
    }
    const logpasschange=(e)=>{
        setLogpassword(e.target.value)
    }
    const lnamechange=(e)=>{
        setLname(e.target.value)
    }
    const fnamechange=(e)=>{
        setFname(e.target.value)
    }
    const signechange=(e)=>{
        setSignmail(e.target.value)
    }
    const signpasschange=(e)=>{
        setSignpassword(e.target.value)
    }
    // const submit=()=>{
    //     var signup = JSON.parse(localStorage.getItem("signup"))
    //     var obj1={
    //         fname:fname,
    //         lname:lname,
    //         signmail:signmail,
    //         signpassword:signpassword
    //     }
    //     localStorage.setItem("signup", JSON.stringify(obj1));
    //     if(signmail=="" || signpassword=="" || fname=="" || lname==""){
    //         alert('Fill all data')
    //     }else{
    //         alert('Account created Successfully')
    //         nav('/login/profile')
    //     }
    // }
    // const logsubmit=()=>{
    //     var login = JSON.parse(localStorage.getItem("login")) 
    //     var obj2={
    //         logmail:logmail,
    //         logpassword:logpassword
    //     }
    //     localStorage.setItem("login", JSON.stringify(obj2));
    //     if(logmail=="" || logpassword==""){
    //         alert('Fill all data')
    //     }else{
    //         alert('Login Successfull')
    //         nav('/login/profile')
    //     }
    // }
    const logsubmit=()=>{
       // var signup = JSON.parse(localStorage.getItem("signup")) || [];
        var isLogin= localStorage.getItem("isLogin");
        //console.log("hii")
        store.CreatedAcc.map((el)=>{
            if(el.email==logmail && el.password==logpassword){
                // localStorage.setItem("isLogin",true)
                logAuth(true,dispatch)
                alert("Login successfull");
                nav('/login/profile')
            }
        });
        // setTimeout(()=>{

        //     if(isLogin==null || !isLogin){
    
        //         if(logmail!="" && logpassword==""){
        //             alert("Please fill all details ")
        //         }else if(logmail=="" && logpassword!=""){
        //             alert("Please fill all details ")
        //         }else{
        //             alert("Account not found, Please create account ")
        //     }
        //     }
        // },1000)
    }
    const submit=()=>{
        var signup = JSON.parse(localStorage.getItem("signup")) || [];
        var obj={
            fname:fname,
            lname:lname,
            email:signmail,
            password:signpassword,
        }
        if(fname != "" && lname!="" && signmail!="" && signpassword!=""){
            createAccdata(obj,dispatch)
            // signup.push(obj);
            // localStorage.setItem("signup",JSON.stringify(signup));
            alert('Your account created successfully');
        }else{
            alert('Please fill all details');
        }

    }
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
                <label className="emaillabel">EMAIL</label>
                <input type="email" className="emailinput" value={logmail} onChange={logechange}></input>
                <div className="passdivmain">
                    <div className="passdivleft">
                        <label className="passlabelleft">PASSWORD</label>
                    </div>
                    <div className="passdivright">
                        <label className="passlabelright" onClick={()=>setLeft(!left)}>Forgot password?</label>
                    </div>
                </div>
                <input className="passinput" type="password" value={logpassword} onChange={logpasschange}></input>
                <button className="btnsignin" onClick={()=>logsubmit()}>SIGN IN</button>
           
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
            <div>
                <label className="labels">FIRST NAME</label>
                <input className="inputs" type="text" value={fname} onChange={fnamechange}></input>
                <label className="labels">LAST NAME</label>
                <input className="inputs" type="text" value={lname} onChange={lnamechange}></input>
                <label className="labels">EMAIL</label>
                <input className="inputs" type="email" value={signmail} onChange={signechange}></input>
                <label className="labels">PASSWORD</label>
                <input className="inputs" type="password" value={signpassword} onChange={signpasschange}></input>
                <div className="signuplastdiv">
                    <button className="signupsubmit" onClick={()=>submit()}>SUBMIT</button>
                    <button className="signupcancel" onClick={()=>setRight(!right)}>CANCEL</button>
                </div>
            </div>
            
        </div>
            }</div>
           
        </div>
        </div>
    )
}

export default Main;