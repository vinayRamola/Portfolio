import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import { Link } from 'react-scroll';

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center py-6 w-full h-full bg-gradient-to-t from-MidNightBlack">
            
                
            

                {/* About Me Section */}
                <div className="mt-8 text-center text-Snow px-4 md:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-Green">Vinay Chand Ramola</h2>
                    <p className="text-sm sm:text-base mt-4 w-full mx-auto text-LightGray">
                        I'm a passionate web developer with expertise in full-stack development and a deep interest in technology. 
                        I enjoy solving real-world problems through innovative web applications and continually strive to enhance my skills. 
                        With experience in building secure and scalable solutions, I aim to contribute to projects that make a positive impact.
                    </p>
                    <p className="text-xs sm:text-sm mt-4 text-LightGray italic">
                        “Coding is not just about writing code, it's about creating solutions that simplify people's lives.”
                    </p>
                </div>

            </div>
        </BannerLayout>
    );
}

export default Banner;
