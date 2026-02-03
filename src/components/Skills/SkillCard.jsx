const SkillCard = ({ title, skills }) => {
    return (
        <div className="skill-card">
            <h3 className="skill-category">{title}</h3>
            <ul className="skill-list">
                {skills.map((skill) => (
                    <li key={skill} className="skill-item">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
