import React from 'react';
import Banner from '../Banner/Banner';
import FeaturesGalary from '../FeaturesGalary/FeaturesGalary';
import FeaturesServices from '../FeaturesServices/FeaturesServices';
import FeaturesWorldTour from '../FeaturesWorldTour/FeaturesWorldTour';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturesServices></FeaturesServices>
            <FeaturesGalary></FeaturesGalary>
            <FeaturesWorldTour></FeaturesWorldTour>
        </div>
    );
};

export default Home;