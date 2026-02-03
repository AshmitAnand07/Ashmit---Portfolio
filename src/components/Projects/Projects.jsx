import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <SectionTitle title="Projects" />
            <div className="projects-grid reveal">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
