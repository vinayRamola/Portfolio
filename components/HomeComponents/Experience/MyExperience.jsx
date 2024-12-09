import ExperienceCard from "./ExperienceCard";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const MyExperience = () => {

    // Sample static JSON object with expertise data
    const experienceData = [
        {
            title: "Full Stack Web Developer Intern",
            description: "Contributed to the development of an AI-powered platform transforming commercial shipping at Integrated Maritime Exchange (IME). The platform streamlined operations, lowered emissions, and improved operational efficiency.",
            icon: "🚢",
            duration: {
                start: "December 2024",
                end: "Present"
            },
            contributions: [
                "Designed and implemented features for AI-driven shipping analytics.",
                "Optimized backend APIs for faster data processing and reduced latency.",
                "Developed interactive dashboards to provide real-time insights."
            ],
            techStack: ["HTML", "CSS", "JavaScript", "PHP", "Tailwind CSS"]
        },
        {
            title: "Freelance Developer",
            description: "Collaborated with Safai Cleaning Services, a Finland-based company, to create a bilingual website in English and Finnish. Enhanced client satisfaction through a responsive and intuitive design.",
            icon: "🧼",
            duration: {
                start: "August 2024",
                end: "September 2024"
            },
            contributions: [
                "Developed a bilingual website to cater to diverse audiences.",
                "Integrated language toggle functionality for seamless transitions.",
                "Enhanced user engagement with a clean, responsive design."
            ],
            techStack: ["HTML", "CSS", "JavaScript", "React.js"]
        }
    ];

    return (
        <>
            <div className="px-2 md:px-8 my-8 text-2xl font-bold text-Snow">Experience</div>
            <div className="grid justify-items-center grid-flow-row md:grid-cols-2 lg:grid-cols-2 grid-rows-auto gap-4 px-2 md:px-8">
                {
                    experienceData.length === 0 ? 
                        [1, 2, 3, 4, 5, 6].map((_, index) => (
                            <ParagraphSkeleton key={index} className={"space-y-2 p-8"} />
                        ))
                        :
                        experienceData.map((data, key) => (
                            <ExperienceCard key={key} data={data} />
                        ))
                }
            </div>
        </>
    );
}

export default MyExperience;
