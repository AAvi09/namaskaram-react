import useRestaurantMenu from "../utils/useRestaurant.js";
import Shimmer from "./Shimmer.js";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory.jsx";

// MenuItemCard Component
const MenuItemCard = ({ item }) => {
  const {
    name,
    category,
    description,
    price,
    isVeg,
    isBestseller,
    ribbon,
    itemAttribute,
    ratings,
    imageId,
  } = item.card?.info;

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageId ? CDN_URL + imageId : "https://via.placeholder.com/150"}
        alt={name}
        className="w-full h-32 object-cover rounded-md"
      />
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          {isBestseller && (
            <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">
              {ribbon?.text}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1">{category}</p>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
        <p className="text-lg font-medium text-green-600 mt-3">
          ₹{(price / 100).toFixed(2)}
        </p>
        <p
          className={`mt-2 text-sm font-medium ${
            isVeg ? "text-green-500" : "text-red-500"
          }`}
        >
          {itemAttribute?.vegClassifier}
        </p>
        {ratings?.aggregatedRating?.rating && (
          <p className="text-sm text-gray-600 mt-1">
            Rating: {ratings.aggregatedRating.rating}
          </p>
        )}
      </div>
    </div>
  );
};

// RestaurantMenu Component
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
  // console.log(restaurantInfo);
  const menuItems =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card
      ?.card?.itemCards || [];

  console.log(
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card
      ?.card?.itemCards
  );
  const regularCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = [];

  regularCards.forEach((card) => {
    if (
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) {
      categories.push(card.card.card);
    }
  });

  console.log("Filtered Categories:", categories);
  console.log(Array.isArray(categories));
  return (
    <div className="p-6">
      {/* Restaurant Details */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">{restaurantInfo.name}</h1>
        <img
          src={
            restaurantInfo.cloudinaryImageId
              ? CDN_URL + restaurantInfo.cloudinaryImageId
              : "https://via.placeholder.com/400"
          }
          alt="Restaurant"
          className="w-48 h-48 object-cover rounded-lg mx-auto mt-4"
        />
        <h3 className="text-xl mt-4 text-gray-700">
          {restaurantInfo.cuisines?.join(", ")}
        </h3>
        <h3 className="text-lg text-gray-600 mt-2">
          {restaurantInfo.costForTwoMessage}
        </h3>
      </div>

      {/* Menu Items */}
      <h2 className="text-2xl font-semibold mb-6">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <MenuItemCard key={index} item={item} />
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        <div>
          {categories.map((category, index) => (
            <RestaurantCategory
              key={index}
              data={category.title}
              itemCards={category.itemCards.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
