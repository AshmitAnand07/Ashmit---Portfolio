import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

import useScrollReveal from "../hooks/useScrollReveal";

const Home = () => {
    useScrollReveal();

    return (
        <div className="home-page">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
};

export default Home;
