import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer({ setActivePage }) {
    return (
        <div className="footer-container">
           <div className="footer-content">
               <div className="footer-top-section">
                    <div className="newsletter-container">
                        <h1 className="newsletter-title">NewsLetter</h1>
                        <div className="newsletter-form">
                            <input className="newsletter-input" placeholder='Enter Your Email' />
                            <button className="newsletter-button">Subscribe</button>
                        </div>
                    </div>
                    <div className="footer-donate-container">
                        <button className="footer-donate-button">Donate</button>
                    </div>
                </div>
                <hr className="footer-divider" />

               <div className="footer-bottom-section">
                    <div className="footer-left-section">
                        <div className="footer-brand-container">
                            {/* Replace h1 with img for the logo */}
                            <img 
                                src="/Humanity-Welfare-Limited/assets/logo.png" 
                                alt="HWL Logo" 
                                className="footer-logo"
                            />
                            <p className="footer-brand-text">
                                <strong>Humanity Welfare Limited</strong> is a Non-Profit Organization providing Free Education,
                                Healthcare, and Housing Support to Underprivileged Communities.
                            </p>
                        </div>
                        <div className="footer-links-container">
                            <ul className="footer-links-list">
                                <li onClick={() => setActivePage("about")}>About Us</li>
                                <li onClick={() => setActivePage("privacy")}>Privacy & Policy</li>
                                <li onClick={() => setActivePage("home")}>Donate Us</li>
                                <li onClick={() => setActivePage("contact")}>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-right-section">
                        <div className="footer-contact-container">
                            <ul className="footer-contact-list">
                                <li>128 City Road, London, United Kingdom, EC1V 2NX</li>
                                <li>+92 123456789</li>
                                <li>humanitywelfarelimited@gmail.com</li>
                            </ul>
                        </div>
                        <div className="footer-social-container">
                            <div className="social-icons-row">
                                <a href="#" className="socialmedia-icon"><FontAwesomeIcon icon={faSquareFacebook} size="2x" color="#1877F2"/></a>
                                <a href="#" className="socialmedia-icon"><FontAwesomeIcon icon={faSquareInstagram} size="2x" color="#E4405F"/></a>
                            </div>
                            <div className="social-icons-row">
                                <a href="#" className="socialmedia-icon"><FontAwesomeIcon icon={faSquareXTwitter} size="2x" color="#000000"/></a>
                                <a href="#" className="socialmedia-icon"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077B5"/></a>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Footer;
