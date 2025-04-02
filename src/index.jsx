import { useState, useEffect } from "react";
import NavbarF from "./components/navbar1";
import NavbarS from "./components/navbar2";
import Article from "./components/article";
import Footer from "./components/footer";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";
import PrivacyPolicy from "./components/privacy-policy";

function Index() {
    const [activePage, setActivePage] = useState("home");
    const [heroImage, setHeroImage] = useState("/Humanity-Welfare-Limited/assets/1.jpg");
    const [fade, setFade] = useState(true);

    useEffect(() => {
        setFade(false);
        const newImage = getHeroImage();
        const img = new Image();
        img.src = newImage;
        img.onload = () => {
            setTimeout(() => {
                setHeroImage(newImage);
                setFade(true);
            }, 400);
        };
    }, [activePage]);

    const getHeroImage = () => {
        switch (activePage) {
            case "about":
                return "/Humanity-Welfare-Limited/assets/2.jpg";
            case "contact":
                return "/Humanity-Welfare-Limited/assets/3.jpg";
            case "privacy":
                return "/Humanity-Welfare-Limited/assets/7.jpg";
            default:
                return "/Humanity-Welfare-Limited/assets/1.jpg";
        }
    };

    return (
        <div>
            <NavbarF />
            <NavbarS setActivePage={setActivePage} />

            <div className="hero-container">
                <img 
                    className={`hero-image ${fade ? '' : 'hero-image-fade-out'}`}
                    src={heroImage} 
                    alt="Hero Section"
                />
            </div>

            {activePage === "home" && (
                <div>
                    <div className="articles-title-container">
                        <h1 className="articles-title">Articles</h1>
                    </div>
                    <Article articleNumber={0} img="/Humanity-Welfare-Limited/assets/4.jpg" />
                    <Article articleNumber={1} img="/Humanity-Welfare-Limited/assets/5.jpg" />
                    <Article articleNumber={2} img="/Humanity-Welfare-Limited/assets/6.jpg" />
                </div>
            )}

            {activePage === "about" && <AboutUs />}
            {activePage === "contact" && <ContactUs />}
            {activePage === "privacy" && <PrivacyPolicy />}

            <br /><br /><br />
            <Footer />
        </div>
    );
}

export default Index;