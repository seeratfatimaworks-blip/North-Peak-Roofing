import processSteps from "../../data/processSteps";
import Button from "../ui/Button";

function HowItWorks() {
    return (
        <section
            id="process"
            className="how-it-works"
            aria-labelledby="process-title"
        >
            <div className="how-it-works__inner">
                <div className="how-it-works__heading">
                    <span className="eyebrow">How it works</span>

                    <h2 id="process-title" className="heading-2">
                        A straightforward process from inspection to completion.
                    </h2>

                    <p>
                        No confusing handoffs. No guessing what happens next.
                        Just a clear path from your first call to a protected
                        home.
                    </p>
                </div>

                <div className="how-it-works__steps">
                    {processSteps.map((step, index) => (
                        <article
                            className="process-step"
                            key={step.number}
                        >
                            <div className="process-step__top">
                                <span>{step.number}</span>


                                <span
                                    className="process-step__line"
                                    aria-hidden="true"
                                />

                            </div>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>

                <div className="how-it-works__action">
                    <Button href="#contact">
                        Start With a Free Inspection
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;