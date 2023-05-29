import './stylesheet/button2.css'   
import { useNavigate } from 'react-router-dom';

const Button2 = ({text,path}) => {
    const navigate = useNavigate();
   
    return(
        <div className='button2Container'>
            <button className="btn" id="button"
             onClick={()=>{
                navigate(path);
                console.log(path);
             }}
            
            >{text}</button>
        </div>
    )
};

export default Button2;