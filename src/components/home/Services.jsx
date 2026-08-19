import services from "../../data/services";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "./ServiceCard";

function Services() {
    return (
        <section
            id="services"
            className="services"
            aria-labelledby="services-title"
        >
            <div className="services__inner">
                <div className="services__heading">
                    <SectionHeading
                        eyebrow="What we do"
                        title="Roofing work built around your home."
                        description="From small repairs to complete replacement, NorthPeak provides straightforward roofing solutions designed to protect your home for years to come."
                    />

                    <div className="services__intro-action">
                        <Button href="#contact" variant="secondary">
                            Talk to a Roofing Specialist
                        </Button>
                    </div>
                </div>

                <div className="services__grid">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;