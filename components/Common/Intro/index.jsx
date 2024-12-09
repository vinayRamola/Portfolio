import Link from 'next/link';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import Contact from './Contact';
import Download from './Download';
import Tools from './Tools';
import CodingProfile from './CodingProfile';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '../../../constants/constants';
// import Osama from '../../../public/images/osama.jpg';

const Intro = () => {
  return (
    <>
      {/* Header - Fixed at Top */}
      <div className="header absolute top-0 left-0 right-0 z-50 bg-MidNightBlack backdrop-blur-sm h-48 flex flex-col items-center justify-center px-4 gap-y-4">
        {/* <Image className="w-20 h-20 rounded-full" src="" alt="profile picture" /> */}
        <div className="flex flex-col items-center justify-center mt-4">
          <span className="text-gray-300 text-base font-bold">{NAME}</span>
          <span className="text-sm text-LightGray text-center mt-2">{DESIGNATION}</span>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="content flex flex-col space-y-6 divide-y divide-white px-4 pt-48 overflow-y-scroll z-20">
        <CodingProfile />
        <Tools />
        <Download icon={<FaDownload />} />
      </div>

      {/* Footer - Fixed at Bottom */}
      <div className="footer absolute bottom-0 left-0 right-0 z-50 h-16 flex justify-center items-center space-x-6 bg-MidNightBlack text-Snow">
  {/* GitHub */}
    <Link href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub">
      <FaGithub />
    </Link>

    {/* LinkedIn */}
    <Link href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn">
      <FaLinkedin />
    </Link>

    {/* Email */}
    <Link href={`mailto:${SOCIAL_LINKS.EMAIL}`} aria-label="Email">
      <FaEnvelope />
    </Link>

    {/* Phone */}
    <Link href={`tel:${SOCIAL_LINKS.PHONE}`} aria-label="Phone">
      <FaPhoneAlt />
    </Link>
  </div>

    </>
  );
};

export default Intro;
