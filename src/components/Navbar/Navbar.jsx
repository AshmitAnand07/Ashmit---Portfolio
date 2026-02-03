import { useState } from "react";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleScroll = (id) => {
        setActiveLink(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">Portfolio.</div>
            <ul className="nav-links">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                    <li
                        key={item}
                        className={activeLink === item ? 'active' : ''}
                        onClick={() => handleScroll(item)}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
