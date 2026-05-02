import { useEffect, useRef } from "react";
import { projects } from "../../data/projects";

const ProjectCard = ({ project, index }) => {
    // Helper to highlight keywords
    const highlightKeywords = (text) => {
        const keywords = ["AI", "Multi-Agent", "Full-Stack", "Optimized", "Scalable", "MERN Stack", "Real-time", "REST APIs"];
        let highlightedText = text;
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
            highlightedText = highlightedText.replace(regex, `<span class="highlight">${keyword}</span>`);
        });
        return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
    };

    return (
        <div 
            className="project-card reveal" 
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div className="project-card-inner">
                <div className="project-header">
                    <div className="project-meta">
                        <span className="project-category">{project.category}</span>
                        {project.featured && <span className="featured-badge">Featured</span>}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <div className="project-tech">
                    {project.techStack.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                </div>

                <div className="project-content">
                    <p className="project-desc">{highlightKeywords(project.description)}</p>
                    <ul className="project-points">
                        {project.points.map((point, i) => (
                            <li key={i}>
                                <i className="fas fa-chevron-right list-icon"></i>
                                {highlightKeywords(point)}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="project-footer">
                    <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-project btn-github"
                    >
                        <i className="fab fa-github"></i>
                        <span>Code</span>
                    </a>
                    {project.demoLink && project.demoLink !== "#" && (
                        <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-project btn-demo"
                        >
                            <i className="fas fa-external-link-alt"></i>
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
            <div className="card-glow"></div>
        </div>
    );
};

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="section-header reveal">
                <span className="section-subtitle">Portfolio</span>
                <h2 className="section-title">Projects</h2>
                <p className="section-desc">
                    Specialized in building intelligent systems and scalable web platforms.
                </p>
            </div>
            
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .projects-section {
                    padding: var(--space-16) var(--space-6);
                    background: radial-gradient(circle at 10% 90%, rgba(22, 242, 179, 0.03) 0%, transparent 40%),
                                radial-gradient(circle at 90% 10%, rgba(124, 58, 237, 0.03) 0%, transparent 40%);
                }

                .section-subtitle {
                    display: block;
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: var(--accent);
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                    margin-bottom: var(--space-3);
                    text-align: center;
                }

                .section-desc {
                    color: var(--text-secondary);
                    text-align: center;
                    max-width: 600px;
                    margin: 0 auto var(--space-16);
                    font-size: 1.15rem;
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: var(--space-8);
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .project-card {
                    position: relative;
                    border-radius: var(--radius-2xl);
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-glass);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                }

                .project-card:hover {
                    transform: translateY(-12px);
                    border-color: var(--accent);
                    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.6);
                }

                .project-card-inner {
                    padding: var(--space-8);
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    z-index: 2;
                    position: relative;
                }

                .project-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: var(--space-3);
                }

                .project-category {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: var(--accent);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .featured-badge {
                    font-size: 0.65rem;
                    background: rgba(124, 58, 237, 0.1);
                    color: var(--accent-violet);
                    padding: 2px 8px;
                    border-radius: var(--radius-full);
                    border: 1px solid rgba(124, 58, 237, 0.2);
                    font-weight: 700;
                }

                .project-title {
                    font-size: 1.6rem;
                    font-weight: 800;
                    margin-bottom: var(--space-1);
                    color: var(--text-primary);
                    letter-spacing: -0.01em;
                }

                .project-subtitle {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    margin-bottom: var(--space-5);
                    line-height: 1.4;
                }

                .project-tech {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    margin-bottom: var(--space-8);
                }

                .tech-tag {
                    font-size: 0.7rem;
                    font-weight: 600;
                    padding: 3px 10px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid var(--border-glass);
                    border-radius: var(--radius-lg);
                    color: var(--text-secondary);
                    transition: all 0.3s ease;
                }

                .project-card:hover .tech-tag {
                    background: rgba(22, 242, 179, 0.05);
                    border-color: rgba(22, 242, 179, 0.2);
                }

                .project-content {
                    flex-grow: 1;
                    margin-bottom: var(--space-8);
                }

                .project-desc {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--text-secondary);
                    margin-bottom: var(--space-5);
                }

                .project-points {
                    list-style: none;
                    padding: 0;
                }

                .project-points li {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    margin-bottom: var(--space-3);
                    display: flex;
                    gap: var(--space-3);
                    line-height: 1.5;
                }

                .list-icon {
                    color: var(--accent);
                    font-size: 0.7rem;
                    margin-top: 6px;
                    opacity: 0.8;
                }

                .highlight {
                    color: var(--text-primary);
                    font-weight: 700;
                }

                .project-footer {
                    display: flex;
                    gap: var(--space-4);
                }

                .btn-project {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--space-2);
                    padding: var(--space-3) var(--space-4);
                    border-radius: var(--radius-lg);
                    font-size: 0.95rem;
                    font-weight: 700;
                    transition: all 0.3s ease;
                }

                .btn-github {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--border-glass);
                    color: var(--text-primary);
                }

                .btn-github:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: var(--text-secondary);
                }

                .btn-demo {
                    background: var(--gradient-secondary);
                    color: white;
                    box-shadow: 0 10px 20px -10px rgba(236, 72, 153, 0.5);
                }

                .btn-demo:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 25px -10px rgba(236, 72, 153, 0.7);
                }

                .card-glow {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at 50% 50%, rgba(22, 242, 179, 0.05) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    pointer-events: none;
                    z-index: 1;
                }

                .project-card:hover .card-glow {
                    opacity: 1;
                }

                @media (max-width: 768px) {
                    .projects-section {
                        padding: 40px 16px !important;
                    }
                    .section-header {
                        margin-bottom: 24px !important;
                    }
                    .section-desc {
                        margin-bottom: 24px !important;
                        font-size: 1rem !important;
                    }
                    .projects-grid {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                    .project-card-inner {
                        padding: 20px !important;
                    }
                    .project-title {
                        font-size: 1.3rem !important;
                    }
                    .project-desc {
                        font-size: 0.95rem !important;
                        margin-bottom: 12px !important;
                    }
                    .project-points li {
                        font-size: 0.9rem !important;
                        margin-bottom: 8px !important;
                    }
                    .project-footer {
                        flex-direction: column !important;
                        gap: 10px !important;
                    }
                    .btn-project {
                        width: 100% !important;
                        padding: 10px !important;
                    }
                }
            ` }} />
        </section>
    );
};

export default Projects;


