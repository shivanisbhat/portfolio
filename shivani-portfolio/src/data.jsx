import ammayiGptImg from "./assets/projects/AuntyGPT.png";
import moodyTravellerImg from "./assets/projects/Moodytraveller.jpg";
import weatherAppImg from "./assets/projects/Weatherapp.png";
import careImg from "./assets/projects/Care.jpeg";
import cyraImg from "./assets/projects/CyRa.jpeg";
// Removed reference to missing ethical hacking certificate
import deloitteCert from "./assets/certificates/Deloitte.jpg";
import skyscannerCert from './assets/certificates/Skyscanner.jpg';
import googleCert from './assets/certificates/GenAIworkshop.jpg';
import LandTLearning from './assets/certificates/LandTLearning.jpg';
import nyayaAiImg from './assets/projects/NyayaAI.png';


export const portfolioData = {
  name: "Shivani Santhosh Kumar Bhat",
  // Coding/profile links
  leetcodeUsername: "shivanisbhat",
  hackerrankUrl: "https://www.hackerrank.com/profile/shivanispg",
  tagline: "Front-End Developer Pivoting to Cybersecurity",
  bio: "I am a B.Tech student passionate about building impactful technology solutions through full-stack development, IoT, and AI-powered applications. I enjoy creating projects that combine software and hardware to solve real-world problems, from smart healthcare and rehabilitation systems to intelligent wearable devices. My experience includes working with React, ESP32, and modern web technologies, along with developing interactive and user-focused applications. I am constantly exploring new technologies, improving my problem-solving skills, and building projects that create meaningful user experiences.",
  // Contact information
  contact: {
    email: "shivanispg@gmail.com",
    phone: "+91 9995637771",
    location: "Kochi, Kerala",
    linkedin: "https://www.linkedin.com/in/shivani-s-bhat",
    github: "https://github.com/shivanisbhat",
    credly: "https://www.credly.com/users/shivani-s-bhat",
  },
  // Skills section
  skills: {
    languages: ["C", "Java", "Python", "JavaScript"],
    frameworks: ["HTML", "CSS", "React", "Angular"],
    databases: ["MySQL"],
    iot: ["Arduino", "ESP32"],
    security: ["Penetration Testing Concepts"],
    soft: ["Problem Solving", "Time Management", "Teamwork", "Leadership", "Adaptability"],
  },
  // Experience section
  experience: [
    {
      role: "Intern – Semiconductor Vertical",
      company: "Quest Global",
      date: "Present",
      description: [
        "Developing a web-based platform for analyzing and visualizing Physical Design (PD) reports used in VLSI workflows.",
        "Built responsive React-based user interfaces to simplify the review and analysis of backend design reports.",
        "Integrated FastAPI services for report upload, data processing, and seamless dashboard visualization.",
        "Designed interactive dashboards and data tables to improve report navigation and user experience.",
        "Collaborated with Physical Design engineers to understand reporting workflows and translate requirements into application features."
      ],
    },
    {
      role: "MERN Full Stack Developer Intern",
      company: "Up-to-Skill",
      date: "Oct 2025 - Feb 2026",
      description: [
        "Developed and customized front-end templates for a Resume Builder platform using React.js, focusing on responsive and user-friendly UI design.",
        "Implemented and enhanced interactive animations and visual effects across multiple resume templates to improve user experience.",
        "Collaborated with the development team to refine template layouts, styling, and overall interface consistency."
      ],
    },
    {
      role: "Front End Web Development Intern",
      company: "Edunet Foundation",
      date: "Aug 2025 - Oct 2025",
      description: [
        "Completed a 6-week AICTE-recognized Front End Web Development internship in collaboration with IBM SkillsBuild.",
        "Built responsive and accessible web interfaces using modern frontend development practices.",
        "Developed and deployed a Dynamic Weather Dashboard with real-time weather, air quality monitoring, and 5-day forecasting using a live Weather API."
      ],
    },
  ],
  
  projects: [
    {
      title: "AMMAYI-GPT",
      description: "A real-time voice web app with React, integrating Google Gemini APIs for conversational logic and audio synthesis.",
      tech: ["React.js", "Gemini-AI"],
      liveUrl: "https://ammayi-gpt.vercel.app/",
      githubUrl: "https://github.com/shivanisbhat",
      imageUrl: ammayiGptImg, 
    },
    {
      title: "NyayaAI (Google Gen AI Hackathon)",
      description: "Group project focused on simplifying legal documents clause-by-clause. I built the entire front end: file upload, extracted-text preview, language selector, and polished UI.",
      tech: ["React.js", "HTML", "CSS"],
      liveUrl: "https://gen-ai-nyaya-ai-1.onrender.com/",
      githubUrl: "https://github.com/shivanisbhat/Gen-Ai-Nyaya-Ai",
      imageUrl: nyayaAiImg,
    },
    {
      title: "Dynamic Weather Dashboard",
      description: "A responsive weather dashboard deployed on Render that shows current conditions and short-term forecast for searched locations.",
      tech: ["React.js", "HTML", "CSS", "OpenWeatherMap API"],
      liveUrl: "https://dynamic-weather-dashboard-lcw3.onrender.com/",
      githubUrl: "https://github.com/shivanisbhat/Dynamic-Weather-Dashboard",
      imageUrl: weatherAppImg,
    },
    {
      title: "MOODY-TRAVELLER",
      description: "A web app that tracks user's moods and suggests personalized travel destinations to enhance emotional well-being.",
      tech: ["HTML", "CSS", "JS", "Gemini-AI"],
      liveUrl: null,
      githubUrl: "https://github.com/shivanisbhat/Moody-Traveler",
      imageUrl: moodyTravellerImg, 
    }
  ],

  featuredProjects: [
    {
      title: "Care:  Rehabilitation System",
      label: "IoT Rehabilitation System",
      description:
        "Designed and implemented an ESP32-based IoT rehabilitation module for a smart finger exoskeleton system. Developed real-time sensor monitoring and automated physiotherapy repetition detection, enabling wireless communication with a Flutter mobile application and Firebase-backed rehabilitation data tracking.",
      summary:
        "I developed the IoT and embedded systems module, handling real-time sensor monitoring repetition tracking and ESP32 communication.",
      metrics: ["Real-time repetition tracking", "ESP32 integration", "Mobile connectivity"],
      tech: ["ESP32","Arduino IDE","Sensor Interfacing"],
      githubUrl: "https://github.com/shivanisbhat/Care",
      imageUrl: careImg,
    },
    {
      title: "CyRa",
      label: "AI-Powered Wearable Menstrual Health Tracker",
      description:
        "Developed an IoT-enabled wearable menstrual health tracking system that combines real-time biometric sensing and machine learning for accurate menstrual cycle prediction. Integrated ESP32-based hardware with temperature, heart rate, and motion sensors to collect physiological data and transmit it to a cloud-connected platform for intelligent analysis and personalized health insights.",
      summary:
        "I worked on the hardware, sensor interfacing, firmware development, and overall IoT system architecture. I implemented website frontend to display cycle predictions and health insights.",
      metrics: ["AI-based cycle prediction","Real-time health monitoring", "ESP32-based wearable design"],
      tech: ["ESP32", "Arduino IDE", "React.js", "3D Modelling"],
      githubUrl: "https://github.com/Laasya-2279/Cyra",
      imageUrl: cyraImg,
    },
  ],
  
  education: [
    {
      institution: "MUTHOOT INSTITUTE OF TECHNOLOGY AND SCIENCE",
      degree: "Bachelor of Technology, Computer Science & Engineering",
      grade: "CGPA: 8.09",
      year: "2027",
    },
    {
      institution: "BHAVANS VIDYA MANDIR GIRINAGAR",
      degree: "Senior Secondary",
      grade: "Percentage: 84.21%",
      year: "2023",
    },
     {
      institution: "BHAVANS VIDYA MANDIR GIRINAGAR",
      degree: "Secondary",
      grade: "Percentage: 79%",
      year: "2021",
    },
  ],
  
  certifications: [
    {
      title: "Ethical Hacking and Penetration Testing | L&T Learning",
      imageUrl: LandTLearning,
    },
    {
      title: "Deloitte Australia Cyber Job Simulation | Forage",
      imageUrl: deloitteCert,
    },
    {
      title: "Skyscanner Front-End Software Engineering | Forage",
      imageUrl: skyscannerCert, 
    },
    {
      title: "Google Cloud Generative AI Fundamentals | Google Cloud & Hack2Skill",
      imageUrl: googleCert, 
    },
  ],
};
