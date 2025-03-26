import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div style={{ height: '35vh', width: '100%', backgroundColor: '#4FFFB0'}}>
           <div style={{width: '100%',height:'100%', display: 'flex',flexDirection:'column', justifyContent: 'space-around',alignItems:'center'}}>
           
           <div style={{width:'80%', display:'flex',justifyContent:'space-between'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{}}>
                    <h1 style={{color: '#fff', letterSpacing: '3px', fontFamily: "'Boldonse', sans-serif", fontWeight: 'normal'}}>NewsLetter</h1>
                </div>
                    <div style={{display:'flex'}}>
                    <div>
                    <input style={{width:'260px',height:'40px',border:'none',paddingLeft:'20px'}} 
                    placeholder='Enter Your Email' />
                    </div>
                        <div>
                        <button style={{width:'100px',height:'40px',border:'none',backgroundColor:'#00cd70c7',color:'#fff',fontSize:'1rem'}}>Subscribe</button>
                    </div>
                    </div>
                    
                </div>
                <div style={{width:'25%', display:'flex',alignItems:'end',justifyContent:'end'}}>
                <button style={{ backgroundColor: '#fff', border: 'none', width: '150px', height: '60px', fontSize: '2rem', color: '#4FFFB0',cursor:'pointer'}}>Donate</button>
                </div>
            </div>
            <hr style={{width:'80%',border: '1px solid white' }} />

           <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between' }}>

                <div style={{ width: '50%', height:'100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <h1 style={{ color: '#fff', cursor: 'pointer', letterSpacing: '3px', fontFamily: "'Boldonse', sans-serif", fontWeight: 'normal', paddingBottom: '10px' }}>HWL</h1>
                        </div>
                        <div style={{ color: '#fff', fontWeight: '300' }}>
                            <p style={{ textAlign: 'left' }}>
                                <strong>Humanity Welfare Limited</strong> is a Non-Profit Organization providing Free Education,
                                Healthcare, and Housing Support to Underprivileged Communities.
                            </p>
                        </div>
                    </div>
                    <div style={{ width: '50%',height:'100%', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ height: '100%', display: 'flex',justifyContent:'center', alignItems: 'end' }}>
                           <ul style={{listStyleType:'none',height:'100%',color:'#fff',display:'flex',flexDirection:'column',fontWeight:'700',justifyContent:'space-evenly'}}>
                            <li>About Us</li>
                            <li>Privacy & Policy</li>
                            <li>Donate Us</li>
                            <li>Contact Us</li>
                           </ul>
                        </div>
                    </div>
                </div>
                <div style={{ width: '50%', display: 'flex' }}>
                    <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'center', color: '#fff' }}>
                        <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', fontWeight: '600' }}>
                            <li>123 North Street City State 12345</li>
                            <li>+92 123456789</li>
                            <li>humanitywelfarelimited@gmail.com</li>
                        </ul>
                    </div>
                    <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end' }}>
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
           
        </div>
    );
}
export default Footer;
