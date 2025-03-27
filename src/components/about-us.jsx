import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingNgo, faCircleDollarToSlot,faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
function AboutUs(){
    return(
        
        <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
         <br /><br /><br /><br /><div style={{ width: '100%', textAlign: 'center', marginTop: '40px' }}>
                <h1 style={{ fontSize: '5rem', fontWeight: 'bold', color: '#00cd70c7' }}>
                    About Us
                </h1>
            </div><br /><br /><br /><br /><br /><br /><br />
            <div style={{width:'80%',height:'500px',backgroundColor:'#96fbce7c',display:'flex',justifyContent:'center',borderRadius:'60px'}}>
                <div style={{width:'80%',height:'100%',display:'flex',justifyContent:'center', alignItems:'center'}}>
                    <p style={{fontSize:'3rem',letterSpacing:'1px',color:'#00cd70c7',textAlign:'center',textShadow: "0 0 1px #00cd70c7"}}>Humanity Welfare Limited is a non-profit organization providing free education in 
                    Pakistan, especially & all around the globe. Moving to the next topics of our contribution
                     is to serve for health & residential care for deserving people.</p>
                </div>
            </div><br /><br /><br /><br />
            <div style={{width:'80%',height:'300px', backgroundColor:'#96fbce7c',display:'flex',justifyContent:'center',alignItems:'center', borderRadius:'50px'}}>
                <div style={{width:'30%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div><FontAwesomeIcon icon={faBuildingNgo} size="10x" color="#00cd70c7" flip/></div>
                </div>
                <div style={{width:'50%',display:'flex-start',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
                    <div><p style={{fontSize:'3rem',color:'#00cd70c7',textShadow: "0 0 1px #00cd70c7"}}>We are officially registered from the Companies House Government of UK </p></div>
                   <br /> <div style={{width:'500px',height:'50px',backgroundColor:'#00cd70c7',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}><a style={{fontSize:'1.1rem',color:'#fff'}}>https://find-and-update.company-information.service.gov.uk/</a></div>
                </div>
            </div><br /><br /><br /><br /><br />
            <div style={{width:'80%',height:'300px', backgroundColor:'#96fbce7c',display:'flex',justifyContent:'center',alignItems:'center', borderRadius:'50px'}}>
                <div style={{width:'30%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div><FontAwesomeIcon icon={faCircleDollarToSlot} size="10x" color="#00cd70c7" bounce /></div>
                </div>
                <div style={{width:'50%',display:'flex-start',flexDirection:'column',justifyContent:'space-evenly'}}>
                    <div><p style={{fontSize:'1.5rem',color:'#00cd70c7',textShadow: "0 0 1px #00cd70c7"}}>You can donate us directly from our website for the sake of humanity and also can check our work. Humanity Welfare Limited is constructed to make change in the society & improvement of education and financial crises of the applicable ones.
                    </p></div><br />
                    <div style={{width:'100px',height:'50px',backgroundColor:'#00cd70c7',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}><a style={{fontSize:'1.1rem',color:'#fff'}}>Donate</a></div>
                </div>
            </div><br /><br /><br /><br /><br />
            <div style={{width:'80%',height:'300px', backgroundColor:'#96fbce7c',display:'flex',justifyContent:'center',alignItems:'center', borderRadius:'50px'}}>
                <div style={{width:'30%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div><FontAwesomeIcon icon={faPeopleGroup} size="10x" color="#00cd70c7" beat /></div>
                </div>
                <div style={{width:'50%',display:'flex-start',flexDirection:'column',justifyContent:'space-evenly'}}>
                    <div><p style={{fontSize:'1.5rem',color:'#00cd70c7',textShadow: "0 0 1px #00cd70c7"}}>We have a good network of well-educated teachers and workers who are willing to achieve the goal of this NGO for the development of good change.

                    </p></div><br />
                    <div style={{width:'100px',height:'50px',backgroundColor:'#00cd70c7',borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}><a style={{fontSize:'1.1rem',color:'#fff'}}>About Us</a></div>
                </div>
            </div><br /><br /><br /><br />
            <div style={{width:'80%',height:'500px',backgroundColor:'#96fbce7c',display:'flex',justifyContent:'center',borderRadius:'60px'}}>
                <div style={{width:'80%',height:'100%',display:'flex',justifyContent:'center', alignItems:'center'}}>
                    <p style={{fontSize:'2.5rem',letterSpacing:'1px',color:'#00cd70c7',textAlign:'center',textShadow: "0 0 1px #00cd70c7"}}>Ultimately Humanity Welfare Limited is about fostering a global community that values the health and happiness of everyone by providing access to education, mentorship, and mental health services, we can empower youth to reach their full potential. It’s also crucial to advocate for safe spaces, build strong communities, and ensure equal opportunities.
</p>
                </div>
            </div><br /><br /><br /><br />
        </div>
    )
}
export default AboutUs;
