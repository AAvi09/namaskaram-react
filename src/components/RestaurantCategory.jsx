import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, itemCards, items }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems((state) => !state);
  };
  return (
    <div className="w-6/12 mx-auto my-4 p-4 border rounded-lg bg-gray-100 shadow-md   ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-xl font-bold text-gray-700">
          {data} ({itemCards})
        </span>
        <span className=" space-between justify-end">
          {showItems === true ? "❌" : "➕"}
        </span>
      </div>

      {showItems && <ItemList items={items} />}
    </div>
  );
};

export default RestaurantCategory;
