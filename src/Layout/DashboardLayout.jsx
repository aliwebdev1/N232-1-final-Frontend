import React, { useContext } from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)


    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content p-14 bg-[#D4D9E3] ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full  text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/all-users">All Users</Link></li>
                                <li><Link to="/dashboard/add-doctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/manage-doctors">Manage Doctors</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;