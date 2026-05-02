import Button from "../common/Button";
import SocialIcons from "../common/SocialIcons";
import profileImg from "../../assets/profile.jpg";
import ResumeConfig from "../../config/ResumeConfig";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content reveal">
                <span className="hero-subtitle">Software Developer</span>
                <h1>
                    Hello, <br />
                    I am <span className="text-gradient">Ashmit Anand</span>
                </h1>
                <p className="hero-description">
                    I build exceptional and accessible digital experiences for the web. 
                    Focused on creating <span className="text-gradient-secondary">impactful solutions</span> with modern technologies.
                </p>
                
                <div className="hero-actions">
                    <a href="#contact" className="btn btn-primary">
                        Contact Me
                    </a>
                    <a href="/resume.pdf" download="Ashmit_Anand_Resume.pdf" className="btn btn-secondary">
                        Download CV
                    </a>
                </div>
            </div>

            <div className="hero-image-container reveal">
                <div className="hero-glow"></div>
                <img 
                    src={profileImg} 
                    alt="Ashmit Anand" 
                    className="hero-image"
                />
            </div>
        </section>
    );
};

export default Hero;
