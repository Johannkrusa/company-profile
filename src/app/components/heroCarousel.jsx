import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
    "https://ucarecdn.com/5cb912ed-ccdd-4e7c-bc93-9eb1af3d5642/-/format/auto/-/preview/3000x3000/-/quality/lighter/Zoom75_Keycap_BlueOasis_02.png",
    "https://ucarecdn.com/ac9d7a9b-ddff-4e64-a4d0-243d18c79c3c/-/format/auto/-/preview/3000x3000/-/quality/lighter/Zoom75_Keycap_CreamyCharcoal_02.png",
    "https://ucarecdn.com/af18eb84-7d53-4f3e-ba1f-2dbc6dd93bd0/-/format/auto/-/preview/3000x3000/-/quality/lighter/Zoom75_Keycap_LavenderBliss_02.png",
    "https://ucarecdn.com/91da8356-8b91-4737-b15c-54f4e79ee6ef/-/format/auto/-/preview/3000x3000/-/quality/lighter/Zoom75_Keycap_GraySkies_02.png",
    "https://ucarecdn.com/7f2523e0-8500-4bf8-a1b2-9b2e334b4f86/-/format/auto/-/preview/3000x3000/-/quality/lighter/Zoom75_Keycap_SunsetBliss_02.png"
];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = useCallback(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }, [currentIndex]);

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex]);

    useEffect(() => {
        const intervalId = setInterval(goToNext, 7000);
        return () => clearInterval(intervalId);
    }, [goToNext]);

    return (
        <div className="relative">
            <div className="overflow-hidden relative">
                <div className="flex" style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0 relative" style={{ flex: `0 0 ${100 / images.length}%` }}>
                            <Image src={image} alt={`Slide ${index}`} width={1650} height={1000} />
                            <div className="overlay"></div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-md px-5 py-7 text-2xl" onClick={goToPrevious}>‹</button>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-md px-5 py-7 text-2xl" onClick={goToNext}>›</button>
            <div className="absolute bottom-[170px] left-20 text-white p-4 flex flex-col items-center">
                <h1 className="text-5xl font-bold">DESKTOP ART CREATOR</h1>
                <h1 className='text-2xl font-semibold text-gray-100 mt-4'>-- Explore Our Keyboards --</h1>
                <Link href="/product">
                <button className="mt-4 bg-white text-black border-transparent border px-8 py-4 rounded hover:bg-gray-200 hover:border-gray-600">
                    Know More
                </button>
                </Link>
            </div>
        </div>
    );
};

export default HeroCarousel;
