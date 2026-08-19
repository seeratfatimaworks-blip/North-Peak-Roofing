function AnnouncementBar() {
    return (
        <div className="announcement-bar">
            <div className="announcement-bar__inner">
                <p>
                    Free roof inspections after qualifying storm events
                </p>

                <a href="#contact" className="announcement-bar__link">
                    Schedule an inspection
                    <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
    );
}

export default AnnouncementBar;