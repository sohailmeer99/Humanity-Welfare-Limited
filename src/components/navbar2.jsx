import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function NavbarS({ setActivePage }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleNavClick = (page) => {
        setActivePage(page);
        setMobileMenuOpen(false);
    };

    return (
        <div className="navbar2-container">
            <div className="navbar2-content">
                <div className="navbar-header">
                    <h1 className="navbar2-brand" onClick={() => handleNavClick("home")}>
                        HWL
                    </h1>
                    
                    {/* Desktop Navigation - visible on larger screens */}
                    <div className="desktop-nav">
                        <nav>
                            <ul className="navbar-links">
                                <li onClick={() => handleNavClick("home")}>Home</li>
                                <li onClick={() => handleNavClick("about")}>About Us</li>
                                <li onClick={() => handleNavClick("privacy")}>Privacy & Policy</li>
                                <li onClick={() => handleNavClick("contact")}>Contact</li>
                            </ul>
                        </nav>
                        <button className="donate-btn">Donate</button>
                    </div>
                    
                    {/* Mobile Toggle Button - visible only on mobile */}
                    <button 
                        className="mobile-menu-toggle" 
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon 
                            icon={mobileMenuOpen ? faTimes : faBars} 
                            className="menu-icon"
                        />
                    </button>
                </div>
                
                {/* Mobile Dropdown Menu - appears when hamburger is clicked */}
                <div className={`mobile-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
                    <nav>
                        <ul className="mobile-links">
                            <li onClick={() => handleNavClick("home")}>Home</li>
                            <li onClick={() => handleNavClick("about")}>About Us</li>
                            <li onClick={() => handleNavClick("privacy")}>Privacy & Policy</li>
                            <li onClick={() => handleNavClick("contact")}>Contact</li>
                        </ul>
                    </nav>
                    <button className="donate-btn mobile-donate">Donate</button>
                </div>
            </div>
        </div>
    );
}

export default NavbarS;