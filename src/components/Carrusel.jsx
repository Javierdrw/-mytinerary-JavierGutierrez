import React, { useState, useEffect } from 'react';

export default function Carrusel({ carruselData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(4);
  const totalImages = carruselData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth >= 768) {
        setImagesPerView(4);
      } else {
        setImagesPerView(1);
      }
    };

    updateImagesPerView();
    window.addEventListener('resize', updateImagesPerView);

    return () => {
      window.removeEventListener('resize', updateImagesPerView);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + imagesPerView) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - imagesPerView : prevIndex - imagesPerView
    );
  };

  return (
    <div className="relative w-full overflow-hidden gap-2 flex flex-col items-center">
      <h2 className="text-3xl text-center my-4 font-bold">Popular My Tineraries</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2">
        {carruselData
          .slice(currentIndex, currentIndex + imagesPerView)
          .map((item, index) => (
            <div key={index} className="relative w-[370px] h-[300px]">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white p-1 text-sm rounded-md">
                {item.title}
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {carruselData.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            } transition-colors duration-300`}
          ></div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}
