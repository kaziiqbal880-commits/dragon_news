'use client'


import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const [showPassWord, setShowPassWord] = useState(false)
    const { register,
        handleSubmit, formState: { errors }, } = useForm()
    const handleFunc = async (data) => {
        const { name, email, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({

            name: name,
            email: email,
            password: password,
            callbackURL: '/'


        })
        // console.log(data)
        console.log(data, error)
        if (error) {
            alert('You are already Signed Up, please login')
            return
        }
        if (data) {
            alert('Sign up successfull')
        }

    }
    // console.log(errors, 'errors')
    return (
        <div className='container mx-auto min-h-[80vh] bg-slate-100 flex justify-center items-center'>
            <div className='bg-white p-5'>
                <h2 className='  font-bold text-3xl'> Please! Sign Up</h2>
                <div className="divider"></div>

                <form onSubmit={handleSubmit(handleFunc)} className='space-y-3'>
                    <fieldset className="fieldset">
                        <legend className="font-bold">Name</legend>
                        <input {...register('name', { required: 'This field is required' })} type="name" className="input" placeholder="Enter name" name="name" />
                        {errors.name && <p className='text-red-400'>{errors.name.message} </p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="font-bold">Email</legend>
                        <input {...register('email', { required: 'This field is required' })} type="email" className="input" placeholder="Enter Email" name="email" />
                        {errors.email && <p className='text-red-400'>{errors.email.message} </p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="font-bold">Password</legend>
                        <input {...register('password', { required: 'This field is required' })} type={showPassWord ? "text" : "password"} className="input" placeholder="Enter Password" name="password" />

                        <div onClick={() => setShowPassWord(!showPassWord)} className="absolute right-2 top-4 cursor-pointer">
                            {showPassWord ? <FaEyeSlash /> :
                                <FaEye />}
                        </div>

                        {errors.password && <p className='text-red-400'>{errors.password.message} </p>}
                    </fieldset>


                    <button type='submit' className='btn w-full bg-slate-800 text-white'>Sign up</button>
                </form>
                <p>Already, Sign Up? <Link className="text-blue-400" href={'/login'}>Sign In</Link></p>
            </div>

        </div>
    );
};

export default RegisterPage;