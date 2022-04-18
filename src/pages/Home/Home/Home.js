import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ServiceHome from '../Banner/ServiceHome/ServiceHome';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <AboutMe></AboutMe>

        </div>
    );
};

export default Home;