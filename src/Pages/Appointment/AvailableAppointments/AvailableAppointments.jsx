import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/PrimaryButtton/Loading';

const AvailableAppointments = ({ selectedDate }) => {

    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')

    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:7000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='container mx-auto'>
            <div className='text-center my-24'>
                <p className='text-secondary'>Available Services on {format(selectedDate, 'PP')}</p>
                <p className='text-accent'>Please select a service.</p>

                <div className=' text-left  grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        appointmentOption.map(appointmentOption => <AppointmentOption
                            key={appointmentOption._id}
                            appointmentOption={appointmentOption}
                            setTreatment={setTreatment}
                        >
                        </AppointmentOption>)
                    }
                </div>

                {treatment &&
                    <BookingModal
                        selectedDate={selectedDate}
                        treatment={treatment}
                        setTreatment={setTreatment}
                        refetch={refetch}
                    ></BookingModal>
                }

            </div>

        </div>
    );
};

export default AvailableAppointments;