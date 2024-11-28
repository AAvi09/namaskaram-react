import React, { useState, useEffect, useRef } from "react";
import { CDN_URL } from "../utils/constants"; // Assuming you have the CDN_URL constant defined

const CarouselData = () => {
  const [listOfCarousel, setListOfCarousel] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5908302&lng=77.3963179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfCarousel(json?.data?.cards?.[0].card?.card?.imageGridCards?.info);
  };
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">What's on your mind?</h1>
      {/* Container for Navigation Buttons and Carousel */}
      <div className="flex items-center space-x-4">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-all "
        >
          ←
        </button>

        {/* Scrollable Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 w-full scrollbar-hide"
        >
          {listOfCarousel.map((item, index) => (
            <div
              key={index}
              className="flex-none w-48 h-48 bg-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-110"
            >
              <img
                src={CDN_URL + item.imageId}
                alt={`carousel-item-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-all"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default CarouselData;
