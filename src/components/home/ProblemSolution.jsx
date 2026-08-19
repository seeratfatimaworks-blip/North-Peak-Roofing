import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

function ProblemSolution() {
    const problems = [
        "Storm damage you can't easily see",
        "Contractors who don't communicate",
        "Unclear estimates and unexpected costs",
    ];

    return (
        <section className="problem-solution">
            <div className="problem-solution__inner">
                <div className="problem-solution__problem">
                    <span className="eyebrow">Roof problems are stressful</span>

                    <h2 className="heading-2">
                        You shouldn't have to wonder what's happening above you.
                    </h2>

                    <p>
                        A damaged roof can quickly become a bigger problem.
                        Finding a contractor you can trust shouldn't be another
                        one.
                    </p>

                    <ul className="problem-solution__list">
                        {problems.map((problem) => (
                            <li key={problem}>
                                <span className="problem-solution__icon" aria-hidden="true">
                                    ×
                                </span>

                                <span>{problem}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="problem-solution__solution">
                    <SectionHeading
                        eyebrow="The NorthPeak approach"
                        title="Clear answers. Quality work. No guesswork."
                        description="We make the roofing process straightforward from the first inspection to the final walkthrough."
                    />

                    <div className="problem-solution__points">
                        <div className="problem-solution__point">
                            <span>01</span>

                            <div>
                                <h3>Inspect</h3>
                                <p>
                                    We assess your roof carefully and explain what
                                    we find.
                                </p>
                            </div>
                        </div>

                        <div className="problem-solution__point">
                            <span>02</span>

                            <div>
                                <h3>Plan</h3>
                                <p>
                                    You receive a clear recommendation and
                                    straightforward estimate.
                                </p>
                            </div>
                        </div>

                        <div className="problem-solution__point">
                            <span>03</span>

                            <div>
                                <h3>Protect</h3>
                                <p>
                                    Our team completes the work with attention to
                                    your home and property.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="problem-solution__action">
                        <Button href="#contact">
                            Schedule a Free Inspection
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProblemSolution;