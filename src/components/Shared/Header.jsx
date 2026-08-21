import Image from "next/image";
import logo from "../../assets/logo.png"

import { format } from "date-fns";

const Header = () => {
    const currentDate = format(new Date(), "MMMM dd, yyyy")
    return (
        <div className=" justify-center text-center pt-5 space-y-3">
            <Image className="mx-auto h-auto"
                width={300}
                height={200}
                alt="logo"
                src={logo}

            />
            <p>Journalism Without Fear or Favour</p>
            <p>{currentDate}</p>

        </div>
    );
};

export default Header;