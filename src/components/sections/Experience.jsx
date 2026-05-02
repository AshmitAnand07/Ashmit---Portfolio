import { experience } from "../../data/experience";

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="section-header reveal">
                <h2 className="section-title">Education & Experience</h2>
            </div>
            
            <div className="experience-list reveal" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
                {experience.map((exp, index) => (
                    <div key={index} className="card experience-item" style={{ position: 'relative', paddingLeft: 'var(--space-16)' }}>
                        <div style={{ position: 'absolute', left: 'var(--space-8)', top: 'var(--space-10)', bottom: 'var(--space-10)', width: '2px', background: 'linear-gradient(var(--accent), var(--accent-secondary))', borderRadius: 'var(--radius-full)' }}></div>
                        <h3 style={{ fontSize: '1.6rem', marginBottom: 'var(--space-1)' }}>{exp.title}</h3>
                        <p className="text-gradient" style={{ fontWeight: '700', marginBottom: 'var(--space-2)' }}>{exp.organization}</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 'var(--space-4)', fontStyle: 'italic' }}>{exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
