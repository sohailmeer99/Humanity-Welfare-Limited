import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div style={{ height: '20vh', width: '100%', backgroundColor: '#4FFFB0', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <h1 style={{ color: '#fff', cursor: 'pointer', letterSpacing: '3px', fontFamily: "'Boldonse', sans-serif", fontWeight: 'normal', paddingBottom: '10px' }}>HWL</h1>
                        </div>
                        <div style={{ color: '#fff', fontWeight: '300' }}>
                            <p style={{ textAlign: 'center' }}>
                                <strong>Humanity Welfare Limited</strong> is a Non-Profit Organization providing Free Education,
                                Healthcare, and Housing Support to Underprivileged Communities.
                            </p>
                        </div>
                    </div>
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                            <button style={{ backgroundColor: '#fff', border: 'none', width: '150px', height: '60px', fontSize: '2rem', color: '#4FFFB0',cursor:'pointer', borderRadius: '10px' }}>Donate</button>
                        </div>
                    </div>
                </div>
                <div style={{ width: '50%', display: 'flex' }}>
                    <div style={{ width: '50%', height: '90%', display: 'flex', justifyContent: 'center', color: '#fff' }}>
                        <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', fontWeight: '600' }}>
                            <li>123 North Street City State 12345</li>
                            <li>+92 123456789</li>
                            <li>humanitywelfarelimited@gmail.com</li>
                        </ul>
                    </div>
                    <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="social-icons" style={{ display: 'flex', gap: '10px' }}>
                            <a className="socialmedia-icons"><FontAwesomeIcon icon={faSquareFacebook} size="3x" color="#4267B2" /></a>
                            <a className="socialmedia-icons"><FontAwesomeIcon icon={faSquareInstagram} size="3x" color="#E1306C" /></a>
                        </div>
                        <div className="social-icons" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                            <a className="socialmedia-icons"><FontAwesomeIcon icon={faSquareXTwitter} size="3x" color="#000" /></a>
                            <a className="socialmedia-icons"><FontAwesomeIcon icon={faLinkedin} size="3x" color="#0077B5" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
