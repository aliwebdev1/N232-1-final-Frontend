import React from 'react';
import PrimaryButtton from '../../../components/PrimaryButtton/PrimaryButtton';
import treatment from '../../../assets/images/treatment.png'
const DentalCare = () => {
    return (
        <div className="hero py-28 container mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="rounded-lg lg:w-1/3 shadow-2xl" />
                <div className='text-left ms-10'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButtton>GET STARTED</PrimaryButtton>
                </div>

            </div>
        </div>
    );
};

export default DentalCare;