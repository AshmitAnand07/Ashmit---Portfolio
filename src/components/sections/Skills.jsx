import { skills } from "../../data/skills";

const SkillCard = ({ title, skills }) => {
    return (
        <div className="card skill-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>{title}</h3>
            <div className="skill-list" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {skills.map(skill => (
                    <span key={skill} className="tag" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
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
                <p style={{ color: 'var(--text-secondary)' }}>A comprehensive list of technologies and tools I work with.</p>
            </div>
            
            <div className="skills-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
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
