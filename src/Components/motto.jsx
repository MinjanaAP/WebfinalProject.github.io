import './stylesheet/motto.css'
import logo from '../Resources/logo.png'

const Motto = () => {
    return(
        <div className='mottoContainer'>
            <div className='mottoImg'>
                <img src={logo} alt='logo' />
            </div>
            <div className='mottoText'>
                <h1>You Think ~ We Design</h1>
                <p>HOME ~ <span>INSIDE</span></p>
            </div>
        </div>
    )
};

export default Motto;