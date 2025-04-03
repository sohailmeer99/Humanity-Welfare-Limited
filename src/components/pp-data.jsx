import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

function PpData(props) {
  const [iconSize, setIconSize] = useState('4x'); // Default icon size for desktop

  // Adjust icon size based on screen width
  useEffect(() => {
    const updateIconSize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setIconSize('1x'); // Mobile screen
      } else if (width <= 768) {
        setIconSize('1x'); // Tablet screen
      } else {
        setIconSize('4x'); // Desktop screen
      }
    };

    // Call on initial render
    updateIconSize();

    // Add resize event listener to update icon size on window resize
    window.addEventListener('resize', updateIconSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateIconSize);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="pp-data-container">
      <div>
        <br /><br />
        <div className="pp-data-content">
          <div className="pp-data-icon-container">
            <FontAwesomeIcon icon={props.logo} size={iconSize} color="#00cd70c7" />
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
