import { skills } from "../../data/skills";

const SkillCard = ({ name, icon }) => {
    return (
        <div className="skill-card-v2" style={{ 
            width: '140px',
            height: '140px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-glass)',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-4)',
            transition: 'all var(--transition-base)',
            cursor: 'default',
            margin: '0 var(--space-4)',
            boxShadow: 'var(--shadow-md)'
        }}>
            <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                    src={icon} 
                    alt={name} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${name}&background=16f2b3&color=fff`}
                />
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>{name}</span>
        </div>
    );
};

const Skills = () => {
    const allSkills = skills.flatMap(category => category.skills.map(skill => {
        // Map skill name to devicon slug
        let slug = skill.toLowerCase().replace('.', '').replace(' ', '');
        if (slug === 'javascript') slug = 'javascript';
        if (slug === 'html') slug = 'html5';
        if (slug === 'css') slug = 'css3';
        if (slug === 'expressjs') slug = 'express';
        if (slug === 'nodejs') slug = 'nodejs';
        if (slug === 'mongodb') slug = 'mongodb';
        if (slug === 'mysql') slug = 'mysql';
        if (slug === 'github') slug = 'github';
        if (slug === 'python') slug = 'python';
        if (slug === 'java') slug = 'java';
        if (slug === 'react') slug = 'react';
        if (slug === 'c') slug = 'c';
        if (slug === 'supabase') slug = 'supabase';
        if (slug === 'pandas') slug = 'pandas';
        if (slug === 'numpy') slug = 'numpy';
        if (slug === 'git') slug = 'git';
        if (slug === 'aws') slug = 'amazonwebservices';
        
        const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;
        return { name: skill, icon: iconUrl };
    }));

    return (
        <section className="skills" id="skills">
            {/* Header with Skills Label */}
            <div className="section-header-v2 reveal" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                position: 'relative',
                marginBottom: 'var(--space-20)'
            }}>
                <div style={{ 
                    position: 'absolute', 
                    left: '0', 
                    right: '0', 
                    height: '1px', 
                    background: 'linear-gradient(90deg, transparent, var(--border-glass), transparent)',
                    zIndex: 0
                }}></div>
                <div style={{ 
                    background: '#1b1b3a', 
                    padding: '12px 48px', 
                    borderRadius: 'var(--radius-lg)', 
                    border: '1px solid var(--accent-violet)',
                    zIndex: 1,
                    boxShadow: '0 0 30px rgba(124, 58, 237, 0.4)'
                }}>
                    <h2 style={{ fontSize: '2rem', color: 'white', margin: 0, letterSpacing: '0.05em' }}>Skills</h2>
                </div>
            </div>
            
            <div className="skills-marquee-container reveal" style={{ 
                overflow: 'hidden', 
                padding: 'var(--space-12) 0',
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}>
                <div className="marquee-v2" style={{ 
                    display: 'flex', 
                    animation: 'marquee-v2 60s linear infinite',
                    width: 'max-content'
                }}>
                    {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
                        <SkillCard key={index} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee-v2 {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .skill-card-v2:hover {
                    transform: translateY(-8px) scale(1.05);
                    border-color: var(--accent);
                    box-shadow: 0 10px 30px -10px var(--accent-glow);
                }
            ` }} />
        </section>
    );
};

export default Skills;
