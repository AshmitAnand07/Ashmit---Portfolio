const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="section-header reveal">
                    <h2 className="section-title">About Me</h2>
                </div>
                
                <div className="about-content reveal" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: 'var(--space-8)', fontWeight: '600' }}>
                        I am a problem-driven developer with a strong interest in <span className="text-gradient">AI</span> and
                        <span className="text-gradient"> full-stack development</span>.
                    </p>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        I enjoy building scalable solutions, exploring new technologies, and diving deep into research to solve unfamiliar challenges. 
                        I collaborate effectively in team environments and focus on creating practical, impact-driven outcomes.
                        My goal is to bridge the gap between complex algorithms and intuitive user experiences.
                    </p>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 768px) {
                    .about {
                        padding: 40px 16px !important;
                    }
                    .about-content p:first-child {
                        font-size: 1.1rem !important;
                        margin-bottom: 24px !important;
                    }
                    .section-header {
                        margin-bottom: 32px !important;
                    }
                }
            ` }} />
        </>
    );
};

export default About;
