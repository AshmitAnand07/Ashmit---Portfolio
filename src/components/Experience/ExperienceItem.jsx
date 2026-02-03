const ExperienceItem = ({ item }) => {
    return (
        <div className="experience-item">
            <div className="experience-header">
                <h3 className="experience-title">{item.title}</h3>
                <span className="experience-duration">{item.duration}</span>
            </div>
            <h4 className="experience-org">{item.organization}</h4>
            <p className="experience-desc">{item.description}</p>
        </div>
    );
};

export default ExperienceItem;
