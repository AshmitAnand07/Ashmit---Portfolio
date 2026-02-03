import Button from "../common/Button";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-details">
                <div className="detail-block">
                    <h4>Problem</h4>
                    <p>{project.problem}</p>
                </div>
                <div className="detail-block">
                    <h4>Solution</h4>
                    <p>{project.solution}</p>
                </div>
                <div className="detail-block">
                    <h4>Impact</h4>
                    <p>{project.impact}</p>
                </div>
                <div className="detail-block">
                    <h4>Tech Stack</h4>
                    <p>{project.techStack.join(", ")}</p>
                </div>
            </div>
            <div className="project-actions">
                <a href={project.githubLink || project.demoLink} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-project">View Project</Button>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
