export const projects = [
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
        title: "NeuraMed",
        subtitle: "Smart Medicine Management & Redistribution",
        category: "MERN Stack",
        description: "Full-stack platform to track medicines, monitor expiry, and send reminders (reducing waste by ~40%).",
        points: [
            "Developed a redistribution system for donating unused medicines to NGOs and individuals.",
            "Designed a responsive UI with real-time duplicate-purchase detection.",
            "Implemented scalable backend with MongoDB schemas and REST APIs."
        ],
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
        githubLink: "https://github.com/AshmitAnand07/NeuraMed",
        demoLink: "https://medicare-one-delta.vercel.app/",
        featured: true
    }
];

