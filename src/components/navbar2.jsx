function NavbarS({ setActivePage }) {
    return (
        <div style={{ zIndex: '1000', width: '100%', height: '10vh', display: 'flex', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', position: 'sticky', top: '0' }}>
            <div style={{ width: '80%', height: '10vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 
                        style={{ color: '#4FFFB0', cursor: 'pointer', letterSpacing: '3px', fontFamily: "'Boldonse', sans-serif", fontWeight: 'normal' }} 
                        onClick={() => setActivePage("home")}
                    >
                        HWL
                    </h1>
                </div>
                <div style={{ width: '80%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ width: '85%' }}>
                        <nav>
                            <ul className="navbar-links" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', listStyleType: 'none', fontWeight: '700', color: '#4FFFB0', cursor: 'pointer' }}>
                                <li onClick={() => setActivePage("home")}>Home</li>
                                <li onClick={() => setActivePage("about")}>About Us</li>
                                <li onClick={() => setActivePage("privacy")}>Privacy & Policy</li> {/* Fixed here */}
                                <li onClick={() => setActivePage("contact")}>Contact</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <button className="donate-btn">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarS;
