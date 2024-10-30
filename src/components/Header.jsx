import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '/images/headerlogo.png';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <header className="flex items-center justify-between p-4 bg-white mx-4 md:mx-10 ">

            <div className="w-[150px] md:w-[200px] flex-shrink-0">
                <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto" />
            </div>


            <nav className="hidden md:flex space-x-8 text-gray-700 items-center">
                <ul className="flex space-x-8 items-center">
                    <li className="hover:text-[#00732F] cursor-pointer">Find Suppliers</li>
                    <li className="hover:text-[#00732F] cursor-pointer relative">
                        <button onClick={toggleDropdown} className="flex items-center">
                            Find Service Tags <FaChevronDown className="ml-1" />
                        </button>


                        {isDropdownOpen && (
                            <ul className="absolute top-full mt-2 bg-white shadow-lg rounded-md p-2 w-40 text-gray-700">
                                <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Option 1</li>
                                <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Option 2</li>
                                <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Option 3</li>
                            </ul>
                        )}
                    </li>
                </ul>
                <button className="px-4 py-1 text-[#00732F] border-2 border-[#00732F] rounded-md hover:bg-[#00732F] hover:text-white transition-colors">
                    Login/Signup
                </button>
            </nav>


            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>


            {isMenuOpen && (
                <nav className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 z-20">
                    <ul className="flex flex-col items-center space-y-4 text-gray-700">
                        <li className="hover:text-[#00732F] cursor-pointer" >Find Suppliers</li>
                        <li className="hover:text-[#00732F] cursor-pointer flex items-center" onClick={() => { toggleDropdown(); }}>
                            Find Service Tags <FaChevronDown className="ml-1" />
                        </li>


                        {isDropdownOpen && (
                            <ul className="flex flex-col items-center space-y-2 mt-2 text-gray-700">
                                <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Option 1</li>
                                <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Option 2</li>
                                <li className="py-1 px-4 hover:bg-gray-100 cursor-pointer">Option 3</li>
                            </ul>
                        )}

                        <button
                            className="px-4 py-1 text-[#00732F] border-2 border-[#00732F] rounded-md hover:bg-[#00732F] hover:text-white transition-colors w-full mt-4"
                            onClick={toggleMenu}
                        >
                            Login/Signup
                        </button>
                    </ul>
                </nav>
            )}
        </header>
    );
};