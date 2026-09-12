import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "../assets/logo-text.png"

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        // parent div
        <nav className="container mx-auto flex justify-between items-center p-4 sticky top-0 z-50 bg-white">

            {/* Hamburger - mobile only */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>

            {/* logo div */}
            <div>
                <img src={Logo} alt="" />
            </div>

            {/* Nav items */}
            <div className="hidden md:block">
                <ul className="flex gap-4 items-center">
                    <li className="text-[#DB2777]">Home</li>
                    <li>Technologies</li>
                    <li>Prejects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* buttons */}
            <div className="flex justify-between items-center gap-2">
                <button>Sign in</button>
                <button className="btn btn-secondary rounded-3xl">Sign up</button>
            </div>
        </nav>
    );
};

export default Nav;