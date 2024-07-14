import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/assets/img/logo.webp";

const Navbar = () => {
    return (
        <div className="  ">
            <div className="navbar bg-base-100 shadow-xl md:px-28">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-52 p-2 shadow  rounded-full">
                            <li><a>Donate</a></li>
                            <li><a>Mission Statement</a></li>
                            <li><a>Learning Resources</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About Us</a></li>
                        </ul>
                    </div>
                    <Image className="h-20 w-28 ml-10" src={logo} alt="logo"/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        <li><a>Donate</a></li>
                        <li><a>Mission Statement</a></li>
                        <li><a>Learning Resources</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex mr-24 animate-fadeInUp">
                    <a className="btn bg-gradient-to-r from-blue-200 to-blue-500 hover:from-amber-950 hover:to-amber-950 hover:text-white shadow-xl">Contact
                        Us</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;