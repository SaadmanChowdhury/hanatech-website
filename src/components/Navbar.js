import React, { useState, useEffect } from 'react';
import CONFIG from "../config";
import logo32 from "../assets/sakura-32.png";
import logo64 from "../assets/sakura-64.png";

const Navbar = () => {
    const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= CONFIG.desktop);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    useEffect(() => {

        // Handle Screen Width Resize
        const handleResize = () => {
            if(window.innerWidth >= CONFIG.desktop)
                setIsDesktopView(true);
            else
                setIsDesktopView(false);
        };
        window.addEventListener('resize', handleResize);
        
        
        // Handle Scroll
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if (isDesktopView) { // Apply scroll behavior only for desktop
                if (window.scrollY > lastScrollY) {
                    setIsNavbarVisible(false); // Scrolling down
                } else {
                    setIsNavbarVisible(true); // Scrolling up
                }
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);


        // Cleanup component on Unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);

        };
    }, []);

    return (
        <nav className={`navbar ${isNavbarVisible ? 'desktop-visible' : 'desktop-hidden'}`}>

            {isDesktopView &&
            <div className="navbar-container-pc">
                <div className="navbar-left">
                    <img src={logo32} alt="Hana Tech Logo" className="navbar-logo" />

                    {
                        (isDesktopView || isMobileMenuOpen) &&
                        <div className={`navbar-title ${isNavbarVisible ? 'desktop-visible' : 'desktop-hidden'}`}>Hana Tech</div>
                    }
                </div>
                
                <div className={`navbar-right ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="#home" className="navbar-link">Home</a>
                    <a href="#services" className="navbar-link">Services</a>
                    <a href="#contact" className="navbar-link">Contact Us</a>
                </div>
                
            </div>
            }

            {!isDesktopView &&
            <div className="navbar-container-sp">

                <div className="navbar-left">
                    <img src={logo32} alt="Hana Tech Logo" className="navbar-logo" />

                    {
                    (isMobileMenuOpen) &&
                    <div className={`navbar-title ${isNavbarVisible ? 'desktop-visible' : 'desktop-hidden'}`}>Hana Tech</div>
                    }

                    <button
                            className="hamburger-button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            ☰
                    </button>
                </div>

                {/* Mobile drawer */}
                {isMobileMenuOpen && (
                    <div className="mobile-drawer">
                        <a href="#home" className="mobile-link">Home</a>
                        <a href="#services" className="mobile-link">Services</a>
                        <a href="#contact" className="mobile-link">Contact Us</a>
                    </div>
                )} 

            </div>
        }

        </nav>
    );
};
 
export default Navbar;