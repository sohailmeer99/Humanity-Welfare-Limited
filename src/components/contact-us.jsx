function ContactUs(){
    return(
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <div><br /><br /><br /><br /><br /><br />
                <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h1 style={{fontSize: '5rem', fontWeight: 'bold', color: '#00cd70c7'}}>Contact Us</h1>
                <p style={{fontSize:'1.1rem',color:'#4FFFB0',fontWeight:'600'}}>Your Message Can Ignite Change!</p>
                </div><br /><br /><br /><br /><br />
                <div style={{height:'450px',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
                <div><input className="contact-inputs" placeholder="Enter Your Name"/></div>
                <div><input className="contact-inputs" placeholder="Enter Your Email" /></div>
                <div><input className="contact-inputs" placeholder="Enter Your Topic" /></div>
                <div><textarea className="contact-textarea" rows={10} placeholder="Type Your Message"></textarea></div>
                <div><button className="contact-btn" >Send Message</button></div>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;