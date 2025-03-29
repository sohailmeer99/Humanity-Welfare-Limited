import PpData from "./pp-data";
import PpDetails from "../ppdetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faShieldHalved, faCircleUser, faCircleInfo, faDatabase, faScaleUnbalancedFlip, 
    faSquareShareNodes, faKey, faUserCheck, faFolder, faCookieBite, faRotate, faPhone 
} from "@fortawesome/free-solid-svg-icons";

const iconList = {
    faCircleUser, faCircleInfo, faDatabase, faScaleUnbalancedFlip,
    faSquareShareNodes, faKey, faUserCheck, faFolder, faCookieBite, faRotate, faPhone  // ✅ FIXED
};

function PrivacyPolicy() {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <br /><br /><br /><br />
            <div style={{ width: '100%', textAlign: 'center', marginTop: '40px' }}>
                <h1 style={{ fontSize: '5rem', fontWeight: 'bold', color: '#00cd70c7' }}>
                    Privacy & Policy
                </h1>
                <br /><br /><br />
                <FontAwesomeIcon icon={faShieldHalved} size="5x" color="#00cd70c7" />
            </div>
            <br /><br /><br /><br /><br /><br /><br />

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {PpDetails.map((item) => (
                    <PpData 
                        key={item.id} 
                        logo={iconList[item.logo]}  
                        heading={item.heading} 
                        para={item.Para} 
                    />
                ))}
            </div>
        </div>
    );
}

export default PrivacyPolicy;
