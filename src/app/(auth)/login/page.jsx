
"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const { register,
        handleSubmit, formState: { errors }, } = useForm()
    const [showPassWord, setShowPassWord] = useState(false)
    const handleFunc = async (data) => {
        // console.log(data)
        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Signin Successful")
        }


    }



    return (
        <div className='container mx-auto min-h-[80vh] bg-slate-100 flex justify-center items-center'>
            <div className='bg-white p-5'>
                <h2 className='  font-bold text-3xl'> Login Your Account</h2>
                <div className="divider"></div>

                <form onSubmit={handleSubmit(handleFunc)} className='space-y-3'>
                    <fieldset className="fieldset">
                        <legend className="font-bold">Email</legend>
                        <input {...register('email', { required: 'This field is required' })} type="email" className="input" placeholder="Enter Email" name="email" />
                        {errors.password && <p className='text-red-400'>{errors.password.message} </p>}
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

                    <button className='btn w-full bg-slate-800 text-white'>Loggin</button>
                </form>
                <p>Don&apos;t have an account? <Link className="text-blue-400" href={'/register'}>Register</Link></p>
            </div>

        </div>
    );
};

export default LoginPage;