import React, { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants"; // Assuming you have the CDN_URL constant defined

const CarouselData = () => {
  const [listOfCarousel, setListOfCarousel] = useState([]);

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

  return (
    <div className="flex overflow-x-auto space-x-4 py-6 px-10">
      {listOfCarousel.map((item, index) => (
        <div
          key={index}
          className="flex-none w-48 h-48 bg-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-110 hover:shadow-xl hover:translate-y-2"
        >
          <img
            src={CDN_URL + item.imageId}
            alt={`carousel-item-${index}`}
            className="w-full h-full object-cover rounded-lg transition-all duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
};

export default CarouselData;
