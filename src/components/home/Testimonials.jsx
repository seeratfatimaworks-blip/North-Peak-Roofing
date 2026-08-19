import testimonials from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    return (
        <section
            id="testimonials"
            className="testimonials"
            aria-labelledby="testimonials-title"
        >
            <div className="testimonials__inner">
                <div className="testimonials__heading">
                    <span className="eyebrow">Homeowner experiences</span>

                    <h2 id="testimonials-title" className="heading-2">
                        The kind of service people remember.
                    </h2>

                    <p>
                        Good roofing work protects a home. Good communication
                        makes the entire experience better.
                    </p>
                </div>

                <div className="testimonials__grid">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            testimonial={testimonial}
                            key={testimonial.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;