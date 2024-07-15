import React from 'react';
import {images} from "next/dist/build/webpack/config/blocks/images";
import img1 from "../../../../../public/assets/img/feature/f-image1.png"
import img2 from "../../../../../public/assets/img/feature/f-image2.png"
import img3 from "../../../../../public/assets/img/feature/f-image3.png"
import img4 from "../../../../../public/assets/img/feature/f-image4.png"
import img5 from "../../../../../public/assets/img/feature/f-image5.png"
import Image from "next/image";

const Feature = () => {
    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold text-center">FEATURED IN</h2>
            </div>
            <div className="overflow-x-auto whitespace-nowrap">
            <div className="grid grid-cols-1 md:grid-cols-5 my-5 justify-items-center px-28 ">

                <div>
                    <Image className="" src={img1} alt=""/>
                </div>
                <div>
                    <Image className="" src={img2} alt=""/>
                </div>
                <div>
                    <Image className="" src={img3} alt=""/>
                </div>
                <div>
                    <Image className="" src={img4} alt=""/>
                </div>
                <div>
                    <Image className="" src={img5} alt=""/>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Feature;