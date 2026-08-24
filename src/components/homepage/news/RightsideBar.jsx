"use client"
import React from 'react';
import Image from 'next/image';
import { BsInstagram, BsTwitter, BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import swimming from '../../../assets/swimming.png';
import playground from '../../../assets/playground.png'
import man from '../../../assets/class.png'
import bg from '../../../assets/bg.png'
import { authClient } from '@/lib/auth-client';
const RightsideBar = () => {

    const GoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data)
    };
    return (
        <div>
            <div>
                <h1 className="font-bold text-md">Login With</h1>
                <div className='flex flex-col gap-2 my-2'>
                    <button onClick={() => GoogleSignIn()} className='btn border-slate-400 text-slate-500 flex justify-center items-center gap-1'>
                        <FaGoogle />
                        Login With Google
                    </button>
                    <button className='btn flex justify-center items-center gap-1'>
                        <FaGithub />
                        Login With GitHub
                    </button>
                </div>
            </div>

            <div>
                <h1 className="font-bold text-md my-3">Find Us On</h1>
                <div className='flex flex-col '>
                    <button className='btn flex justify-center items-center gap-1'>
                        <FaFacebook />
                        Facebook
                    </button>
                    <button className='btn flex justify-center items-center gap-1'>
                        <BsTwitterX></BsTwitterX>
                        <p>Twitter</p>
                    </button>
                    <button className='btn flex justify-center items-center gap-1'>
                        <BsInstagram />
                        Instagram
                    </button>
                </div>
            </div>

            <div className='mt-5 bg-base-200 p-5 flex flex-col justify-center items-center space-y-3'>
                <h1 className='font-semibold text-xl'>Q-Zone</h1>
                <div>
                    <div className=''>
                        <Image
                            alt='swimming'
                            height={250}
                            width={300}
                            src={swimming} />

                    </div>
                    <div className=''>
                        <Image
                            alt='playground'
                            height={200}
                            width={300}
                            src={playground} />

                    </div>
                    <div className=''>
                        <Image
                            alt='class'
                            height={250}
                            width={300}
                            src={man} />

                    </div>
                    <div className=''>
                        <Image
                            alt='bg'
                            height={400}
                            width={300}
                            src={bg} />

                    </div>

                </div>
            </div>



        </div>

    );
};

export default RightsideBar;