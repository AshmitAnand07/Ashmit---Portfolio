import SectionTitle from "../common/SectionTitle";

const About = () => {
    return (
        <section className="about" id="about">
            <SectionTitle title="About Me" />
            <div className="about-content reveal">
                <p>
                    I am a problem-driven developer with a strong interest in AI and
                    full-stack development. I enjoy building scalable solutions, exploring
                    new technologies, and diving deep into research to solve unfamiliar
                    challenges. I collaborate effectively in team environments and focus
                    on creating practical, impact-driven outcomes.
                </p>
            </div>
        </section>
    );
};

export default About;
