import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';

import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import EducationProjects from '../components/HomeComponents/Projects/Projects';
import MyExperience from '../components/HomeComponents/Experience/MyExperience';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MyExperience />
            {/* <Recommendations />
            <ClientReviews /> */}
            <EducationProjects />
            <Footer />

        </div>
    )
}

export default home