const Background = () => {
    return (
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                overflow: 'hidden',
            }}
        >
            <div 
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '5%',
                    width: '45%',
                    height: '45%',
                    background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    borderRadius: '50%',
                    opacity: 0.6
                }}
            ></div>
            <div 
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '-5%',
                    width: '55%',
                    height: '55%',
                    background: 'radial-gradient(circle, var(--violet-glow) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    borderRadius: '50%',
                    opacity: 0.6
                }}
            ></div>
            <div 
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '40%',
                    width: '30%',
                    height: '30%',
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    borderRadius: '50%',
                }}
            ></div>
        </div>
    );
};

export default Background;
