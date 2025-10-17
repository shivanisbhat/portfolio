import ammayiGptImg from "./assets/projects/AuntyGPT.png";
import moodyTravellerImg from "./assets/projects/Moodytraveller.jpg";
import weatherAppImg from "./assets/projects/Weatherapp.png";
// Removed reference to missing ethical hacking certificate
import deloitteCert from "./assets/certificates/Deloitte.jpg";
import skyscannerCert from './assets/certificates/Skyscanner.jpg';
import googleCert from './assets/certificates/GenAIworkshop.jpg';


export const portfolioData = {
  name: "Shivani Santhosh Kumar Bhat",
  tagline: "Front-End Developer Pivoting to Cybersecurity",
  bio: "A detail-oriented Computer Science student with a robust background in Python and front-end web development. My hands-on experience in building and deploying interfaces gives me a unique, developer-first perspective on usability and potential vulnerabilities.",
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
    security: ["Authentication & Authorization", "Penetration Testing Concepts"],
    soft: ["Problem Solving", "Time Management", "Teamwork", "Leadership", "Adaptability"],
  },
  // Experience section
  experience: [
    {
      role: "MERN Full Stack Developer Intern",
      company: "Up-to-Skill",
      date: "Oct 2025 - Jan 2026",
      description: [
        "Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Designed and implemented RESTful APIs for seamless communication between front-end and back-end services.",
        "Collaborated with cross-functional teams to deliver scalable and efficient solutions for client requirements.",
        "Optimized database queries and improved application performance, resulting in faster load times.",
        "Implemented user authentication and authorization features using JWT and bcrypt for enhanced security.",
      ],
    },
    {
      role: "Front End Developer",
      company: "Edunet Foundation",
      date: "Aug 2025 - Sept 2025",
      description: [
        "Worked on developing responsive and user-friendly web interfaces using HTML, CSS, JavaScript.",
        "Collaborated with mentors to apply UI/UX practices, improve performance, and ensure compatibility across browsers.",
        "Gained practical exposure to industry-standard front-end workflows while contributing to real-world project scenarios.",
      ],
    },
  ],
  
  // --- MODIFIED PROJECTS SECTION ---
  projects: [
    {
      title: "Dynamic Weather Dashboard",
      description: "A responsive weather dashboard deployed on Render that shows current conditions and short-term forecast for searched locations.",
      tech: ["React", "HTML", "CSS", "OpenWeatherMap API"],
      liveUrl: "https://dynamic-weather-dashboard-lcw3.onrender.com/",
      githubUrl: "https://github.com/shivanisbhat/Dynamic-Weather-Dashboard",
      imageUrl: weatherAppImg,
    },
    {
      title: "AMMAYI-GPT",
      description: "A real-time voice-first web app with React and WebRTC, integrating Google Gemini APIs for conversational logic and audio synthesis.",
      tech: ["React.js", "Gemini-AI", "WebRTC"],
      liveUrl: "https://ammayi-gpt.vercel.app/",
      githubUrl: "https://github.com/shivanisbhat",
      imageUrl: ammayiGptImg, // Add this line
    },
    {
      title: "MOODY-TRAVELLER",
      description: "A web app that tracks users' moods and suggests personalized travel destinations to enhance emotional well-being.",
      tech: ["HTML", "CSS", "JS", "Gemini-AI"],
      liveUrl: null,
      githubUrl: "https://github.com/shivanisbhat/Moody-Traveler",
      imageUrl: moodyTravellerImg, // Add this line
    },
    {
      title: "Movie Review Website",
      description: "A movie review website using the MERN stack that allows users to read and write reviews, enabling interactive discussions.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      liveUrl: null,
      githubUrl: "https://github.com/shivanisbhat",
      //imageUrl: movieReviewImg, // Add this line
    },
  ],
  
  // Education section
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
  
  // --- MODIFIED CERTIFICATIONS SECTION ---
  // We'll change this from an array of strings to an array of objects
  certifications: [
    {
      title: "Ethical Hacking and Penetration Testing | L&T Learning",
      // Image file not available
      imageUrl: null,
    },
    {
      title: "Deloitte Australia Cyber Job Simulation | Forage",
      imageUrl: deloitteCert,
    },
    {
      title: "Skyscanner Front-End Software Engineering | Forage",
      imageUrl: skyscannerCert, // Add and import this image
    },
    {
      title: "Google Cloud Generative AI Fundamentals | Google Cloud & Hack2Skill",
      imageUrl: googleCert, // Add and import this image
    },
  ],
};