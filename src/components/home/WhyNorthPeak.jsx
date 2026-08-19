import reasons from "../../data/whyNorthPeak";

function WhyNorthPeak() {
    return (
        <section
            id="why-northpeak"
            className="why-northpeak"
            aria-labelledby="why-northpeak-title"
        >
            <div className="why-northpeak__inner">
                <div className="why-northpeak__heading">
                    <span className="eyebrow">Why NorthPeak</span>

                    <h2 id="why-northpeak-title" className="heading-2">
                        Roofing without the runaround.
                    </h2>

                    <p>
                        Your roof is too important for vague answers and
                        rushed workmanship. We built our approach around
                        communication, quality, and accountability.
                    </p>
                </div>

                <div className="why-northpeak__reasons">
                    {reasons.map((reason) => (
                        <article
                            className="why-northpeak__reason"
                            key={reason.number}
                        >
                            <span className="why-northpeak__number">
                                {reason.number}
                            </span>

                            <div>
                                <h3>{reason.title}</h3>

                                <p>{reason.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyNorthPeak;