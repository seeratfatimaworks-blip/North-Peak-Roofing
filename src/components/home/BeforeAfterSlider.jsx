import { useState } from "react";

function BeforeAfterSlider({ project }) {
    const [position, setPosition] = useState(50);

    function handleChange(event) {
        setPosition(Number(event.target.value));
    }

    return (
        <div className="before-after">
            <div className="before-after__image before-after__image--before">
                <div className="before-after__roof-pattern" />

                <span className="before-after__label">
                    {project.beforeLabel}
                </span>
            </div>

            <div
                className="before-after__image before-after__image--after"
                style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            >
                <div className="before-after__roof-pattern" />

                <span className="before-after__label">
                    {project.afterLabel}
                </span>
            </div>

            <div
                className="before-after__divider"
                style={{ left: `${position}%` }}
                aria-hidden="true"
            />

            <div
                className="before-after__handle"
                style={{ left: `${position}%` }}
                aria-hidden="true"
            >
                ↔
            </div>

            <label className="before-after__control">
                <span className="sr-only">
                    Compare before and after
                </span>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={position}
                    onChange={handleChange}
                    aria-label={`Compare before and after for ${project.title}`}
                />
            </label>
        </div>
    );
}

export default BeforeAfterSlider;