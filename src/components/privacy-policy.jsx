import PpData from "./pp-data";
import PpDetails from "../ppdetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faShieldHalved, faCircleUser, faCircleInfo, faDatabase, faScaleUnbalancedFlip, 
    faSquareShareNodes, faKey, faUserCheck, faFolder, faCookieBite, faRotate, faPhone 
} from "@fortawesome/free-solid-svg-icons";

const iconList = {
    faCircleUser, faCircleInfo, faDatabase, faScaleUnbalancedFlip,
    faSquareShareNodes, faKey, faUserCheck, faFolder, faCookieBite, faRotate, faPhone
};

function PrivacyPolicy() {
    return (
        <div className="privacy-container">
            <br /><br /><br /><br />
            <div className="privacy-title-container">
                <h1 className="privacy-title">Privacy & Policy</h1>
                <br /><br /><br />
                <FontAwesomeIcon icon={faShieldHalved} size="5x" color="#00cd70c7" />
            </div>
            <br /><br /><br /><br /><br /><br /><br />

            <div className="privacy-content">
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