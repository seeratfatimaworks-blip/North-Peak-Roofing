import { useState } from "react";

function FAQItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleFAQ() {
        setIsOpen((current) => !current);
    }

    return (
        <article className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
            <button
                type="button"
                className="faq-item__question"
                onClick={toggleFAQ}
                aria-expanded={isOpen}
            >
                <span>{item.question}</span>

                <span
                    className="faq-item__icon"
                    aria-hidden="true"
                >
                    {isOpen ? "−" : "+"}
                </span>
            </button>

            <div
                className="faq-item__answer"
                hidden={!isOpen}
            >
                <p>{item.answer}</p>
            </div>
        </article>
    );
}

export default FAQItem;