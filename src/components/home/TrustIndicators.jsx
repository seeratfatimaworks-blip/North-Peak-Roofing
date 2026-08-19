function TrustIndicators() {
    const indicators = [
        {
            value: "15+",
            label: "Years of roofing experience",
        },
        {
            value: "5.0",
            label: "Average customer rating",
        },
        {
            value: "100%",
            label: "Locally focused service",
        },
        {
            value: "Free",
            label: "Roof inspections",
        },
    ];

    return (
        <section className="trust-indicators" aria-label="NorthPeak credentials">
            <div className="trust-indicators__inner">
                {indicators.map((item, index) => (
                    <div className="trust-indicators__item" key={item.label}>
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>

                        {index < indicators.length - 1 && (
                            <span
                                className="trust-indicators__divider"
                                aria-hidden="true"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrustIndicators;