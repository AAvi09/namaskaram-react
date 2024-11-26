import React from "react";

const Carousel = ({ carouselItem }) => {
  // const { CarData } = props;
  const { id, imageId, text } = carouselItem;

  return (
    <div className="relative w-full flex flex-col items-center">
      <img
        src={imageId}
        alt={`Carousel Item ${id}`}
        className="w-60 h-60 object-cover rounded-lg shadow-lg mb-4"
      />
      <span className="text-lg font-medium text-gray-700">{text}</span>
    </div>
  );
};

export default Carousel;
