import React from "react";


function Origin(){
    return(
        <div style={{
            border:"2px solid black"
        }}>
            <div>
                <h1>NICE TO SEE YOU AGAIN!</h1>
                <p>By signing you will be able to know the status of your
            orders, the products saved in your Wishlist and your
            Jackie Club Points available to redeem them for
            discounts</p>
                <label>EMAIL</label>
                <input></input>
                <div>
                    <label>PASSWORD</label>
                    <label>Forgot Password?</label>
                </div>
                <input></input>
                <button>SIGN IN</button>
                <div>
                <button>Facebook</button>
                <button>Google</button>
                </div>
                <input type="checkbox"></input>
                <p>By clicking any of the social login buttons you agree to the terms of privacy policy described here</p>
            </div>
            <div></div>
        </div>
    )
}

export default Origin;