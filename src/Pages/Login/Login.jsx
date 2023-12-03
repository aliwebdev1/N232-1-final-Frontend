import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Login Successfully')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })



    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-98 p-3 shadow-2xl rounded-lg'>
                <h3 className='text-xl text-center mt-2'>Login</h3>
                <form onSubmit={handleSubmit(handleLogin)} className="card-body">

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is Required',
                        })} placeholder="password" className="input input-bordered" required />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}


                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-3">
                        <button className="btn btn-accent" type='submit'>Login</button>
                    </div>


                    {
                        loginError && <p className='text-red-600'>{loginError}</p>
                    }


                    <p>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link> </p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>

            </div>

        </div>
    );
};

export default Login;