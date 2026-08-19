import faq from "../../data/faq";
import FAQItem from "./FAQItem";

function FAQ() {
    return (
        <section
            id="faq"
            className="faq"
            aria-labelledby="faq-title"
        >
            <div className="faq__inner">
                <div className="faq__heading">
                    <span className="eyebrow">FAQ</span>

                    <h2 id="faq-title" className="heading-2">
                        Questions before you get started?
                    </h2>

                    <p>
                        Here are answers to some of the questions Denver
                        homeowners ask us most often.
                    </p>
                </div>

                <div className="faq__list">
                    {faq.map((item) => (
                        <FAQItem
                            item={item}
                            key={item.question}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;