import React from 'react';
import Image from "next/image";

const Video = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-8 px-16">
                <div className="my-5 mx-8">
                    <h1 className="text-2xl font-bold">ACHIEVE INCREDIBLE RESULTS THAT ARE UNRIVALED IN THE WEB DESIGN
                        INDUSTRY.</h1>
                    <p className=" mt-4">Our mission is to empower fledgling business owners by providing them with
                        professional, high-quality websites at an affordable cost.
                        We strive to level the playing field and give small business owners the tools they need to
                        succeed in today’s digital age and unleash their full potential.</p>
                    <p className="mt-2">Our clients are at the heart of everything we do. We’re dedicated to providing
                        personalized, attentive service to each and every one of our clients, and believe</p>
                    <p className="mt-4">that building strong relationships is the key to our success. Moreover,
                        we believe in building websites that are sustainable and scalable,
                        ensuring that our clients are able to achieve their long-term goals.</p>
                </div>

                <div className="md:my-5 mx-10">
                    <div className="relative" style={{paddingBottom: "56.25%", height: 0}}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/uO9sm7jMfVU"
                            title="Responsive Web Design - Make Lots Foundation"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="mt-8 my-5">
                        <button className="w-full p-2 bg-sky-400 text-white hover:animate-jump "> START YOUR WEBSITE</button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Video;