function TestimonialCard({ testimonial }) {
    return (
        <article className="testimonial-card">
            <div className="testimonial-card__quote-mark" aria-hidden="true">
                “
            </div>

            <blockquote>
                {testimonial.quote}
            </blockquote>

            <div className="testimonial-card__footer">
                <div>
                    <strong>{testimonial.name}</strong>

                    <span>{testimonial.location}</span>
                </div>

                <span className="testimonial-card__project">
                    {testimonial.project}
                </span>
            </div>
        </article>
    );
}

export default TestimonialCard;