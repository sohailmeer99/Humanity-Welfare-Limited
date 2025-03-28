import { useState, useEffect } from "react";
import NavbarF from "./components/navbar1";
import NavbarS from "./components/navbar2";
import Article from "./components/article";
import Footer from "./components/footer";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";

function Index() {
    const [activePage, setActivePage] = useState("home");
    const [heroImage, setHeroImage] = useState("/Humanity-Welfare-Limited/assets/1.jpg");
    const [fade, setFade] = useState(true);

    useEffect(() => {
        setFade(false); // Start fade-out animation

        const newImage = getHeroImage();

        // Preload new image before switching
        const img = new Image();
        img.src = newImage;
        img.onload = () => {
            setTimeout(() => {
                setHeroImage(newImage); // Change image after fade-out
                setFade(true); // Start fade-in animation
            }, 400); // Wait for fade-out before switching image
        };
    }, [activePage]);

    // Function to get the correct hero image based on the active page
    const getHeroImage = () => {
        switch (activePage) {
            case "about":
                return "/Humanity-Welfare-Limited/assets/2.jpg";
            case "contact":
                return "/Humanity-Welfare-Limited/assets/3.jpg";
            default:
                return "/Humanity-Welfare-Limited/assets/1.jpg";
        }
    };

    return (
        <div>
            <NavbarF />
            <NavbarS setActivePage={setActivePage} />

            {/* Hero Section with Fade-In & Fade-Out Animation */}
            <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
                <img 
                    style={{
                        width: "100%",
                        height: "55vh",
                        objectFit: "cover",
                        opacity: fade ? 1 : 0, // Fade-in & Fade-out
                        transition: "opacity 0.8s ease-in-out" // Smooth fade effect
                    }} 
                    src={heroImage} 
                    alt="Hero Section"
                />
            </div>

            {/* Page Content */}
            {activePage === "home" && (
                <div>
                    <div style={{ width: '100%', display: 'flex', margin: '80px 0', justifyContent: 'center' }}>
                        <h1 style={{ fontSize: '5rem', color: '#00cd70c7' }}>Articles</h1>
                    </div>
                    <Article articleNumber={0} img="/Humanity-Welfare-Limited/assets/4.jpg" />
                    <Article articleNumber={1} img="/Humanity-Welfare-Limited/assets/5.jpg" />
                    <Article articleNumber={2} img="/Humanity-Welfare-Limited/assets/6.jpg" />
                </div>
            )}

            {activePage === "about" && <AboutUs />}
            {activePage === "contact" && <ContactUs />}

            <br /><br /><br />
            <Footer />
        </div>
    );
}

export default Index;
