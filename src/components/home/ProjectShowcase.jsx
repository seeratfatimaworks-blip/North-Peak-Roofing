import projects from "../../data/projects";
import BeforeAfterSlider from "./BeforeAfterSlider";

function ProjectShowcase() {
    return (
        <section
            id="projects"
            className="project-showcase"
            aria-labelledby="projects-title"
        >
            <div className="project-showcase__inner">
                <div className="project-showcase__heading">
                    <div>
                        <span className="eyebrow">Selected work</span>

                        <h2 id="projects-title" className="heading-2">
                            Work that speaks for itself.
                        </h2>
                    </div>

                    <p>
                        Every roof is different. Our approach combines
                        practical protection with workmanship that looks right
                        on the home.
                    </p>
                </div>

                <div className="project-showcase__projects">
                    {projects.map((project) => (
                        <article
                            className="project"
                            key={project.id}
                        >
                            <BeforeAfterSlider project={project} />

                            <div className="project__content">
                                <div className="project__meta">
                                    <span>{project.number}</span>
                                    <span>{project.type}</span>
                                </div>

                                <div className="project__details">
                                    <div>
                                        <span className="project__location">
                                            {project.location}
                                        </span>

                                        <h3>{project.title}</h3>
                                    </div>

                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectShowcase;