import { CDN_URL } from "../utils/constants.js";
import React from "react";

const Rescard = (props) => {
  const { resdata } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
  } = resdata?.info;

  return (
    <div className="p-4 h-full border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <img
        className="w-full h-40 object-cover rounded-md mb-4"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <h4 className="text-sm text-gray-500 mt-1">{cuisines.join(", ")}</h4>
      <h4 className="text-sm font-medium text-green-600 mt-2">
        {avgRatingString}⭐
      </h4>
      <h4 className="text-sm text-gray-600 mt-1">{sla.deliveryTime} min 🕰</h4>
      <h4 className="text-sm text-gray-600 mt-1">{costForTwo}</h4>
    </div>
  );
};

export default Rescard;
