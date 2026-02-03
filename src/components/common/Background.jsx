import { useEffect, useState } from 'react';

const Background = () => {
    return (
        <div className="animated-background">
            <svg
                viewBox="0 0 1440 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <g className="neon-waves">
                    <path
                        d="M0 600C150 500 300 750 450 650C600 550 750 300 900 400C1050 500 1200 800 1440 600"
                        stroke="url(#grad1)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="wave-path delay-1"
                    />
                    <path
                        d="M0 400C200 550 400 300 600 450C800 600 1000 850 1200 750C1300 700 1400 500 1440 450"
                        stroke="url(#grad2)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="wave-path delay-2"
                    />
                    <path
                        d="M0 800C250 700 500 950 750 850C1000 750 1250 500 1440 650"
                        stroke="url(#grad3)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="wave-path delay-3"
                    />
                </g>
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7000ff" stopOpacity="0" />
                        <stop offset="50%" stopColor="#7000ff" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#7000ff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
                        <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff00de" stopOpacity="0" />
                        <stop offset="50%" stopColor="#ff00de" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#ff00de" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default Background;
