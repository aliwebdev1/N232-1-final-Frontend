import React from 'react';
import { sl } from 'date-fns/locale';
const AppointmentOption = ({ appointmentOption, setTreatment }) => {

    const { name, slots, } = appointmentOption;

    return (
        <div className="card bg-base-100 shadow-xl">

            <div className="card-body items-center text-center">
                <h2 className="card-title  text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
                <p >{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}</p>


                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>

            </div>
        </div>
    );
};

export default AppointmentOption;