import './stylesheet/ProductDisc.css'


const ProductDisc = ()=>{
    const ImgUrl = localStorage.getItem('ImgURl');
    const Name = localStorage.getItem('Name')
    return(
        <div className="ProductDisc">
            <div className="ProductImg">
                <img src={ImgUrl} alt="Product image"/>
            </div>
            <div className="ProductDescription">
               <h4>{Name}</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sunt omnis cupiditate a beatae quos distinctio sint illum est quo.
               </p>
            </div>
        </div>
    )
}

export default ProductDisc;