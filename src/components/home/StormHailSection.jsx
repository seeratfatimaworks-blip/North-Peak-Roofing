import stormDamageItems from "../../data/stormDamage";
import Button from "../ui/Button";

function StormHailSection() {
    return (
        <section
            id="storm-hail"
            className="storm-hail"
            aria-labelledby="storm-hail-title"
        >
            <div className="storm-hail__visual" aria-hidden="true">
                <div className="storm-hail__visual-grid" />

                <div className="storm-hail__visual-label">
                    <span>AFTER THE STORM</span>
                    <strong>CHECK YOUR ROOF</strong>
                </div>

                <div className="storm-hail__visual-line storm-hail__visual-line--one" />
                <div className="storm-hail__visual-line storm-hail__visual-line--two" />
                <div className="storm-hail__visual-line storm-hail__visual-line--three" />
            </div>

            <div className="storm-hail__content">
                <div className="storm-hail__heading">
                    <span className="eyebrow">
                        Storm & Hail Damage
                    </span>

                    <h2 id="storm-hail-title" className="heading-2">
                        Don't wait for a leak to tell you there's damage.
                    </h2>

                    <p>
                        Severe weather can leave damage that isn't immediately
                        visible. A professional inspection can help identify
                        problems early and give you a clear picture of your
                        roof's condition.
                    </p>

                    <div className="storm-hail__actions">
                        <Button href="#lead-form">
                            Get a Free Storm Inspection
                        </Button>

                        <a
                            href="#process"
                            className="storm-hail__secondary-link"
                        >
                            See how the process works
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                <div className="storm-hail__damage-list">
                    {stormDamageItems.map((item) => (
                        <article
                            className="storm-hail__damage"
                            key={item.number}
                        >
                            <span className="storm-hail__number">
                                {item.number}
                            </span>

                            <div>
                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="storm-hail__notice">
                    <span className="storm-hail__notice-icon" aria-hidden="true">
                        ✓
                    </span>

                    <div>
                        <strong>Not sure if your roof was affected?</strong>

                        <p>
                            We'll inspect the roof and explain what we find
                            before recommending any work.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StormHailSection;