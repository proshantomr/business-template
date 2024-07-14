import React from 'react';
import Image from "next/image";
import certifiedlogo from "../../../../../public/assets/img/hero/certified-logo.png";
import officeImage from "../../../../../public/assets/img/hero/office-image.png";
import  checklist from "../../../../../public/assets/img/hero/checklist.png";

import { FaCheckCircle } from "react-icons/fa";



const Hero = () => {
    return (
        <div>
            <div className="w-full bg-blue-100 ">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full md:h-[500px] w-full px-6 md:px-20">
                    <div className="my-8">
                        <p className="text-white bg-cyan-500 text-sm md:ml-28 md:absolute md:left-0 md:py-2 md:px-4">
                            ELEVATE YOUR BRAND: PROFESSIONALLY CRAFTED WEBSITE FOR YOUR BUSINESS
                        </p>
                        <h1 className="text-4xl font-bold md:py-2 md:mt-8 ml-4 md:ml-10">
                            LET’S BUILD AN EXCEPTIONAL WEBSITE TOGETHER.
                        </h1>
                        <p className="text-lg mt-4 md:mt-6 ml-4 md:ml-10">
                            We are the Make Lots Foundation. We design professional websites for those in need. We’re
                            offering our design services at an affordable rate to support small businesses in building
                            their
                            online presence.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center h-full ">
                        <Image className="md:w-1/3 h-auto mb-4 md:mb-10 md:-mr-32 md:z-40" src={certifiedlogo}
                               alt="Certified logo"/>
                        <Image className="md:w-4/5 mt-10 md:h-full md:mt-0 ml-0 md:ml-6 " src={officeImage}
                               alt="officeImage"/>
                    </div>
                </div>

            </div>

            <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-8 ">
                    <div className=" md:-mt-40 bg-blue-950 rounded-t-lg ">
                            <h1 className="text-white text-3xl text-center py-2">PLEASE SELECT YOUR PACKAGE</h1>
                            <h5 className="text-white text-center">Once your order is placed, we will reach out to you
                                shortly.</h5>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 border-t-0 px-4 box-border border-2 border-slate-500 bg-slate-100">
                                <div className="box-border border-2 border-t-0 shadow-2xl mx-2">
                                    <div className="bg-amber-500  ">
                                        <h2 className="text-center p-8 font-bold italic mt-10 mx-5 ">BUSINESS PRO <br/> WEBSITE
                                        </h2>
                                    </div>
                                    <div className="bg-gray-700">
                                        <h2 className="text-center p-8 font-bold text-white text-5xl mx-5">$99 <small
                                            className="text-sm -ml-2">99</small></h2>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 text-center mt-4 box-border border-b-2 p-2">5-Page
                                            Website</h4>
                                        <h4 className="text-gray-500 text-center mt-4 box-border border-b-2 p-2">Domain
                                            Registration</h4>
                                        <h4 className="text-gray-500 text-center mt-4 box-border border-b-2 p-2">Web
                                            Hosting*</h4>
                                        <h4 className="text-gray-500 text-center mt-4 box-border border-b-2 p-2">Business
                                            Email</h4>
                                        <h4 className="text-gray-500 text-center mt-4 box-border border-b-2 p-2">SEO Optimized
                                            Design</h4>
                                    </div>
                                    <div className="flex justify-center items-center mt-3 p-4">
                                        <button className="bg-amber-500 text-white py-2 px-4 rounded hover:animate-jump">START
                                            NOW
                                        </button>
                                    </div>
                                </div>


                                <div className='box-border border-2 border-t-0 shadow-2xl" mx-2'>
                                    <div className="bg-sky-400 mt-10 ">
                                        <h2 className="text-center p-8 font-bold italic  mx-5 ">E-COMMERCE <br/> WEBSITE</h2>
                                    </div>
                                    <div className="bg-gray-700">
                                        <h2 className="text-center p-8 font-bold text-white text-5xl mx-5">$199 <small
                                            className="text-sm -ml-2">99</small></h2>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 text-center mt-4 box-border border-b-2 p-2">10 Products
                                            Listed</h4>
                                        <h4 className="text-gray-500 text-center mt-4 box-border border-b-2 p-2">Domain
                                            Registration</h4>
                                        <h4 className="text-gray-500 text-center mt-4 box-border border-b-2 p-2">Web
                                            Hosting*</h4>
                                        <h4 className="text-gray-500 text-center mt-4 box-border border-b-2 p-2">Business
                                            Email</h4>
                                        <h4 className="text-gray-500 text-center mt-4 box-border border-b-2 p-2">SEO Optimized
                                            Design</h4>
                                    </div>
                                    <div className="flex justify-center items-center mt-3 p-4">
                                        <button className="bg-sky-400 text-white py-2 px-4 rounded hover:animate-jump">START NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div>
                        <div className="mt-10 md:mt-20  my-8 ml-20 ">
                            <h1 className="text-xl">CRAFTING OUTSTANDING WEB EXPERIENCES</h1>
                            <p className="text-lg md:text-base lg:text-l mt-2">RESPONSIVE, USER-FRIENDLY, VISUALLY
                                STUNNING
                                DESIGNS</p>
                            <div className="px-8 mt-8">
                                <div className="flex items-center">
                                    <FaCheckCircle className="text-cyan-400"/>
                                    <h2 className="ml-2 text-lg">Responsive Layouts</h2>
                                </div>
                                <div className="flex items-center mt-2">
                                    <FaCheckCircle className="text-cyan-400"/>
                                    <h2 className="ml-2 text-lg">Intuitive User Experience</h2>
                                </div>
                                <div className="flex items-center mt-2 ">
                                    <FaCheckCircle className="text-cyan-400" />
                                    <h2 className="ml-2 text-lg">Seamless Navigation</h2>
                                </div>
                                <div className="flex items-center mt-2">
                                    <FaCheckCircle className="text-cyan-400"/>
                                    <h2 className="ml-2 text-lg">Accessible Content</h2>
                                </div>
                                <div className="flex items-center mt-2">
                                    <FaCheckCircle className="text-cyan-400"/>
                                    <h2 className="ml-2 text-lg">Fast Loading Times</h2>
                                </div>
                                <div className="flex items-center mt-2">
                                    <FaCheckCircle className="text-cyan-400"/>
                                    <h2 className="ml-2 text-lg">Engaging Interactions</h2>
                                </div>
                                <div className="flex items-center mt-2">
                                    <FaCheckCircle className="text-cyan-400"/>
                                    <h2 className="ml-2 text-lg">Cross-Browser Compatibility</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
        ;
};

export default Hero;