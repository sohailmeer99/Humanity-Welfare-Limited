function Navbar(){
    return(
        <div style={
            {
                width:'100%',
                position:'absolute',
                top:'0',
                padding: '30px 20px 0px 30px',
            }}>
            <nav>
                <div style={
                {
                    display:'flex',
                    flexDirection : 'row',
                    justifyContent : 'space-between',
                    alignItems:'center'
                }}>
                    <div style={
                        {
                            width: '30%',
                            color:'#2c8c52'
                        }}>
                        <h1>Humanity Welfare Limited</h1>
                    </div>
                    <div className="nav" style={
                        {
                            width:'70%',
                            display:'flex'
                        }
                    }>
                        <ul style={
                            {
                                width: '100%',
                                listStyleType : 'none',
                                display:'flex',
                                justifyContent:'space-evenly',
                                alignItems:'center',
                                color:'#fff',
                                fontWeight:'bold',
                                letterSpacing:'1px',
                                fontSize:'1.1rem'


                                
                            }}>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Privacy & Policy</li>
                            <li className="donate-btn">Donate</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;