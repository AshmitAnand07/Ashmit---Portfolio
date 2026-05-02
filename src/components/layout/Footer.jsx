const Footer = () => {
    return (
        <footer className="footer" style={{ padding: 'var(--space-12) 0', borderTop: '1px solid var(--border-glass)', marginTop: 'var(--space-20)' }}>
            <div className="nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    &copy; {new Date().getFullYear()} <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Ashmit Anand</span>. Built with React & Vite.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
                    <a href="#home" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }} className="hover:text-white transition-colors">Back to top</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
