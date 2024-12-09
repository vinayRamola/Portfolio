import React from 'react';
import Edu_Card from '../../Background/Edu_Card';

const educationProjectsData = [
    {
        title: "College ERP",
        description: "A full-stack application designed to revolutionize college management by automating administrative tasks and improving overall efficiency. The platform provides secure role-based access to students, faculty, and administrators through tailored dashboards. Key features include user role management, data visualization, and CRUD operations for handling user data, courses, and schedules. Built with React.js for a dynamic front-end, Node.js for back-end operations, and MongoDB for a scalable database solution. The application ensures secure access with JWT authentication, enhancing the platform's reliability and usability.",
        githubLink: "https://github.com/vinayRamola/ERP-System",
        liveLink: "https://example.com/college-erp",
        image: "https://path/to/your/image.jpg", // Replace with the actual image URL
        year: "2024",
        detail: "Developed to handle complex college management processes.",
        techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"]
    },
    {
        title: "Chord DHT",
        description: "An advanced implementation of a distributed hash table (DHT) designed for decentralized data storage and retrieval in peer-to-peer networks. This project, built using C++, leverages SHA-1 hashing for efficient data management and routing. Key features include dynamic ring stabilization, finger table implementation for fast lookups, and multi-threaded communication protocols for seamless operation in a distributed environment. The system simulates real-world use cases, such as file sharing and content distribution, while addressing challenges like scalability and fault tolerance.",
        year: "2024",
        githubLink: "https://github.com/vinayRamola/Chord_DHT",
        liveLink: "https://example.com/chord-dht",
        image: "https://path/to/your/image.jpg", // Replace with the actual image URL
        detail: "Implemented robust DHT features with multi-threaded communication.",
        techStack: ["C++", "SHA-1", "P2P Networking", "Multithreading"]
    },
    {
        title: "Learning Management System (LMS)",
        description: "A modern Learning Management System (LMS) developed to facilitate seamless course management for educational institutions. Built with the MERN stack, the platform offers an intuitive user experience, enabling faculty to manage courses and students to access personalized dashboards for tracking progress. It includes secure JWT authentication for data protection, integrated Razor Pay for smooth payment processing, and responsive design for access across devices. The platform enhances the educational experience by simplifying administration and enabling secure financial transactions.",
        githubLink: "https://github.com/vinayRamola/Learning-Management-System",
        liveLink: "https://example.com/lms",
        image: "https://path/to/your/image.jpg", // Replace with the actual image URL
        year: "2023",
        degree: "Learning Management System",
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Razor Pay"]
    },
    {
        title: "Job Seeking Platform",
        description: "A comprehensive job portal designed to connect job seekers and employers in a seamless manner. The platform allows job seekers to create accounts, search for jobs, and track applications, while employers can post job openings, review applications, and manage candidates. Built with the MERN stack, the platform features a robust back-end powered by Node.js and Express.js, a scalable database using MongoDB, and a dynamic front-end with React.js. Secure JWT authentication ensures data privacy and access control, making it a reliable and user-friendly platform.",
        githubLink: "https://github.com/vinayRamola/Job-Seeking",
        liveLink: "https://example.com/job-seeking-platform",
        image: "https://path/to/your/image.jpg", // Replace with the actual image URL
        year: "2023",
        degree: "Job Portal Development",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"]
    },
    // Uncomment if needed
    // {
    //     title: "Smart Agriculture & Rural Marketplace System",
    //     description: "A cutting-edge MERN stack platform aimed at transforming agriculture by connecting farmers and buyers through a digital marketplace. The platform integrates AI/ML solutions to tackle critical agricultural challenges, including crop disease detection using CNNs, yield prediction with XGBoost, and supply chain optimization to improve distribution and pricing. Additional features include irrigation optimization with IoT and reinforcement learning, making the platform a comprehensive solution for rural agricultural development.",
    //     githubLink: "https://github.com/username/smart-agriculture",
    //     liveLink: "https://example.com/smart-agriculture",
    //     image: "https://path/to/your/image.jpg", // Replace with the actual image URL
    //     year: "2024",
    //     degree: "Agriculture Technology",
    //     techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "TensorFlow", "XGBoost", "IoT"]
    // }
];


const EducationProjects = () => {
    return (
        <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow border-t-2 my-12">
            <div className="text-2xl my-8">Projects</div>
            <div className="grid justify-items-center grid-flow-row md:grid-cols-2 lg:grid-cols-2 gap-4 px-2 md:px-8">
                {educationProjectsData.map((project, index) => (
                    <Edu_Card 
                        key={index} 
                        data={{
                            title: project.title,
                            year: project.year,
                            degree: project.degree,
                            description: project.description,
                            githubLink: project.githubLink,
                            liveLink: project.liveLink,
                            image: project.image,
                            techStack: project.techStack
                        }} 
                    />
                ))}
            </div>
        </div>
    );
};

export default EducationProjects;
