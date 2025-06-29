import React from 'react';
import hero from '../assets/images/location-merchant.png';
import top from '../assets/images/imagetop.png';

const BeMarchent = () => {
    return (
        <div className="hero my-16">
            <div className="hero-content flex-col lg:flex-row-reverse bg-[#03373d] p-6 sm:p-10 lg:p-20 rounded-3xl relative overflow-hidden">
                {/* Decorative top-left image (responsive) */}
                <div className="md:absolute md:top-0 md:left-0 w-20 sm:w-32 md:w-40 lg:w-auto">
                    <img src={top} alt="" className="w-full h-auto" />
                </div>

                {/* Hero Image (responsive) */}
                <img
                    src={hero}
                    className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-sm rounded-lg shadow-2xl w-full lg:w-[530px] mb-8 lg:mb-0"
                />

                {/* Text Content (responsive) */}
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold w-full lg:w-[673px] text-white">
                        Merchant and Customer Satisfaction is Our First Priority
                    </h1>
                    <p className="py-4 sm:py-6 text-sm sm:text-base text-gray-50 pr-30">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <div className="flex gap-6">
                        <button className="btn border-[] rounded-4xl text-[#CAEB66] hover:bg-[#d5ef87] hover:text-gray-900 bg-[#03373d]">Be a Marchant</button>

                        <button className="btn border-[#CAEB66] rounded-4xl text-[#CAEB66] hover:bg-[#d5ef87] hover:text-gray-900 bg-[#03373d]">Earn with Profast Courier</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeMarchent;