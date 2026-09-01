import { useState } from "react";
import leadFormFields from "../../data/leadForm";

const initialFormData = {
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
};

function LeadForm() {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));

        setErrors((current) => ({
            ...current,
            [name]: "",
        }));

        setSubmitError("");
    }

    function validateForm() {
        const newErrors = {};

        leadFormFields.forEach((field) => {
            const value = formData[field.name].trim();

            if (field.required && !value) {
                newErrors[field.name] = `${field.label} is required.`;
            }
        });

        if (
            formData.email &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (
            formData.phone &&
            formData.phone.replace(/\D/g, "").length < 10
        ) {
            newErrors.phone = "Please enter a valid phone number.";
        }

        if (!formData.service) {
            newErrors.service = "Please select a service.";
        }

        return newErrors;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setSubmitError("");

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitted(false);
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong.");
            }

            console.log("Lead saved:", data);

            setSubmitted(true);
            setErrors({});
        } catch (error) {
            console.error("Lead submission failed:", error);
            setSubmitError("Something went wrong. Please try again.");
        }
    }

    return (
        <section
            id="lead-form"
            className="lead-form-section"
            aria-labelledby="lead-form-title"
        >
            <div className="lead-form-section__inner">
                <div className="lead-form-section__intro">
                    <span className="eyebrow">Free roof inspection</span>

                    <h2 id="lead-form-title" className="heading-2">
                        Tell us what your roof needs.
                    </h2>

                    <p>
                        Complete the short form and our team will get in touch
                        to discuss your roof and arrange a convenient inspection.
                    </p>

                    <div className="lead-form-section__details">
                        <div>
                            <span>Phone</span>
                            <a href="tel:+13035550142">
                                (303) 555-0142
                            </a>
                        </div>

                        <div>
                            <span>Email</span>
                            <a href="mailto:hello@northpeakroofing.com">
                                hello@northpeakroofing.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="lead-form-card">
                    {submitted ? (
                        <div className="lead-form-success">
                            <span className="lead-form-success__icon">
                                ✓
                            </span>

                            <h3>Thanks — you're all set.</h3>

                            <p>
                                Your inspection request has been received. A
                                NorthPeak team member will contact you shortly.
                            </p>

                            <button
                                type="button"
                                className="button button--secondary"
                                onClick={() => {
                                    setFormData(initialFormData);
                                    setSubmitted(false);
                                }}
                            >
                                Submit another request
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="lead-form__grid">
                                {leadFormFields.map((field) => (
                                    <div
                                        className={`form-field ${field.name === "address"
                                            ? "form-field--full"
                                            : ""
                                            }`}
                                        key={field.name}
                                    >
                                        <label htmlFor={field.name}>
                                            {field.label}
                                            {field.required && (
                                                <span aria-hidden="true"> *</span>
                                            )}
                                        </label>

                                        <input
                                            id={field.name}
                                            name={field.name}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(errors[field.name])}
                                            aria-describedby={
                                                errors[field.name]
                                                    ? `${field.name}-error`
                                                    : undefined
                                            }
                                        />

                                        {errors[field.name] && (
                                            <span
                                                id={`${field.name}-error`}
                                                className="form-field__error"
                                            >
                                                {errors[field.name]}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="form-field">
                                <label htmlFor="service">
                                    What do you need help with? *
                                </label>

                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    aria-invalid={Boolean(errors.service)}
                                >
                                    <option value="">
                                        Select a service
                                    </option>
                                    <option value="roof-replacement">
                                        Roof Replacement
                                    </option>
                                    <option value="roof-repair">
                                        Roof Repair
                                    </option>
                                    <option value="storm-damage">
                                        Storm / Hail Damage
                                    </option>
                                    <option value="roof-inspection">
                                        Roof Inspection
                                    </option>
                                    <option value="other">
                                        Other
                                    </option>
                                </select>

                                {errors.service && (
                                    <span className="form-field__error">
                                        {errors.service}
                                    </span>
                                )}
                            </div>

                            <div className="form-field">
                                <label htmlFor="message">
                                    Tell us a little more
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Describe any leaks, storm damage, or concerns..."
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            {submitError && (
                                <p className="form-field__error">
                                    {submitError}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="button button--primary lead-form__submit"
                            >
                                Request Free Inspection
                            </button>

                            <p className="lead-form__privacy">
                                By submitting this form, you agree to be contacted
                                regarding your roofing request.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default LeadForm;