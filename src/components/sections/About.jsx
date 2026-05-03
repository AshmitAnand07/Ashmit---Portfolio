const About = () => {
    return (
        <>
        <section className="about" id="about">
            <div className="section-header-v2 reveal">
                <div className="header-line"></div>
                <div className="header-pill">
                    <h2>About Me</h2>
                </div>
            </div>
            
            <div className="about-grid reveal">
                {/* Left Side: Bio & Mission */}
                <div className="about-bio-container">
                    <h3 className="about-greeting">
                        Driven by <span className="text-gradient">Curiosity</span>, <br />
                        Guided by <span className="text-gradient-secondary">Innovation</span>.
                    </h3>
                    
                    <div className="about-bio-text">
                        <p>
                            I am a software developer with a relentless drive to solve complex problems at the intersection of 
                            <span className="highlight-teal"> AI Research</span> and <span className="highlight-pink">Full-Stack Engineering</span>. 
                            My approach combines rigorous technical analysis with a passion for building intuitive digital experiences.
                        </p>
                        <p>
                            I thrive in collaborative environments where I can leverage my skills in scalable architecture 
                            and data-driven solutions. Whether it's optimizing an algorithm or architecting a modern web application, 
                            my focus remains on creating high-impact, practical outcomes that push technological boundaries.
                        </p>
                    </div>
                </div>

                {/* Right Side: Focus Cards */}
                <div className="about-cards-container">
                    <div className="card about-focus-card">
                        <div className="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <h4>Robust Systems</h4>
                        <p>Building resilient, scalable backends and secure architectures that stand the test of time.</p>
                    </div>

                    <div className="card about-focus-card">
                        <div className="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                        </div>
                        <h4>AI Integration</h4>
                        <p>Bridging complex machine learning models with accessible, user-centric interfaces.</p>
                    </div>

                    <div className="card about-focus-card">
                        <div className="card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <h4>Team Synergy</h4>
                        <p>A firm believer in collaborative growth, knowledge sharing, and agile methodologies.</p>
                    </div>
                </div>
            </div>
        </section>

            <style dangerouslySetInnerHTML={{ __html: `
                .about-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: var(--space-12);
                    align-items: center;
                    margin-top: var(--space-4);
                }

                .about-greeting {
                    font-size: 2.8rem;
                    line-height: 1.2;
                    margin-bottom: var(--space-8);
                    font-weight: 800;
                    letter-spacing: -0.02em;
                }

                .about-bio-text {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-6);
                }

                .about-bio-text p {
                    font-size: 1.15rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                }

                .highlight-teal {
                    color: var(--accent);
                    font-weight: 600;
                }

                .highlight-pink {
                    color: var(--accent-secondary);
                    font-weight: 600;
                }

                .about-cards-container {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-6);
                }

                .about-focus-card {
                    padding: var(--space-6) !important;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-3);
                    transition: var(--transition-base);
                }

                .about-focus-card:hover {
                    transform: translateX(8px);
                    background: var(--bg-glass-hover);
                }

                .card-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: var(--radius-md);
                    background: rgba(22, 242, 179, 0.1);
                    color: var(--accent);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: var(--space-1);
                }

                .about-focus-card h4 {
                    font-size: 1.1rem;
                    color: var(--text-primary);
                    margin: 0;
                }

                .about-focus-card p {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    line-height: 1.5;
                    margin: 0;
                }

                @media (max-width: 1024px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-10);
                    }
                    .about-greeting {
                        font-size: 2.2rem;
                    }
                }

                @media (max-width: 768px) {
                    .about {
                        padding: 60px 20px !important;
                    }
                    .about-greeting {
                        font-size: 1.8rem;
                        text-align: center;
                    }
                    .about-bio-text p {
                        font-size: 1rem;
                        text-align: center;
                    }
                    .about-focus-card:hover {
                        transform: translateY(-5px);
                    }
                }
            ` }} />
        </>
    );
};

export default About;

