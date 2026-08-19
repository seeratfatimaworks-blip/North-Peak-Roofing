function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
    className = "",
}) {
    return (
        <div
            className={`section-heading section-heading--${align} ${className}`.trim()}
        >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}

            {title && <h2 className="heading-2">{title}</h2>}

            {description && <p className="body-large">{description}</p>}
        </div>
    );
}

export default SectionHeading;