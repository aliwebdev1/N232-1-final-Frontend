import React, { useState } from 'react';


import bannerImage from '../../../assets/images/chair.png'
import landing from '../../../assets/images/landing-bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <div style={
            {
                background: `url(${landing})`,
                backgroundSize: 'cover'
            }
        } className="hero py-28 container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse text-left">
                <img src={bannerImage} className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div className='mr-6 sm:w-full'>

                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />




                </div>

            </div>
        </div>
    );
};

export default AppointmentBanner;