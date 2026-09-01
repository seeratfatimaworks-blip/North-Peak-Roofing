import { useState } from "react";
import siteConfig from "../../config/siteConfig";
import Button from "../ui/Button";
import MobileNav from "./MobileNav";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((current) => !current);
    };

    return (
        <>
            <header className="navbar">
                <div className="navbar__inner">
                    <a
                        href="#top"
                        className="navbar__brand"
                        aria-label={`${siteConfig.businessName} home`}
                    >
                        <span className="navbar__mark" aria-hidden="true">
                            N
                        </span>

                        <span className="navbar__brand-text">
                            <span className="navbar__brand-name">
                                NorthPeak
                            </span>

                            <span className="navbar__brand-type">
                                Roofing Co.
                            </span>
                        </span>
                    </a>

                    <nav className="navbar__desktop-nav" aria-label="Main navigation">
                        <a href="#services">Services</a>
                        <a href="#storm-hail">Storm & Hail</a>
                        <a href="#projects">Our Work</a>
                        <a href="#process">How It Works</a>
                        <a href="#faq">FAQ</a>
                    </nav>

                    <div className="navbar__desktop-actions">
                        <a
                            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                            className="navbar__phone"
                        >
                            {siteConfig.phone}
                        </a>

                        <Button href="#lead-form">
                            Get Free Inspection
                        </Button>
                    </div>

                    <button
                        type="button"
                        className={`navbar__menu-button ${isMenuOpen ? "navbar__menu-button--open" : ""
                            }`}
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            <MobileNav
                isOpen={isMenuOpen}
                onClose={closeMenu}
            />
        </>
    );
}

export default Navbar;