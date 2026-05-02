import { skills } from "../../data/skills";

const SkillCard = ({ name, icon }) => {
    return (
        <div className="card skill-card-v2" style={{ 
            width: '150px',
            height: '160px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-4)',
            margin: '0 var(--space-4)',
            padding: 'var(--space-4)'
        }}>
            <div style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-2)' }}>
                <img 
                    src={icon} 
                    alt={name} 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain',
                        filter: name.toLowerCase() === 'github' ? 'brightness(0) invert(1)' : 'none'
                    }}
                    onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${name}&background=16f2b3&color=fff`}
                />
            </div>
            <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: '600', 
                color: 'var(--text-secondary)',
                textAlign: 'center',
                lineHeight: '1.4',
                width: '100%'
            }}>{name}</span>
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
            <div className="section-header-v2 reveal">
                <div className="header-line"></div>
                <div className="header-pill">
                    <h2>Skills</h2>
                </div>
            </div>
            
            <div className="skills-marquee-container reveal" style={{ 
                overflow: 'hidden', 
                padding: 'var(--space-8) 0',
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
                    transform: translateY(-8px) scale(1.05) !important;
                }
                @media (max-width: 768px) {
                    .skills {
                        padding: 40px 16px !important;
                    }
                    .skills-marquee-container {
                        padding: var(--space-4) 0 !important;
                    }
                    .skill-card-v2 {
                        width: 120px !important;
                        height: 130px !important;
                        margin: 0 8px !important;
                    }
                    .skill-card-v2 div {
                        width: 40px !important;
                        height: 40px !important;
                        margin-bottom: 4px !important;
                    }
                    .skill-card-v2 span {
                        font-size: 0.75rem !important;
                    }
                }
            ` }} />
        </section>
    );
};

export default Skills;
