import Button from './button'
import './stylesheet/footer.css'

const Footer = () => {
    return(
        <footer>
            <div className='table' id='tableContact'>
                <h4>CONTACT</h4>
                <ul>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>Find Store</a></li>
                    <li><a href='#'>Book Appointment</a></li>
                    <li><a href='#'>As a professional</a></li>
                </ul>
            </div>
            <div className='table' id='tableCS'>
                <h4>CUSTOMER SERVICE</h4>
                <ul>
                    <li><a href='#'>Customer information</a></li>
                    <li><a href='#'>Delivery</a></li>
                    <li><a href='#'>Assembly instructions</a></li>
                    <li><a href='#'>Product care</a></li>
                </ul>
            </div>
            <div className='table' id='tableAbout'>
                <h4>ABOUT</h4>
                <ul>
                    <li><a href='#'>About HOME~inside</a></li>
                    <li><a href='#'>join our team</a></li>
                    <li><a href='#'>Design trade program</a></li>
                    <li><a href='#'>Franchise</a></li>
                </ul>
            </div>
            <div className='table' id='tableAcc'>
                <h4>MY INSIDE ACCOUNT</h4>
                <ul>
                    <li><a href='#'>Login</a></li>
                    <li><a href='#'>Register</a></li>
                    <li><a href='#'>Orders</a></li>
                    <li><a href='#'>Offers</a></li>
                </ul>
            </div>
            <div className='magazine'>
                <h3>GET OUR MAGAZINE</h3>
                <div className='magazineButton'>
                    <Button text='SUBSCRIBE' />
                </div>
            </div>
        </footer>
    )
}

export default Footer;