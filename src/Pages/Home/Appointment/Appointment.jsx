import React from 'react';
import dorctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButtton from '../../../components/PrimaryButtton/PrimaryButtton';

const Appointment = () => {
    return (
        <section className='mt-32' style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero " >
                <div className="hero  container mx-auto">
                    <div className="p-0 hero-content flex-col lg:flex-row">
                        <img src={dorctor} className="-mt-36 hiden md:block  lg:w-1/2 rounded-lg" />
                        <div className='text-left '>
                            <h5 className='text-secondary mb-3'>Appointment</h5>
                            <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryButtton>GET STARTED</PrimaryButtton>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Appointment;