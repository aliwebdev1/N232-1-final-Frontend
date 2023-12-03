import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users',],
        queryFn: async () => {
            const res = await fetch('http://localhost:7000/users');
            const data = await res.json();
            return data
        }
    })

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:7000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfull');
                    refetch()
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl mb-6'>All Users {users.length}</h1>
            <div className="overflow-x-auto rounded-lg bg-base-100">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-base-200'>
                        <tr>
                            <th>SERIAL</th>
                            <th>NAME</th>
                            <th>Email</th>
                            <th>ADMIN</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn  btn-neutral'>Make Admin</button>}</td>
                                <td><button className='btn  btn-neutral'>Remove User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;