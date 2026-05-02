const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="section-header reveal">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}>{subtitle}</p>}
            <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: 'var(--space-4) auto 0' }}></div>
        </div>
    );
};

export default SectionTitle;
