import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
function NavbarF(){
    return(
        <div style={{width:'100%',height:'5vh',backgroundColor:'#2c8c52', letterSpacing:'1px',display:'flex', alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'80%',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                <span><FontAwesomeIcon icon={faWhatsapp} size="2x" color="#fff" /></span>
                <h3 style={{color:'#fff', marginLeft:'10px',fontSize:'1rem'}}>Contact via Whatsapp</h3>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                <span> <FontAwesomeIcon icon={faHandshake} size="2x" color="#fff" /></span>
                    <h2 style={{color:'#fff',fontSize:'1rem',marginLeft:'10px'}}>Become a Volunteer</h2>
                </div>
            </div>
        </div>
    );
}
export default NavbarF;