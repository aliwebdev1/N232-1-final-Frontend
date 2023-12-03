import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../components/PrimaryButtton/Loading';

const ManageDoctors = () => {



    const { data: doctors = [], isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:7000/doctors');
            const data = await res.json();
            return data
        }
    })

    const handleDeleteDoctor = (id) => {

    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl mb-6'>My Appointment {doctors.length}</h1>
            <div className="overflow-x-auto rounded-lg bg-base-100">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-base-200'>
                        <tr>
                            <th></th>
                            <th>AVATAR</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>SPECIALITY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <img className='w-10 rounded-full' src={`data:image/png;base64,${doctor.image}`} alt="" />
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td><button onClick={() => handleDeleteDoctor(doctor)} className='btn btn-sm bg-red-500 text-white'>DELETE</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageDoctors;