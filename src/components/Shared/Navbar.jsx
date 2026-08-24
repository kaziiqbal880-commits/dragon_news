"use client"
import Image from "next/image";
import Link from "next/link";
import login from "../../assets/user.png"
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user;
    // console.log(session?.user)

    return (
        <div className="flex justify-between items-center container mx-auto">
            <div>
            </div>
            <ul className="flex gap-2">
                <li><Navlink href={'/'}>Home</Navlink></li>
                <li><Navlink href={'/about'}>About</Navlink></li>
                <li><Navlink href={'/contact'}>Contact</Navlink></li>
            </ul>
            {user ? <div>{`Welcome! ${user.name}`}
                <button onClick={() => authClient.signOut()} className="btn ml-2">Log Out</button>
            </div>
                : <div className="flex gap-2 items-center">
                    <Image
                        src={login}
                        alt="login"
                        width={50}
                        height={30}
                    />
                    <Link href={'/login'}>
                        <button className="btn bg-black text-white">Login</button>
                    </Link>

                </div>}

        </div>
    );
};

export default Navbar;