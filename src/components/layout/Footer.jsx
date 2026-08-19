function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__main">
                    <div className="footer__brand">
                        <a href="#top" className="footer__logo">
                            <span className="footer__logo-mark">NP</span>

                            <span>
                                <strong>NorthPeak</strong>
                                <small>ROOFING</small>
                            </span>
                        </a>

                        <p>
                            Premium residential roofing and storm damage
                            services for Denver homeowners.
                        </p>

                        <a
                            href="tel:+13035550142"
                            className="footer__phone"
                        >
                            (303) 555-0142
                        </a>
                    </div>

                    <div className="footer__column">
                        <h3>Explore</h3>

                        <a href="#top">Home</a>
                        <a href="#services">Services</a>
                        <a href="#storm-hail">Storm & Hail</a>
                        <a href="#projects">Our Work</a>
                        <a href="#process">How It Works</a>
                    </div>

                    <div className="footer__column">
                        <h3>Services</h3>

                        <a href="#services">Roof Replacement</a>
                        <a href="#services">Roof Repair</a>
                        <a href="#storm-hail">Storm Damage</a>
                        <a href="#storm-hail">Hail Damage</a>
                        <a href="#lead-form">Roof Inspection</a>
                    </div>

                    <div className="footer__column">
                        <h3>Contact</h3>

                        <span>Denver, Colorado</span>

                        <a href="mailto:hello@northpeakroofing.com">
                            hello@northpeakroofing.com
                        </a>

                        <a href="#lead-form">
                            Request an Inspection
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span>
                        © {currentYear} NorthPeak Roofing. Demo website.
                    </span>

                    <div className="footer__legal">
                        <a href="#faq">FAQ</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;