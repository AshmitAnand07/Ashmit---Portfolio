import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="section-header reveal">
                <h2 className="section-title">Featured Projects</h2>
                <p style={{ color: 'var(--text-secondary)' }}>A selection of my recent work in web development and AI.</p>
            </div>
            
            <div className="projects-grid reveal">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
