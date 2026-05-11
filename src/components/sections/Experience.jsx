import { useEffect, useRef } from "react";
import { experience } from "../../data/experience";

const TimelineItem = ({ item, index }) => {
    // Alternate left/right based on index
    const isLeft = index % 2 === 0;

    return (
        <div className={`timeline-item ${isLeft ? 'left' : 'right'} reveal`} style={{ '--delay': `${index * 0.2}s` }}>
            {/* The dot on the timeline */}
            <div className="timeline-dot"></div>

            {/* The card content */}
            <div className="timeline-content">
                <div className="timeline-card">
                    <span className="timeline-date">{item.duration}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-org">{item.organization}</p>
                    {item.description && <p className="timeline-desc">{item.description}</p>}
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        if (sectionRef.current) {
            const elements = sectionRef.current.querySelectorAll('.reveal');
            elements.forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="education-section" id="education" ref={sectionRef}>
            <div className="section-header-v2 reveal">
                <div className="header-line"></div>
                <div className="header-pill">
                    <h2>Education</h2>
                </div>
            </div>

            <div className="timeline-container">
                {/* The vertical line */}
                <div className="timeline-line reveal"></div>

                {experience.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                ))}
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .education-section {
                    padding: var(--space-16) var(--space-6);
                    max-width: 1000px;
                    margin: 0 auto;
                    position: relative;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: var(--space-24);
                }

                /* --- Timeline Container --- */
                .timeline-container {
                    position: relative;
                    width: 100%;
                    padding: var(--space-10) 0;
                }

                /* --- Timeline Line --- */
                .timeline-line {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 50%;
                    width: 2px;
                    background: linear-gradient(to bottom, transparent, var(--accent), transparent);
                    transform: translateX(-50%);
                    transform-origin: top;
                    /* Animation setup */
                    transform: translateX(-50%) scaleY(0);
                    transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .timeline-line.active {
                    transform: translateX(-50%) scaleY(1);
                }

                /* --- Timeline Item --- */
                .timeline-item {
                    position: relative;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: var(--space-16);
                }

                .timeline-item:last-child {
                    margin-bottom: 0;
                }

                /* Item Animation States */
                .timeline-item {
                    opacity: 0;
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    transition-delay: var(--delay);
                }

                .timeline-item.left {
                    transform: translateX(-30px);
                }

                .timeline-item.right {
                    transform: translateX(30px);
                }

                .timeline-item.active {
                    opacity: 1;
                    transform: translateX(0);
                }

                /* Directional logic */
                .timeline-item.left {
                    flex-direction: row-reverse;
                }

                /* The exact width for the sides so they meet exactly in the middle */
                .timeline-content {
                    width: calc(50% - 40px);
                }

                .timeline-item.left .timeline-content {
                    text-align: right;
                }

                /* --- Timeline Dot --- */
                .timeline-dot {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: var(--bg-dark);
                    border: 3px solid var(--accent);
                    z-index: 2;
                    box-shadow: 0 0 15px rgba(22, 242, 179, 0.3);
                    
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    transition-delay: calc(var(--delay) + 0.3s);
                }

                .timeline-item.active .timeline-dot {
                    transform: translate(-50%, -50%) scale(1);
                }

                /* --- Timeline Card --- */
                .timeline-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: var(--radius-xl);
                    padding: var(--space-6) var(--space-8);
                    position: relative;
                    transition: all 0.3s ease;
                    cursor: default;
                }

                .timeline-item.left .timeline-card {
                    /* On the left side, the subtle gradient should fade towards the left */
                    background: linear-gradient(to left, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0));
                }

                .timeline-item.right .timeline-card {
                    background: linear-gradient(to right, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0));
                }

                .timeline-card:hover {
                    transform: translateY(-3px);
                    border-color: rgba(22, 242, 179, 0.2);
                    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.5);
                }

                /* --- Card Content Details --- */
                .timeline-date {
                    display: inline-block;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: var(--accent);
                    margin-bottom: var(--space-2);
                    letter-spacing: 0.05em;
                }

                .timeline-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: var(--space-1);
                    text-transform: uppercase;
                    letter-spacing: 0.02em;
                }

                .timeline-org {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                    margin-bottom: var(--space-3);
                }

                .timeline-desc {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    line-height: 1.6;
                }

                /* --- Mobile Responsiveness --- */
                @media (max-width: 768px) {
                    .education-section {
                        padding: 40px 16px !important;
                    }

                    .section-header {
                        margin-bottom: 24px !important;
                    }

                    .timeline-container {
                        padding: 10px 0 !important;
                    }

                    .timeline-line {
                        left: 15px !important;
                        transform: none;
                        transform-origin: top left;
                    }
                    
                    .timeline-line.active {
                        transform: scaleY(1);
                    }

                    .timeline-item {
                        flex-direction: row !important;
                        justify-content: flex-start;
                        margin-bottom: 20px !important;
                    }

                    .timeline-dot {
                        left: 15px !important;
                        transform: translate(-50%, -50%) scale(0);
                    }

                    .timeline-item.active .timeline-dot {
                        transform: translate(-50%, -50%) scale(1);
                    }

                    .timeline-content {
                        width: calc(100% - 40px) !important;
                        margin-left: 40px !important;
                    }

                    .timeline-item.left .timeline-content,
                    .timeline-item.right .timeline-content {
                        text-align: left !important;
                    }

                    .timeline-card {
                        padding: 16px !important;
                    }

                    .timeline-item.left .timeline-card,
                    .timeline-item.right .timeline-card {
                        background: linear-gradient(to right, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0));
                    }

                    .timeline-title {
                        font-size: 1.1rem !important;
                    }

                    .timeline-org {
                        font-size: 0.9rem !important;
                    }

                    /* All items slide from right on mobile */
                    .timeline-item.left {
                        transform: translateX(20px);
                    }
                    .timeline-item.active {
                        transform: translateX(0);
                    }
                }
            ` }} />
        </section>
    );
};

export default Experience;

