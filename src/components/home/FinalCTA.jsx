import Button from "../ui/Button";

function FinalCTA() {
    return (
        <section
            id="contact"
            className="final-cta"
            aria-labelledby="final-cta-title"
        >
            <div className="final-cta__inner">
                <span className="eyebrow">
                    Protect what matters
                </span>

                <h2 id="final-cta-title">
                    Know what your roof needs.
                </h2>

                <p>
                    Get a straightforward roof inspection and a clear
                    understanding of your options. No pressure. No confusing
                    sales pitch.
                </p>

                <div className="final-cta__actions">
                    <Button href="#lead-form">
                        Get Your Free Inspection
                    </Button>

                    <a
                        href="tel:+13035550142"
                        className="final-cta__phone"
                    >
                        Call (303) 555-0142
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FinalCTA;