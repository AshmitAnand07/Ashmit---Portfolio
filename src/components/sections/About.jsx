const About = () => {
    return (
        <section className="about" id="about">
            <div className="section-header reveal">
                <h2 className="section-title">About Me</h2>
                <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto' }}></div>
            </div>
            
            <div className="about-content reveal" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: 'var(--space-6)', lineHeight: '1.8' }}>
                    I am a problem-driven developer with a strong interest in <span className="text-accent">AI</span> and
                    <span className="text-accent"> full-stack development</span>.
                </p>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    I enjoy building scalable solutions, exploring new technologies, and diving deep into research to solve unfamiliar challenges. 
                    I collaborate effectively in team environments and focus on creating practical, impact-driven outcomes.
                    My goal is to bridge the gap between complex algorithms and intuitive user experiences.
                </p>
            </div>
        </section>
    );
};

export default About;
