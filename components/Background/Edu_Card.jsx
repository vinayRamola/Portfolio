import React from 'react';
import CardLayout from '../Common/CardLayout';

const Edu_Card = ({ data }) => {
    return (
        <CardLayout className="keepItEmpty">
            <div className="bg-MidNightBlack text-Snow px-4 py-6 rounded-lg shadow-md flex flex-col justify-between h-fit w-full">
                {/* Image Section */}
                <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-60 transition-all duration-300"
                     style={{ backgroundImage: `url(${data.image})` }}>
                </div>
                
                {/* Card Content */}
                <div className="relative z-10 group-hover:translate-y-[-15px] group-hover:opacity-100 transition-all duration-300 opacity-90">
                    {/* Title and Year */}
                    <div className="flex justify-between">
                        <div className="flex-initial text-[17px] text-Snow font-medium">{data.title}</div>
                        <div className="flex justify-items-center justify-center text-white bg-DeepNightBlack ml-2 w-32 lg:w-28 h-10 text-xs rounded-full py-3 font-normal opacity-50 text-center">
                            {data.year}
                        </div>
                    </div>

                    {/* Degree */}
                    <div className="text-xs text-LightGray font-normal italic mt-1 ">
                        {data.degree}
                    </div>

                    {/* Description */}
                    <div className="text-LightGray text-sm font-lg my-4 ">
                        {data.description}
                    </div>

                    {/* Tech Stack */}
                    <div className="text-sm text-LightGray flex flex-wrap justify-center items-center gap-2 my-4">
                        {data.techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="px-3 py-1 bg-MidNightBlack border border-LightGray text-Snow rounded-full text-xs"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>

                    {/* Additional Links as Buttons */}
                    <div className="mt-4 flex space-x-4 justify-center">
                        <a 
                            href={data.githubLink}
                            target="_blank" 
                            className="text-xs text-white bg-MidNightBlack border-2 border-green-500 hover:text-black hover:bg-green-500 hover:border-green-500 transition-all font-lg px-4 py-2 rounded-md text-center"
                        >
                            GitHub
                        </a>
                        {/* <a 
                            href={data.liveLink} 
                            className="text-xs text-white bg-MidNightBlack border-2 border-green-500 hover:text-black hover:bg-green-500 hover:border-green-500 transition-all px-4 py-2 rounded-md text-center"
                        >
                            Live
                        </a> */}
                    </div>
                </div>
            </div>
        </CardLayout>
    );
}

export default Edu_Card;
