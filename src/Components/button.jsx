import React from "react";
import './stylesheet/button.css'
import { useNavigate } from "react-router-dom";

const Button = ({text,path})=>{
    const navigate = useNavigate();
    return(
        <div className="buttonDiv">
            <button className="btn" id="button"
            onClick={()=>{
                navigate(path);
            }}
            >{text}</button>
        </div>
    );
}

export default Button; 