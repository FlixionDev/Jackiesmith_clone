import React from "react";
import Login from "./Login";
import Create from "./create";
import CreateInput from "./createinput";
import "./Main.css";

function Main(){
    return(
        <div className="main">
        <div className="main1">
            <div className="leftmain"><Login /></div>
            <span className="span"></span>
            <div className="rightmain"><CreateInput /></div>
        </div>
        </div>
    )
}

export default Main;