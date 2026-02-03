import SectionTitle from "../common/SectionTitle";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <SectionTitle title="Skills" />
            <div className="skills-grid reveal">
                {skills.map((item) => (
                    <SkillCard
                        key={item.category}
                        title={item.category}
                        skills={item.skills}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
