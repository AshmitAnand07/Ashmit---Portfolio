import { experience } from "../../data/experience";

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="section-header reveal">
                <h2 className="section-title">Education & Experience</h2>
                <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto' }}></div>
            </div>
            
            <div className="experience-list reveal" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                {experience.map((exp, index) => (
                    <div key={index} className="card" style={{ position: 'relative', paddingLeft: 'var(--space-12)' }}>
                        <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '4px', background: 'var(--accent)', borderRadius: 'var(--radius-full)' }}></div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>{exp.title}</h3>
                        <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: 'var(--space-2)' }}>{exp.organization}</p>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>{exp.duration}</p>
                        <p style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
