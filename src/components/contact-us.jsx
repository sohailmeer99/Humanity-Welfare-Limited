import { useState } from "react";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        topic: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can send the formData to the server here.
        console.log(formData);
    };

    return (
        <div className="contact-container">
            <div><br /><br /><br /><br /><br /><br />
                <div className="contact-header-container">
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-subtitle">Your Message Can Ignite Change!</p>
                </div>
                <br /><br /><br /><br /><br />
                <div className="contact-form-container">
                    <div><input 
                        className="contact-inputs" 
                        placeholder="Enter Your Name" 
                        name="name"
                        value={formData.name} 
                        onChange={handleChange}
                    /></div>
                    <div><input 
                        className="contact-inputs" 
                        placeholder="Enter Your Email" 
                        name="email"
                        value={formData.email} 
                        onChange={handleChange}
                    /></div>
                    <div><input 
                        className="contact-inputs" 
                        placeholder="Enter Your Topic" 
                        name="topic"
                        value={formData.topic} 
                        onChange={handleChange}
                    /></div>
                    <div><textarea 
                        className="contact-textarea" 
                        rows={10} 
                        placeholder="Type Your Message"
                        name="message"
                        value={formData.message} 
                        onChange={handleChange}
                    ></textarea></div>
                    <div><button 
                        className="contact-btn"
                        onClick={handleSubmit}
                    >Send Message</button></div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
