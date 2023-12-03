import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate();

    const handleSingUP = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }


    const saveUser = (name, email) => {
        const user = { name, email }
        console.log(user);
        fetch('http://localhost:7000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/')
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-98 p-3 shadow-2xl rounded-lg'>
                <h3 className='text-xl text-center mt-2'>Sign Up</h3>

                <form onSubmit={handleSubmit(handleSingUP)} className="card-body">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" required />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is Required',
                            minLength: { value: 6, message: 'Password must be six charecters long' },
                            pattern: { value: /(?=.*?[A-Z])(?=.*?[!@$%&*])(?=.*?[0-9])/, message: 'Password must be have upppercase , special charecter and number' }
                        })} placeholder="password" className="input input-bordered" required />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}


                    </div>

                    <div className="form-control mt-3">
                        <button className="btn btn-accent">Sign Up</button>
                    </div>

                    {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    }

                    <p>Already Have an account? <Link className='text-secondary' to='/signup'>Please Sign Up</Link> </p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

                </form>
            </div>

        </div>
    );
};

export default SignUp;