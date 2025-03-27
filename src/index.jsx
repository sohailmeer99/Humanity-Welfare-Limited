import { useState } from "react";
import NavbarF from "./components/navbar1";
import NavbarS from "./components/navbar2";
import Article from "./components/article";
import Footer from "./components/footer";
import AboutUs from "./components/about-us";

function Index() {
    const [aboutUs, setAboutUs] = useState(false);
    return (
        <div>
            <NavbarF />
            <NavbarS />

            {/* Hero Section with Image */}
            <div style={{ width: '100%' }}>
                <img 
                    style={{ width: '100%', height: '45vh', objectFit: 'cover' }} 
                    src="/Humanity-Welfare-Limited/assets/1.jpg" 
                />
            </div>


            {aboutUs && (
                <div>
                    <img style={{ width: '100%', height: '65vh', objectFit: 'cover' }} src="/Humanity-Welfare-Limited/assets/3.jpg" />
                    <div style={{ width: '100%', display: 'flex', margin: '80px 0', justifyContent: 'center' }}>
                        <h1 style={{ fontSize: '4rem', color: '#000', textDecoration: 'underline' }}>Articles</h1>
                    </div>
                    <Article articleNumber={0} img="/Humanity-Welfare-Limited/assets/4.jpg" />
                    <Article articleNumber={1} img="/Humanity-Welfare-Limited/assets/5.jpg" />
                    <Article articleNumber={2} img="/Humanity-Welfare-Limited/assets/6.jpg" />
                </div>
            )}

            {/* About Us Section */}
            <AboutUs />
            <br /><br /><br />
            <Footer />
        </div>
    );
}

export default Index;
