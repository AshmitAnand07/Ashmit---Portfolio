const Footer = () => {
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-section">
            <div className="footer-divider"></div>
            <div className="footer-container">
                <div className="footer-left">
                    <p className="footer-copy">
                        &copy; {new Date().getFullYear()} <span className="footer-name">Ashmit Anand</span>. Built with React & Vite.
                    </p>
                </div>
                <div className="footer-right">
                    <a href="#top" onClick={scrollToTop} className="back-to-top">
                        Back to top <span className="arrow-icon">↑</span>
                    </a>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .footer-section {
                    position: relative;
                    margin-top: var(--space-32);
                    padding-bottom: var(--space-12);
                }

                .footer-divider {
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, 
                        rgba(255, 255, 255, 0) 0%, 
                        rgba(255, 255, 255, 0.05) 50%, 
                        rgba(255, 255, 255, 0) 100%
                    );
                    margin-bottom: var(--space-8);
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 var(--space-6);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .footer-copy {
                    color: rgba(255, 255, 255, 0.5); /* Subtle opacity */
                    font-size: 0.9rem;
                    letter-spacing: 0.02em;
                    margin: 0;
                }

                .footer-name {
                    color: rgba(255, 255, 255, 0.85);
                    font-weight: 600;
                }

                .back-to-top {
                    display: flex;
                    align-items: center;
                    gap: var(--space-2);
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.9rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    padding: var(--space-2) 0;
                }

                .arrow-icon {
                    font-size: 1.1rem;
                    transition: transform 0.3s ease;
                }

                .back-to-top:hover {
                    color: var(--accent);
                }

                .back-to-top:hover .arrow-icon {
                    transform: translateY(-3px);
                }

                @media (max-width: 768px) {
                    .footer-section {
                        margin-top: 32px !important;
                        padding-bottom: 20px !important;
                    }

                    .footer-container {
                        flex-direction: column !important;
                        gap: 12px !important;
                        text-align: center !important;
                    }

                    .footer-copy {
                        font-size: 0.8rem !important;
                    }
                    
                    .back-to-top {
                        font-size: 0.8rem !important;
                    }
                }
            ` }} />
        </footer>
    );
};

export default Footer;
