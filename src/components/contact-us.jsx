function ContactUs(){
    return(
        <div className="contact-container">
            <div><br /><br /><br /><br /><br /><br />
                <div className="contact-header-container">
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-subtitle">Your Message Can Ignite Change!</p>
                </div>
                <br /><br /><br /><br /><br />
                <div className="contact-form-container">
                    <div><input className="contact-inputs" placeholder="Enter Your Name"/></div>
                    <div><input className="contact-inputs" placeholder="Enter Your Email" /></div>
                    <div><input className="contact-inputs" placeholder="Enter Your Topic" /></div>
                    <div><textarea className="contact-textarea" rows={10} placeholder="Type Your Message"></textarea></div>
                    <div><button className="contact-btn">Send Message</button></div>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;