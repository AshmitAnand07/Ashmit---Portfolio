import { skills } from "../../data/skills";

const SkillCard = ({ title, skills }) => {
    return (
        <div className="card skill-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>{title}</h3>
            <div className="skill-list" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                {skills.map(skill => (
                    <span key={skill} className="tag">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="section-header reveal">
                <h2 className="section-title">Technical Expertise</h2>
                <p>A comprehensive list of technologies and tools I work with.</p>
            </div>
            
            <div className="skills-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
                {skills.map((item) => (
                    <SkillCard
                        key={item.category}
                        title={item.category}
                        skills={item.skills}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
