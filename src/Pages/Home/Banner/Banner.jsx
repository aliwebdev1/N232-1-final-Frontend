import React from 'react';
import bannerImage from '../../../assets/images/chair.png'
import landing from '../../../assets/images/landing-bg.png'
import PrimaryButtton from '../../../components/PrimaryButtton/PrimaryButtton';


const Banner = () => {
    return (
        <div style={
            {
                background: `url(${landing})`,
                backgroundSize: 'cover'
            }
        } className="hero py-28 container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse text-left">
                <img src={bannerImage} className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div >
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                    <p className="py-6">Explore seamless healthcare with our Doctors Portal. Effortlessly schedule appointments, access secure medical records, and experience real-time communication. Your well-being, simplified.</p>
                    <PrimaryButtton>Getting Started</PrimaryButtton>
                </div>

            </div>
        </div>
    );
};

export default Banner;