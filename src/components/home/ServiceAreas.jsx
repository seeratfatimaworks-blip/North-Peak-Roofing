import serviceAreas from "../../data/serviceAreas";

function ServiceAreas() {
    return (
        <section
            id="service-areas"
            className="service-areas"
            aria-labelledby="service-areas-title"
        >
            <div className="service-areas__inner">
                <div className="service-areas__heading">
                    <span className="eyebrow">Where we work</span>

                    <h2 id="service-areas-title" className="heading-2">
                        Proudly serving Denver and the surrounding area.
                    </h2>

                    <p>
                        NorthPeak Roofing serves homeowners across the Denver
                        metro area with residential roofing, replacement, and
                        storm damage services.
                    </p>
                </div>

                <div className="service-areas__content">
                    <div className="service-areas__map" aria-hidden="true">
                        <div className="service-areas__map-grid" />

                        <div className="service-areas__map-center">
                            <span>NP</span>
                            <small>DENVER</small>
                        </div>

                        <span className="map-dot map-dot--one" />
                        <span className="map-dot map-dot--two" />
                        <span className="map-dot map-dot--three" />
                        <span className="map-dot map-dot--four" />
                        <span className="map-dot map-dot--five" />
                    </div>

                    <div className="service-areas__list">
                        {serviceAreas.map((area, index) => (
                            <article
                                className="service-area"
                                key={area.name}
                            >
                                <span className="service-area__number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div>
                                    <h3>{area.name}</h3>

                                    <p>{area.description}</p>
                                </div>

                                <span
                                    className="service-area__arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceAreas;