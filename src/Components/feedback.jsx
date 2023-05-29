import './stylesheet/feedback.css'
import Navbar from './navbar'
import Button2 from './button2';
import Footer from './footer';

const Feedback=()=>{
    return(
        <div className="feedback">
            <Navbar/>
            <div className='feedbackContainer'>
                <h4>CONTACT</h4>
            </div>
            <div className='feedbackContainer2'>
                <p>For all enquiries please use the below form to contact your closest store who will get in contact shortly. Your closest store is your service point and can assist you on claims, product information, availability, delivery, prices, and more. If you are enquiring about an order, please choose the store where you made the purchase. If you are unsure which store that is, or if that store has closed, then please choose your closest store. When you shop online, you’re also shopping with your closest store. The store can therefore assist you on your web order</p>
            </div>
            <div className='feedbackForm'>
                <form>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    <label for="phone">Phone Number</label>
                    <input type="number" id="phone" name="phone" placeholder="Your phone number.."/>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email.."/>
                    <label for="Zip">Zip Code</label>
                    <input type="number" id="Zip" name="Zip" placeholder="Your Zip Code.."/>
                    <label for="city">City</label>
                    <input type="text" id="city" name="city" placeholder="Your city.."/>
                    <label for="store">Preferred Store</label>
                    <select id="store" name="store" >
                        <option value="Kalutara">Kalutara</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Maharagama">Maharagama</option>
                    </select>
                    <label for="massage">Massage</label>
                    <textarea id="massage" name="massage" placeholder="Write something.." style={{height:"200px"}}></textarea>
                    <Button2 text="Submit" path="/"/>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Feedback;