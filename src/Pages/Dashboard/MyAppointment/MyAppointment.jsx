import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyAppointment = () => {

    const { user } = useContext(AuthContext)
    const url = `http://localhost:7000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })



    return (
        <div>
            <h1 className='text-3xl mb-6'>My Appointment {bookings.length}</h1>
            <div className="overflow-x-auto rounded-lg bg-base-100">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-base-200'>
                        <tr>
                            <th>SERIAL</th>
                            <th>NAME</th>
                            <th>SERVICE</th>
                            <th>DATE</th>
                            <th>TIME</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;