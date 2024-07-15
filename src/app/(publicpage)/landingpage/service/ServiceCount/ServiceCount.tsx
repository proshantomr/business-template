"use client";

import React, { useState, useEffect, useRef } from 'react';

const ServiceCount = () => {
    const [websitesCount, setWebsitesCount] = useState(1);
    const [companiesCount, setCompaniesCount] = useState(1);
    const [yearsCount, setYearsCount] = useState(1);

    const websitesRef = useRef(null);
    const companiesRef = useRef(null);
    const yearsRef = useRef(null);

    useEffect(() => {
        const websitesInterval = setInterval(() => {
            setWebsitesCount((prevCount) => {
                if (prevCount < 1000) {
                    return prevCount + 1;
                } else {
                    clearInterval(websitesInterval);
                    return prevCount;
                }
            });
        }, 5);

        const companiesInterval = setInterval(() => {
            setCompaniesCount((prevCount) => {
                if (prevCount < 750) {
                    return prevCount + 1;
                } else {
                    clearInterval(companiesInterval);
                    return prevCount;
                }
            });
        }, 5);

        const yearsInterval = setInterval(() => {
            setYearsCount((prevCount) => {
                if (prevCount < 60) {
                    return prevCount + 1;
                } else {
                    clearInterval(yearsInterval);
                    return prevCount;
                }
            });
        }, 5);

        return () => {
            clearInterval(websitesInterval);
            clearInterval(companiesInterval);
            clearInterval(yearsInterval);
        };
    }, []);

    useEffect(() => {
        if (websitesRef.current) {
            websitesRef.current.innerText = `${websitesCount}+ `;
        }
    }, [websitesCount]);

    useEffect(() => {
        if (companiesRef.current) {
            companiesRef.current.innerText = ` ${companiesCount} +`;
        }
    }, [companiesCount]);

    useEffect(() => {
        if (yearsRef.current) {
            yearsRef.current.innerText = `${yearsCount} +`;
        }
    }, [yearsCount]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 px-40  divide-x mt-8'>
            <div className="text-cyan-500 text-center text-xl">
                <h2>Over</h2>
                <h3 ref={websitesRef}> {websitesCount}+ </h3>
                <h4>WEBSITES CREATED</h4>
            </div>

            <div className="text-cyan-500 text-center text-xl">
                <h2>Over</h2>
                <h3 ref={companiesRef}> {companiesCount}+ </h3>
                <h4>COMPANIES HELPED</h4>
            </div>

            <div className="text-cyan-500 text-center text-xl">
                <h2>Over</h2>
                <h3 ref={yearsRef}> {yearsCount}+ </h3>
                <h4 >YEARS COMBINED EXPERIENCE</h4>
            </div>
        </div>
    );
};

export default ServiceCount;
