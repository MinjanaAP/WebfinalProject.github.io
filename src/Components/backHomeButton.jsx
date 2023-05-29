import './stylesheet/backHomeButton.css'
import home from '../Resources/up-arrow.png'

const BackHomeButton = () => { 
    return(
        <div className='backHomeButtonContainer'>
            <a href='#'><img src={home} alt="home" /></a>
        </div>
    )
}

export default BackHomeButton;