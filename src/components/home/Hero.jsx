import Button from "../ui/Button";
import siteConfig from "../../config/siteConfig";

function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__background" aria-hidden="true">
                <div className="hero__gradient" />
            </div>

            <div className="hero__inner">
                <div className="hero__content">
                    <span className="eyebrow hero__eyebrow">
                        Denver Roofing Specialists
                    </span>

                    <h1 id="hero-title" className="display hero__title">
                        A better roof
                        <br />
                        starts with
                        <br />
                        <span>better work.</span>
                    </h1>

                    <p className="hero__description">
                        Reliable roofing solutions for Denver homeowners —
                        from storm damage and repairs to complete roof
                        replacement.
                    </p>

                    <div className="hero__actions">
                        <Button href="#contact">
                            Get Your Free Inspection
                        </Button>

                        <Button
                            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                            variant="secondary"
                        >
                            Call {siteConfig.phone}
                        </Button>
                    </div>

                    <div className="hero__trust">
                        <div className="hero__trust-item">
                            <strong>15+</strong>
                            <span>Years of experience</span>
                        </div>

                        <div className="hero__trust-divider" />

                        <div className="hero__trust-item">
                            <strong>5.0</strong>
                            <span>Customer rating</span>
                        </div>

                        <div className="hero__trust-divider" />

                        <div className="hero__trust-item">
                            <strong>100%</strong>
                            <span>Locally focused</span>
                        </div>
                    </div>
                </div>

                <div className="hero__visual" aria-hidden="true">
                    <div className="hero__image-placeholder">
                        <div className="hero__image-overlay">
                            <span>PRECISION</span>
                            <span>PROTECTION</span>
                            <span>CRAFT</span>
                        </div>
                    </div>

                    <div className="hero__location-card">
                        <span>Serving</span>
                        <strong>
                            {siteConfig.city}, {siteConfig.state}
                        </strong>
                    </div>
                </div>
            </div>

            <div className="hero__scroll" aria-hidden="true">
                <span>Scroll to explore</span>
                <span className="hero__scroll-line" />
            </div>
        </section>
    );
}

export default Hero;