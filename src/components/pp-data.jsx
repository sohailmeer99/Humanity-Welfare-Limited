import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PpData(props) {
    return (
        <div className="pp-data-container">
            <div>
                <br /><br />
                <div className="pp-data-content">
                    <div className="pp-data-icon-container">
                        <FontAwesomeIcon icon={props.logo} size="4x" color="#00cd70c7" />
                    </div>
                    <div className="pp-data-text-container">
                        <div className="pp-data-heading-container">
                            <h1 className="pp-data-heading">{props.heading}</h1>
                        </div>
                        <br />
                        <div>
                            <div 
                                className="pp-data-text" 
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