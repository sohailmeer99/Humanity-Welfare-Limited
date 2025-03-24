function NavbarS(){
    return(
        <div style={{width:'100%', height:'10vh', display:'flex', justifyContent:'center',alignItems:'center'}}>
            <div style={{width:'80%',height:'10vh',display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                <div><h1 style={{color:'#2c8c52',cursor:'pointer',letterSpacing:'3px',fontFamily: "'Boldonse', sans-serif",fontWeight:'normal'}}>HWL</h1></div>
                <div style={{ width:'80%',display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{width:'85%'}}>
                        <nav >
                            <ul className="navbar-links" style={{display:'flex', justifyContent:'space-around',alignItems:'center',listStyleType:'none',fontWeight:'700',color:'#2c8c52',cursor:'pointer'}}>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Privacy & Policy</li>
                                <li>Contact</li>
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