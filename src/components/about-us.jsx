import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingNgo, faCircleDollarToSlot,faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function AboutUs(){
    return(
        <div className="about-container">
            <br /><br /><br /><br />
            <div className="about-title-container">
                <h1 className="about-title">About Us</h1>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
            
            <div className="about-main-card">
                <div className="about-main-card-content">
                    <p className="about-main-text">Humanity Welfare Limited is a non-profit organization providing free education in 
                    Pakistan, especially & all around the globe. Moving to the next topics of our contribution
                     is to serve for health & residential care for deserving people.</p>
                </div>
            </div>
            <br /><br /><br /><br />
            
            <div className="about-feature-card">
                <div className="about-feature-icon-container">
                    <div><FontAwesomeIcon icon={faBuildingNgo} size="10x" color="#00cd70c7" flip/></div>
                </div>
                <div className="about-feature-content">
                    <div><p className="about-feature-text">We are officially registered from the Companies House Government of UK</p></div>
                    <br />
                    <div className="about-link-box">
                        <a className="about-link">Official Registration</a>{/*https://find-and-update.company-information.service.gov.uk/*/}
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br />
            
            <div className="about-feature-card">
                <div className="about-feature-icon-container">
                    <div><FontAwesomeIcon icon={faCircleDollarToSlot} size="10x" color="#00cd70c7" bounce /></div>
                </div>
                <div className="about-feature-content">
                    <div><p className="about-feature-text-small">You can donate us directly from our website for the sake of humanity and also can check our work. Humanity Welfare Limited is constructed to make change in the society & improvement of education and financial crises of the applicable ones.</p></div>
                    <br />
                    <div className="about-action-button"><a className="about-action-text">Donate</a></div>
                </div>
            </div>
            <br /><br /><br /><br /><br />
            
            <div className="about-feature-card">
                <div className="about-feature-icon-container">
                    <div><FontAwesomeIcon icon={faPeopleGroup} size="10x" color="#00cd70c7" beat /></div>
                </div>
                <div className="about-feature-content">
                    <div><p className="about-feature-text-small">We have a good network of well-educated teachers and workers who are willing to achieve the goal of this NGO for the development of good change.</p></div>
                    <br />
                    <div className="about-action-button"><a className="about-action-text">About Us</a></div>
                </div>
            </div>
            <br /><br /><br /><br />
            
            <div className="about-main-card">
                <div className="about-main-card-content">
                    <p className="about-main-text">Ultimately Humanity Welfare Limited is about fostering a global community that values the health and happiness of everyone by providing access to education, mentorship, and mental health services, we can empower youth to reach their full potential. It's also crucial to advocate for safe spaces, build strong communities, and ensure equal opportunities.</p>
                </div>
            </div>
            <br /><br /><br /><br />
        </div>
    )
}

export default AboutUs;