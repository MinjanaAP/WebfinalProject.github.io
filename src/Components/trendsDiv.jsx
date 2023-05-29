import React from "react";
import "./trendsDiv.css";
import Button from '../Components/button'

const TrendsDiv = ({title,text,img,buttonText}) => {
    return(
        <div className="trendsDiv" id="trends">
            <div className="trendsDivText">
                <div className="trendsDivText1">
                    {/* topic */}
                    <h1> {title} </h1>
                </div>
                <div className="trendsDivText2">
                    {/* //description */}
                    <p>{text}</p>
                </div>
                <div className="trendsDivBtn">
                    <Button text= {buttonText} path='/CommonPage'/>
                </div>
            </div>
            <div className="trendsDivImage">
                <img src={img} alt="trendsDivImage" id="trendsDivImage" />
            </div>
        </div>
    )
}; 

export default TrendsDiv;