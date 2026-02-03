import Button from "../common/Button";
import SocialIcons from "../common/SocialIcons";
import profileImg from "../../assets/profile.jpg";
import ResumeConfig from "../../config/ResumeConfig";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-name reveal delay-100">Ashmit Anand</h1>
                    <h2 className="hero-title reveal delay-200">Aspiring AI Engineer | MERN Stack Full Stack Developer</h2>
                    <p className="hero-description reveal delay-300">
                        I build exceptional digital experiences with modern technologies.
                        Focused on creating intuitive, performant, and beautiful web applications.
                    </p>
                    <div className="hero-actions reveal delay-400">
                        <a href={ResumeConfig.resumeLink} target="_blank" rel="noopener noreferrer">
                            <Button className="btn-primary">Download CV</Button>
                        </a>
                        <SocialIcons />
                    </div>
                </div>
                <div className="hero-image-container reveal delay-500">
                    <div className="hero-glow"></div>
                    <img src={profileImg} alt="Ashmit Anand" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
