import './stylesheet/ProductDisc.css'


const ProductDisc = ({Img,title,text})=>{
    const ImgUrl = localStorage.getItem('ImgURl');
    const Name = localStorage.getItem('Name')
    return(
        <div className="ProductDisc">
            <div className="ProductImg">
                <img src={Img} alt="trendsDivImage" id="trendsDivImage" />
                {/* <img src= alt="Product image"/> */}
            </div>
            <div className="ProductDescription">
               <h4>{title}</h4>
               <p>{text} </p>
            </div>
        </div>
    )
}

export default ProductDisc;