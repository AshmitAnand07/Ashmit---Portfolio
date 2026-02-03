import SectionTitle from "../common/SectionTitle";
import ExperienceItem from "./ExperienceItem";
import { experience } from "../../data/experience";

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <SectionTitle title="Education" />
            <div className="experience-list reveal">
                {experience.map((item) => (
                    <ExperienceItem key={item.title} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
