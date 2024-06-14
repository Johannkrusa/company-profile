    import React, { useState, useEffect } from 'react';
    import './heroCarousel.css'; 
    import Link from 'next/link';

    const images = [
    "https://ucarecdn.com/5cb912ed-ccdd-4e7c-bc93-9eb1af3d5642/-/format/auto/-/preview/3000x3000/-/quality/lighter/Zoom75_Keycap_BlueOasis_02.png",
    "https://ucarecdn.com/ac9d7a9b-ddff-4e64-a4d0-243d18c79c3c/-/format/auto/-/preview/3000x3000/-/quality/lighter/Zoom75_Keycap_CreamyCharcoal_02.png",
    "https://ucarecdn.com/af18eb84-7d53-4f3e-ba1f-2dbc6dd93bd0/-/format/auto/-/preview/3000x3000/-/quality/lighter/Zoom75_Keycap_LavenderBliss_02.png",
    "https://ucarecdn.com/91da8356-8b91-4737-b15c-54f4e79ee6ef/-/format/auto/-/preview/3000x3000/-/quality/lighter/Zoom75_Keycap_GraySkies_02.png",
    "https://ucarecdn.com/7f2523e0-8500-4bf8-a1b2-9b2e334b4f86/-/format/auto/-/preview/3000x3000/-/quality/lighter/Zoom75_Keycap_SunsetBliss_02.png"
    ];

    const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(goToNext, 7000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div className="relative">
        <div className="overflow-hidden relative">
            <div className="flex" style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}>
            {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative" style={{ flex: `0 0 ${100 / images.length}%` }}>
                <img src={image} alt={`Slide ${index}`} className="w-full" />
                <div className="overlay"></div>
                </div>
            ))}
            </div>
        </div>
            <button className="absolute align-middle justify-center left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-md px-5 py-7 text-2xl" onClick={goToPrevious}>‹</button>
            <button className="absolute align-middle justify-center right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-md px-5 py-7 text-2xl" onClick={goToNext}>›</button>
            <div className="absolute bottom-[200px] left-[100px] text-white p-4 flex flex-col items-center">
                 <h1 className="text-5xl font-bold">Productivity at its</h1>
                 <h1 className='text-4xl font-bold'>Maximum</h1>
                <Link href="/product">
                    <button className="button mt-8 bg-white text-black px-8 py-4 rounded">Know More</button>
                </Link>

            </div>

        </div>

    );
    };

    export default HeroCarousel;
