import Button from "../common/Button";

const ProjectCard = ({ project }) => {
    return (
        <div className="card project-card">
            <h3 className="project-title">{project.title}</h3>
            
            <div className="project-details" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div className="detail-block">
                    <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>The Challenge</h4>
                    <p style={{ fontSize: '0.9375rem' }}>{project.problem}</p>
                </div>
                
                <div className="detail-block">
                    <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>Solution</h4>
                    <p style={{ fontSize: '0.9375rem' }}>{project.solution}</p>
                </div>

                <div className="project-tags">
                    {project.techStack.map(tech => (
                        <span key={tech} className="tag">{tech}</span>
                    ))}
                </div>
            </div>

            <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                    GitHub
                </a>
                {project.demoLink && project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
