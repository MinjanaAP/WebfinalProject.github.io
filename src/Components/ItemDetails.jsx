import Button2 from './button2';
import './stylesheet/ItemDetail.css'
import { useState } from 'react';



const ItemDetails=({name,description,price,ImgUrl,quantity})=>{
    const [count,SetCount] = useState(1)
    const [text,SetText] = useState("")

    return(
        <div className="ItemDetails" id='ItemDetails'>
            <div className='itemImg'>
                <img src={ImgUrl} alt='otherItems'  />
            </div>
            <div className='itemDescription'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className='itemPrice'>
                <h4>{price}</h4>
            <div className='quantity'>
                <h4 style={{
                    color: count>quantity? "red":" "
                }}>Quantity : {count}{text}</h4>
                <button
                onClick={()=>{
                    
                    if(count>quantity){
                        SetText("Out of Stock")
                    }else{
                        SetCount(count +1);
                        SetText("")
                    }

                }}
                >+</button>
                <button
                 onClick={()=>{
                    if(count>quantity){
                        SetCount(quantity);
                        SetText("")
                    }else if(count>1 && count<=quantity){
                        SetCount(count-1);
                        SetText("")
                    }
                }}
                >-</button>
            </div>

                
            </div>
        </div>
    )
}

export default ItemDetails;