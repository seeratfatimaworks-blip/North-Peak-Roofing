function StickyMobileCTA() {
    return (
        <div className="sticky-mobile-cta">
            <a
                href="tel:+13035550142"
                className="sticky-mobile-cta__call"
            >
                <span aria-hidden="true">☎</span>
                Call
            </a>

            <a
                href="#lead-form"
                className="sticky-mobile-cta__inspection"
            >
                Get Free Inspection
            </a>
        </div>
    );
}

export default StickyMobileCTA;