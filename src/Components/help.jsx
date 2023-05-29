import Button2 from './button2';
import './stylesheet/help.css'

const Help = () => {
    return(
        <div className='helpContainer'>
            <div className='helpTitle'>
                <h1>HOW CAN WE HELP?</h1>
            </div>
            <div className='helpContent' id='helpContent'>
                <div className='helpContent1'>
                    <h3>FIND A STORE NEAR YOU</h3>
                    <p>Visit one of our stores for inspiration, tips and advice from our specialists. Find your nearest store here.</p>
                    <Button2 text='FIND NEAREST STORE'  />
                </div>
                <div className='helpContent1'>
                    <h3>WRITE TO OUR CUSTOMER SERVICE</h3>
                    <p>Our customer service can answer all kinds of questions from furniture, opening hours, delivery service and more</p>
                    <Button2 text='GET IN TOUCH' path='/FeedBack' />
                </div>
                <div className='helpContent1'>
                    <h3>GET FREE INTERIOR DESIGN SERVICE </h3>
                    <p>Imagine the feeling of a home designed to fit your lifestyle and reflect your personality. Our Interior Designers are ready to help and co-create your dream space. </p>
                    <Button2 text='BOOK APPOINTMENT' path='/FeedBack' />
                </div>
            </div>
        </div>
    )
    
    
};

export default Help;