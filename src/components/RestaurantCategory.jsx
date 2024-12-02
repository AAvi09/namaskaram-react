import React from "react";

const RestaurantCategory = ({ data, itemCards }) => {
  return (
    <div className="w-6/12 mx-auto my-4 p-4 border rounded-lg bg-gray-100 shadow-md flex justify-between  ">
      <span className="text-xl font-bold text-gray-700">
        {data} ({itemCards})
      </span>
      <span className=" space-between justify-end">🏹</span>
    </div>
  );
};

export default RestaurantCategory;
