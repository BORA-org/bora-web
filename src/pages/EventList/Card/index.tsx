import React, { useState } from "react"
import EventImage from '../../../assets/img/event.jpg';
const images = [
    'event-1.jpg',
    'event-2.jpg',
    'event-3.jpg',
    'event-4.jpg',
    'event.jpg',
];

export const Card = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    return (
        <div className="w-100 bg-white-w2 rounded-3xl shadow-md">
            <div className="flex">
                <div className="w-100 relative">
                <img src={EventImage} alt="" className="w-200 h-150" />
                <button
                    className="w-7 h-7 bg-white-w2 absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full"
                    onClick={handlePrevSlide}
                >
                    &lt;
                </button>
                <button
                    className="w-7 h-7 bg-white-w2 absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full"
                    onClick={handleNextSlide}
                >
                    &gt;
                </button>
                </div>
                <div className="w-1/2 p-4">
                    <h2 className="font-gilroy-bold text-3xl text-black-b1 text-opacity-70">Título do Card</h2>
                    <p className="font-gilroy text-gray-g5">Música popular brasileira ao vivo, ambiente adaptado e segurança nas entradas.</p>
                </div>
            </div>
        </div>
    );
};