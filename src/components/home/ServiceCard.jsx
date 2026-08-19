function ServiceCard({ service }) {
    return (
        <article className="service-card">
            <div className="service-card__top">
                <span className="service-card__number">
                    {service.number}
                </span>

                <span className="service-card__arrow" aria-hidden="true">
                    ↗
                </span>
            </div>

            <div className="service-card__content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
            </div>

            <ul className="service-card__features">
                {service.features.map((feature) => (
                    <li key={feature}>
                        <span aria-hidden="true">+</span>
                        {feature}
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default ServiceCard;