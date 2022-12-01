import React from "react";
import Login from "./Login";
import Create from "./create";
import CreateInput from "./createinput";

function Main(){
    return(
        <div style={{
            // border:"2px solid black",
            maxWidth:"1500px",
            margin:"100px auto 0 auto",
            paddingTop:"55px!important",
            paddingBottom:"75px",
            padding:"0 40px"
        }}
        >
        <div style={{
            // border:"2px solid black",
            display:"grid",
            gridTemplateColumns:"repeat(3,auto)",
            margin:"0 0 0 -22px"
        }}>
            <div style={{
                // border:"2px solid black",
                position:"relative",
                // minWidth:"300px",
                width:"80%",
                margin:"0 9% 0 9%",
                boxSizing:"border-box",
                float:"left"
            }}><Login /></div>
            <span style={{
                borderLeft:"1px solid #d6d6d6"
            }}></span>
            <div style={{
                // border:"2px solid black",
                position:"relative",
                minWidth:"300px",
                width:"80%",
                margin:"0 9% 0 9%",
                boxSizing:"border-box",
                float:"right"
            }}
            ><CreateInput /></div>
        </div>
        </div>
    )
}

export default Main;