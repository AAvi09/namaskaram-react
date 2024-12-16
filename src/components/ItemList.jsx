import React from "react";
import veglogo from "../images/veglogo.png";
import nonveglogo from "../images/nonveglogo.png";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

// import { CDN_URL } from "../utils/constants.js";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2"
        >
          <div className="flex justify-between p-4 bg-gray-200 rounded-lg font-bold ">
            <div className="relative">
              <button
                className="text-white font-bold  bg-black rounded-md p-1 m-1 h-7 x-10  hover:bg-green-800 shadow-lg absolute top-1 left-12"
                onClick={() => handleAddItem(item)}
              >
                ADD+
              </button>
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                className="w-16  "
              />
            </div>

            <span>
              {item.card.info.isVeg === 1 ? (
                <img src={veglogo} className="w-3" />
              ) : (
                <img src={nonveglogo} className="w-6" />
              )}
            </span>
            <span>
              ----💷₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <div className="py-2 bg-white rounded-lg text-lg font-bold">
            <span>{item.card.info.name}</span>
          </div>
          <p className="text-xs text-gray-500 bg-white rounded-lg">
            {item.card.info.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
