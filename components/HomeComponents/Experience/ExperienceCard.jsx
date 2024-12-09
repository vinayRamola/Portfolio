import CardLayout from "../../Common/CardLayout";

const ExperienceCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="bg-MidNightBlack text-Snow px-4 py-6 rounded-lg shadow-md flex flex-col justify-between h-[380px] w-full">
                {/* Icon and Title */}
                <div className="flex items-center space-x-4">
                    <div className="text-2xl">{data.icon}</div> {/* Larger Icon */}
                    <div className="text-xl font-semibold">{data.title}</div> {/* Larger Title */}
                </div>

                {/* Duration */}
                <div className="text-base text-LightGray italic mt-2">
                    {data.duration.start} - {data.duration.end}
                </div>

                {/* Contributions */}
                <ul className="text-base text-LightGray list-disc list-inside space-y-2 mt-4">
                    {data.contributions.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>

                {/* Tech Stack */}
                <div className="text-base text-LightGray flex flex-wrap justify-center items-center gap-2 mt-6">
                    {data.techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="px-4 py-1 bg-MidNightBlack border border-LightGray text-Snow rounded-full text-sm"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </CardLayout>
    );
};

export default ExperienceCard;
