import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

function NavbarF(){
    return(
        <div className="navbar1-container">
            <div className="navbar1-content">
                <div className="navbar1-item">
                    <span><FontAwesomeIcon icon={faWhatsapp} size="2x" color="#fff" /></span>
                    <h3 className="navbar1-text">Contact via Whatsapp</h3>
                </div>
                <div className="navbar1-item">
                    <span><FontAwesomeIcon icon={faHandshake} size="2x" color="#fff" /></span>
                    <h2 className="navbar1-text">Become a Volunteer</h2>
                </div>
            </div>
        </div>
    );
}
export default NavbarF;