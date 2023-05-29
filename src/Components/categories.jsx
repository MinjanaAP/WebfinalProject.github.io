import React from "react";
import "./categories.css";
import { useNavigate } from "react-router-dom";



const Categories=({ImgUrl,Name,description})=>{
    const navigate = useNavigate();
return(
    <div className="categoriesContainer">
        <div className="categoriesImg">
            <img src={ImgUrl} alt="ImgUrl"
            onClick={()=>{
                localStorage.setItem("ImgURl", ImgUrl);
                localStorage.setItem("Name", Name);
                navigate('/ProductPage#')
            }}  />
        </div>
        <div className="categoriesName">
            <h1>{Name}</h1>
            <p>{description}</p>
        </div>
    </div>
    );
}
export default Categories;