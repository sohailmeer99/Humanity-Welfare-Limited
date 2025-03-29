import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PpData(props) {
    return (
        <div style={{ backgroundColor: '#96fbce7c', width: '80%', height: '100%' }}>
            <div>
                <br /><br />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
                        {/* Display the icon here */}
                        <FontAwesomeIcon icon={props.logo} size="4x" color="#00cd70c7" />
                    </div>
                    <div style={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                        <div style={{backgroundColor:'#00cd70c7',padding:'10px',borderRadius:'10px'}}>
                            <h1 style={{ color: '#fff', fontSize: '3rem' }}>{props.heading}</h1>
                        </div>
                        <br />
                        <div>
                            <div 
                                style={{ color: '#00cd70c7', fontSize: '1.3rem' }} 
                                dangerouslySetInnerHTML={{ __html: props.para.replace(/<ul>/g, '<ul style="list-style-type: none; padding: 0;">') }}
                            />
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    );
}

export default PpData;
