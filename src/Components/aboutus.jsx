
import './aboutUs.css';
import aboutUsImage from '../Resources/aboutUsImage.jpg';
import Button from '../Components/button'

const AboutUs = () => {
    return(
        <div className='aboutUs' id='AboutUs'>
            <div className='aboutUsImage'>
                <img src={aboutUsImage} alt="aboutUsImg" id='aboutUsImg' />
            </div>
            <div className='aboutUsText'>
                <div className='topic'>
                <div className='subTopic'>
                    <h3>RESIDENTIAL DESIGNERS</h3>
                </div>
                    
                    <h1>Industry-Experienced <br></br>Designers</h1>
                </div>
                <div className='description'>
                    <p>Our aim is to create places that are intuitive with the design expectations of our clients under three mandatory key value of Time, Value and Commitment.</p>
                </div>
                <div className='aboutUsBtn'>
                    <Button text='Read More' path = '/CommonPage' />
                </div>
            </div>
        </div>
    )
};

export default AboutUs;