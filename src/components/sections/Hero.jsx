import Button from "../common/Button";
import SocialIcons from "../common/SocialIcons";
import profileImg from "../../assets/profile.jpg";
import ResumeConfig from "../../config/ResumeConfig";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content reveal active">
                <span className="hero-subtitle">Welcome to my space</span>
                <h1 className="hero-title">
                    Hi, I'm <span className="text-gradient">Ashmit Anand</span>
                </h1>
                <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: 'var(--space-8)', opacity: 0.9 }}>
                    Aspiring AI Engineer | MERN Stack Developer
                </h2>
                <p className="hero-description">
                    I build exceptional digital experiences with modern technologies. 
                    Focused on creating intuitive, performant, and beautiful applications 
                    that solve real-world problems.
                </p>
                <div className="hero-actions">
                    <a href="#projects">
                        <Button className="btn-primary">View Projects</Button>
                    </a>
                    <a href={ResumeConfig.resumeLink} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-secondary">Download CV</Button>
                    </a>
                </div>
                <div style={{ marginTop: 'var(--space-10)' }}>
                    <SocialIcons />
                </div>
            </div>
            <div className="hero-image-container reveal active">
                <div className="hero-glow"></div>
                <img src={profileImg} alt="Ashmit Anand" className="hero-image" />
            </div>
        </section>
    );
};

export default Hero;
