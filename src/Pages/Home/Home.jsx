import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import DentalCare from './DentalCare/DentalCare';
import Appointment from './Appointment/Appointment';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appointment></Appointment>

        </div>
    );
};

export default Home;