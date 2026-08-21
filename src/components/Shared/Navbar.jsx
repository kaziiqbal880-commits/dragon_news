// import React from 'react';

import Image from "next/image";
import Link from "next/link";
import login from "../../assets/user.png"
import Navlink from "./Navlink";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center container mx-auto">
            <div>
            </div>
            <ul className="flex gap-2">
                <li><Navlink href={'/'}>Home</Navlink></li>
                <li><Navlink href={'/about'}>About</Navlink></li>
                <li><Navlink href={'/contact'}>Contact</Navlink></li>
            </ul>
            <div className="flex gap-2 items-center">
                <Image
                    src={login}
                    alt="login"
                    width={50}
                    height={30}
                />
                <button className="btn bg-black text-white">Login</button>

            </div>

        </div>
    );
};

export default Navbar;