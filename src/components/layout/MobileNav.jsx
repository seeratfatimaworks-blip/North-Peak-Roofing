import { useEffect } from "react";
import siteConfig from "../../config/siteConfig";
import Button from "../ui/Button";

function MobileNav({ isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleLinkClick = () => {
        onClose();
    };

    return (
        <div
            id="mobile-navigation"
            className={`mobile-nav ${isOpen ? "mobile-nav--open" : ""
                }`}
            aria-hidden={!isOpen}
        >
            <div className="mobile-nav__backdrop" onClick={onClose} />

            <aside
                className="mobile-nav__panel"
                aria-label="Mobile navigation"
            >
                <div className="mobile-nav__header">
                    <div className="mobile-nav__title">
                        NorthPeak Roofing
                    </div>

                    <button
                        type="button"
                        className="mobile-nav__close"
                        onClick={onClose}
                        aria-label="Close navigation"
                    >
                        ×
                    </button>
                </div>

                <nav className="mobile-nav__links">
                    <a href="#services" onClick={handleLinkClick}>
                        Services
                    </a>

                    <a href="#storm-hail" onClick={handleLinkClick}>
                        Storm & Hail
                    </a>

                    <a href="#projects" onClick={handleLinkClick}>
                        Our Work
                    </a>

                    <a href="#process" onClick={handleLinkClick}>
                        How It Works
                    </a>

                    <a href="#faq" onClick={handleLinkClick}>
                        FAQ
                    </a>
                </nav>

                <div className="mobile-nav__footer">
                    <a
                        href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                        className="mobile-nav__phone"
                        onClick={handleLinkClick}
                    >
                        <span>Call NorthPeak</span>
                        <strong>{siteConfig.phone}</strong>
                    </a>

                    <Button href="#lead-form" onClick={handleLinkClick}>
                        Get Free Inspection
                    </Button>
                </div>
            </aside>
        </div>
    );
}

export default MobileNav;