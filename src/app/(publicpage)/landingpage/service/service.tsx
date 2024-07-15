import React from 'react';
import Image from "next/image";
import service1 from "../../../../../public/assets/img/service/service1.jpg"
import service2 from "../../../../../public/assets/img/service/service2.jpg"
import service3 from "../../../../../public/assets/img/service/service3.jpg"
import service4 from "../../../../../public/assets/img/service/service4.jpg"
import service5 from "../../../../../public/assets/img/service/service5.jpg"
import service6 from "../../../../../public/assets/img/service/service6.jpg"
import  serviceimg7 from "../../../../../public/assets/img/service/serviceimg7.png"
import {FaCheckCircle} from "react-icons/fa";
import ServiceCount from "@/app/(publicpage)/landingpage/service/ServiceCount/ServiceCount";
const Service = () => {

    return (
        <div>
        <div className="bg-blue-950">
            <div>
                <h1 className="text-white text-center text-2xl p-5">WE OFFER BUSINESS SOLUTIONS </h1>
                <h1 className="text-white text-center text-2xl ">THAT ENSURE YOUR SUCCESS </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 justify-items-center  px-64">
                <div
                    className="box-border border-2 bg-white my-5 flex flex-col items-center h-60 w-40 justify-center px-2 ">
                    <Image src={service1} alt="Payment Gateway" className="mx-auto"/>
                    <h2 className="mt-2">Payment<br/> Gateway</h2>
                </div>
                <div
                    className="box-border border-2 bg-white my-5 flex flex-col items-center h-60 w-40 justify-center px-2">
                    <Image src={service2} alt="Payment Gateway" className="mx-auto"/>
                    <h2 className="mt-2">Payment<br/> Gateway</h2>
                </div>
                <div
                    className="box-border border-2 bg-white my-5 flex flex-col items-center h-60 w-40 justify-center px-2">
                    <Image src={service3} alt="Payment Gateway" className="mx-auto"/>
                    <h2 className="mt-2">Payment <br/>Gateway</h2>
                </div>
                <div
                    className="box-border border-2 bg-white my-5 flex flex-col items-center h-60 w-40 justify-center px-2">
                    <Image src={service4} alt="Payment Gateway" className="mx-auto"/>
                    <h2 className="mt-2">Payment<br/> Gateway</h2>
                </div>
                <div
                    className="box-border border-2 bg-white my-5 flex flex-col items-center h-60 w-40 justify-center px-2">
                    <Image src={service5} alt="Payment Gateway" className="mx-auto"/>
                    <h2 className="mt-2">Payment <br/>Gateway</h2>
                </div>
            </div>
            <div className="flex justify-center py-5">
                <button
                    className="bg-cyan-700 text-white px-6 py-2 rounded-lg hover:animate-jump transition duration-300">
                    START YOUR WEBSITE
                </button>
            </div>
        </div>
            <div className="">
                <div className="mt-10 py-10 items-center relative">
                    <h1 className="text-3xl font-bold text-center">THE POWER OF PROFESSIONAL<br/> WEBSITE DESIGN</h1>
                    <p className="text-center mt-8 md:z-40">Investing in a professionally designed website is crucial for businesses seeking online success.<br/>
                        It enhances credibility, user experience, and brand visibility driving growth<br/> and customer engagement.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:px-64 -mt-16 lg:-mt-24">
                    <div>
                        <Image className="h-[500px]  " src={service6} alt=""/>
                    </div>
                    <div>
                        <h1 className="mt-20 text-xl font-bold  ">UNLOCK SUCCESS:</h1>
                        <Image className="mt-8" src={serviceimg7} alt=""/>

                        <div className="flex items-center mt-4  px-10">
                            <FaCheckCircle className="text-cyan-400"/>
                            <h2 className="ml-2 text-lg">Seamless Navigation</h2>
                        </div>
                        <div className="flex items-center mt-4  px-10">
                            <FaCheckCircle className="text-cyan-400"/>
                            <h2 className="ml-2 text-lg">Enhances user experience and navigation.</h2>
                        </div>
                        <div className="flex items-center mt-4  px-10">
                            <FaCheckCircle className="text-cyan-400"/>
                            <h2 className="ml-2 text-lg">Enhances user experience and navigation.</h2>
                        </div><div className="flex items-center mt-4  px-10">
                            <FaCheckCircle className="text-cyan-400"/>
                            <h2 className="ml-2 text-lg">Drives business growth through customer engagement.</h2>
                        </div>
                        <p className="mt-4"> A professionally designed website serves as a dynamic tool, propelling your business towards unparalleled success in the digital landscape.
                            Do not miss out on the transformative impact a well-crafted online presence can bring to your brand.</p>
                        <div className="">
                            <button className="mt-4 bg-cyan-600 w-60 p-2 rounded text-white my-5 hover:animate-jump ">
                                START YOUR WEBSITE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ServiceCount/>

        </div>
    )
        ;
};

export default Service;