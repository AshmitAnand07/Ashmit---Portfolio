export const projects = [
    {
        title: "Deep-AE",
        subtitle: "Listening to Structural Integrity with AI",
        category: "AI / Machine Learning",
        description: "AI-powered Structural Health Monitoring platform that detects structural anomalies using Acoustic Emission analysis and CNNs.",
        points: [
            "Converts structural audio into AI-readable spectrograms using an advanced audio preprocessing pipeline.",
            "Uses CNN-based deep learning models for accurate crack vs. healthy classification and real-time prediction.",
            "Includes an enterprise-style interactive Streamlit dashboard for waveform visualization and analytics."
        ],
        techStack: ["Python", "PyTorch", "Librosa", "NumPy", "Streamlit", "Torchvision"],
        githubLink: "https://github.com/AshmitAnand07/Deep-AE.git",
        demoLink: "https://deepae.streamlit.app/",
        featured: true
    },
    {
        title: "StayHouse",
        subtitle: "Full-Stack Accommodation Booking Platform",
        category: "Full Stack",
        description: "Built an Airbnb-inspired platform with full CRUD for listings, users, and bookings.",
        points: [
            "Developed REST APIs for booking logic, authentication, and filtering.",
            "Optimized database queries to achieve sub-200ms response time.",
            "Designed a responsive frontend using component-based architecture."
        ],
        techStack: ["Node.js", "Express.js", "MongoDB", "React.js"],
        githubLink: "https://github.com/AshmitAnand07/StayHouse",
        demoLink: "https://stayhouse-1.onrender.com/listings",
        featured: true
    },
    {
        title: "AI YouTube Thumbnail Style Cloner",
        subtitle: "Multi-Agent Thumbnail Generation System",
        category: "AI / Automation",
        description: "Orchestrated an end-to-end AI pipeline to scrape YouTube thumbnails and extract visual style patterns.",
        points: [
            "Built a modular multi-agent workflow for style analysis, prompt generation, and image synthesis.",
            "Created an interactive Streamlit UI for real-time thumbnail generation with A/B variations.",
            "Integrated error handling and fallback mechanisms for reliable execution across API failures."
        ],
        techStack: ["Python", "Streamlit", "OpenAI API", "Google Gemini API", "YouTube Data API"],
        githubLink: "https://github.com/AshmitAnand07/Youtube-Thumbnail-Generator",
        demoLink: "#",
        featured: true
    }
];
