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
    const [heroImage, setHeroImage] = useState("./assets/1.jpg");
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
                return "./assets/2.jpg";
            case "contact":
                return "./assets/3.jpg";
            case "privacy":
                return "./assets/7.jpg";
            default:
                return "./assets/1.jpg";
        }
    };

    return (
        <div>
            <NavbarF />
            <NavbarS setActivePage={setActivePage} />

            <div className="hero-container">
                <div className="hero-overlay-wrapper">
                    <img
                        className={`hero-image ${fade ? '' : 'hero-image-fade-out'}`}
                        src={heroImage}
                        alt="Hero Section"
                    />
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-text-container">
                    <h1 className="hero-heading">Humanity Welfare</h1>
                    <p className="hero-line">We Work For The Sake Of Humanity</p>
                </div>
            </div>

            {activePage === "home" && (
                <div>
                    <div className="articles-title-container">
                        <h1 className="articles-title">Articles</h1>
                    </div>
                    <Article articleNumber={0} img="./assets/4.jpg" />
                    <Article articleNumber={1} img="./assets/5.jpg" />
                    <Article articleNumber={2} img="./assets/6.jpg" />
                </div>
            )}

            {activePage === "about" && <AboutUs />}
            {activePage === "contact" && <ContactUs />}
            {activePage === "privacy" && <PrivacyPolicy />}

            <br /><br /><br />
            <Footer setActivePage={setActivePage} activePage={activePage} />
        </div>
    );
}

export default Index;
