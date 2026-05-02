import Button from "../common/Button";

const ProjectCard = ({ project }) => {
    return (
        <div className="card project-card">
            <div className="card-header">
                <div className="dot dot-red"></div>
                <div className="dot dot-yellow"></div>
                <div className="dot dot-green"></div>
                <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>project.js</span>
            </div>
            
            <div className="card-body">
                <h3 className="project-title text-gradient">{project.title}</h3>
                
                <div className="project-details" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    <div className="detail-block">
                        <p className="code-syntax">
                            <span className="keyword">const</span> <span className="variable">challenge</span> = <span className="string">"{project.problem}"</span>;
                        </p>
                    </div>
                    
                    <div className="detail-block">
                        <p className="code-syntax">
                            <span className="keyword">const</span> <span className="variable">solution</span> = <span className="string">"{project.solution}"</span>;
                        </p>
                    </div>

                    <div className="detail-block">
                        <p className="code-syntax">
                            <span className="keyword">const</span> <span className="variable">techStack</span> = [<br />
                            &nbsp;&nbsp;{project.techStack.map((tech, i) => (
                                <span key={tech}>
                                    <span className="string">"{tech}"</span>{i < project.techStack.length - 1 ? ', ' : ''}
                                    {i % 2 === 1 ? <br /> : ''}
                                    {i % 2 === 1 && i < project.techStack.length - 1 ? <span>&nbsp;&nbsp;</span> : ''}
                                </span>
                            ))}<br />
                            ];
                        </p>
                    </div>
                </div>

                <div className="project-links" style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        GitHub
                    </a>
                    {project.demoLink && project.demoLink !== "#" && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
